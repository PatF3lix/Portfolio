import Card from "../Reusable/Card/Card";

const PortfolioProjects = () => {
  return (
    <>
      <Card classes={"project-card"}>
        <div className="portfolio-project-image" />
        <h2 className={"card-title"}>Project 1</h2>
      </Card>
      <Card classes={" project-card project-card-sml"}>
        <div className="portfolio-project-image" />
        <h2 className={"card-title"}>Project 1</h2>
      </Card>
      <Card classes={" project-card "}>
        <div className="portfolio-project-image" />
        <h2 className={"card-title"}>Project 1</h2>
      </Card>
      <Card classes={" project-card "}>
        <div className="portfolio-project-image" />
        <h2 className={"card-title"}>Project 1</h2>
      </Card>
    </>
  );
};

export default PortfolioProjects;
