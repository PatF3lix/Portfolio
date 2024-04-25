import "./modal.css";
import projectsData from "../../data/ProjectsData";
import { useEffect, useRef } from "react";

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
      <div className="modal-container" ref={modalRef}>
        <h2>{projectsData[selectedProjectId].name}</h2>
        <p>{projectsData[selectedProjectId].Description}</p>
        <button onClick={handleModalClose}>Close Modal</button>
      </div>
    </>
  );
};

export default Modal;
