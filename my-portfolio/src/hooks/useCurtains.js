import { useState } from "react";

const useCurtains = (defaultOption) => {
  const [curtainsVisible, setCurtainsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleMainMenuBtnClick = (option) => {
    setCurtainsVisible(true);

    setTimeout(() => {
      setSelectedOption(option);
      console.log(selectedOption);

      setCurtainsVisible(false);
    }, 1500);
  };

  const handleTransitionEnd = () => {
    if (curtainsVisible) {
      console.log(selectedOption);
      setSelectedOption(selectedOption);
    }
  };

  return {
    curtainsVisible,
    selectedOption,
    handleMainMenuBtnClick,
    handleTransitionEnd,
  };
};

export default useCurtains;
