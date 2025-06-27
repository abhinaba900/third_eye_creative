import React from "react";
import AboutUsHeroSection from "./components/AboutUsHeroSection";
import ServiceTags from "./components/ServiceTags";
import OurApproach from "./components/OurApproach";
import ImpactStats from "./components/ImpactStats";
import ServiceHighlights from "./components/ServiceHighlights";

function page() {
  return (
    <div>
      <AboutUsHeroSection />
      <ServiceTags />
      <OurApproach />
      <ImpactStats />
      <ServiceHighlights />
    </div>
  );
}

export default page;
