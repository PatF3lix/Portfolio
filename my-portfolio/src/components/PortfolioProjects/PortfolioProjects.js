import projectsData from "../../data/ProjectsData";
import Card from "../Reusable/Card/Card";

const PortfolioProjects = ({ handleModalOpen }) => {
  return (
    <>
      {projectsData.map((project) => {
        return (
          <Card
            key={project.id}
            classes={"project-card"}
            clickAction={() => handleModalOpen(project.id)}
          >
            <div
              className={`portfolio-project-image portfolio-project-image-${project.id}`}
            ></div>
            <h2 className={"card-title"}>{project.name}</h2>
          </Card>
        );
      })}
    </>
  );
};

export default PortfolioProjects;
