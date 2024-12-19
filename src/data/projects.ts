export interface Project {
  id: string;
  name: string;
  description: {
    description: {
      en: string;
      es: string;
    };
    responsabilities: {
      en: string[];
      es: string[];
    };
  };
  practices: string[];
  technologies: string[];
  mainScreenshot?: string;
  screenshots: string[];
  githubLink?: string;
  liveLink?: string;
  folderStructure?: string;
}

export const projects: Project[] = [
  {
    id: "cccc1fc0-cd7d-4b48-8527-ae655dac83c6",
    name: "Portal Plenna",
    description: {
      description: {
        en: "Comprehensive web portal designed for patients, which centralizes and simplifies access to personal medical information",
        es: "Portal web diseñado para pacientes, que centraliza y simplifica el acceso a información médica personal",
      },
      responsabilities: {
        en: [
          "Implement the Plenna Web Portal experience, including the authentication process, Home, Maternity, medical consultations, among others.",
          "Ensure the performance of the entire Web ecosystem",
        ],
        es: [
          "Implementar la experiencia del Portal Plenna Web, incluyendo el proceso de autenticación, Home, Maternidad, consultas médicas, entre otros.",
          "Asegurar el performance de todo el ecosistema Web",
        ],
      },
    },
    technologies: ["React", "Material UI", "SWR", "AWS", "Jest", "Context API"],
    practices: ["Code reusability", "Git Flow", "Agile"],
    mainScreenshot:
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/portal-1.png",

    screenshots: [
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/portal-1.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/portal-2.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/portal-3.png",
    ],
    liveLink: "https://portal.plenna.io",
  },
  {
    id: "70c5ad0e-2789-4da2-bfd5-45f36dec30cd",
    name: "Portal Medico Plenna",
    description: {
      description: {
        en: "Comprehensive medical portal that allows doctors to manage digital records, view complete clinical history and upload information in real time for personalized monitoring of each patient's health.",
        es: "Portal médico integral que permite a las doctoras gestionar expedientes digitales, visualizar historial clínico completo y cargar información en tiempo real para un seguimiento personalizado de la salud de cada paciente.",
      },
      responsabilities: {
        en: [
          "Developing the medical portal, including the selection of technologies and other tools to be used",
          "Project roadmap",
          "Selection of development practices",
          "Active participation with the design and backend teams",
        ],
        es: [
          "Desarrollar el portal médico, incluyendo la selección de tecnologias y otras herramientas a utilizar",
          "Planteamiento de la ruta de trabajo del proyecto",
          "Elección de prácticas de desarrollo",
          "Participación activa con los equipos de diseño y backend",
        ],
      },
    },
    technologies: [
      "Nextjs",
      "NextUI",
      "React Query",
      "Vercel",
      "Jest",
      "Tailwind",
      "Zustand",
    ],
    practices: [
      "Code reusability",
      "Git Flow",
      "Agile",
      "Hexagonal Architecture",
      "Clean Code",
    ],
    mainScreenshot:
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/Portal-medico-1.png",

    screenshots: [
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/Portal-medico-1.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/Portal-medico-2.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/plenna/Portal-medico-3.png",
    ],
  },
  {
    id: "dc0e75b1-6d0b-4698-8425-0b8a74f26215",
    name: "Reserva Experiencias",
    description: {
      description: {
        en: "Landing Page with destination catalog, contact information, location and the possibility of making package reservations",
        es: "Landing Page con catálogo de destinos, información de contacto, ubicación y posibilidad de hacer reservas de paquetes",
      },
      responsabilities: {
        en: [
          "Developing a tourism agency's landing page",
          "Tracking page metrics to make improvements",
        ],
        es: [
          "Desarrollar la landing page de una agencia de turismo",
          "Seguimiento de métricas de la página para realizar mejoras",
        ],
      },
    },
    technologies: [
      "React",
      "Tailwind",
      "lucide-react",
      "Swiper",
      "AWS",
      "Netlify",
    ],
    practices: ["First do it, then do it right, then do it better"],
    mainScreenshot:
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/reservaexperiencias/reserva-experiencia-1.png",

    screenshots: [
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/reservaexperiencias/reserva-experiencia-1.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/reservaexperiencias/reserva+experiencia+2.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/reservaexperiencias/reserva-experiencia-3.png",
    ],
  },
  {
    id: "fff8089e-5c25-40c9-b00f-081b0846ded6",
    name: "Maternidades",
    description: {
      description: {
        en: "Administrative portal to access information on users who have completed the maternity VR experience",
        es: "Portal administrativo para acceder a la información de usuarios que han realizado la experiencia de VR de maternidades",
      },
      responsabilities: {
        en: [
          "Developing the frontend of the administrative portal",
          "Database design",
          "Development and implementation of the backend of the administrative portal",
        ],
        es: [
          "Desarrollar el frontend del portal administrativo",
          "Diseño de base de datos",
          "Desarrollo e implementación del backend del portal administrativo",
        ],
      },
    },
    technologies: ["React", "Firebase", "MaterialUI"],
    practices: ["Agile", "MVC"],
    mainScreenshot:
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-1.png",

    screenshots: [
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-1.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-2.png",
    ],
  },
];
