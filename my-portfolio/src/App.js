import "./App.css";
import "./css utils/grids.css";

import mainMenuOptions from "./data/MainMenuOptions";
import ContentSection from "./components/Sections/ContentSection/ContentSection";
import useCurtains from "./hooks/useCurtains";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Curtains from "./components/Curtains/Curtains";

function App() {
  const {
    curtainsVisible,
    selectedOption,
    handleTransitionEnd,
    displayCurtains,
    handleMainMenuBtnClick,
  } = useCurtains(mainMenuOptions[0]);

  return (
    <div className="app grid-row-2">
      <NavigationBar
        classes={"main-menu"}
        handleMainMenuBtnClick={handleMainMenuBtnClick}
      />
      <ContentSection>{selectedOption.content}</ContentSection>
      {displayCurtains && (
        <Curtains
          curtainsVisible={curtainsVisible}
          handleTransitionEnd={handleTransitionEnd}
        />
      )}
    </div>
  );
}

export default App;
