import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './config/database.js';
import contactRoutes from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ── Sécurité ──
app.use(helmet());
app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:5173',
    /\.vercel\.app$/,
    /\.netlify\.app$/,
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ── Body parsing ──
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));

// ── Confiance au proxy (pour rate-limit) ──
app.set('trust proxy', 1);

// ── Routes ──
app.get('/health', (_req, res) =>
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
);
app.use('/api/contact', contactRoutes);

// ── 404 ──
app.use((_req, res) =>
  res.status(404).json({ success: false, message: 'Route introuvable.' })
);

// ── Erreurs globales ──
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Erreur interne.' });
});

// ── Démarrage ──
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`)
  );
});
