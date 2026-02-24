import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../config/mailer.js';
import { contactRules, validate } from '../middleware/validate.js';

const router = Router();

// Max 5 messages par IP toutes les 15 min
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: 'Trop de requêtes, réessayez dans 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact
router.post('/', limiter, contactRules, validate, async (req, res) => {
  try {
    const { name, email, subject, message, lang } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // Sauvegarder en base
    const contact = await Contact.create({ name, email, subject, message, lang, ip });

    // Envoyer l'email (non-bloquant : on ne renvoie pas d'erreur si email échoue)
    sendContactEmail({ name, email, subject, message, lang }).catch(err =>
      console.error('Email non envoyé :', err.message)
    );

    res.status(201).json({
      success: true,
      message: lang === 'en' ? 'Message sent successfully!' : 'Message envoyé avec succès !',
      id: contact._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Erreur serveur.' });
  }
});

// GET /api/contact — liste (protégé par clé secrète basique)
router.get('/', async (req, res) => {
  const key = req.headers['x-admin-key'];
  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ success: false, message: 'Non autorisé.' });
  }
  const contacts = await Contact.find().sort({ createdAt: -1 });
  res.json({ success: true, count: contacts.length, data: contacts });
});

export default router;
