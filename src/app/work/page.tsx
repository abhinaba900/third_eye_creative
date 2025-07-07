import React from "react";
import WorkHeroSection from "./components/WorkHeroSection";
import TestimonialShowcase from "./components/TestimonialShowcase";
import LetWorkTogether from "./components/LetWorkTogether";
import ProjectShowcaseGrid from "./components/ProjectShowcaseGrid";

function page() {
  return (
    <div>
      <WorkHeroSection />
      <ProjectShowcaseGrid />
      <TestimonialShowcase />
      <LetWorkTogether />
    </div>
  );
}

export default page;
