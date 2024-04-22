import "../../styles/App.css";

const ResumeSection = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Resume</h2>
      <div className="resume-section-content">
        <div className="resume-section-item">
          <h3 className="resume-section-item-title">Education</h3>
          <div className="resume-section-item-content">
            <div className="resume-section-item-content-item">
              <h4 className="resume-section-item-content-item-title">
                University of Washington
              </h4>
              <p className="resume-section-item-content-item-description">
                Bachelor of Science in Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
