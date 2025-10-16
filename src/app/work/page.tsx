import React from "react";
import WorkHeroSection from "./components/WorkHeroSection";
import TestimonialShowcase from "./components/TestimonialShowcase";
import LetWorkTogether from "./components/LetWorkTogether";
import ProjectShowcaseGrid from "./components/ProjectShowcaseGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Our Work | Projects by Third Eye Creative Bangalore',
  description: 'See how we merge strategy, design & technology to build standout apps, brands & media for clients across industries.',
};


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
