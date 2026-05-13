import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import MainSection from "./components/mainSection/MainSection.jsx";
import AboutMeSection from "./components/aboutMeSection/AboutMeSection.jsx";
import SkillsSection from "./components/skillsSection/SkillsSection.jsx";
//import ProjectsSection from "./components/projectsSection/ProjectsSection.jsx";


function App() {
  const [inLightTheme, setInLightTheme] = useState(true);
  const [inSpanish, setInSpanish] = useState(true);

  const links = {
    github: "https://github.com/AndresPort",
    linkedin:
      "https://www.linkedin.com/in/andr%C3%A9s-felipe-portillo-olivar-9168762a2/",
  };

  const spanishText = {
    portfolioLogo: "Portafolio",
    aboutMe: "Sobre Mi",
    skills: "Habilidades",
    projects: "Projectos",
    contact: "Contacto",
    greetings: "Hola, soy",
    name: "Andrés Felipe Portillo",
    appointment: "Desarrollador de Software",
    definition: "Full Stack",
    downloadCv: "Descargar CV",
    backendProfile:
      "Soy un desarrollador Full Stack de Cali, Colombia, enfocado en la creación de APIs REST robustas utilizando Node.js y Express como stack principal y Java con SpringBoot como stack secundario. Cuento con experiencia práctica implementando tecnologías modernas como JWT (JSON Web Token) y Cookies para la autenticación de usuarios y la protección de datos.",
    dbProfile:
      "Mi perfil también incluye manejo de persistencia de datos mediante Hibernate y JPA, así como experiencia trabajando con bases de datos SQL y NoSQL. Además, utilizo herramientas esenciales como Git y GitHub para el control de versiones y el trabajo colaborativo. Poseo un nivel de inglés B1 que me permite integrarme de manera efectiva en equipos internacionales.",
    frontendProfile:
      "En el área frontend, me especializo en el desarrollo de interfaces modernas, atractivas y escalables utilizando JavaScript y React como stack principal. Tengo experiencia construyendo aplicaciones dinámicas con un enfoque en rendimiento, experiencia de usuario y consumo eficiente de APIs REST. Además, aplico buenas prácticas de desarrollo para crear interfaces reutilizables, mantenibles y adaptables a distintos dispositivos, priorizando siempre la optimización y la fluidez de la aplicación.",
    formationInformation:
      "Actualmente curso el último semestre de la Tecnología en Desarrollo de Software y continúo fortaleciendo mis conocimientos de forma autodidacta mediante aprendizaje y práctica constante.",
    language: "Idiomas",
    spanish: "Español",
    english: "Inglés",
    languageLevel: "nativo",
    softSkills: "Habilidades blandas",
    teamWork: "Trabajo en equipo",
    flexibility: "adaptabilidad",
    toolsAndTechnologies: "Tecnologías y herramientas",
    };

  const englishText = {
    portfolioLogo: "Portfolio",
    aboutMe: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    greetings: "Hi, I'm",
    name: "Andres Felipe Portillo",
    appointment: "FullStack",
    definition: "Software Developer",
    downloadCv: "Download CV",
    backendProfile:
      "I am a Full Stack Developer from Cali focused on building robust REST APIs using Node.js and Express.js as my primary stack, and Java with Spring Boot as my secondary stack. I have hands-on experience implementing modern technologies such as JWT (JSON Web Token) and Cookies for user authentication and data protection.",
    dbProfile:
      "My profile also includes experience with data persistence using Hibernate ORM and Jakarta Persistence API, as well as working with both SQL and NoSQL databases. In addition, I use essential tools such as Git and GitHub for version control and collaborative development. I also have a B1 level of English, which allows me to integrate effectively into international teams.",
    frontendProfile:
      "On the frontend side, I specialize in developing modern, attractive, and scalable interfaces using JavaScript and React as my primary stack. I have experience building dynamic applications with a strong focus on performance, user experience, and efficient REST API consumption. Additionally, I apply development best practices to create reusable, maintainable, and responsive interfaces, always prioritizing optimization and application fluidity.",
    formationInformation:
      "I am currently in the final semester of my Software Development Technology degree and continue strengthening my skills through self-directed learning and constant practice.",
    language: "Languages",
    spanish: "Spanish",
    english: "English",
    languageLevel: "native",
    softSkills: "Soft Skills",
    teamWork: "Teamwork",
    flexibility: "adaptability",
    toolsAndTechnologies: "Tools and Technologies",
    };

  return (
    <>
          {/*  Header  */}
      <Header
        inSpanish={inSpanish}
        setInSpanish={setInSpanish}
        inLightTheme={inLightTheme}
        setInLightTheme={setInLightTheme}
        spanishText={spanishText}
        englishText={englishText}
      />
      {/*  Main Section  */}
      <MainSection
        inSpanish={inSpanish}
        inLightTheme={inLightTheme}
        spanishText={spanishText}
        englishText={englishText}
        links={links}
      />
      {/*  About Me Section  */}
      <AboutMeSection
        inSpanish={inSpanish}
        inLightTheme={inLightTheme}
        spanishText={spanishText}
        englishText={englishText}
      />
      {/*  Skills Section  */}
      <SkillsSection
        inSpanish={inSpanish}
        inLightTheme={inLightTheme}
        spanishText={spanishText}
        englishText={englishText}
        links={links}
      />

      {/*  Projects Section  */}
      {/* <ProjectsSection
        inSpanish={inSpanish}
        inLightTheme={inLightTheme}
        spanishText={spanishText}
        englishText={englishText}
        links={links}
      /> */}

      {/*  Contact Section  */}
    </>
  );
}

export default App;
