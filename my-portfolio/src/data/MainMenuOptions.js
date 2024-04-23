import HeroSection from "../components/Sections/HeroSection/HeroSection";
import PortfolioSection from "../components/Sections/PortfolioSection/PortfolioSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import ContactsSection from "../components/Sections/ContactsSection/ContactsSection";
const mainMenuOptions = [
  { id: 1, label: "Home", content: <HeroSection /> },
  { id: 2, label: "About", content: <AboutSection /> },
  { id: 3, label: "Portfolio", content: <PortfolioSection /> },
  { id: 4, label: "Contact", content: <ContactsSection /> },
];

export default mainMenuOptions;
