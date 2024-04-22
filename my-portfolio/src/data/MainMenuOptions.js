import HeroSection from "../components/Sections/HeroSection";
import ResumeSection from "../components/Sections/ResumeSection";
import PortfolioSection from "../components/Sections/PortfolioSection";
import AboutSection from "../components/Sections/AboutSection";
import ContactsSection from "../components/Sections/ContactsSection";
const mainMenuOptions = [
  { id: 1, label: "Home", content: <HeroSection /> },
  { id: 2, label: "Resume", content: <ResumeSection /> },
  { id: 3, label: "Portfolio", content: <PortfolioSection /> },
  { id: 4, label: "About", content: <AboutSection /> },
  { id: 5, label: "Contact", content: <ContactsSection /> },
];

export default mainMenuOptions;
