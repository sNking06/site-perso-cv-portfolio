export const PLACEHOLDER = "[INFORMATION À FOURNIR]" as const;

export type SkillLevel = "courant" | "avancé" | "en apprentissage" | typeof PLACEHOLDER;
export type CertificationStatus = "obtenue" | "en cours" | typeof PLACEHOLDER;

export interface ProfilePhoto {
  src: string;
  alt: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  tagline: string;
  summary: string[];
  location: string;
  availability: string;
  photo?: ProfilePhoto;
}

export interface SkillItem {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  category: string;
  icon: "headphones" | "server" | "network" | "users" | "sparkles" | "wrench";
  items: SkillItem[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  highlights: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  technologies: string[];
  links: ProjectLink[];
  image?: ProjectImage;
  featured: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status: CertificationStatus;
  verifyUrl?: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Contact {
  email: string;
  formEnabled: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface SectionCopy {
  id: string;
  navLabel: string;
  title: string;
  intro?: string;
}

export interface Meta {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  ogImage: string;
  cvPdfPath: string;
}

export interface CvData {
  profile: Profile;
  sections: {
    about: SectionCopy;
    skills: SectionCopy;
    experience: SectionCopy;
    projects: SectionCopy;
    credentials: SectionCopy;
    contact: SectionCopy;
  };
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  education: Education[];
  languages: Language[];
  contact: Contact;
  socialLinks: SocialLink[];
  meta: Meta;
}

const siteUrl = import.meta.env.SITE;
const basePath = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const withBasePath = (path: string) => `${basePath}${path.replace(/^\//, "")}`;

export const cv: CvData = {
  profile: {
    firstName: "Steven",
    lastName: "LEBLAN",
    title: "Technicien Support & Référent ITSM",
    tagline: "Support IT, ITSM et automatisation avec les LLM.",
    summary: [
      "Je travaille dans le support IT, avec une pratique orientée hotline, proxy et accompagnement utilisateur.",
      "Passionné par la technologie, j'ai approfondi l'IA avec l'arrivée des LLM et leurs usages concrets dans les outils du quotidien.",
      "Mon objectif actuel est une présentation professionnelle simple, centrée sur le support IT, l'ITSM et les projets publics.",
    ],
    location: "Cannes",
    availability: "En veille",
    photo: {
      src: withBasePath("/images/profile.jpg"),
      alt: "Photo de profil de Steven LEBLAN",
    },
  },
  sections: {
    about: {
      id: "a-propos",
      navLabel: "À propos",
      title: "À propos",
      intro: "Un aperçu du parcours, de la posture professionnelle et des objectifs.",
    },
    skills: {
      id: "competences",
      navLabel: "Compétences",
      title: "Compétences",
      intro: "Les domaines d'intervention clés en support, coordination et automatisation.",
    },
    experience: {
      id: "experience",
      navLabel: "Expérience",
      title: "Expérience",
      intro: "Le parcours professionnel, du support utilisateur à la coordination d'équipe.",
    },
    projects: {
      id: "projets",
      navLabel: "Projets",
      title: "Projets et réalisations",
      intro: "Des réalisations concrètes autour de l'automatisation, du support et de l'IA appliquée.",
    },
    credentials: {
      id: "formations",
      navLabel: "Formations",
      title: "Formations et certifications",
      intro: "Les formations, certifications et langues qui complètent le profil.",
    },
    contact: {
      id: "contact",
      navLabel: "Contact",
      title: "Contact",
      intro: "Les moyens de contact pour un échange professionnel.",
    },
  },
  skills: [
    {
      category: "Support & HelpDesk",
      icon: "headphones",
      items: [
        { name: "Support IT hotline", level: "avancé" },
        { name: "Proxy support", level: "avancé" },
        { name: "Accompagnement utilisateurs", level: "avancé" },
      ],
    },
    {
      category: "Systèmes & Réseaux",
      icon: "network",
      items: [{ name: "Systèmes & réseaux", level: "courant" }],
    },
    {
      category: "Coordination",
      icon: "users",
      items: [
        { name: "Référent ITSM", level: "courant" },
        { name: "Suivi et priorisation", level: "courant" },
      ],
    },
    {
      category: "IA & Automatisation",
      icon: "sparkles",
      items: [
        { name: "LLM", level: "avancé" },
        { name: "Codex", level: "avancé" },
        { name: "Claude", level: "avancé" },
        { name: "Power Automate", level: "avancé" },
      ],
    },
    {
      category: "Outils",
      icon: "wrench",
      items: [
        { name: "VSCode" },
        { name: "Power BI" },
        { name: "Power Automate" },
        { name: "Codex" },
        { name: "Claude" },
      ],
    },
  ],
  experiences: [
    {
      role: "Coordinateur support technique",
      company: "DCS EASYWARE",
      location: "Valbonne, Provence-Alpes-Côte d'Azur, France · Sur site",
      startDate: "Février 2021",
      endDate: null,
      highlights: [
        "Coordination de l'équipe informatique et supervision des opérations quotidiennes.",
        "Objectif de qualité de service pour fournir des solutions informatiques fiables aux clients.",
      ],
    },
    {
      role: "Responsable Esport",
      company: "HellSide Esport",
      location: PLACEHOLDER,
      startDate: "Avril 2019",
      endDate: "Mars 2020",
      highlights: [
        "Direction d'une équipe de joueurs et gestion de la logistique des événements et tournois.",
        "Accompagnement des joueurs, amélioration de la stratégie événementielle et développement de l'engagement communautaire.",
      ],
    },
    {
      role: "Technicien informatique",
      company: "Winpharma",
      location: "Cannes, Provence-Alpes-Côte d'Azur, France",
      startDate: "Novembre 2018",
      endDate: "Février 2019",
      highlights: [
        "Support et interventions informatiques dans un contexte professionnel.",
        "Compétences associées : Office 365, communication et support utilisateur.",
      ],
    },
    {
      role: "Community Manager",
      company: "VR Infini",
      location: "VR INFINI",
      startDate: "2017",
      endDate: "2019",
      highlights: [
        "Gestion de la présence de la marque sur les réseaux sociaux et organisation d'événements en ligne.",
        "Relations publiques, animation de communauté et actions d'engagement pour renforcer la fidélité.",
      ],
    },
    {
      role: "TICE",
      company: "Education National",
      location: "Grasse / Le Rouret",
      startDate: "2015",
      endDate: "2017",
      highlights: [
        "Gestion de parcs informatiques, maintenance, installation et configuration d'équipements et logiciels.",
        "Accompagnement des enseignants dans l'intégration des technologies et support aux besoins informatiques des établissements.",
      ],
    },
  ],
  projects: [
    {
      name: "DeadlockMentor",
      description: "Application web frontend-first pour interroger l'API Deadlock et générer un rapport de coaching côté client.",
      problem: "Analyser rapidement les données publiques Deadlock d'un joueur.",
      solution: "Interface statique qui interroge l'API Deadlock pour la recherche joueur, le leaderboard et l'historique de matchs.",
      result: "Rapport de coaching généré côté client, déployable sur GitHub Pages.",
      technologies: ["JavaScript", "CSS", "HTML", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/sNking06/DeadlockMentor" },
        { label: "Démo", url: "https://snking06.github.io/DeadlockMentor/" },
      ],
      featured: true,
    },
    {
      name: "POE2 Craft Mentor",
      description: "Site de conseil craft POE2 qui recommande une méthode, des currencies et un plan d'action selon l'objectif de craft.",
      problem: "Choisir une méthode de craft POE2 adaptée au résultat voulu et au budget.",
      solution: "Application statique qui analyse les lignes souhaitées, le type d'item et le budget pour recommander une stratégie.",
      result: "Déploiement GitHub Pages avec génération d'un snapshot économie depuis PoE2DB.",
      technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/sNking06/poe2-craft-mentor" },
        { label: "Démo", url: "https://snking06.github.io/poe2-craft-mentor/" },
      ],
      featured: true,
    },
    {
      name: "PoE2 Craft Helper",
      description: "Guide de crafting intelligent pour Path of Exile 2 avec simulateur interactif, recommandations et outils de comparaison.",
      problem: "Aider une guilde ou un joueur à choisir et simuler des stratégies de craft efficacement.",
      solution: "Outil web responsive avec analyse, estimations de coûts, simulateur RNG et comparateur de stratégies.",
      result: "Application publique disponible sur GitHub Pages.",
      technologies: ["JavaScript", "CSS", "HTML", "Chart.js", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/sNking06/poe2-craft-helper" },
        { label: "Démo", url: "https://snking06.github.io/poe2-craft-helper/" },
      ],
      featured: false,
    },
    {
      name: "albion-market-helper",
      description: "Projet Flask de base avec instructions Docker.",
      problem: PLACEHOLDER,
      solution: "Template Flask avec build et lancement Docker documentés.",
      result: PLACEHOLDER,
      technologies: ["Dockerfile", "Python", "Flask"],
      links: [{ label: "GitHub", url: "https://github.com/sNking06/albion-market-helper" }],
      featured: false,
    },
  ],
  certifications: [
    {
      name: PLACEHOLDER,
      issuer: PLACEHOLDER,
      year: PLACEHOLDER,
      status: PLACEHOLDER,
    },
  ],
  education: [
    {
      degree: PLACEHOLDER,
      school: PLACEHOLDER,
      year: PLACEHOLDER,
      description: PLACEHOLDER,
    },
  ],
  languages: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
  contact: {
    email: "s.leblan06@gmail.com",
    formEnabled: false,
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/steven-leblan-416106b1/", label: "Profil LinkedIn" },
    { platform: "GitHub", url: "https://github.com/sNking06", label: "Profil GitHub" },
  ],
  meta: {
    siteTitle: "Steven LEBLAN - Technicien Support & Référent ITSM",
    siteDescription:
      "Portfolio professionnel de Steven LEBLAN, technicien support et référent ITSM en veille sur l'IA et l'automatisation.",
    siteUrl,
    ogImage: withBasePath("/og-image.png"),
    cvPdfPath: withBasePath("/cv.pdf"),
  },
};

export const navigation = [
  cv.sections.about,
  cv.sections.skills,
  cv.sections.experience,
  cv.sections.projects,
  cv.sections.credentials,
  cv.sections.contact,
] as const;
