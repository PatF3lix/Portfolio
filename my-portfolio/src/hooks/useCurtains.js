import { useState } from "react";
import mainMenuOptions from "../data/MainMenuOptions";

const useCurtains = (defaultOption = mainMenuOptions[0]) => {
  const [curtainsVisible, setCurtainsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [displayCurtains, setDisplayCurtains] = useState(false);

  const handleMainMenuBtnClick = (option) => {
    setDisplayCurtains(true);

    setTimeout(() => {
      setCurtainsVisible(true);
    }, 500);

    setTimeout(() => {
      setSelectedOption(option);
      setCurtainsVisible(() => false);
    }, 2200);

    setTimeout(() => {
      setDisplayCurtains(false);
    }, 3200);
  };

  const handleTransitionEnd = () => {
    if (curtainsVisible) {
      setSelectedOption(selectedOption);
    }
  };

  return {
    curtainsVisible,
    displayCurtains,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
  };
};

export default useCurtains;
