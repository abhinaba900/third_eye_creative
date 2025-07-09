import Image from "next/image";
import React from "react";
import Aurora from "../../../../Reactbits/Aurora/Aurora";

function WorkHeroSection() {
  return (
    <div className="relative about-us-hero-section">
      {/* <Image
        src="/assets/Glass effect for hero section.svg"
        alt="Logo"
        width={"100"}
        height={"100"}
        className="mx-auto my-4 background-image-hero-section-about-us"
      /> */}
      <div className="about-us-hero-section-wrapper ">
        <h3 className="about-us-hero-section-title " style={{fontSize: "19vw"}}>OUR WORK</h3>
        <div className="relative">
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
          />
          <div className="relative about-us-hero-section-content-wrapper">
            <h4>
              Pixels with Purpose, Code with Character, Results that <span>Resonate</span>
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
  );
}

export default WorkHeroSection;
