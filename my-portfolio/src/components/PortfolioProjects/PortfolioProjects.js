import React from "react";
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
            <img
              src={`./images/${project.image}`}
              alt={project.name}
              className={`portfolio-project-image`}
            ></img>
            <h2 className={"prj-card-title"}>{project.name}</h2>
          </Card>
        );
      })}
    </>
  );
};

export default PortfolioProjects;
