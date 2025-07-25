"use client";
import { useState } from "react";
import FallingText from "../../../Reactbits/FallingText/FallingText";

function OurExpertise() {
  const [isHoveredForAnimation, setIsHoveredForAnimation] = useState(false);

  const data = [
    "Branding & Content",
    "Software Development",
    "Brand Marketing",
    "Web Design & Development",
    "Graphics Design",
    "UI/UX Design",
  ];
  return (
    <div className="our-expertise-wrapper max-w-[1232px] overflow-hidden mx-auto">
      <img
        src="/assets/Our-Expertise-background-image.png"
        alt="Our Expertise Background"
        className="background-image-our-expertise"
      />
      <h3 className="text-center text-heading-our-expertise">
        Our <span>Expertise</span>
      </h3>
      <p className="text-center text-paragraph-our-expertise">
        Blending creativity and tech to craft brands that inspire and engage.
      </p>

      <div
        className={`falling-text-container-highlight   desktop-text ${
          isHoveredForAnimation ? "hovered" : ""
        }`}
      >
        <FallingText
          text={`Branding & Content    Software Development    Brand Marketing    Web Design & Development    Graphics Design    UI/UX Design`}
          highlightWords={[
            "Branding & Content",
            "Brand Marketing",
            "Graphics Design",
          ]}
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.3}
          fontSize="1.8rem"
          // setIsHoveredForAnimation={setIsHoveredForAnimation}
          mouseConstraintStiffness={1.2}
        />
      </div>

      <div className="our-expertise-card-container-mobile mobile-expertise">
        {data.map((item, index) => (
          <div
            key={index}
            className="our-expertise-card"
            onMouseEnter={() => setIsHoveredForAnimation(true)}
            onMouseLeave={() => setIsHoveredForAnimation(false)}
          >
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurExpertise;
