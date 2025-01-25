import React from "react";
import style from "./mainContent.module.scss";
import Home from "../../pages/home/Home";
import Skills from "../skills/Skills";
import ToolsAndTech from "../tools/ToolsAndTech";
import ExpandingHorizons from "../exploring/ExpandingHorizons";
import BeyondCode from "../beyondcode/BeyondCode";
import Contact from "../contact/Contact";

function MainContent() {
  return (
    <>
      <section className={`${style["main-content-wrapper"]}`}>
        <div id="home">
          <Home />
        </div>
        <div id="what-i-do">
          <Skills />
        </div>
        <div id="skills">
          <ToolsAndTech />
        </div>
        <div id="horizons">
          <ExpandingHorizons />
        </div>
        <div id="beyond-code">
          <BeyondCode />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </section>
    </>
  );
}

export default MainContent;
