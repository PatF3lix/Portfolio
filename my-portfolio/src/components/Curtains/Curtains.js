
import Curtain from "../Curtain/Curtain";
import Overlay from "../Reusable/Overlay/Overlay";

const Curtains = ({ curtainsVisible, handleTransitionEnd, screenWidth }) => {
  return (
    <Overlay classes={"curtain-container"}>
      <Curtain
        classes={`curtain c-1 ${curtainsVisible ? "active" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      />
      {screenWidth > 400 && (
        <Curtain
          classes={`curtain c-2 ${curtainsVisible ? "active" : ""}`}
          onTransitionEnd={handleTransitionEnd}
        />
      )}
      {screenWidth > 600 && (
        <Curtain
          classes={`curtain c-3 ${curtainsVisible ? "active" : ""}`}
          onTransitionEnd={handleTransitionEnd}
        />
      )}
      {screenWidth > 900 && (
        <Curtain
          classes={`curtain c-4 ${curtainsVisible ? "active" : ""}`}
          onTransitionEnd={handleTransitionEnd}
        />
      )}
    </Overlay>
  );
};

export default Curtains;
