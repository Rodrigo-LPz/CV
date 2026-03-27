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
  references: string;
  techStack: string;
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
    studies: Section;
    credentials: Section;
    references: Section;
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
      references: 'Referencias',
      techStack: 'Stack técnico',
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
        title: 'Formación',
        description: 'Resumen de tu progreso académico y evolución profesional en el ámbito tecnológico.',
      },
      studies: {
        title: 'Estudios formativos',
        description: 'Trayectoria académica principal, centros de estudio y modalidad de formación.',
      },
      credentials: {
        title: 'Iconografía',
        description: 'Certificados, acreditaciones y títulos complementarios que fortalecen tu perfil.',
      },
      references: {
        title: 'Referencias',
        description:
          'Bloque pensado para enlazar proyectos destacados y recursos compartibles, similar a una sección de difusión.',
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
      references: 'References',
      techStack: 'Tech stack',
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
        title: 'Education',
        description: 'Summary of your academic progress and professional growth within tech.',
      },
      studies: {
        title: 'Formal studies',
        description: 'Main education path, schools, and training modality.',
      },
      credentials: {
        title: 'Credentials',
        description: 'Certificates, complementary credentials, and additional qualifications.',
      },
      references: {
        title: 'References',
        description: 'Section intended for featured project links and share-friendly resources.',
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
