import { IconContext } from "react-icons";
import Btn from "../Reusable/Btn/Btn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useDownloadCv from "../../hooks/useDownloadCv";

const SocialMediaLinks = () => {
  const { handleDownload } = useDownloadCv();

  return (
    <ul className="about-me-links">
      <li>
        <Btn classes={"about-me-btn"} clickAction={handleDownload}>
          <p>Download CV</p>
        </Btn>
        <Btn classes={"about-me-btn"}>
          <IconContext.Provider value={{ color: "white" }}>
            <a
              href={process.env.REACT_APP_GITHUB_URL}
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </IconContext.Provider>
        </Btn>
        <Btn classes={"about-me-btn"}>
          <IconContext.Provider value={{ color: "white" }}>
            <a
              href={process.env.REACT_APP_LINKEDIN_URL}
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </IconContext.Provider>
        </Btn>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
