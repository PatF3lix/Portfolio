import { useState } from "react";

const useCurtains = (defaultOption) => {
  const [curtainsVisible, setCurtainsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [displayCurtains, setDisplayCurtains] = useState(false);

  const handleMainMenuBtnClick = (option) => {
    setDisplayCurtains(() => true);

    setTimeout(() => {
      setCurtainsVisible(true);
    }, 500);

    setTimeout(() => {
      setSelectedOption(option);
      setCurtainsVisible(false);
    }, 1700);

    setTimeout(() => {
      setDisplayCurtains(() => false);
    }, 3000);
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
