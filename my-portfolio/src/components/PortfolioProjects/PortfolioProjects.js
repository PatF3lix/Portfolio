import Card from "../Reusable/Card/Card";

const PortfolioProjects = () => {
  return (
    <>
      <Card classes={"project-card"}>
        <div className="portfolio-project-image portfolio-project-image-1" />
        <h2 className={"card-title"}>CyberGuardian</h2>
      </Card>
      <Card classes={" project-card project-card-sml"}>
        <div className="portfolio-project-image portfolio-project-image-2" />
        <h2 className={"card-title"}>ChatWithPat</h2>
      </Card>
      <Card classes={" project-card "}>
        <div className="portfolio-project-image portfolio-project-image-3" />
        <h2 className={"card-title"}>PasswordManager</h2>
      </Card>
      <Card classes={" project-card "}>
        <div className="portfolio-project-image portfolio-project-image-4" />
        <h2 className={"card-title"}>Vulnerability Scanning Tool</h2>
      </Card>
    </>
  );
};

export default PortfolioProjects;
