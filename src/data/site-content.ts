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
  whatsapp: string;
};

type ReferenceProject = {
  title: string;
  summary: string;
  details: string;
  tags: string[];
  demo?: string;
  repo?: string;
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
  referencesProjects: ReferenceProject[];
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
      subtitle: 'Titulado en Desarrollo de Aplicaciones Multiplataforma (DAM), con enfoque en desarrollo web, arquitectura y mantenimiento de aplicaciones y gestión de bases de datos, orientado a la creación de soluciones eficientes, escalables, mantenibles, bien estructuradas y alineadas con buenas prácticas de desarrollo.',
      ctaPrimary: 'Ver perfil técnico',
      ctaSecondary: 'Contactar',
    },
    sections: {
      about: {
        title: 'Sobre mí',
        description: 'Me encuentro en búsqueda de una oportunidad, un equipo o proyecto, en el que aportar iniciativa, responsabilidad, compromiso y mejora continua; y transformar ideas en soluciones reales, útiles y prácticas, combinando creatividad, lógica y aprendizaje continuo. Todo a partir de una ejecución cuidada de principio a fin.\n\nMe gustaría incorporarme y aspirar a integrarme a un equipo profesional de trabajo donde no sólo aportar mis conocimientos y experiencia, sino también para aprender, desarrollarme, mejorar y crecer a nivel profesional y personal.',
      },
      journey: {
        title: 'Formación',
        description: 'Recorrido académico y certificaciones orientados al desarrollo de software, ordenados cronológicamente.',
      },
      studies: {
        title: 'Estudios',
        description: '● CFGS Desarrollo de Aplicaciones Multiplataforma (DAM).\n        — IES Haría (sept. 2024 - jun. 2026)\n● Bachillerato de Ciencias y Tecnología.\n        — IES Agustín Espinosa (sept. 2022 - jun. 2024)',
      },
      credentials: {
        title: 'Certificados',
        description: '● Competencias digitales para profesionales.\n        — Google Actívate (2023)\n● Transformación digital para el empleo.\n        — Google Actívate (2024)',
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
      whatsapp: '+34 645 95 02 25',
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
      subtitle: 'Degree holder in Multiplatform Application Development (DAM), focused on web development, application architecture and maintenance, and database management, oriented to creating efficient, scalable, maintainable, well-structured solutions aligned with best development practices.',
      ctaPrimary: 'View technical profile',
      ctaSecondary: 'Get in touch',
    },
    sections: {
      about: {
        title: 'About me',
        description: 'I am looking for an opportunity, team, or project where I can contribute initiative, responsibility, commitment, and continuous improvement while transforming ideas into practical, real-world solutions through creativity, logic, and careful execution.\n\nI want to join a professional team where I can contribute my knowledge and experience while continuing to learn, improve, and grow both professionally and personally.',
      },
      journey: {
        title: 'Education',
        description: 'Academic path and certifications focused on software development, organized chronologically.',
      },
      studies: {
        title: 'Studies',
        description: '● Higher VET in Multiplatform Application Development (DAM).\n        — IES Haría (Sep 2024 - Jun 2026)\n● Science and Technology Baccalaureate.\n        — IES Agustín Espinosa (Sep 2022 - Jun 2024)',
      },
      credentials: {
        title: 'Certificates',
        description: '● Digital Skills for Professionals.\n        — Google Actívate (2023)\n● Digital Transformation for Employment.\n        — Google Actívate (2024)',
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
    referencesProjects: [
      {
        title: 'Planetary System',
        summary: 'Animated web app that simulates planetary movement.',
        details:
          'Focused on animations and trajectory calculations to represent orbits and planetary behavior in real time.',
        tags: ['Frontend', 'JavaScript', 'Animation'],
      },
      {
        title: 'Local Weather Forecast',
        summary: 'Current weather lookup by city using live data.',
        details:
          'Connected to weather APIs to show temperature, sky status, humidity, and short-term forecasts.',
        tags: ['Frontend', 'API', 'JavaScript'],
      },
      {
        title: 'Book Summaries',
        summary: 'Platform to read key book summaries.',
        details:
          'Content-oriented website with categorized summaries and improved reading flow.',
        tags: ['Web', 'UX/UI', 'Content'],
      },
      {
        title: 'AdminGest',
        summary: 'Administrative management application.',
        details: 'Project focused on record control, CRUD operations, and process organization.',
        tags: ['Java', 'SQL', 'Desktop'],
      },
      {
        title: 'File Manager',
        summary: 'Java-based file management utility.',
        details:
          'Application for creating, reading, and organizing files with modular structure and error handling.',
        tags: ['Java', 'Backend', 'Desktop'],
      },
    ],
    contact: {
      location: 'Apolo Street, 3. Lanzarote (Las Palmas)',
      email: 'rodrigo.lop.per@gmail.com',
      phone: '+34 645 95 02 25',
      github: 'Rodrigo-LPz',
      linkedin: 'Rodrigo López Pérez',
      whatsapp: '+34 645 95 02 25',
    },
  },
};