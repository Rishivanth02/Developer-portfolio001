import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../contentLeft/contentLeft.module.scss";
import DevImage from "../../assets/png/image01.png";
import MailIcon from "../../assets/svg/mail.svg";
import LinkedIn from "../../assets/svg/linkedin.svg";
import Doodle01 from "../../assets/svg/doodle05.svg";
import Doodle02 from "../../assets/svg/doodle02.svg";
import Doodle03 from "../../assets/svg/doodle04.svg";

function ContentLeft() {
  const doodleOneRef = useRef(null);
  const doodleTwoRef = useRef(null);
  const doodleThreeRef = useRef(null);

  useEffect(() => {
    // Floating animation for doodle-one
    gsap.to(doodleOneRef.current, {
      y: () => gsap.utils.random(-20, 20),
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating animation for doodle-two
    gsap.to(doodleTwoRef.current, {
      x: () => gsap.utils.random(-15, 15),
      y: () => gsap.utils.random(-15, 15),
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating animation for doodle-three
    gsap.to(doodleThreeRef.current, {
      y: () => gsap.utils.random(-25, 25),
      x: () => gsap.utils.random(-10, 10),
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <>
      <section className={`${style["name-card-wrapper"]}`}>
        <div className={`${style["name-card"]}`}>
          <span className={`${style["card-image"]}`}>
            <img src={DevImage} alt="developer-image" />
          </span>

          <h2 className={`${style["card-dev-name"]}`}>RISHIVANTH</h2>
          {/* Doodles */}
          <span ref={doodleOneRef} className={`${style["doodle-one"]}`}>
            <img src={Doodle01} alt="" />
          </span>
          <span ref={doodleTwoRef} className={`${style["doodle-two"]}`}>
            <img src={Doodle02} alt="" />
          </span>
          <span ref={doodleThreeRef} className={`${style["doodle-three"]}`}>
            <img src={Doodle03} alt="" />
          </span>
          <div className={`${style["card-decs-wrapper"]}`}>
            <h5 className={`${style["card-decs"]}`}>
              A UI Developer crafting seamless and responsive user interfaces to
              enhance user experiences
            </h5>
          </div>

          <div className={`${style["media-icons-wrapper"]}`}>
            <a
              href="https://www.linkedin.com/in/rishivanth-r-221088230/"
              target="_blank"
            >
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="mailto:iamrishivanth.r@gmail.com">
              <img src={MailIcon} alt="mail" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentLeft;
