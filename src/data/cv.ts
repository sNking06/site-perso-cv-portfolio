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

export const cv: CvData = {
  profile: {
    firstName: PLACEHOLDER,
    lastName: PLACEHOLDER,
    title: "Coordinateur Technicien Informatique - HelpDesk | Spécialisation IA",
    tagline: PLACEHOLDER,
    summary: [
      PLACEHOLDER,
      PLACEHOLDER,
      PLACEHOLDER,
    ],
    location: PLACEHOLDER,
    availability: PLACEHOLDER,
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
      items: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
    },
    {
      category: "Systèmes & Réseaux",
      icon: "network",
      items: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
    },
    {
      category: "Coordination",
      icon: "users",
      items: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
    },
    {
      category: "IA & Automatisation",
      icon: "sparkles",
      items: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
    },
    {
      category: "Outils",
      icon: "wrench",
      items: [{ name: PLACEHOLDER, level: PLACEHOLDER }],
    },
  ],
  experiences: [
    {
      role: PLACEHOLDER,
      company: PLACEHOLDER,
      location: PLACEHOLDER,
      startDate: PLACEHOLDER,
      endDate: PLACEHOLDER,
      highlights: [PLACEHOLDER, PLACEHOLDER],
    },
  ],
  projects: [
    {
      name: PLACEHOLDER,
      description: PLACEHOLDER,
      problem: PLACEHOLDER,
      solution: PLACEHOLDER,
      result: PLACEHOLDER,
      technologies: [PLACEHOLDER],
      links: [{ label: PLACEHOLDER, url: "#" }],
      featured: true,
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
    email: PLACEHOLDER,
    formEnabled: false,
  },
  socialLinks: [
    { platform: "LinkedIn", url: "#", label: PLACEHOLDER },
    { platform: "GitHub", url: "#", label: PLACEHOLDER },
  ],
  meta: {
    siteTitle: "[INFORMATION À FOURNIR] - Coordinateur IT HelpDesk",
    siteDescription:
      "Portfolio professionnel d'un coordinateur technicien informatique HelpDesk en spécialisation IA.",
    siteUrl: "https://example.com",
    ogImage: "/og-image.png",
    cvPdfPath: "/cv.pdf",
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
