import "./App.css";

import { useState, Suspense, lazy } from "react";
import useCurtains from "./hooks/useCurtains";
import useScreenWidth from "./hooks/useScreenWidth";

// Lazy-loaded components
const ContentSection = lazy(() =>
  import("./components/Sections/ContentSection/ContentSection")
);

const Curtains = lazy(() => import("./components/Curtains/Curtains"));

const MainNavMenu = lazy(() =>
  import("./components/Sections/MenuSection/MainNavMenu")
);
const SlideDownMenu = lazy(() =>
  import("./components/SlideDownMenu/SlideDownMenu")
);

const HeroSection = lazy(() =>
  import("./components/Sections/HeroSection/HeroSection")
);
const AboutSection = lazy(() =>
  import("./components/Sections/AboutSection/AboutSection")
);
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
      {/* Suspense component to handle lazy loading */}
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
