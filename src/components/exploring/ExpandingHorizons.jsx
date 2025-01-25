import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../exploring/ExpandingHorizons.module.scss";
import Bolt from "../../assets/svg/bolt-solid.svg";
import Image from "../../assets/svg/doodle06.svg";

function ExpandingHorizons() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: () => gsap.utils.random(-30, 30),
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className={`${style["horizons-content-wrapper"]}`}>
      <div>
        <h2
          className={`${style["skills-content-heading"]} skills-content-heading`}
        >
         Fueling  My
          <span className={`${style["sub-text"]} sub-text`}> Curiosity</span>
        </h2>
        <p className={`${style["skills-desc-text"]} skills-desc-text`}>
          CONTINUOUSLY EXPLORING NEW TECHNOLOGIES TO ENHANCE MY SKILLSET
        </p>
      </div>
      <section className={`${style["horizons-contents"]}`}>
        <div className={`${style["tools-content"]}`}>
          <div className={`${style["content-topic-header"]}`}>
            <p className={`${style["content-topic-header"]} ${style["sub-topic"]} sub-topic`}>
              GSAP Scroll Animations
            </p>
            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Experimenting with advanced scroll-based animations to create
                engaging and dynamic web experiences.
              </p>
            </div>

            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Implemented several scroll animations in recent projects to
                improve interactivity.
              </p>
            </div>
          </div>

          <div className={`${style["content-topic-header"]}`}>
            <p className={`${style["content-topic-header"]}  ${style["sub-topic"]} sub-topic`}>
              Strapi (Headless CMS)
            </p>
            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Recently started exploring Strapi to build and manage
                content-driven applications efficiently.
              </p>
            </div>

            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Learning how to integrate Strapi with front-end frameworks to
                create robust, scalable solutions.
              </p>
            </div>
          </div>

          <div className={`${style["content-topic-header"]}`}>
            <p className={`${style["content-topic-header"]}  ${style["sub-topic"]} sub-topic`}>
              Eagerness to Learn New Stacks
            </p>
            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Passionate about expanding my expertise in emerging technologies
                and tools.
              </p>
            </div>

            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Excited to explore backend development to complement my UI/UX
                skills.
              </p>
            </div>
          </div>

          <div className={`${style["content-topic-header"]}`}>
            <p className={`${style["content-topic-header"]}  ${style["sub-topic"]} sub-topic`}>
              Quick Learner
            </p>
            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Ready to adapt to client-specific requirements and learn new
                tools or frameworks as needed.
              </p>
            </div>

            <div className={`${style["skills-bullets-points"]}`}>
              <span className={`${style["skills-desc-bullet"]}`}>
                <img src={Bolt} alt="" />
              </span>
              <p className={`${style["skills-desc-text"]} skills-desc-text`}>
                Believe in staying updated with the latest trends to deliver
                innovative solutions.
              </p>
            </div>
          </div>
        </div>
        <span>
          <img ref={imageRef} className={`${style["Do"]}`} src={Image} alt="" />
        </span>
      </section>
    </section>
  );
}

export default ExpandingHorizons;
