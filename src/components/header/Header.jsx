import "./Header.css";
import sunIcon from "../../assets/images/sun-icon.svg";
import moonIcon from "../../assets/images/moon-icon.svg";

export default function Header({
  inSpanish,
  setInSpanish,
  inLightTheme,
  setInLightTheme,
  spanishText,
  englishText,
}) {
  return (
    <header className="header">
      <div className="logoContainer">
        <span className="portfolioLogo">
          {inSpanish ? spanishText.portfolioLogo : englishText.portfolioLogo}
        </span>
      </div>
      <div className="tittlesContainer">
        <span className="aboutMe">
          {inSpanish ? spanishText.aboutMe : englishText.aboutMe}
        </span>
        <span className="skills">
          {inSpanish ? spanishText.skills : englishText.skills}
        </span>
        <span className="projects">
          {inSpanish ? spanishText.projects : englishText.projects}
        </span>
        <span className="contact">
          {inSpanish ? spanishText.contact : englishText.contact}
        </span>
      </div>
      <div className="personalizationButtonsContainer">
        <button
          className="themeButton"
          onClick={() => setInLightTheme(!inLightTheme)}
        >
          <img
            src={inLightTheme ? sunIcon : moonIcon}
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
  );
}
