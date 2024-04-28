import useDownloadCv from "../../hooks/useDownloadCv";
import Btn from "../Reusable/Btn/Btn";

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
            GitHub Page
          </a>
        </li>
        <li className="menu-option">
          <a
            className="slidedown-menu-link"
            href={process.env.REACT_APP_LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </li>
        <li className="menu-option">
          <Btn classes="slidedown-menu-btn" clickAction={handleDownload}>
            Download CV
          </Btn>
        </li>
      </ul>
    </div>
  );
};

export default SlideDownMenu;
