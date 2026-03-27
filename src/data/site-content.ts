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
  journey: string;
  techStack: string;
  skills: string;
  contact: string;
};

type Section = {
  title: string;
  description: string;
};

type Contact = {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
};

type SiteContent = {
  localeLabel: string;
  nav: Nav;
  hero: Hero;
  sections: {
    about: Section;
    journey: Section;
    techStack: Section;
    hardSkills: Section;
    softSkills: Section;
    contact: Section;
  };
  contact: Contact;
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    localeLabel: 'EN',
    nav: {
      about: 'Sobre mí',
      journey: 'Formación',
      techStack: 'Stack técnico',
      skills: 'Skills',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para prácticas y rol junior',
      title: 'Rodrigo López',
      subtitle: 'CV web en evolución: diseño minimalista, identidad propia y experiencia memorable.',
      ctaPrimary: 'Ver perfil técnico',
      ctaSecondary: 'Contactar',
    },
    sections: {
      about: {
        title: 'Sobre mí',
        description: 'Bloque preparado para introducir tu propuesta de valor con enfoque en DAM y desarrollo web.',
      },
      journey: {
        title: 'Formación y progreso',
        description: 'Sección para formación reglada, certificaciones y evolución profesional.',
      },
      techStack: {
        title: 'Stack técnico',
        description:
          'Vista general de tecnologías principales, enfoque de trabajo y herramientas que utilizas en tu día a día.',
      },
      hardSkills: {
        title: 'Hardskills',
        description:
          'Lenguajes, frameworks, bases de datos, control de versiones, despliegue y demás conocimientos técnicos.',
      },
      softSkills: {
        title: 'Softskills',
        description:
          'Comunicación, colaboración, aprendizaje continuo, responsabilidad y trabajo en equipo orientado a resultados.',
      },
      contact: {
        title: 'Contacto',
        description: 'Punto de conversión con vías directas para reclutadores y empresas.',
      },
    },
    contact: {
      location: 'C. Apolo, 3. Lanzarote (Las Palmas)',
      email: 'rodrigo.lop.per@gmail.com',
      phone: '+34 645 95 02 25',
      github: 'Rodrigo-LPz',
      linkedin: 'Rodrigo López Pérez',
    },
  },
  en: {
    localeLabel: 'ES',
    nav: {
      about: 'About',
      journey: 'Education',
      techStack: 'Tech stack',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Open to internships and junior roles',
      title: 'Rodrigo López',
      subtitle: 'Evolving web CV: minimalist design, personal identity, and a memorable experience.',
      ctaPrimary: 'View technical profile',
      ctaSecondary: 'Get in touch',
    },
    sections: {
      about: {
        title: 'About me',
        description: 'Prepared block to introduce your value proposition around DAM and web development.',
      },
      journey: {
        title: 'Education and growth',
        description: 'Section for formal education, certifications, and professional progression.',
      },
      techStack: {
        title: 'Tech stack',
        description:
          'High-level overview of your main technologies, work approach, and tools used in real projects.',
      },
      hardSkills: {
        title: 'Hardskills',
        description:
          'Languages, frameworks, databases, version control, deployment, and core technical capabilities.',
      },
      softSkills: {
        title: 'Softskills',
        description:
          'Communication, collaboration, continuous learning, accountability, and team-oriented execution.',
      },
      contact: {
        title: 'Contact',
        description: 'Conversion point with direct channels for recruiters and companies.',
      },
    },
    contact: {
      location: 'Apolo Street, 3. Lanzarote (Las Palmas)',
      email: 'rodrigo.lop.per@gmail.com',
      phone: '+34 645 95 02 25',
      github: 'Rodrigo-LPz',
      linkedin: 'Rodrigo López Pérez',
    },
  },
};
