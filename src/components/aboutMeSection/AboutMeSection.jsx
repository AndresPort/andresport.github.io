import "./AboutMeSection.css";

export default function AboutMeSection({
  inSpanish,
  //inLightTheme, Se habilitará cuando se defina como se va a ejecutar, para que no lance errores
  spanishText,
  englishText,
}) {
  return (
    <section className="aboutMeSection">
      <h2 className="aboutMeTittle">
        {inSpanish ? spanishText.aboutMe : englishText.aboutMe}{" "}
      </h2>
      <p className="profileText">
        {inSpanish ? spanishText.backendProfile : englishText.backendProfile}
        <br />
        <br />
        {inSpanish ? spanishText.dbProfile : englishText.dbProfile}
        <br />
        <br />
        {inSpanish ? spanishText.frontendProfile : englishText.frontendProfile}
        <br />
        <br />
        {inSpanish
          ? spanishText.formationInformation
          : englishText.formationInformation}
      </p>
    </section>
  );
}
