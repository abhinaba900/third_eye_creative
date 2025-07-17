"use client";

import { useState } from "react";
import Image from "next/image";
import HorizontalScroller from "./HorizontalScroller";
import SpotlightCard from "../../../Reactbits/SpotlightCard/SpotlightCard";
interface Testimonial {
  name: string;
  title: string;
  company?: string;
  message: string;
  image: string; // image path or URL
}

export const testimonialsGroup1: Testimonial[] = [
  {
    name: "Amogh V",
    title: "KSAPCC",
    company: "Karnataka Government",
    image: "https://dummyimage.com/200x200/4a86e8/ffffff&text=KSAPCC",
    message:
      "KSAPCC needed a unified monitoring system — and Third Eye delivered. The dashboards and reports are clear, reliable, and user-friendly. Their team felt like an extension of ours — proactive, responsive, and committed. We’re proud of what we’ve achieved together.",
  },
  {
    name: "Sandeep V",
    title: "Microtek",
    company: "",
    image: "https://dummyimage.com/200x200/e67c73/ffffff&text=Microtek",
    message:
      "With Third Eye Creative, we launched a field tool that replaced our outdated manual diagnostics with real-time, centralized insights. Their tech made it simple for our teams to service units faster and maintain higher uptime for our customers.",
  },
  {
    name: "Raj N",
    title: "EMPRI",
    company: "Karnataka Government",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=EMPRI",
    message:
      "Third Eye Creative built us an intuitive platform that bridges the gap between departments and government oversight. The scheme submission, scoring, and approval system has streamlined our workflow and improved how we evaluate environmental initiatives.",
  },
  {
    name: "Raj N",
    title: "Livguard",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Livguard",
    message:
      "Partnering with Third Eye Creative helped us modernize how we handle UPS maintenance in the field. Their intuitive app streamlined fault detection, improved reporting, and equipped our technicians with smarter tools on every service call.",
  },
  {
    name: "Raj N",
    title: "Banna",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Banna",
    message:
      "From redefining our graffiti can design to managing our buzzing social presence, Third Eye Creative has been our creative force. They’ve helped us run impactful contests, brand collabs, and an e-commerce site that keeps our community inspired.",
  },
  {
    name: "Big Bite",
    title: "Big Bite",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Big+Bite",
    message:
      "From branding to packaging to drool-worthy food photography, Third Eye Creative shaped Big Bite’s identity. Their team crafted every visual and design detail to make our food look irresistible, online and off.",
  },
  {
    name: "Naren Electrix",
    title: "Naren Electrix",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Naren+Electrix",
    message:
      "With Third Eye Creative, we transformed how farmers use our products. They designed an app that lets farmers control equipment remotely via SMS, plus a user-friendly website that connects us directly with our customers.",
  },
  {
    name: "Nava Karnataka",
    title: "Nava Karnataka",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Nava",
    message:
      "Third Eye Creative empowered us with an app that connects our constituency like never before. Citizens can submit grievances, access schemes, and stay informed, while our government teams handle issues efficiently—bridging people and governance digitally.",
  },
  {
    name: "STEP GHA",
    title: "STEP GHA",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=STEP",
    message:
      "Third Eye Creative turned our vision for modern NEET PG prep into reality. Their bite-sized, gamified app keeps students engaged with quizzes, rankings, and smooth cross-platform access—raising the bar for exam prep.",
  },
  {
    name: "Sathya Sai Hospital",
    title: "Sathya Sai Hospital",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Sathya",
    message:
      "Third Eye Creative has been instrumental in building our brand identity from the ground up. From our logo to digital outreach, patient education videos, doctor podcasts, and even staff outfits—they’ve made us stand out with heart and purpose.",
  },
  {
    name: "Xplorion AI",
    title: "Xplorion AI",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Xplorion",
    message:
      "Working with Third Eye Creative gave life to our idea of AI-powered travel. They built an intelligent itinerary app that personalizes every trip with live data and smart suggestions—making travel planning truly effortless.",
  },
  {
    name: "Prokennex",
    title: "Prokennex",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Prokennex",
    message:
      "Bringing Prokennex into the Indian market needed a bold strategy, and Third Eye Creative delivered. Their branding and social media campaigns helped us introduce our products to a whole new audience with style.",
  },
  {
    name: "Mesha",
    title: "Mesha",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Mesha",
    message:
      "Third Eye Creative built us a robust diagnostics app that transformed how our engineers capture, analyze, and report UPS data on-site. The solution gave us the speed and standardization we needed for large-scale operations.",
  },
];

export const testimonialsGroup2: Testimonial[] = [
  {
    name: "Rajesh",
    title: "Product Head",
    company: "Xplorion AI",
    image: "https://dummyimage.com/200x200/f6bf26/ffffff&text=Rajesh",
    message:
      "The mobile app designed by TEC delivered both style and seamless functionality. Every screen felt natural, well thought out, and engaging for our users. Their UI/UX expertise made a major difference in our app’s success. We couldn’t have asked for a better outcome.",
  },
  {
    name: "Naren",
    title: "Tech Head",
    company: "Naren Electric",
    image: "https://dummyimage.com/200x200/9b59b6/ffffff&text=Naren",
    message:
      "From concept to launch, TEC was the perfect creative partner for our startup. Their process was clear, collaborative, and deeply strategic at every stage. The final product felt premium, intuitive, and incredibly polished. We’re proud to have them as part of our journey.",
  },
  {
    name: "Dr. Mahesh B",
    title: "Director",
    company: "Sensa Labs",
    image: "https://dummyimage.com/200x200/34495e/ffffff&text=Mahesh+B",
    message:
      "Third Eye Creative gave our brand a unified, bold identity — strategic, and incredibly refined. Their ability to truly understand vision exceeded every expectation.",
  },
];

export default function TestimonialShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const handleMouseEnter = (index: string) => {
    setHoveredCard(index);
  };

  return (
    <div className="relative">
      <Image
        src="/assets/testimonial-showcase background image.png"
        alt="Testimonial Background"
        width={602}
        height={557}
        className="backround-image-testimonial-showcase"
      />

      <div className="absolute-container-testimonial-showcase">
        <h3 className="absolute-title-testimonial-showcase">
          Voices of <span>Trust</span>
        </h3>
        <p className="absolute-paragraph-testimonial-showcase">
          What our clients say about creating with us
        </p>

        {/* horizontal sliders */}
        <div className="horizontal-scroller-container-testimonial-showcase relative">
          <HorizontalScroller
            data={[testimonialsGroup1, testimonialsGroup1]}
            renderCard={(item: Testimonial, index) => (
              <SpotlightCard
                className={`w-[360px] text-left min-w-[360px] h-full horizontal-scroller-card mx-2 bg-[#000000] text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${
                  hoveredCard === item.name ? "" : ""
                }`}
                // className={`w-[360px] text-left min-w-[360px] h-full horizontal-scroller-card mx-2 bg-white/5 text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${
                //   hoveredCard === item.name ? "hovered-card-in-scroller" : ""
                // }`}
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div
                  key={index}
                  style={{ margin: "0 8px" }} // 8px horizontal margin (equivalent to mx-2)
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm testimonial-name">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-xs testimonial-title">
                        {item.title}
                        {item.company && `, ${item.company}`}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mt-4 line-clamp-6 testimonial-message">
                    {item.message}
                  </p>
                </div>
              </SpotlightCard>
            )}
          />
        </div>
      </div>
    </div>
  );
}
