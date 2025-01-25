import React from "react";
import style from "../contentRight/contentRight.module.scss";

function ContentRight() {
  return (
    <>
      <section className={`${style["content-right-wrapper"]}`}>
        <div className={`${style["home-content-wrapper"]}`}>
          <h2 className={`${style["role-text"]} section-title`}>
            UI
            <span className={`${style["sub-text"]}`}> DEVELOPER</span>
          </h2>
          <div className={`${style["role-desc-text"]}`}>
            Passionate about crafting seamless and responsive user interfaces.
            Specialize in turning concepts into visually engaging and
            user-friendly designs.
          </div>

          <div className={`${style["count-wrapper"]}`}>
            <div className={`${style["count-one-experience"]}`}>
              <p className={`${style["count"]}`}>+2</p>
              <p className={`${style["count-desc"]}`}>YEARS OF </p>
              <p className={`${style["count-desc"]}`}>EXPERIENCE</p>
            </div>

            <div className={`${style["count-one-experience"]}`}>
              <p className={`${style["count"]}`}>+10</p>
              <p className={`${style["count-desc"]}`}>Professional</p>
              <p className={`${style["count-desc"]}`}>Projects</p>
            </div>

            <div className={`${style["count-one-experience"]}`}>
              <p className={`${style["count"]}`}>+8</p>
              <p className={`${style["count-desc"]}`}>SKILLS </p>
              <p className={`${style["count-desc"]}`}>MASTERED</p>
            </div>
          </div>

          <div className={`${style["feature-highlight"]}`} >
            <div className={`${style["highlight-contents"]}`}>
            <div className={`${style["feature"]}`} >
              <h3 className={`${style["feature-title"]}`}>Fast</h3>
              <p className={`${style["feature-decs"]}`}>
                Fast load times and lag free interaction are my top priorities.
              </p>
            </div>

            <div className={`${style["feature"]}`} >
              <h3 className={`${style["feature-title"]}`}>Responsive</h3>
              <p className={`${style["feature-decs"]}`}>Layouts that work seamlessly on any device, big or small.</p>
            </div>

            <div className={`${style["feature"]}`} >
              <h3 className={`${style["feature-title"]}`}>Intuitive</h3>
              <p className={`${style["feature-decs"]}`}>Focusing on creating user friendly, accessible interfaces.</p>
            </div>

            <div className={`${style["feature"]}`} >
              <h3 className={`${style["feature-title"]}`}>Dynamic</h3>
              <p className={`${style["feature-decs"]}`}>
                Websites that aren't static I enjoy making pages come to life.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentRight;
