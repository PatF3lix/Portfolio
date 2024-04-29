import { useState } from "react";
import mainMenuOptions from "../data/MainMenuOptions";

const useCurtains = (defaultOption = mainMenuOptions[0]) => {
  const [curtainsVisible, setCurtainsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [displayCurtains, setDisplayCurtains] = useState(false);
  const [optionId, setOptionId] = useState(defaultOption.id);
  const [finishedAnimation, setFinishedAnimation] = useState(true);

  const handleMainMenuBtnClick = (option) => {
    if (finishedAnimation === false) {
      return;
    }
    setFinishedAnimation(false);
    setDisplayCurtains(true);
    setOptionId(option.id);

    setTimeout(() => {
      setCurtainsVisible(true);
    }, 100);

    setTimeout(() => {
      setSelectedOption(option);
      setCurtainsVisible(() => false);
    }, 1700);

    setTimeout(() => {
      setDisplayCurtains(false);
    }, 2600);

    setTimeout(() => {
      setFinishedAnimation(true);
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
    optionId,
  };
};

export default useCurtains;
