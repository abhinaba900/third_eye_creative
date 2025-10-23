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
        Blending creativity and tech to craft brands
      </p>

      <div
        className={`falling-text-container-highlight    ${
          isHoveredForAnimation ? "hovered" : ""
        }`}
      >
        <FallingText
          text={`Software that scales.    Apps that click.    Marketing that moves.    Media that matters.`}
          highlightWords={["Apps that click.", "Media that matters."]}
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
