"use client";
import { useState } from "react";
import FallingText from "../../../Reactbits/FallingText/FallingText";

function OurExpertise() {
  const [isHoveredForAnimation, setIsHoveredForAnimation] = useState(false);
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
        Our blend of creativity and technical finesse ensures solutions that
        elevate brands and captivate audiences, leaving an imprint on the design
        landscape
      </p>

      <div
        className={`falling-text-container-highlight  ${
          isHoveredForAnimation ? "hovered" : ""
        }`}
      >
        <FallingText
          text={`Branding & Content , Software Development , Brand Marketing , Web Design & Development, Graphics Design, UI/UX Design`}
          highlightWords={[
            "Branding & Content",
            "Brand Marketing",
            "Graphics Design",
          ]}
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.8rem"
          setIsHoveredForAnimation={setIsHoveredForAnimation}
          mouseConstraintStiffness={0.9}
        />
      </div>
    </div>
  );
}

export default OurExpertise;
