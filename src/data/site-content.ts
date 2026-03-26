export type Locale = 'es' | 'en';

type Hero = {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

type Nav = {
  about: string;
  projects: string;
  skills: string;
  journey: string;
  contact: string;
};

type Section = {
  title: string;
  description: string;
};

type Contact = {
  location: string;
  email: string;
  github: string;
  linkedin: string;
};

type SiteContent = {
  localeLabel: string;
  nav: Nav;
  hero: Hero;
  sections: {
    about: Section;
    projects: Section;
    skills: Section;
    journey: Section;
    contact: Section;
  };
  contact: Contact;
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    localeLabel: 'EN',
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Skills',
      journey: 'Trayectoria',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para prácticas y rol junior',
      title: 'Rodrigo López',
      subtitle: 'CV web en evolución: diseño minimalista, identidad propia y experiencia memorable.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
    },
    sections: {
      about: {
        title: 'Sobre mí',
        description: 'Bloque preparado para introducir tu propuesta de valor con enfoque en DAM y desarrollo web.',
      },
      projects: {
        title: 'Proyectos destacados',
        description: 'Espacio diseñado para incluir casos prácticos, demo en vivo y repositorio GitHub.',
      },
      skills: {
        title: 'Stack técnico',
        description: 'Zona de habilidades por categorías: frontend, backend, bases de datos y herramientas.',
      },
      journey: {
        title: 'Formación y progreso',
        description: 'Sección para formación reglada, certificaciones y evolución profesional.',
      },
      contact: {
        title: 'Contacto',
        description: 'Punto de conversión con vías directas para reclutadores y empresas.',
      },
    },
    contact: {
      location: 'Lanzarote, España',
      email: 'rodrigo.lop.per@gmail.com',
      github: 'github.com/Rodrigo-LPz',
      linkedin: 'linkedin.com/in/rodrigo-lopez-perez',
    },
  },
  en: {
    localeLabel: 'ES',
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      journey: 'Journey',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to internships and junior roles',
      title: 'Rodrigo López',
      subtitle: 'Evolving web CV: minimalist design, personal identity, and a memorable experience.',
      ctaPrimary: 'See projects',
      ctaSecondary: 'Get in touch',
    },
    sections: {
      about: {
        title: 'About me',
        description: 'Prepared block to introduce your value proposition around DAM and web development.',
      },
      projects: {
        title: 'Featured projects',
        description: 'Area designed for practical case studies, live demos, and GitHub repositories.',
      },
      skills: {
        title: 'Technical stack',
        description: 'Skill area by category: frontend, backend, databases, and tooling.',
      },
      journey: {
        title: 'Education and growth',
        description: 'Section for formal education, certifications, and professional progression.',
      },
      contact: {
        title: 'Contact',
        description: 'Conversion point with direct channels for recruiters and companies.',
      },
    },
    contact: {
      location: 'Lanzarote, Spain',
      email: 'rodrigo.lop.per@gmail.com',
      github: 'github.com/Rodrigo-LPz',
      linkedin: 'linkedin.com/in/rodrigo-lopez-perez',
    },
  },
};
