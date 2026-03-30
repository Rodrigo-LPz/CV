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
      badge: 'Desarrollador web junior · DAM · Disponible para prácticas',
      title: 'Rodrigo López Pérez',
      subtitle: 'Estudiante de 2º de DAM orientado a desarrollo web, mantenimiento y bases de datos. Busco aportar soluciones reales combinando creatividad, lógica y aprendizaje continuo.',
      ctaPrimary: 'Ver perfil técnico',
      ctaSecondary: 'Contactar',
    },
    sections: {
      about: {
        title: 'Sobre mí',
        description: 'Soy estudiante de 2º de DAM, enfocado en desarrollo web, mantenimiento y bases de datos. Me motiva transformar ideas en soluciones útiles combinando creatividad, lógica y mejora continua.',
      },
      journey: {
        title: 'Formación',
        description: 'Formación académica orientada a informática y desarrollo de software, con base sólida en DAM y aprendizaje complementario en competencias digitales.',
      },
      studies: {
        title: 'Estudios',
        description: 'IES Agustín Espinosa (2023): Bachillerato en Ciencias y Tecnología. IES Haría (actual): Desarrollo de Aplicaciones Multiplataforma (CFGS).',
      },
      credentials: {
        title: 'Certificados',
        description: 'Google Actívate: Competencias digitales para profesionales (2023) y Transformación digital para el empleo (2024).',
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
      badge: 'Junior web developer · DAM · Open to internships',
      title: 'Rodrigo López Pérez',
      subtitle: 'Second-year DAM student focused on web development, maintenance, and databases. I aim to deliver real solutions by combining creativity, logic, and continuous learning.',
      ctaPrimary: 'View technical profile',
      ctaSecondary: 'Get in touch',
    },
    sections: {
      about: {
        title: 'About me',
        description: 'I am a second-year DAM student focused on web development, maintenance, and databases. I enjoy turning ideas into useful solutions by combining creativity, logic, and continuous improvement.',
      },
      journey: {
        title: 'Education',
        description: 'Academic background focused on computing and software development, with a solid DAM foundation and complementary digital-skills learning.',
      },
      studies: {
        title: 'Studies',
        description: 'IES Agustín Espinosa (2023): Science and Technology Baccalaureate. IES Haría (current): Multiplatform Application Development (Higher VET).',
      },
      credentials: {
        title: 'Certificates',
        description: 'Google Actívate: Digital Skills for Professionals (2023) and Digital Transformation for Employment (2024).',
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
