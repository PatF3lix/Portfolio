import "./styles/App.css";

import Overlay from "./components/Overlay";
import Curtain from "./components/Curtain";
import NavBar from "./components/NavBar";
import Btn from "./components/Btn";
import Menu from "./components/Menu";
import ListItem from "./components/ListItem";
import mainMenuOptions from "./data/MainMenuOptions";
import ContentSection from "./components/Content-Section";
import useCurtains from "./hooks/useCurtains";
import { useEffect } from "react";

function App() {
  const {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
  } = useCurtains(mainMenuOptions[0]);

  useEffect(() => {
    handleMainMenuBtnClick(mainMenuOptions[0]);
  }, []);

  return (
    <div className="app">
      <Menu classes={"main-menu"}>
        <NavBar classes={"main-menu--nav"}>
          {mainMenuOptions.map((menuOption) => {
            return (
              <ListItem key={menuOption.id} classes={"main-menu-item"}>
                <Btn
                  onClick={() => handleMainMenuBtnClick(menuOption)}
                  content={menuOption.label}
                />
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
      <Menu classes={"side-menu"}></Menu>
    </div>
  );
}

export default App;
