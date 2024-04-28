import "./modal.css";
import projectsData from "../../data/ProjectsData";
import { useEffect, useRef } from "react";
import Btn from "../Reusable/Btn/Btn";

const Modal = ({ handleModalClose, selectedProjectId }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleModalClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleModalClose]);

  return (
    <>
      <div className="modal-background" />
      <div className="modal-container-outer">
        <div className="modal-container-inner" ref={modalRef}>
          <Btn classes={"btn-close"} clickAction={handleModalClose}>
            <span>&times;</span>
          </Btn>
          <h2 className="modal-project-title">
            {projectsData[selectedProjectId].name}
          </h2>
          {/* <div className="modal-image">
            <img
              src={`./images/${projectsData[selectedProjectId].image}`}
              alt={`project ${projectsData[selectedProjectId].name}`}
            />
          </div> */}
          <h2 className="modal-h3">Project Description:</h2>
          <p className="modal-project-description">
            {projectsData[selectedProjectId].Description}
          </p>
          <h2 className="modal-h3">Project Features:</h2>
          {projectsData[selectedProjectId].features.map((feature) => {
            return (
              <p key={feature.id} className="modal-feature">
                {`${feature.id}- ${feature.text}`}
              </p>
            );
          })}
          <div className="modal-link-btn">
            <Btn classes={"btn"} clickAction={() => console.log("github link")}>
              <p>Github</p>
            </Btn>
            <Btn
              classes={"btn"}
              clickAction={() => console.log("Live Demo link")}
            >
              <p>Live Demo</p>
            </Btn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
