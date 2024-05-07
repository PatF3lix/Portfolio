import "./App.css";

import React, { useState, Suspense } from "react";
import useCurtains from "./hooks/useCurtains";
import useScreenWidth from "./hooks/useScreenWidth";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import MainNavMenu from "./components/Sections/MenuSection/MainNavMenu";
import ContentSection from "./components/Sections/ContentSection/ContentSection";

const SlideDownMenu = React.lazy(() =>
  import("./components/SlideDownMenu/SlideDownMenu")
);

const AboutSection = React.lazy(() =>
  import("./components/Sections/AboutSection/AboutSection")
);
const Curtains = React.lazy(() => import("./components/Curtains/Curtains"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <AboutSection screenWidth={screenWidth} />
          </Suspense>
        ) : (
          selectedOption.content
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <SlideDownMenu openedMenu={openedMenu} />
        </Suspense>
      </ContentSection>

      {displayCurtains && (
        <Suspense fallback={<div>Loading...</div>}>
          <Curtains
            curtainsVisible={curtainsVisible}
            handleTransitionEnd={handleTransitionEnd}
            screenWidth={screenWidth}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;
