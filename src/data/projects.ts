export interface Project {
  id: string;
  name: string;
  description: {
    en: string;
    es: string;
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
      en: "Comprehensive web portal designed for patients, which centralizes and simplifies access to personal medical information",
      es: "Portal web integral diseñada para pacientes, que centraliza y simplifica el acceso a información médica personal",
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
      en: "Comprehensive medical portal that allows doctors to manage digital records, view complete clinical history and upload information in real time for personalized monitoring of each patient's health.",
      es: "Portal médico integral que permite a las doctoras gestionar expedientes digitales, visualizar historial clínico completo y cargar información en tiempo real para un seguimiento personalizado de la salud de cada paciente.",
    },
    technologies: [
      "Nextjs",
      "NextUI",
      "React Query",
      "Vercel",
      "Cypress",
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
      en: "Landing Page with destination catalog, contact information, location and the possibility of making package reservations",
      es: "Landing Page con catálogo de destinos, información de contacto, ubicación y posibilidad de hacer reservas de paquetes",
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
      en: "Administrative portal to access information on users who have completed the maternity VR experience",
      es: "Portal administrativo para acceder a la información de usuarios que han realizado la experiencia de VR de maternidades",
    },
    technologies: ["React", "Firebase", "MaterialUI"],
    practices: ["Agile"],
    mainScreenshot:
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-1.png",

    screenshots: [
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-1.png",
      "https://portfolio-snarv.s3.us-east-1.amazonaws.com/Maternidades/Maternidades-2.png",
    ],
  },
];
