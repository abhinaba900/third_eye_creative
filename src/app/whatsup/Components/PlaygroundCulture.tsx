import React from "react";
import ScrollReveal from "../../../../Reactbits/ScrollReveal/ScrollReveal";

function PlaygroundCulture() {
  return (
    <div className="our-approach-wrapper">
      <h3>
        Playground <span className="whatsup-playground-culture-text">Culture</span>
      </h3>
      <div className="our-approach-content-wrapper ">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          At Third Eye, we believe great ideas are born where passion meets
          play. Our team thrives on experiences that go beyond the workspace,
          whether it’s a high-speed karting race, a CS:GO-themed laser tag
          showdown, or evenings of creative exploration. These events bring us
          closer, spark new perspectives, and keep our culture alive
        </ScrollReveal>
      </div>
    </div>
  );
}

export default PlaygroundCulture;
