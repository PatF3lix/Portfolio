import "./hero-section.css";
import Btn from "../../Reusable/Btn/Btn";
import mainMenuOptions from "../../../data/MainMenuOptions";

const HeroSection = ({ handleMainMenuBtnClick }) => {
  return (
    <section className="hero-section">
      <div className="presentational-info">
        <h1 className="hero-name">Patrick Felix Oliveira</h1>
        <h2 className="hero-title">Software Developer</h2>
        <div className="hero-intro">
          <p className="welcome">Welcome to my portfolio!</p>
          <p className="welcome-text">
            I&apos;m driven by the realms of full-stack application development
            and cybersecurity.
          </p>
          <p className="welcome-text">
            Where my focus centers on pioneering solutions to intricate
            problems.
          </p>
          <Btn
            classes={"btn hero-btn"}
            clickAction={() => handleMainMenuBtnClick(mainMenuOptions[1])}
          >
            <p className="hero-btn-text">About Me</p>
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
