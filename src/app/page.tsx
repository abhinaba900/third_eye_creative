"use client";
// import { useEffect } from "react";
import BuildWithUsBanner from "./components/BuildWithUsBanner";
import ClientProjects from "./components/ClientProjects";
import HeroSection from "./components/HeroSection";
import InsideCreativeMind from "./components/InsideCreativeMind";
import OurExpertise from "./components/OurExpertise";
import OurPartners from "./components/OurPartners";
import TestimonialShowcase from "./components/TestimonialShowcase";
import TextToRevealSection from "./components/TextToRevealSection";
import WorkflowStages from "./components/WorkflowStages";
// function SplineViewerLoader() {
//   useEffect(() => {
//     // This will ensure the script is only loaded once
//     if (!document.querySelector('script[src*="spline-viewer"]')) {
//       const script = document.createElement("script");
//       script.src =
//         "https://unpkg.com/@splinetool/viewer@1.10.32/build/spline-viewer.js";
//       script.type = "module";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return null; // This component doesn't render anything
// }

export default function Home() {
  return (
    <section>
      <SplineViewerLoader />
      <HeroSection />
      <TextToRevealSection />
      <OurExpertise />
      <WorkflowStages />
      <InsideCreativeMind />
      <ClientProjects />
      <TestimonialShowcase />
      <OurPartners />
      <BuildWithUsBanner />
    </section>
  );
}
