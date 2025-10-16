import React from "react";
import WhatsupHeroSection from "./Components/WhatsupHeroSection";
import PlaygroundCulture from "./Components/PlaygroundCulture";
import GamingSection from "./Components/GamingSection";
import MoreAdventuresAWAIT from "./Components/MoreAdventuresAWAIT";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'What’s Happening | Latest from Third Eye Creative Bangalore',
  description: 'Explore updates, insights & creative experiments from the team at Third Eye Creative — where tech meets design in Bangalore.',
};

function page() {
  return (
    <div>
      <WhatsupHeroSection />
      <PlaygroundCulture />
      <GamingSection />
      <MoreAdventuresAWAIT />
    </div>
  );
}

export default page;
