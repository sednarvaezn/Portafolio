import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      profile: {
        title: "Professional Profile",
        description:
          "With 6 years of experience in software development, I have worked in both backend and frontend areas. I stand out for my proactive approach and constant interest in tackling new technical challenges. I am continuously learning and seeking ways to add value to my work.",
      },
      professionalGoals: {
        title: "Professional Objectives",
        description:
          "Currently, my main focus is strengthening my knowledge through the practical application of concepts, methodologies, and architectures. My goal is to effectively contribute to project development, making the most of my skills and knowledge. I am committed to improving my frontend and backend skills, exploring new opportunities to apply my knowledge and continuously improve my performance.",
      },
      workExperience: {
        title: "Work Experience",
      },
      technologies: {
        title: "Technologies",
      },
      projects: "Projects",
      about: "About Me",
      contact: "Contact",
      viewProject: "View Project",
      seeProjects: "See Projects",
      seeDetails: "See Details",
      project:{
        navBar: {
          description: "Responsibilities",
          technologies: "Technologies",
          practices: "Development Practices",
          images: "Images"
        },
        description:{
          title: "Responsibilities"
        },
        technologiesUsed:{
          title: "Used Technologies"
        },
        practices:{
          title: "Development Practices"
        },
        images:{
          title: "Images"
        }
      }
      

    },
  },
  es: {
    translation: {
      profile: {
        title: "Perfil Profesional",
        description:
          "Con 6 años de experiencia en desarrollo de software, he trabajado tanto en áreas de backend como frontend. Me destaco por mi enfoque proactivo y mi constante interés en enfrentar nuevos retos técnicos. Estoy en continuo aprendizaje y buscando formas de agregar valor a mi trabajo.",
      },
      professionalGoals: {
        title: "Objetivos Profesionales",
        description:
          "Actualmente, mi enfoque principal es fortalecer mis conocimientos mediante la aplicación práctica de conceptos, metodologías y arquitecturas. Mi meta es contribuir de manera efectiva al desarrollo de proyectos, aprovechando al máximo mis habilidades. Estoy comprometido a mejorar mis habilidades en el area de frontend y en el área de backend, explorando nuevas oportunidades para aplicar mis conocimientos y mejorar continuamente en mi desempeño.",
      },
      workExperience: {
        title: "Experiencia Laboral",
      },
      technologies: {
        title: "Tecnologías",
      },
      projects: "Proyectos",
      about: "Sobre Mí",
      contact: "Contacto",
      viewProject: "Ver Proyecto",
      seeProjects: "Ver Proyectos",
      seeDetails: "Ver Detalles",
      project:{
        navBar: {
          description: "Responsabilidades",
          technologies: "Tecnologías",
          practices: "Prácticas de Desarrollo",
          images: "Imagenes"
        },
        description:{
          title: "Responsabilidades"
        },
        technologiesUsed:{
          title: "Tecnologías utilizadas"
        },
        practices:{
          title: "Prácticas de Desarrollo"
        },
        images:{
          title: "Imagenes"
        }
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Establecer español como idioma predeterminado
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
