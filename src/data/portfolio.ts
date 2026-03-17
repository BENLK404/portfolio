export const personalInfo = {
  name: "Bernard Kokou Kpedzi",
  title: "Développeur Full-Stack",
  roles: ["Web Developer.", "Mobile Developer.", "Desktop Developer.", "Backend Engineer."],
  bio: "Développeur full-stack spécialisé web, mobile et desktop. J'aime concevoir des architectures propres, sécuriser des APIs et livrer des interfaces performantes, avec une attention particulière à l'automatisation (CI/CD) et au déploiement.",
  phone: "+228 92 86 60 99",
  email: "kpedzibernard@gmail.com",
  location: "Lomé, Togo",
  github: "https://github.com/BENLK404",
  linkedin: "https://www.linkedin.com/in/kokou-bernard-kpedzi-b47b2418a/",
  twitter: "https://x.com/BLKB44058",
  githubUsername: "BENLK404",
  linkedinName: "Kokou Bernard Kpedzi",
  twitterUsername: "@BLKB44058",
};

export const education = [
  {
    degree: "Licence en Génie Logiciel",
    school: "ESIBA Business School",
    location: "Lomé, Togo",
    period: "2022 – 2025",
    note: "",
  },
];

export const experiences = [
  {
    title: "Développeur Full-Stack (Remote)",
    company: "BuildStack Labs",
    subtitle: "Cotonou, Bénin",
    period: "Mars – Août 2025",
    tasks: [
      "Développement de fonctionnalités sur une plateforme SaaS (dashboard, notifications, exports).",
      "Pipeline CI/CD via GitHub Actions (lint, tests, déploiement).",
      "Collaboration en équipe distribuée (Afrique de l'Ouest).",
    ],
  },
  {
    title: "Développeur Backend Node.js (Remote)",
    company: "DataBridge Inc.",
    subtitle: "Dakar, Sénégal",
    period: "Juin – Nov 2024",
    tasks: [
      "Conception et développement d'API REST (Node.js/Express) avec authentification JWT.",
      "Optimisation des performances via cache Redis sur endpoints critiques.",
      "Mise en place de rate limiting et durcissement sécurité.",
    ],
  },
  {
    title: "Développeur Full-Stack (Remote)",
    company: "Startup / Client",
    subtitle: "Abidjan, Côte d'Ivoire",
    period: "Sept – Déc 2024",
    tasks: [
      "Développement d'outils internes et d'interfaces de gestion.",
      "Collaboration à distance avec l'équipe technique.",
    ],
  },
  {
    title: "Développeur Full-Stack (Stage)",
    company: "PayTicket",
    subtitle: "Startup billetterie · Lomé, Togo",
    period: "Janvier 2025 – Avril 2025",
    tasks: [
      "Conception et développement d'une app mobile billetterie (Flutter).",
      "API Spring Boot sécurisée (Spring Security, JWT).",
      "Intégration paiements Flooz/T‑Money et QR codes.",
    ],
  },
  {
    title: "Développeur Logiciel (Stage)",
    company: "Ministère EPST",
    subtitle: "DPSSE · Lomé, Togo",
    period: "Juin – Nov 2024",
    tasks: [
      "Application desktop JavaFX connectée à PostgreSQL.",
      "Architecture MVC, Spring Data JPA / Hibernate.",
      "Exports statistiques PDF et Excel.",
    ],
  },
  {
    title: "Développeur Web Full-Stack",
    company: "TogoInnov Digital",
    subtitle: "Lomé, Togo",
    period: "Jan – Mai 2024",
    tasks: [
      "Plateforme freelances/entreprises : profils, offres, messagerie.",
      "Déploiement VPS Linux (Nginx, SSL, PM2).",
    ],
  },
  {
    title: "Développeur Web Freelance",
    company: "Auto-entrepreneur",
    subtitle: "Clients PME (Togo & diaspora)",
    period: "2023 – 2025",
    tasks: [
      "Sites vitrines et applications web sur mesure (React, Vue.js, Node.js).",
      "Déploiement VPS Linux (Nginx, SSL), SEO technique.",
    ],
  },
  {
    title: "Formateur initiation à la programmation",
    company: "ESIBA Business School / association",
    subtitle: "Lomé, Togo",
    period: "2024",
    tasks: [
      "Sessions d'initiation : exercices pratiques, bonnes pratiques, suivi.",
    ],
  },
];

