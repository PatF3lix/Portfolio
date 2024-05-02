import useDownloadCv from "../../hooks/useDownloadCv";
import Btn from "../Reusable/Btn/Btn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IconContext } from "react-icons";

import "./slide-down-menu.css";

const SlideDownMenu = ({ openedMenu }) => {
  const { handleDownload } = useDownloadCv();
  const openNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`container-slidedown ${
        openedMenu ? "container-slideIn" : "container-slideOut"
      }`}
    >
      <ul className="slidedown-menu">
        <li className="menu-option">
          <IconContext.Provider value={{ color: "white" }}>
            <Btn
              classes={"side-menu-btn"}
              clickAction={() => openNewTab(process.env.REACT_APP_GITHUB_URL)}
            >
              <FaGithub />
              <span className="link-text">GitHub Page</span>
            </Btn>
          </IconContext.Provider>
        </li>
        <li className="menu-option">
          <IconContext.Provider value={{ color: "white" }}>
            <Btn
              classes={"side-menu-btn"}
              clickAction={() => openNewTab(process.env.REACT_APP_LINKEDIN_URL)}
            >
              <FaLinkedin />
              <span className="link-text">LinkedIn Account</span>
            </Btn>
          </IconContext.Provider>
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
