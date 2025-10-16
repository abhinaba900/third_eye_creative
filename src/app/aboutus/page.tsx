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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Third Eye Creative | Creative Tech & Branding Studio in Bangalore',
  description: 'We’re a multidisciplinary team turning bold ideas into brands, apps & stories. Discover the vision behind Third Eye Creative, Bangalore.',
};

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
