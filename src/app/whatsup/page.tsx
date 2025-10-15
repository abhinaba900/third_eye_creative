import React from "react";
import WhatsupHeroSection from "./Components/WhatsupHeroSection";
import PlaygroundCulture from "./Components/PlaygroundCulture";
import GamingSection from "./Components/GamingSection";
import MoreAdventuresAWAIT from "./Components/MoreAdventuresAWAIT";

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
