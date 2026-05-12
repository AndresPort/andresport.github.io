import "./App.css";

import { useState } from "react";

import sunIcon from "./assets/images/sun-icon.svg";
import moonIcon from "./assets/images/moon-icon.svg";
import githubLightIcon from "./assets/images/github-light-icon.svg";
import githubDarkIcon from "./assets/images/github-dark-icon.svg"
import linkedinLightIcon from "./assets/images/linkedin-light-icon.svg";
import linkedinDarkIcon from "./assets/images/linkedin-dark-icon.svg"
import userLightIcon from "./assets/images/user-light-icon.png";
import userDarkIcon from "./assets/images/user-dark-icon.png"
import andres from "./assets/images/andres.png";
import andresPortilloCv from "./assets/documents/Andres-Felipe-Portillo-Cv-Full-Stack.pdf";

function App() {
  const [inLighTheme, setInLightTheme] = useState(true);
  const [inSpanish, setInSpanish] = useState(true);

  const links = {
    github: "https://github.com/AndresPort",
    linkedin:
      "https://www.linkedin.com/in/andr%C3%A9s-felipe-portillo-olivar-9168762a2/",
  };

  const spanishText= {
    portfolioLogo:"Portafolio",
    aboutMe: "Sobre Mi",
    skills: "Habilidades",
    projects: "Projectos",
    contact: "Contacto",
    greetings: "Hola, soy",
    name: "Andrés Felipe Portillo",
    appointment: "Desarrollador de Software",
    definition: "Full Stack",
    downloadCv: "Descargar CV"
  }

  const englishText={
    portfolioLogo:"Portfolio",
    aboutMe: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    greetings: "Hi, I'm",
    name: "Andres Felipe Portillo",
    appointment: "FullStack",
    definition: "Software Developer",
    downloadCv: "Download CV"
  }

  const handleClickDownloadCv = async () => {
    const cv = document.createElement("a");
    cv.href = andresPortilloCv;
    cv.download = "Andres-Felipe-Portillo-Cv-Full-Stack";
    document.body.appendChild(cv);
    cv.click();
    document.body.removeChild(cv);
  };

  return (
    <>
      <header className="header">
        <div className="logoContainer">
          <span className="portfolioLogo">{inSpanish ? spanishText.portfolioLogo : englishText.portfolioLogo}</span>
        </div>
        <div className="tittlesContainer">
          <span className="aboutMe">{inSpanish ? spanishText.aboutMe : englishText.aboutMe}</span>
          <span className="skills">{inSpanish ? spanishText.skills : englishText.skills}</span>
          <span className="projects">{inSpanish ? spanishText.projects : englishText.projects}</span>
          <span className="contact">{inSpanish ? spanishText.contact : englishText.contact}</span>
        </div>
        <div className="personalizationButtonsContainer">
          <button
            className="themeButton"
            onClick={() => setInLightTheme(!inLighTheme)}
          >
            <img
              src={inLighTheme ? sunIcon : moonIcon}
              alt="sunIcon"
              className="sunIcon"
            />
          </button>
          <button
            className="languageButton"
            onClick={() => setInSpanish(!inSpanish)}
          >
            {" "}
            {inSpanish ? "ES" : "EN"}
          </button>
        </div>
      </header>
      {/*  Main Section  */}
      <section className="mainSection">
        <div className="infoFrame">
          <img src={andres} alt="andres" className="andres" />
          <div className="descriptionContainer">
            <span className="greetingsText">{inSpanish ? spanishText.greetings : englishText.greetings}</span>
            <span className="nameText">{inSpanish ? spanishText.name : englishText.name}</span>
            <span className="appointmentText">
              {inSpanish ? spanishText.appointment : englishText.appointment} <br /> {inSpanish ? spanishText.definition : englishText.definition}
            </span>
          </div>
        </div>
        <div className="contactButtons">
          <button
            className="githubButton"
            onClick={() => window.open(links.github)}
          >
            <img
              src={inLighTheme ? githubLightIcon: githubDarkIcon}
              alt="githubLightIcon"
              className="githubLightIcon"
            />{" "}
            Github
          </button>
          <button
            className="linkedinButton"
            onClick={() => window.open(links.linkedin)}
          >
            <img
              src={inLighTheme ? linkedinLightIcon: linkedinDarkIcon}
              alt="linkedinLightIcon"
              className="linkedinLightIcon"
            />{" "}
            Linkedin
          </button>
          <button
            className="downloadCvButton"
            onClick={() => handleClickDownloadCv()}
          >
            <img
              src={inLighTheme ?userLightIcon: userDarkIcon}
              alt="userLightIcon"
              className="userLightIcon"
            />{" "}
            {inSpanish ? spanishText.downloadCv : englishText.downloadCv}
          </button>
        </div>
      </section>
      {/*  About Me Section  */}
      <section className="aboutMeSection"></section>
    </>
  );
}

export default App;
