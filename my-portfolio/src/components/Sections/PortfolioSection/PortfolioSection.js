import "./portfolio-section.css";
import PortfolioProjects from "../../PortfolioProjects/PortfolioProjects";
import Modal from "../../Modal/Modal";
import React, { useState } from "react";

const PortfolioSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectId, setSelectedProject] = useState(null);

  const toggleModalState = () => {
    setShowModal((modalState) => !modalState);
  };

  const handleModalOpen = (project) => {
    setSelectedProject(project - 1);
    toggleModalState();
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    toggleModalState();
  };

  return (
    <section className="portfolio-section">
      <h1 className={"portfolio-title"}>Portfolio</h1>
      <div className="portfolio-projects-list">
        <PortfolioProjects handleModalOpen={handleModalOpen} />
      </div>
      {showModal && (
        <Modal
          handleModalClose={handleModalClose}
          selectedProjectId={selectedProjectId}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
