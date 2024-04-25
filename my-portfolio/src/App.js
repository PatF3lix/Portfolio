import "./App.css";
import "./css utils/grids.css";

import ContentSection from "./components/Sections/ContentSection/ContentSection";
import useCurtains from "./hooks/useCurtains";
import Curtains from "./components/Curtains/Curtains";
import MainNavMenu from "./components/Sections/MenuSection/MainNavMenu";

function App() {
  const {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
    displayCurtains,
  } = useCurtains();

  return (
    <div className="app grid-row-2">
      <MainNavMenu handleMainMenuBtnClick={handleMainMenuBtnClick} />
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
