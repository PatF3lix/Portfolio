import "./App.css";
import "./css utils/grids.css";

import Overlay from "./components/Reusable/Overlay/Overlay";
import Curtain from "./components/Curtain/Curtain";
import NavBar from "./components/Reusable/NavBar/NavBar";
import Btn from "./components/Reusable/Btn/Btn";
import Menu from "./components/Reusable/Menu/Menu";
import ListItem from "./components/Reusable/LisItem/ListItem";
import mainMenuOptions from "./data/MainMenuOptions";
import ContentSection from "./components/Sections/ContentSection/ContentSection";
import useCurtains from "./hooks/useCurtains";

function App() {
  const {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
  } = useCurtains(mainMenuOptions[0]);

  return (
    <div className="app grid-row-2">
      <Menu classes={"main-menu"}>
        <NavBar classes={"main-menu--nav"}>
          {mainMenuOptions.map((menuOption) => {
            return (
              <ListItem key={menuOption.id} classes={"main-menu-item"}>
                <Btn
                  classes={"btn"}
                  onClick={() => handleMainMenuBtnClick(menuOption)}
                >
                  <p>{menuOption.label}</p>
                </Btn>
              </ListItem>
            );
          })}
        </NavBar>
      </Menu>
      <ContentSection>
        {selectedOption.content}
        <Overlay classes={"curtain-container"}>
          <Curtain
            classes={`curtain c-1 ${curtainsVisible ? "active" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          />
          <Curtain
            classes={`curtain c-2 ${curtainsVisible ? "active" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          />
          <Curtain
            classes={`curtain c-3 ${curtainsVisible ? "active" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          />
          <Curtain
            classes={`curtain c-4 ${curtainsVisible ? "active" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          />
        </Overlay>
      </ContentSection>
    </div>
  );
}

export default App;
