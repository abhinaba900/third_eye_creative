// import Image from "next/image";
import React from "react";
import Aurora from "../../../../Reactbits/Aurora/Aurora";

function WorkHeroSection() {
  return (
    <div className="relative h-full about-us-hero-section about-us-page-hero work-hero-section">
      <div className="about-us-hero-section-wrapper h-full overflow-hidden">
        <h1
          className="about-us-hero-section-title"
          style={{ fontSize: "18vw" }}
        >
          OUR WORK
        </h1>
        <div className="relative w-full ">
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
            mobileHeight={300}
          />
          <div className="about-us-hero-section-content-wrapper-inner">
            <div className=" about-us-hero-section-content-wrapper">
              <h4>
                Pixels with Purpose, Code with Character,<br /> Results that{" "}
                <span>Resonate</span>
              </h4>
              <div className="about-us-hero-section-footer-wrapper">
                <p>PIXEL PERFECT</p>
                <p>CASE FULL OF WOW</p>
                <p>WORK @ THIRD EYE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHeroSection;
