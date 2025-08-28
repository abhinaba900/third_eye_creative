"use client";
import { useState } from "react";
import FallingText from "../../../Reactbits/FallingText/FallingText";

function OurExpertise() {
  const [isHoveredForAnimation] = useState(false);

  return (
    <div className="our-expertise-wrapper max-w-[1232px] overflow-hidden mx-auto">
      <h3 className="text-center text-heading-our-expertise">
        Our <span>Expertise</span>
      </h3>
      <p className="text-center text-paragraph-our-expertise">
        Blending creativity and tech to craft brands that inspire and engage
      </p>

      <div
        className={`falling-text-container-highlight    ${
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
    </div>
  );
}

export default OurExpertise;
