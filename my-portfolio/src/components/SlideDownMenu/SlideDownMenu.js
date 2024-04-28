import useDownloadCv from "../../hooks/useDownloadCv";
import Btn from "../Reusable/Btn/Btn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

import "./slide-down-menu.css";

const SlideDownMenu = () => {
  const { handleDownload } = useDownloadCv();
  return (
    <div className="container-slidedown">
      <ul className="slidedown-menu">
        <li className="menu-option">
          <a
            className="slidedown-menu-link"
            href={process.env.REACT_APP_GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span className="link-text">GitHub Page</span>
          </a>
        </li>
        <li className="menu-option">
          <a
            className="slidedown-menu-link"
            href={process.env.REACT_APP_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span className="link-text">LinkedIn Account</span>
          </a>
        </li>
        <li className="menu-option">
          <Btn classes="slidedown-menu-btn" clickAction={handleDownload}>
            <FaDownload />
            <span className="link-text">Download CV</span>
          </Btn>
        </li>
      </ul>
    </div>
  );
};

export default SlideDownMenu;
