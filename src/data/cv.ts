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
    tagline: "Fiabiliser le support IT au quotidien, et l'augmenter avec l'IA et l'automatisation.",
    summary: [
      "Technicien support et référent ITSM, j'interviens au quotidien en hotline comme en proximité : diagnostic, résolution d'incidents et accompagnement des utilisateurs.",
      "Depuis 2021, je coordonne l'équipe informatique chez DCS EASYWARE, avec un objectif constant : une qualité de service fiable et mesurable.",
      "Passionné de technologie, je me forme aux usages concrets des LLM : automatisation de tâches avec Power Automate, outillage du quotidien avec Codex et Claude, et applications web publiées sur GitHub.",
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
      intro: "Qui je suis, ce que je fais au quotidien et ce qui m'anime.",
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
      intro: "Des applications web publiques, développées en autonomie et déployées sur GitHub Pages.",
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
      location: "Valbonne, Provence-Alpes-Côte d'Azur · Sur site",
      startDate: "2021-02",
      endDate: null,
      highlights: [
        "Coordination de l'équipe informatique et supervision des opérations de support au quotidien.",
        "Suivi de la qualité de service pour garantir aux clients des solutions informatiques fiables.",
      ],
    },
    {
      role: "Responsable Esport",
      company: "HellSide Esport",
      location: PLACEHOLDER,
      startDate: "2019-04",
      endDate: "2020-03",
      highlights: [
        "Direction d'une équipe de joueurs et gestion logistique des événements et tournois.",
        "Accompagnement des joueurs, structuration de la stratégie événementielle et animation de la communauté.",
      ],
    },
    {
      role: "Technicien informatique",
      company: "Winpharma",
      location: "Cannes, Provence-Alpes-Côte d'Azur",
      startDate: "2018-11",
      endDate: "2019-02",
      highlights: [
        "Interventions de support informatique en environnement professionnel.",
        "Assistance aux utilisateurs sur Office 365, avec un fort accent sur la communication.",
      ],
    },
    {
      role: "Community Manager",
      company: "VR Infini",
      location: PLACEHOLDER,
      startDate: "2017",
      endDate: "2019",
      highlights: [
        "Gestion de la présence de la marque sur les réseaux sociaux et organisation d'événements en ligne.",
        "Animation de communauté et actions d'engagement pour renforcer la fidélité du public.",
      ],
    },
    {
      role: "TICE",
      company: "Éducation nationale",
      location: "Grasse / Le Rouret",
      startDate: "2015",
      endDate: "2017",
      highlights: [
        "Gestion de parcs informatiques : maintenance, installation et configuration des équipements et logiciels.",
        "Accompagnement des enseignants dans l'intégration du numérique et support aux besoins des établissements.",
      ],
    },
  ],
  projects: [
    {
      name: "DeadlockMentor",
      description: "Application web qui analyse les données publiques d'un joueur Deadlock et génère un rapport de coaching, entièrement côté client.",
      problem: "Analyser rapidement les statistiques publiques d'un joueur sans installer d'outil ni créer de compte.",
      solution: "Interface statique branchée sur l'API Deadlock : recherche de joueur, leaderboard et historique de matchs.",
      result: "Rapport de coaching généré dans le navigateur, sans serveur, hébergé sur GitHub Pages.",
      technologies: ["JavaScript", "CSS", "HTML", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/sNking06/DeadlockMentor" },
        { label: "Démo", url: "https://snking06.github.io/DeadlockMentor/" },
      ],
      featured: true,
    },
    {
      name: "POE2 Craft Mentor",
      description: "Conseiller de craft pour Path of Exile 2 : recommande une méthode, les currencies à utiliser et un plan d'action selon l'objectif.",
      problem: "Choisir une méthode de craft adaptée au résultat visé et au budget disponible.",
      solution: "Application statique qui analyse les affixes souhaités, le type d'objet et le budget pour recommander une stratégie.",
      result: "Outil en ligne sur GitHub Pages, avec un snapshot de l'économie du jeu généré depuis PoE2DB.",
      technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
      links: [
        { label: "GitHub", url: "https://github.com/sNking06/poe2-craft-mentor" },
        { label: "Démo", url: "https://snking06.github.io/poe2-craft-mentor/" },
      ],
      featured: true,
    },
    {
      name: "PoE2 Craft Helper",
      description: "Guide de craft interactif pour Path of Exile 2 : simulateur, estimations de coûts et comparaison de stratégies.",
      problem: "Comparer et simuler des stratégies de craft avant d'engager ses ressources en jeu.",
      solution: "Outil web responsive combinant analyse, estimations de coûts, simulateur RNG et comparateur de stratégies, avec visualisations Chart.js.",
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
      description: "Base d'application Flask conteneurisée : build et lancement Docker documentés, prête à servir de socle backend.",
      technologies: ["Python", "Flask", "Docker"],
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
      "Portfolio de Steven LEBLAN, technicien support et référent ITSM : support IT, coordination d'équipe, automatisation et IA appliquée.",
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
  cv.sections.contact,
] as const;
