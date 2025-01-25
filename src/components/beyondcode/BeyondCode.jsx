import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../beyondcode/beyondCode.module.scss";
import Bolt from "../../assets/svg/bolt-solid.svg";
import Image from "../../assets/svg/doodle08.svg";

function BeyondCode() {

  const rocketRef = useRef(null);

  useEffect(() => {
    // Rocket floating animation
    gsap.to(rocketRef.current, {
      y: () => gsap.utils.random(-20, 20), // Vertical oscillation
      x: () => gsap.utils.random(-10, 10), // Horizontal sway
      rotation: () => gsap.utils.random(-5, 5), // Slight rotation for a floating effect
      duration: 2, // Duration of the animation
      repeat: -1, // Infinite looping
      yoyo: true, // Reverse direction at the end
      ease: "sine.inOut", // Smooth easing for realistic motion
    });
  }, []);


  return (
    <section className={`${style["beyond-content-wrapper"]}`}>
             <span>
          <img  ref={rocketRef} className={`${style["Do"]}`} src={Image} alt="" />
        </span>
      <div className={`${style["tools-content"]}`}>
        <h2
          className={`${style["skills-content-heading"]} skills-content-heading`}
        >
          Beyond
          <span className={`${style["sub-text"]} sub-text`}> Code</span>
        </h2>
        <p className={`${style["skills-desc-text"]} skills-desc-text`}>
        A GLIMPSE INTO MY INTERESTS AND PASSIONS OUTSIDE DEVELOPMENT
        </p>

        <div className={`${style["skills-bullets-points"]}`}>
            <span className={`${style["skills-desc-bullet"]}`}>
              <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]} skills-desc-text`}>
            Love exploring new technologies and experimenting with side projects.
            </p>
          </div>

          <div className={`${style["skills-bullets-points"]}`}>
            <span className={`${style["skills-desc-bullet"]}`}>
              <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]} skills-desc-text`}>
            Fascinated by finance, trading, and mutual funds, constantly learning to better understand markets and investments.
            </p>
          </div>

          <div className={`${style["skills-bullets-points"]}`}>
            <span className={`${style["skills-desc-bullet"]}`}>
              <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]} skills-desc-text`}>
            Enjoy sketching and drawing, a creative outlet that helps me stay focused and inspired.
            </p>
          </div>

          <div className={`${style["skills-bullets-points"]}`}>
            <span className={`${style["skills-desc-bullet"]}`}>
              <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]} skills-desc-text`}>
            Curious about new tools and methodologies, always seeking ways to enhance both personal and professional growth.
            </p>
          </div>

          <div className={`${style["skills-bullets-points"]}`}>
            <span className={`${style["skills-desc-bullet"]}`}>
              <img src={Bolt} alt="" />
            </span>
            <p className={`${style["skills-desc-text"]} skills-desc-text`}>
            I strive to keep my brain engaged every moment, fueling it with new knowledge and challenges. I love learning continuously throughout the day, making each moment productive and meaningful.
            </p>
          </div>
      </div>
    </section>
  );
}

export default BeyondCode;
