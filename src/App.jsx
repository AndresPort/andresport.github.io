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
          <span className="portfolioLogo">Portafolio</span>
        </div>
        <div className="tittlesContainer">
          <span className="aboutMe">Sobre Mi</span>
          <span className="skills">Habilidades</span>
          <span className="projects">Proyectos</span>
          <span className="contact">Contacto</span>
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
            <span className="greetingsText">Hola, soy</span>
            <span className="nameText">Andrés Felipe Portillo</span>
            <span className="appointmentText">
              Desarrollador de software <br /> Full Stack
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
            Descargar CV
          </button>
        </div>
      </section>
      {/*  About Me Section  */}
      <section className="aboutMeSection"></section>
    </>
  );
}

export default App;
