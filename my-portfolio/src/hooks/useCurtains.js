import { useState } from "react";

const useCurtains = () => {
  const [curtainsVisible, setCurtainsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMainMenuBtnClick = (option) => {
    setCurtainsVisible(true);

    setTimeout(() => {
      setSelectedOption(option);
      console.log(selectedOption);

      setCurtainsVisible(false);
    }, 2000);
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
