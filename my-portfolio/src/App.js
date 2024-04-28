import "./App.css";

import ContentSection from "./components/Sections/ContentSection/ContentSection";
import useCurtains from "./hooks/useCurtains";
import Curtains from "./components/Curtains/Curtains";
import MainNavMenu from "./components/Sections/MenuSection/MainNavMenu";
import SlideDownMenu from "./components/SlideDownMenu/SlideDownMenu";
import { useState } from "react";

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
    displayCurtains,
  } = useCurtains();

  return (
    <div id="app" className="app grid-row-2">
      <MainNavMenu
        handleMainMenuBtnClick={handleMainMenuBtnClick}
        openedMenu={openedMenu}
        setOpenedMenu={setOpenedMenu}
      />

      <ContentSection>
        {selectedOption.content}
        {openedMenu && <SlideDownMenu />}
      </ContentSection>
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
