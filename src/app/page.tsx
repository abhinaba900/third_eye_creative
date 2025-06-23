import BuildWithUsBanner from "./components/BuildWithUsBanner";
import ClientProjects from "./components/ClientProjects";
import HeroSection from "./components/HeroSection";
import InsideCreativeMind from "./components/InsideCreativeMind";
import OurExpertise from "./components/OurExpertise";
import OurPartners from "./components/OurPartners";
import TestimonialShowcase from "./components/TestimonialShowcase";
import TextToRevealSection from "./components/TextToRevealSection";
import WorkflowStages from "./components/WorkflowStages";

export default function Home() {
  return (
    <section>
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
