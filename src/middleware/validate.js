import { body, validationResult } from 'express-validator';

export const contactRules = [
  body('name').trim().notEmpty().withMessage('Nom requis').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Email invalide').normalizeEmail(),
  body('subject').optional().trim().isLength({ max: 200 }),
  body('message').trim().notEmpty().withMessage('Message requis').isLength({ max: 2000 }),
  body('lang').optional().isIn(['fr', 'en']),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  next();
};
