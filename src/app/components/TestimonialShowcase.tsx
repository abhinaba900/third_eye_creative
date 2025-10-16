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
    name: "Rejini Simpson",
    title: "CEE",
    company: "Centre for Environmental Excellence",
    image: "https://dummyimage.com/200x200/4a86e8/ffffff&text=CEE",
    message:
      "Partnering with Third Eye Creative has transformed how we manage our environmental programs at CEE. Their intuitive solutions streamlined data tracking, improved reporting accuracy, and empowered our team with smarter tools to execute initiatives more efficiently in the field.",
  },
  {
    name: "Shailesh Pandey",
    title: "Cadaster",
    company: "",
    image: "https://dummyimage.com/200x200/e67c73/ffffff&text=Cadaster",
    message:
      "Partnering with Third Eye Creative transformed how we approach our digital marketing and branding initiatives. Their innovative strategies elevated our online presence, enhanced audience engagement, and provided us with clear, actionable insights that made every campaign more effective. Working with their team has equipped us with smarter tools and creative solutions to consistently stand out in the market.",
  },
  {
    name: "Dr. Pandu Dasappa",
    title: "DMIO",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=DMIO",
    message:
      "Partnering with Third Eye enhanced our cancer hospital’s digital presence and branding. Their team helped us showcase our services clearly, engage patients effectively, and communicate our care with impact.",
  },
  {
    name: "Afreen Naushad",
    title: "Shell",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Shell",
    message:
      "Partnering with Third Eye helped us revolutionize how we manage cash and digital payments across shell's retail network. Their secure, real-time platforms streamlined operations, enhanced tracking, and gave our teams full control, making our nationwide processes more efficient and reliable.",
  },
  {
    name: "Amogh Vishwanath",
    title: "Banna Sprays",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Banna",
    message:
      "From redefining our graffiti can design to managing our buzzing social presence, Third Eye Creative has been our creative force. They’ve helped us run impactful contests, brand collabs, and an e-commerce site that keeps our community inspired.",
  },
  {
    name: "Nagadri Sharma",
    title: "Zero & One",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Zero+%26+One",
    message:
      "Partnering with Third Eye Creative brought our clientele's brands to life with clarity and precision. From branding to UI-UX and development, they crafted a seamless digital experience that reflects our vision and elevates our credibility online. ",
  },
  {
    name: "Naren Nagaraj",
    title: "Naren Electrix",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Naren+Electrix",
    message:
      "With Third Eye Creative, we transformed how farmers use our products. They designed an app that lets farmers control equipment remotely via SMS, plus a user-friendly website that connects us directly with our customers.",
  },
  {
    name: "Sharanya Vasu",
    title: "Nature Knots",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Nava",
    message:
      "Partnering with Third Eye, helped us translate the soul of Nature Knots into a compelling digital experience. Their branding, design, and development brought our venue’s story to life online, capturing both its luxury and serenity with elegance.",
  },
  {
    name: "Monish",
    title: "STEP GHA",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=STEP",
    message:
      "Third Eye Creative turned our vision for modern NEET PG prep into reality. Their bite-sized, gamified app keeps students engaged with quizzes, rankings, and smooth cross-platform access—raising the bar for exam prep.",
  },
  {
    name: "Dr. Mahesh MNl",
    title: "Sathya Sai Hospital",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Sathya",
    message:
      "Third Eye Creative has been instrumental in building our brand identity from the ground up. From our logo to digital outreach, patient education videos, doctor podcasts, and even staff outfits—they’ve made us stand out with heart and purpose.",
  },
  {
    name: "Nagendra",
    title: "Unique Vaccum Solutions",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Unique",
    message:
      "Partnering with Third Eye, helped us communicate our complex vacuum engineering solutions with precision and professionalism. Their branding and website simplified technical details into clear value propositions, making it easier for clients to understand us and initiate business conversations.",
  },
  {
    name: "Renita Mateuis",
    title: "EMPRI",
    company: "Karnataka Government",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=EMPRI",
    message:
      "Third Eye Creative built us an intuitive platform that bridges the gap between departments and government oversight. The scheme submission, scoring, and approval system has streamlined our workflow and improved how we evaluate environmental initiatives.",
  },
  {
    name: "Hemanth",
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
                className={`w-[380px] text-left min-w-[380px] h-full horizontal-scroller-card mx-2  text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${
                  hoveredCard === item.name ? "" : ""
                }`}
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