export const projects = [
  {
    name: "LKM Player – Lecteur Audio Local",
    year: "2025",
    type: "Projet open source",
    description: "Lecteur audio mobile Flutter 100 % local : scan de bibliothèque, playlists, paroles synchronisées (.lrc, tags, API), égaliseur, stats et suggestions. Zéro compte, zéro pub, zéro tracking.",
    stack: ["Flutter", "Dart", "Riverpod", "Hive", "just_audio", "audio_service", "Freezed", "go_router"],
    highlights: ["Paroles synchronisées (3 sources)", "Lecture en arrière-plan", "Architecture Clean Feature-First", "Open source · MIT"],
    link: "https://github.com/BENLK404/lkm-player",
    color: "#54c5f8",
  },
  {
    name: "TogoMarché — Marketplace e-commerce",
    year: "2025",
    type: "Projet web",
    description: "Marketplace e-commerce : catalogue, panier, recherche et interface moderne. Déploiement edge sur Cloudflare Workers.",
    stack: ["React", "Cloudflare Workers"],
    highlights: ["Déploiement edge", "Interface moderne", "Recherche & panier"],
    link: "https://e-commerce.kpedzibernard.workers.dev/",
    color: "#111827",
  },
  {
    name: "LOKI — Loky Application",
    year: "2025",
    type: "Application desktop",
    description: "Application desktop Electron pour explorer visuellement une base PostgreSQL (tables/vues, filtres, jointures, requêtes rapides) et exporter (Excel, PDF, CSV, PNG).",
    stack: ["Electron", "React", "TypeScript", "PostgreSQL", "Prisma"],
    highlights: ["Recherche avancée", "Jointures", "Exports (Excel/PDF/CSV/PNG)"],
    link: "https://github.com/BENLK404/LOKI-ELECTRO",
    color: "#0ea5e9",
  },
  {
    name: "BLOC-SERVICE",
    year: "2024",
    type: "Web app",
    description: "Web app de facturation/contrôle avec authentification OAuth (Google, GitHub) et workflow de traitement.",
    stack: ["Next.js", "OAuth", "Google", "GitHub"],
    highlights: ["OAuth Google/GitHub", "Workflow facturation", "Gestion & suivi"],
    link: "https://github.com/BENLK404/facture-controle",
    color: "#16a34a",
  },
];

export const services = [
  {
    icon: "Globe",
    title: "Développement Web",
    description: "Création d'applications web modernes et performantes avec React, Vue.js et Node.js. Focus sur l'expérience utilisateur, l'accessibilité et la performance (Lighthouse > 90).",
  },
  {
    icon: "Smartphone",
    title: "Développement Mobile",
    description: "Applications mobiles cross-platform avec Flutter pour iOS et Android. Des interfaces belles et fluides que vos utilisateurs adorent.",
  },
  {
    icon: "Monitor",
    title: "Applications Desktop",
    description: "Applications desktop cross-platform avec Electron.js et JavaFX. Solutions adaptées à Windows, macOS et Linux.",
  },
  {
    icon: "Server",
    title: "Backend & API",
    description: "Conception d'APIs REST sécurisées avec Spring Boot et Node.js. Architecture MVC, JWT, sécurisation et documentation complète.",
  },
  {
    icon: "Database",
    title: "Base de données",
    description: "Conception et optimisation de bases de données SQL (PostgreSQL, MySQL) et NoSQL (MongoDB, Redis). Indexation et performance.",
  },
  {
    icon: "Layers",
    title: "Full-Stack & CI/CD",
    description: "Livraison de solutions complètes avec déploiement sur VPS Linux (Nginx, PM2), Docker et pipelines GitHub Actions.",
  },
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React / TypeScript", level: 88 },
      { name: "Vue.js 3", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Electron.js", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Spring Boot / Java", level: 82 },
      { name: "REST API / GraphQL", level: 83 },
      { name: "JWT / Spring Security", level: 80 },
      { name: "NestJS", level: 70 },
    ],
  },
  {
    category: "Bases de données & DevOps",
    skills: [
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "MongoDB / Redis", level: 78 },
      { name: "Git / GitHub Actions", level: 88 },
      { name: "Docker", level: 72 },
      { name: "Linux / Nginx / PM2", level: 75 },
    ],
  },
];

export const techStack = [
  "React", "TypeScript", "Vue.js", "Flutter", "Electron.js",
  "Node.js", "Spring Boot", "Express", "NestJS", "GraphQL",
  "PostgreSQL", "MongoDB", "Redis", "MySQL",
  "Docker", "Git", "GitHub Actions", "Linux",
  "Tailwind CSS", "JavaFX",
];
