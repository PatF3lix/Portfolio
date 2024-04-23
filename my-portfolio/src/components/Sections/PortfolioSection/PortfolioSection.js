import "./portfolio-section.css";
import Card from "../../Reusable/Card/Card";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <h1 className={"portfolio-title"}>Portfolio</h1>
      <div className="portfolio-projects-list">
        <Card classes={" project-card project-card-big"}>
          <div className="portfolio-project-image" />
          <h2 className={"card-title"}>Project 1</h2>
        </Card>
        <Card classes={" project-card project-card-big"}>
          <div className="portfolio-project-image" />
          <h2 className={"card-title"}>Project 1</h2>
        </Card>
        <Card classes={" project-card project-card-big"}>
          <div className="portfolio-project-image" />
          <h2 className={"card-title"}>Project 1</h2>
        </Card>
        <Card classes={" project-card project-card-big"}>
          <div className="portfolio-project-image" />
          <h2 className={"card-title"}>Project 1</h2>
        </Card>{" "}
        <Card classes={" project-card project-card-big"}>
          <div className="portfolio-project-image" />
          <h2 className={"card-title"}>Project 1</h2>
        </Card>
      </div>
      <div className="Professional-content">
        <Card>
          <h2 className={"card-title"}>Project 2</h2>
          <p className={"card-description"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default PortfolioSection;
