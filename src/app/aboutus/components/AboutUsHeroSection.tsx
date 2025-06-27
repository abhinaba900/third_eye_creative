import React from "react";
import Aurora from "../../../../Reactbits/Aurora/Aurora";

function AboutUsHeroSection() {
  return (
    <div className="about-us-hero-section-wrapper">
      <h3 className="about-us-hero-section-title">THIRD EYE</h3>
      <div className="relative">
        <Aurora
          colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
          blend={0.1}
          amplitude={1.0}
          speed={1}
        />
        <div className="relative about-us-hero-section-content-wrapper">
          <h4 >
            Designing Bold Identities & Intelligent <span>Experiences</span> for Brands Ready
            to Lead & Inspire
          </h4>
          <div className="about-us-hero-section-footer-wrapper">
            <p>©2025</p>
            <p>BASED IN B’LORE</p>
            <p>AGENCY</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHeroSection;
