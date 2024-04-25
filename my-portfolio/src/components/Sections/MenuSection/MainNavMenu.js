import mainMenuOptions from "../../../data/MainMenuOptions";
import Btn from "../../Reusable/Btn/Btn";
import ListItem from "../../Reusable/LisItem/ListItem";
import NavBar from "../../Reusable/NavBar/NavBar";
import "./nav-menu.css";

const MainNavMenu = ({ handleMainMenuBtnClick }) => {
  return (
    <div className="main-menu">
      <NavBar classes={"main-menu--nav"}>
        {mainMenuOptions.map((menuOption) => {
          return (
            <ListItem key={menuOption.id} classes={"main-menu-item"}>
              <Btn
                classes={"btn"}
                clickAction={() => handleMainMenuBtnClick(menuOption)}
              >
                <p>{menuOption.label}</p>
              </Btn>
            </ListItem>
          );
        })}
      </NavBar>
    </div>
  );
};

export default MainNavMenu;
