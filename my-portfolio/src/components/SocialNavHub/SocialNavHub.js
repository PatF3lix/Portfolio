import Btn from "../Reusable/Btn/Btn";
import useDownloadCv from "../../hooks/useDownloadCv";
import "./social-nav-hub.css";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialNavHub = () => {
  const { handleDownload } = useDownloadCv();
  return (
    <ul className="social-nav-links">
      <li>
        <Btn classes={"social-nav-btn"}>
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
        <Btn classes={"social-nav-btn"}>
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
        <Btn classes={"social-nav-btn"} clickAction={handleDownload}>
          <p>Download CV</p>
        </Btn>
      </li>
    </ul>
  );
};

export default SocialNavHub;
