import "./SkillsSection.css";
import SkillIcon from "../skillIcon/SkillIcon.jsx";

// Iconos del apartado backend
import nodeJsIcon from "../../assets/images/nodejs-icon.svg";
import express from "../../assets/images/express-icon.png";
import postreSQL from "../../assets/images/postgresql-icon.png";
import java from "../../assets/images/java-icon.png";
import springBoot from "../../assets/images/springbot-icon.png";
import python from "../../assets/images/python-icon.png";
import mySQL from "../../assets/images/mysql-icon.png";
import sqLite from "../../assets/images/sqlite-icon.png";
import mongoDB from "../../assets/images/mongodb-icon.png";
import fireStorage from "../../assets/images/firebase-storage.icon.webp";

// Iconos del apartado de FrontEnd
import html from "../../assets/images/html-icon.png"
import css from "../../assets/images/css-icon.png"
import javaScript from "../../assets/images/javascript-icon.png"
import typeScript from "../../assets/images/typescript-icon.png"
import react from "../../assets/images/react-icon.png"
import vite from "../../assets/images/vite-icon.png"

// Iconos del apartado de idiomas
import eeuuIcon from "../../assets/images/eeuu-icon.png";
import spainIcon from "../../assets/images/spain-icon.png";

// Iconos del apartado de habilidades blandas
import teamwork from "../../assets/images/teamwork-icon.png";
import adaptability from "../../assets/images/adaptability-icon.png";

// Iconos del apartado de tecnologias y herramientas
import git from "../../assets/images/git-icon.png";
import figma from "../../assets/images/figma-icon.png";
import vercel from "../../assets/images/vercel-icon.svg";
import render from "../../assets/images/render-icon.jpg";
import supabase from "../../assets/images/supabase-icon.png";
import firebase from "../../assets/images/firebase-icon.png";
import androidStudio from "../../assets/images/android-studio-icon.png";
import linux from "../../assets/images/linux-icon.png";

export default function SkillsSection({
  inSpanish,
  //inLightTheme, Se habilitará cuando se defina como se va a ejecutar, para que no lance errores
  spanishText,
  englishText,
}) {
  return (
    <section className="skillsSection">
      <h2 className="skillsTitle">
        {inSpanish ? spanishText.skills : englishText.skills}{" "}
      </h2>

      <div className="skillsFrame">
        {/* Apartado de las habilidades BackEnd*/}
        <div className="backendSkills">
          <h2 className="backendTitle"> BackEnd</h2>
          <div className="backendItems">
            <SkillIcon icon={nodeJsIcon} name="Node.Js" />
            <SkillIcon icon={express} name="Express" />
            <SkillIcon icon={postreSQL} name="PostgreSQL" />
            <SkillIcon icon={java} name="Java" />
            <SkillIcon icon={springBoot} name="SpringBoot" />
            <SkillIcon icon={python} name="Python" />
            <SkillIcon icon={mySQL} name="MySQL" />
            <SkillIcon icon={sqLite} name="SQLite" />
            <SkillIcon icon={mongoDB} name="MongoDB" />
            <SkillIcon icon={fireStorage} name="FirebaseStorage" />
          </div>
        </div>

        {/* Apartado de las habilidades frontEnd*/}
        <div className="frontendSkillsFrame">
          <h2 className="frontendTitle">FrontEnd</h2>
          <div className="frontendItems">
            <SkillIcon icon={html} name="HTML" />
            <SkillIcon icon={css} name="CSS" />
            <SkillIcon icon={javaScript} name="JavaScript" />
            <SkillIcon icon={typeScript} name="TypeScript" />
            <SkillIcon icon={react} name="React" />
            <SkillIcon icon={vite} name="Vite" />
          </div>
        </div>

        {/* Apartado de los idiomas*/}
        <div className="languagesFrame">
          <h2 className="languageTitle">
            {" "}
            {inSpanish ? spanishText.language : englishText.language}
          </h2>
          <div className="languagesItems">
            <SkillIcon
              icon={spainIcon}
              name={inSpanish ? spanishText.spanish : englishText.spanish}
              level={
                inSpanish
                  ? spanishText.languageLevel
                  : englishText.languageLevel
              }
            />
            <SkillIcon
              icon={eeuuIcon}
              name={inSpanish ? spanishText.english : englishText.english}
              level="B1"
            />
          </div>
        </div>

        {/* Apartado de las habilidades blandas*/}
        <div className="softSkillsFrame">
          <h2 className="softSkillsTitle">
            {" "}
            {inSpanish ? spanishText.softSkills : englishText.softSkills}
          </h2>
          <div className="softSkillsItems">
            <SkillIcon
              icon={teamwork}
              name={inSpanish ? spanishText.teamWork : englishText.teamWork}
            />
            <SkillIcon
              icon={adaptability}
              name={
                inSpanish ? spanishText.flexibility : englishText.flexibility
              }
            />
          </div>
        </div>

        <div className="toolsAndTechnologiesFrame">
          <h2 className="toolsAndTechnologiesTitle">{inSpanish? spanishText.toolsAndTechnologies : englishText.toolsAndTechnologies }</h2>
          <div className="toolsAndTechnologiesItems">
              <SkillIcon icon={git} name="Git" />
            <SkillIcon icon={figma} name="Figma" />
            <SkillIcon icon={vercel} name="Vercel" />
            <SkillIcon icon={render} name="Render" />
            <SkillIcon icon={supabase} name="Supabase" />
            <SkillIcon icon={firebase} name="Firebase" />
            <SkillIcon icon={androidStudio} name="Android Studio" />
            <SkillIcon icon={linux} name="Linux" />
          </div>
        </div>
      </div>
    </section>
  );
}
