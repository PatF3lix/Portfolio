import HeroSection from "../components/Sections/HeroSection/HeroSection";
import PortfolioSection from "../components/Sections/PortfolioSection/PortfolioSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";
import ContactsSection from "../components/Sections/ContactsSection/ContactsSection";
import { FaHome } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const mainMenuOptions = [
  { id: 1, label: <FaHome />, content: <HeroSection /> },
  { id: 2, label: <RiContactsFill />, content: <AboutSection /> },
  { id: 3, label: <FaEye />, content: <PortfolioSection /> },
  { id: 4, label: <FaRegEnvelope />, content: <ContactsSection /> },
];

export default mainMenuOptions;
