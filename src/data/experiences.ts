interface Experience {
  company: string;
  period: string;
  description: {
    en: string[];
    es: string[];
  };
}

export const experiences: Experience[] = [
  {
    company: "SoyPlenna",
    period: "Sep 2022 - Actualidad",
    description: {
      en: [
        "Comprehensive development of the company's backoffice from scratch, implementing a modern and scalable architecture.",
        "Creation of new functionalities for the user portal, improving platform experience and usability.",
        "Implementation of intuitive and responsive interfaces using cutting-edge frontend technologies.",
      ],
      es: [
        "Desarrollo integral del backoffice de la empresa desde cero, implementando una arquitectura moderna y escalable.",
        "Creación de nuevas funcionalidades para el portal de usuarios, mejorando la experiencia y usabilidad de la plataforma.",
        "Implementación de interfaces intuitivas y responsivas",
      ],
    },
  },
  {
    company: "Freelance",
    period: "Ene 2022 - Ene 2023",
    description: {
      en: [
        "Development of various technological solutions, including administrative platforms for mobile applications.",
        "Design and implementation of system integrations and field service platforms.",
        "Delivery of customized projects that meet specific client needs.",
      ],
      es: [
        "Desarrollo de diversas soluciones tecnológicas, incluyendo plataformas administrativas para aplicaciones móviles.",
        "Diseño e implementación de integraciones de sistemas y plataformas de servicios de campo.",
        "Entrega de proyectos personalizados que satisfacen las necesidades específicas de cada cliente.",
      ],
    },
  },
  {
    company: "Estratek S.A.S",
    period: "Ago 2021 - Ene 2022",
    description: {
      en: [
        "Led the definition and documentation of technical requirements for a new business project.",
        "Conducted detailed analysis of technical and functional needs to ensure project feasibility.",
      ],
      es: [
        "Lideré la definición y documentación de requerimientos técnicos para un nuevo proyecto empresarial.",
        "Realicé análisis detallado de necesidades técnicas y funcionales para garantizar la viabilidad del proyecto.",
      ],
    },
  },
  {
    company: "Grupo Boötes – Datos Inteligentes",
    period: "Feb 2019 - Ago 2021",
    description: {
      en: [
        "Development of web applications with different purposes and functionalities.",
        "Implementation of web scraping solutions for data collection and analysis.",
        "Participation in multiple technological projects, demonstrating versatility and adaptability.",
      ],
      es: [
        "Desarrollo de aplicaciones web con diferentes propósitos y funcionalidades.",
        "Implementación de soluciones de web scraping para recolección y análisis de datos.",
        "Participación en múltiples proyectos tecnológicos, demostrando versatilidad y adaptabilidad.",
      ],
    },
  },
];
