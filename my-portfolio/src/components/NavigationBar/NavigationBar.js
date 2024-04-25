import mainMenuOptions from "../../data/MainMenuOptions";
import Btn from "../Reusable/Btn/Btn";
import ListItem from "../Reusable/LisItem/ListItem";
import "./navigationBar.css";

const NavigationBar = ({ classes, handleMainMenuBtnClick }) => {
  return (
    <div className={classes}>
      <NavigationBar classes={"main-menu--nav"}>
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
      </NavigationBar>
    </div>
  );
};

export default NavigationBar;
