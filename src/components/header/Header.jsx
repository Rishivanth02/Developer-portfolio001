import React, { useState } from "react";
import HomeIcon from "../../assets/svg/home.svg";
import FolderIcon from "../../assets/svg/folder.svg";
import Briefcase from "../../assets/svg/briefcase.svg";
import SkillIcon from "../../assets/svg/tool.svg";
import ContactIcon from "../../assets/svg/contact-icon.svg";
import BulbIcon from "../../assets/svg/bulb-icon.svg";
import Trending from "../../assets/svg/trending-icon.svg";
import style from "../header/header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  // Function to toggle the header state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(!isOpen);
  }

  const navigateToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState({}, "", `#${sectionId}`);
    }
    setMenuOpen(false); // Close the menu after navigating
    setIsOpen(false); // Ensure the hamburger color is updated
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className={style.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        style={{ color: isOpen ? "#000" : "#000" }} 
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sliding Menu */}
      <section
        className={`${style["header-wrapper"]} ${
          menuOpen ? style.open : style.closed
        }`}
      >
        <div className={`${style["header-icons-wrapper"]}`}>
          <span
            onClick={() => navigateToSection("home")}
            className={`${style["header-icons"]}`}
          >
            <p  className={`${style["header-link"]}`}>Home</p>
            {/* <span className={style.tooltip}>Home</span> */}
          </span>
          <span
            onClick={() => navigateToSection("what-i-do")}
            className={`${style["header-icons"]}`}
          >
            <p className={`${style["header-link"]}`}>What I Do</p>
            {/* <span className={style.tooltip}>What I Do</span> */}
          </span>
          <span
            onClick={() => navigateToSection("skills")}
            className={`${style["header-icons"]}`}
          >
            <p className={`${style["header-link"]}`}>Skills</p>
            {/* <span className={style.tooltip}>Skills</span> */}
          </span>
          <span
            onClick={() => navigateToSection("horizons")}
            className={`${style["header-icons"]}`}
          >
            <p className={`${style["header-link"]}`}>New Stacks</p>
            {/* <span className={style.tooltip}>Explore new stacks</span> */}
          </span>
          <span
            onClick={() => navigateToSection("beyond-code")}
            className={`${style["header-icons"]}`}
          >
            <p className={`${style["header-link"]}`}>Beyond Code</p>
            {/* <span className={style.tooltip}>Beyond code</span> */}
          </span>
          <span
            onClick={() => navigateToSection("contact")}
            className={`${style["header-icons"]}`}
          >
            <p className={`${style["header-link"]}`}>Contact</p>
            {/* <span className={style.tooltip}>Contact</span> */}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Header;
