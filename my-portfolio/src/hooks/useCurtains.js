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
    }, 100);

    setTimeout(() => {
      setSelectedOption(option);
      setCurtainsVisible(() => false);
    }, 1500);

    setTimeout(() => {
      setDisplayCurtains(false);
    }, 2700);
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
