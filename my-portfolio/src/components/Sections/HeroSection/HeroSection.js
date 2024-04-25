import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="presentational-info">
        <h1 className="hero-name">Patrick Felix Oliveira</h1>
        <h2 className="hero-title">Software Developer</h2>
        <p className="hero-intro">
          <span className="welcome">Welcome to my portfolio!</span>
          <br /> I&apos;m driven by the realms of full-stack application
          development and cybersecurity,
          <br /> where my focus centers on pioneering solutions to intricate
          problems.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
