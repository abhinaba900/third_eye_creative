import React from "react";
import ScrollReveal from "../../../../Reactbits/ScrollReveal/ScrollReveal";

function OurVision() {
  return (
    <div className="our-approach-wrapper" style={{ paddingTop: "0px",paddingBottom:"0px" }}>
      <h3>
        Our <span>Vision</span>
      </h3>
      <div className="our-approach-content-wrapper">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          To shape a world where bold ideas, thoughtful design, and smart
          technology come together, inspiring brands, empowering people, and
          redefining what creative collaboration can achieve.
        </ScrollReveal>
      </div>
    </div>
  );
}

export default OurVision;
