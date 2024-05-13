import mainMenuOptions from "../../../data/MainMenuOptions";
import Btn from "../../Reusable/Btn/Btn";
import ListItem from "../../Reusable/LisItem/ListItem";
import NavBar from "../../Reusable/NavBar/NavBar";
import SideMenu from "../../SideMenu/SideMenu";
import { IconContext } from "react-icons";
import "./nav-menu.css";

const MainNavMenu = ({
  handleMainMenuBtnClick,
  setOpenedMenu,
  selectedOption,
  openedMenu,
}) => {
  function toggleOptionsMenu() {
    var menuIcon = document.querySelector(".side-menu");
    menuIcon.classList.toggle("side-menu-open");
    setOpenedMenu((openedMenu) => !openedMenu);
  }

  function handleNavBtnClick(selectedOption) {
    handleMainMenuBtnClick(selectedOption);
    if (openedMenu) {
      toggleOptionsMenu();
    }
  }

  return (
    <div className="main-menu">
      <div className="container-logo">
        <p className="logo">P</p>
      </div>
      <NavBar classes={"main-menu--nav"}>
        {mainMenuOptions.map((menuOption) => {
          return (
            <ListItem key={menuOption.id} classes={"main-menu-item"}>
              <IconContext.Provider
                value={{
                  color: `${
                    selectedOption === menuOption.id ? "#0b799d" : "white"
                  }`,
                }}
              >
                <Btn
                  classes={"main-menu-btn"}
                  clickAction={() => handleNavBtnClick(menuOption)}
                  altText={menuOption.label}
                >
                  {menuOption.icon}
                </Btn>
              </IconContext.Provider>
            </ListItem>
          );
        })}
      </NavBar>
      <SideMenu toggleOptionsMenu={toggleOptionsMenu} />
    </div>
  );
};

export default MainNavMenu;
