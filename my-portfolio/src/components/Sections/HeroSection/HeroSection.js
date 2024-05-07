import HeroWelcome from "../../HeroWelcome/HeroWelcome";
import "./hero-section.css";
import { useState, useEffect } from "react";

const HeroSection = ({ handleMainMenuBtnClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    // Check if the image is already loaded (cached)
    const img = new Image();
    img.src = "./images/hero-background.jpg";
    if (img.complete) {
      setImgLoaded(true);
    } else {
      img.onload = () => {
        setImgLoaded(true);
      };
    }
  }, []);

  return (
    <section className="hero-section">
      <img
        className="hero-bg-image"
        src="./images/hero-background.jpg"
        alt="hero background"
        onLoad={() => setImgLoaded(true)}
      />
      {imgLoaded && (
        <HeroWelcome handleMainMenuBtnClick={handleMainMenuBtnClick} />
      )}
    </section>
  );
};

export default HeroSection;
