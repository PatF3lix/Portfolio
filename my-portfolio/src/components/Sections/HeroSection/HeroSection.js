import Btn from "../../Reusable/Btn/Btn";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="presentational-info">
        <h1 className="hero-name">Patrick Felix Oliveira</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-intro">
          Welcome to my portfolio! I&apos;m passionate about crafting innovative
          solutions and creating seamless experiences.
          <br /> Explore my projects below.
        </p>
        <Btn classes={"btn"}>
          <p>About Me</p>
        </Btn>
      </div>
    </section>
  );
};

export default HeroSection;
