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

type ReferenceLink = {
  label: string;
  href: string;
};

type ReferenceItem = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: ReferenceLink[];
  category: 'all' | 'frontend' | 'backend' | 'certificates' | 'resources';
};

type ReferenceCategory = {
  label: string;
  value: ReferenceItem['category'];
};

type ReferencesSection = Section & {
  categories: ReferenceCategory[];
  items: ReferenceItem[];
};

type Contact = {
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  whatsapp: string;
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
    references: ReferencesSection;
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
        categories: [
          { label: 'Todos', value: 'all' },
          { label: 'Frontend', value: 'frontend' },
          { label: 'Backend', value: 'backend' },
          { label: 'Recursos', value: 'resources' },
        ],
        items: [
          {
            title: 'Portafolio web personal',
            subtitle: 'Next.js · TypeScript · Tailwind',
            description: 'Sitio responsivo para mostrar experiencia, proyectos y contacto.',
            tags: ['Next.js', 'Tailwind', 'TypeScript'],
            links: [
              { label: 'Ver código', href: 'https://github.com/Rodrigo-LPz/portfolio' },
              { label: 'Abrir sitio', href: 'https://rodrigo-lpz.vercel.app' },
            ],
            category: 'frontend',
          },
          {
            title: 'API REST de tareas',
            subtitle: 'Node.js · Express · PostgreSQL',
            description: 'Backend ligero con endpoints CRUD y estructura escalable.',
            tags: ['Node.js', 'Express', 'PostgreSQL'],
            links: [
              { label: 'Ver código', href: 'https://github.com/Rodrigo-LPz/api-rest-tasks' },
            ],
            category: 'backend',
          },
          {
            title: 'Recursos de formación',
            subtitle: 'Certificados y guías prácticas',
            description: 'Documentación de certificaciones y recursos de aprendizaje compartibles.',
            tags: ['Google Actívate', 'Certificados', 'Recursos'],
            links: [
              { label: 'Ver recursos', href: 'https://activate.google.com' },
            ],
            category: 'certificates',
          },
          {
            title: 'Demo de UI interactiva',
            subtitle: 'Componentes animados con Framer Motion',
            description: 'Interfaz de navegación y tarjetas dinámicas con filtros y transiciones suaves.',
            tags: ['Framer Motion', 'UI', 'Interactividad'],
            links: [
              { label: 'Ver demo', href: 'https://github.com/Rodrigo-LPz/ui-demo' },
            ],
            category: 'resources',
          },
        ],
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
        categories: [
          { label: 'All', value: 'all' },
          { label: 'Frontend', value: 'frontend' },
          { label: 'Backend', value: 'backend' },
          { label: 'Resources', value: 'resources' },
        ],
        items: [
          {
            title: 'Personal portfolio',
            subtitle: 'Next.js · TypeScript · Tailwind',
            description: 'Responsive site to showcase experience, projects, and contact details.',
            tags: ['Next.js', 'Tailwind', 'TypeScript'],
            links: [
              { label: 'View code', href: 'https://github.com/Rodrigo-LPz/portfolio' },
              { label: 'Open site', href: 'https://rodrigo-lpz.vercel.app' },
            ],
            category: 'frontend',
          },
          {
            title: 'Task REST API',
            subtitle: 'Node.js · Express · PostgreSQL',
            description: 'Lightweight backend with CRUD endpoints and scalable structure.',
            tags: ['Node.js', 'Express', 'PostgreSQL'],
            links: [
              { label: 'View code', href: 'https://github.com/Rodrigo-LPz/api-rest-tasks' },
            ],
            category: 'backend',
          },
          {
            title: 'Learning resources',
            subtitle: 'Certificates and practical guides',
            description: 'Documentation of certifications and shared study resources.',
            tags: ['Google Actívate', 'Certificates', 'Resources'],
            links: [
              { label: 'View resources', href: 'https://activate.google.com' },
            ],
            category: 'certificates',
          },
          {
            title: 'Interactive UI demo',
            subtitle: 'Animated components with Framer Motion',
            description: 'Navigation and cards with filters and smooth transitions.',
            tags: ['Framer Motion', 'UI', 'Interactivity'],
            links: [
              { label: 'View demo', href: 'https://github.com/Rodrigo-LPz/ui-demo' },
            ],
            category: 'resources',
          },
        ],
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
      whatsapp: '+34 645 95 02 25',
    },
  },
};