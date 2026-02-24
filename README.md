# Portfolio Backend — Node.js + MongoDB

API REST pour le portfolio de Bernard Kokou Kpedzi.  
Gère les messages de contact : **sauvegarde MongoDB** + **envoi email** via Nodemailer.

## Stack

| Outil | Rôle |
|-------|------|
| Node.js + Express | Serveur HTTP |
| MongoDB + Mongoose | Base de données |
| Nodemailer | Envoi d'emails (SMTP) |
| express-validator | Validation des entrées |
| express-rate-limit | Protection anti-spam |
| Helmet | Headers de sécurité |
| CORS | Autorisation du frontend |
| dotenv | Variables d'environnement |

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec tes vraies valeurs

# 3. Lancer en développement (avec rechargement auto)
npm run dev

# 4. Lancer en production
npm start
```

## Configuration `.env`

```env
PORT=5000
NODE_ENV=development

# MongoDB local ou Atlas
MONGO_URI=mongodb://localhost:27017/portfolio
# MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio

# SMTP Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ton@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   # App Password Gmail (sans espaces)

# Email destinataire des messages de contact
CONTACT_TO=kpedzibernard@gmail.com

# URL du frontend (CORS)
CLIENT_URL=http://localhost:5173

# Clé secrète pour lire les messages (header x-admin-key)
ADMIN_KEY=change_moi
```

> **Gmail App Password** : [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)  
> Nécessite la validation en 2 étapes activée.

## Endpoints

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| `GET` | `/health` | Vérification serveur | — |
| `POST` | `/api/contact` | Envoyer un message | — |
| `GET` | `/api/contact` | Lister les messages | `x-admin-key` header |

### POST `/api/contact`

**Body JSON :**
```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "subject": "Collaboration",
  "message": "Bonjour, je souhaite...",
  "lang": "fr"
}
```

**Réponse succès (201) :**
```json
{
  "success": true,
  "message": "Message envoyé avec succès !",
  "id": "64abc..."
}
```

**Rate limit :** 5 requêtes / 15 min par IP.

### GET `/api/contact` (admin)

```bash
curl -H "x-admin-key: ta_clé_admin" http://localhost:5000/api/contact
```

## Structure

```
src/
├── config/
│   ├── database.js   # Connexion MongoDB
│   └── mailer.js     # Template email HTML + envoi SMTP
├── models/
│   └── Contact.js    # Schéma Mongoose
├── routes/
│   └── contact.js    # Routes GET + POST
├── middleware/
│   └── validate.js   # Règles de validation + handler erreurs
└── index.js          # Point d'entrée Express
```

## Déploiement

### VPS Linux (Nginx + PM2)

```bash
# Installer PM2
npm install -g pm2

# Lancer
pm2 start src/index.js --name portfolio-backend

# Démarrage automatique au reboot
pm2 startup && pm2 save
```

### Variables d'environnement en production

Définis `NODE_ENV=production` et remplace `CLIENT_URL` par l'URL réelle du frontend.
