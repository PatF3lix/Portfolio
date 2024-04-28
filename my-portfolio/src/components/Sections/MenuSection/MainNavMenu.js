import mainMenuOptions from "../../../data/MainMenuOptions";
import Btn from "../../Reusable/Btn/Btn";
import ListItem from "../../Reusable/LisItem/ListItem";
import NavBar from "../../Reusable/NavBar/NavBar";
import SideMenu from "../../SideMenu/SideMenu";
import "./nav-menu.css";

const MainNavMenu = ({ handleMainMenuBtnClick, setOpenedMenu }) => {
  return (
    <div className="main-menu">
      <div className="container-logo">
        <p className="logo">P</p>
      </div>
      <NavBar classes={"main-menu--nav"}>
        {mainMenuOptions.map((menuOption) => {
          return (
            <ListItem key={menuOption.id} classes={"main-menu-item"}>
              <Btn
                classes={"main-menu-btn"}
                clickAction={() => handleMainMenuBtnClick(menuOption)}
                altText={menuOption.label}
              >
                {menuOption.icon}
              </Btn>
            </ListItem>
          );
        })}
      </NavBar>
      <SideMenu setOpenedMenu={setOpenedMenu} />
    </div>
  );
};

export default MainNavMenu;
