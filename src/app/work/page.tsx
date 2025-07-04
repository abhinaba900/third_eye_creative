import React from "react";
import WorkHeroSection from "./components/WorkHeroSection";
import TestimonialShowcase from "./components/TestimonialShowcase";
import LetWorkTogether from "./components/LetWorkTogether";

function page() {
  return (
    <div>
      <WorkHeroSection />
      <TestimonialShowcase />
      <LetWorkTogether />
    </div>
  );
}

export default page;
