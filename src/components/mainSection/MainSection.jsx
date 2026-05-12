import githubLightIcon from "../../assets/images/github-light-icon.svg";
import githubDarkIcon from "../../assets/images/github-dark-icon.svg";
import linkedinLightIcon from "../../assets/images/linkedin-light-icon.svg";
import linkedinDarkIcon from "../../assets/images/linkedin-dark-icon.svg";
import userLightIcon from "../../assets/images/user-light-icon.png";
import userDarkIcon from "../../assets/images/user-dark-icon.png";
import andres from "../../assets/images/andres.png";
import andresPortilloCv from "../../assets/documents/Andres-Felipe-Portillo-Cv-Full-Stack.pdf";

import "./MainSection.css"

export default function MainSection(
  {inSpanish,
  inLightTheme,
  spanishText,
  englishText,
  links}
) {
  const handleClickDownloadCv = async () => {
    const cv = document.createElement("a");
    cv.href = andresPortilloCv;
    cv.download = "Andres-Felipe-Portillo-Cv-Full-Stack";
    document.body.appendChild(cv);
    cv.click();
    document.body.removeChild(cv);
  };

  return (
    <section className="mainSection">
      <div className="infoFrame">
        <img src={andres} alt="andres" className="andres" />
        <div className="descriptionContainer">
          <span className="greetingsText">
            {inSpanish ? spanishText.greetings : englishText.greetings}
          </span>
          <span className="nameText">
            {inSpanish ? spanishText.name : englishText.name}
          </span>
          <span className="appointmentText">
            {inSpanish ? spanishText.appointment : englishText.appointment}{" "}
            <br /> {inSpanish ? spanishText.definition : englishText.definition}
          </span>
        </div>
      </div>
      <div className="contactButtons">
        <button
          className="githubButton"
          onClick={() => window.open(links.github)}
        >
          <img
            src={inLightTheme ? githubLightIcon : githubDarkIcon}
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
            src={inLightTheme ? linkedinLightIcon : linkedinDarkIcon}
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
            src={inLightTheme ? userLightIcon : userDarkIcon}
            alt="userLightIcon"
            className="userLightIcon"
          />{" "}
          {inSpanish ? spanishText.downloadCv : englishText.downloadCv}
        </button>
      </div>
    </section>
  );
}
