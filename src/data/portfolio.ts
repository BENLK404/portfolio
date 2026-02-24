export const personalInfo = {
  name: "Bernard Kokou Kpedzi",
  title: "Développeur Full-Stack",
  roles: ["Web Developer.", "Mobile Developer.", "Desktop Developer.", "Backend Engineer."],
  bio: "Étudiant en dernière année de Licence en Génie Logiciel, passionné par le développement full-stack et les technologies multi-plateformes. Expérience solide à travers des stages, des missions freelance et des projets personnels couvrant le web, le mobile, le desktop et le backend.",
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
    title: "Développeur Full-Stack (Stage)",
    company: "PayTicket",
    subtitle: "Startup de billetterie numérique",
    period: "Janvier 2025 – Avril 2025",
    tasks: [
      "Développement d'une application mobile de billetterie avec Flutter et Spring Boot",
      "Conception et sécurisation d'une API REST avec Spring Security, JWT et validation des entrées",
      "Intégration de paiements mobile money (Flooz, T-Money) et génération de QR codes uniques",
      "Collaboration en équipe Agile (Scrum), revues de code et CI/CD via GitHub Actions",
      "Rédaction de la documentation technique et des spécifications fonctionnelles",
    ],
  },
  {
    title: "Développeur Logiciel (Stage)",
    company: "Ministère des Enseignements Primaire et Secondaire",
    subtitle: "DPSSE",
    period: "Juin 2024 – Novembre 2024",
    tasks: [
      "Développement d'une application desktop de gestion scolaire avec JavaFX et Spring Boot",
      "Conception d'une base de données PostgreSQL centralisant établissements, personnels et élèves",
      "Implémentation de l'architecture MVC, Spring Data JPA et Hibernate",
      "Intégration des exports PDF (iText) et Excel (Apache POI) pour les rapports statistiques",
      "Participation aux réunions de cadrage fonctionnel avec les responsables pédagogiques",
    ],
  },
  {
    title: "Développeur Frontend (Mission ponctuelle)",
    company: "Startup locale",
    subtitle: "Lomé",
    period: "Août 2024",
    tasks: [
      "Refonte de l'interface utilisateur d'une application de gestion de stock",
      "Migration de jQuery vers React, amélioration de l'expérience utilisateur",
      "Livraison en 2 semaines avec tests et documentation",
    ],
  },
  {
    title: "Développeur Web Junior (Freelance)",
    company: "Auto-entrepreneur",
    subtitle: "Clients privés",
    period: "2023 – 2025",
    tasks: [
      "Création de sites vitrines et applications web sur mesure (React, Vue.js, Node.js)",
      "Déploiement sur VPS Linux (Nginx, PM2) et configuration de noms de domaine",
      "Optimisation SEO, performance (Lighthouse > 90) et accessibilité",
      "Accompagnement des clients dans la maintenance et l'évolution de leurs solutions",
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
    name: "MyRH – Gestion des Ressources Humaines",
    year: "2024",
    type: "Projet académique",
    description: "Application SPA de gestion RH avec génération de bulletins de paie et workflow de congés.",
    stack: ["Vue.js 3", "Pinia", "Node.js", "Express", "MySQL", "Redis", "PDFKit"],
    highlights: ["Cache Redis : +60% de performance", "Génération bulletins PDF", "Workflow congés complet"],
    color: "#7c3aed",
  },
  {
    name: "GestiSchool – Application Desktop",
    year: "2024",
    type: "Projet personnel",
    description: "Application cross-platform de gestion scolaire avec interface native pour Windows, macOS et Linux.",
    stack: ["Electron.js", "Node.js", "SQLite"],
    highlights: ["Cross-platform (Win/Mac/Linux)", "Interface native", "IPC & système de fichiers"],
    color: "#00d4ff",
  },
  {
    name: "Loky – Gestion Scolaire",
    year: "2024",
    type: "Projet DPSSE – Ministère",
    description: "Application desktop de gestion des établissements scolaires avec reporting statistique avancé.",
    stack: ["JavaFX", "Spring Boot", "PostgreSQL", "iText", "Apache POI"],
    highlights: ["Base de données centralisée", "Export PDF & Excel", "Architecture MVC + JPA"],
    color: "#10b981",
  },
  {
    name: "TaskFlow – Gestion de Tâches",
    year: "2024",
    type: "Projet académique",
    description: "Application full-stack de gestion de tâches avec drag & drop et notifications temps réel.",
    stack: ["Vue.js 3", "Pinia", "Spring Boot", "PostgreSQL", "WebSocket"],
    highlights: ["Drag & Drop", "Temps réel (WebSocket)", "Tests Jest & JUnit"],
    color: "#f59e0b",
  },
  {
    name: "Togoshop – E-Commerce",
    year: "2023",
    type: "Projet personnel",
    description: "Application e-commerce complète avec gestion des produits, panier et authentification JWT.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    highlights: ["Auth JWT sécurisée", "Paiement simulé", "Lighthouse > 90"],
    color: "#ef4444",
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
