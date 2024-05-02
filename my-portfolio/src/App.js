import "./App.css";

import { useState } from "react";
import ContentSection from "./components/Sections/ContentSection/ContentSection";
import useCurtains from "./hooks/useCurtains";
import Curtains from "./components/Curtains/Curtains";
import MainNavMenu from "./components/Sections/MenuSection/MainNavMenu";
import SlideDownMenu from "./components/SlideDownMenu/SlideDownMenu";
import useScreenWidth from "./hooks/useScreenWidth";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import AboutSection from "./components/Sections/AboutSection/AboutSection";

function App() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
    displayCurtains,
    optionId,
  } = useCurtains();
  /*custom hook to calculate the client screen width at all times,
   to assert how many curtains there should be*/
  const screenWidth = useScreenWidth();

  return (
    <div id="app" className="app grid-row-2">
      <MainNavMenu
        handleMainMenuBtnClick={handleMainMenuBtnClick}
        openedMenu={openedMenu}
        setOpenedMenu={setOpenedMenu}
        selectedOption={optionId}
      />

      <ContentSection>
        {selectedOption.id === 1 ? (
          <HeroSection handleMainMenuBtnClick={handleMainMenuBtnClick} />
        ) : selectedOption.id === 2 ? (
          <AboutSection screenWidth={screenWidth} />
        ) : (
          selectedOption.content
        )}
        <SlideDownMenu openedMenu={openedMenu} />
      </ContentSection>
      {displayCurtains && (
        <Curtains
          curtainsVisible={curtainsVisible}
          handleTransitionEnd={handleTransitionEnd}
          screenWidth={screenWidth}
        />
      )}
    </div>
  );
}

export default App;
