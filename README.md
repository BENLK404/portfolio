# Portfolio — Bernard Kokou Kpedzi

Portfolio personnel développé avec **React 18 + TypeScript + Vite**, bilingue FR/EN, thème clair/sombre.

## Stack

| Outil | Rôle |
|-------|------|
| React 18 + TypeScript | UI |
| Vite | Build & Dev server |
| Tailwind CSS | Styles utilitaires |
| Framer Motion | Animations |
| React Router DOM | Routing `/fr` `/en` |
| React i18next | Internationalisation |
| react-icons | Icônes de marque |
| Lucide React | Icônes UI |

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer l'API (optionnel si backend non lancé)
cp .env.example .env
# VITE_API_URL=http://localhost:5000

# 3. Lancer en développement
npm run dev

# 4. Build production
npm run build
```

## Structure

```
src/
├── components/       # Hero, About, Services, Resume, Projects, Skills, Contact, Footer, Header
├── data/
│   └── portfolio.ts  # Toutes les données (expériences, projets, stack…)
├── hooks/
│   ├── useTheme.ts   # Gestion thème clair/sombre + localStorage
│   └── useInView.ts  # Intersection Observer pour animations
├── i18n/
│   ├── index.ts      # Config i18next
│   ├── fr.json       # Traductions françaises
│   └── en.json       # Traductions anglaises
└── App.tsx           # Routing /:lang
```

## Fonctionnalités

- **Bilingue** : `/fr` (français) et `/en` (anglais), langue du navigateur détectée automatiquement
- **Thème** : clair / sombre, persisté dans `localStorage`
- **Sections** : Hero, À propos, Services, Expérience, Projets, Compétences, Contact
- **Formulaire de contact** connecté au backend Node.js
- **Bouton retour en haut** avec progression circulaire
- **Design responsive** mobile / tablette / desktop

## Variables d'environnement

```env
VITE_API_URL=http://localhost:5000   # URL du backend
```

## Déploiement

```bash
npm run build
# Le dossier dist/ est prêt pour Vercel, Netlify ou un VPS
```

> Pense à configurer `VITE_API_URL` avec l'URL de production du backend.
