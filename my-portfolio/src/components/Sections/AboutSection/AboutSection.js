import "./about-section.css";
import Btn from "../../Reusable/Btn/Btn";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-me">
        <h1>About Me</h1>
        <h2 className="intro">Hey there, I&apos;m Patrick,</h2>
        <p className="description">
          A passionate self-taught programmer with three years of intense
          learning and exploration under my belt.
        </p>
        <p className="description">
          My journey into the world of coding began with a thirst for knowledge
          and a drive to understand the intricacies of technology.
        </p>
        <p className="description">
          Although I started my journey solo, I recognized the value of
          structured learning and decided to further hone my skills by attending
          a full-stack development course in Montreal.
        </p>
        <p className="description">
          Immersing myself in a year-long program, I delved deep into the world
          of web development, mastering various languages and frameworks along
          the way.
        </p>
        <p className="description">
          But my thirst for knowledge didn&apos;t stop there...
        </p>
        <ul className="about-me-links">
          <li>
            <Btn classes={"about-me-btn"}>
              <p>Download CV</p>
            </Btn>
            <Btn>
              <p>Github</p>
            </Btn>
            <Btn>
              <p>LinkedIn</p>
            </Btn>
          </li>
        </ul>
      </div>
      <div className="about-me-img" />
    </section>
  );
};

export default AboutSection;
