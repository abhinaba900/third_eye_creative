import React from "react";
import AboutUsHeroSection from "./components/AboutUsHeroSection";
import ServiceTags from "./components/ServiceTags";
import OurApproach from "./components/OurApproach";
import ImpactStats from "./components/ImpactStats";
import ServiceHighlights from "./components/ServiceHighlights";
import CreativeTeamIntro from "./components/CreativeTeamIntro";
import TrustedByBrands from "./components/TrustedByBrands";
import ServicesOverview from "./components/ServicesOverview";
import BuildWithUsBanner from "../components/BuildWithUsBanner";

function page() {
  return (
    <div className="">
      <AboutUsHeroSection />
      <ServiceTags />
      <OurApproach />
      <ImpactStats />
      <ServiceHighlights />
      <CreativeTeamIntro />
      <TrustedByBrands />
      <ServicesOverview />
      <BuildWithUsBanner />
    </div>
  );
}

export default page;
