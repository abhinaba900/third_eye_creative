"use client";

import { useState } from "react";
import Image from "next/image";
import HorizontalScroller from "@/app/components/HorizontalScroller";
import SpotlightCard from "../../../../Reactbits/SpotlightCard/SpotlightCard";
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
      "Partnering with Third Eye Creative transformed our environmental programs at CEE. Their intuitive solutions streamlined data tracking, improved reporting, and gave our team smarter tools for efficient field execution.",
  },
  {
    name: "Shailesh Pandey",
    title: "Cadaster",
    company: "",
    image: "https://dummyimage.com/200x200/e67c73/ffffff&text=Cadaster",
    message:
      "Partnering with Third Eye Creative transformed our digital presence. Their innovative strategies boosted engagement, delivered clear insights, and equipped us with smart, creative tools to stand out in the market.",
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
      "Partnering with Third Eye revolutionized cash and digital payment management across Shell’s retail network. Their secure, real-time platforms streamlined operations, enhanced tracking, and gave our teams full control nationwide.",
  },
  {
    name: "Amogh Vishwanath",
    title: "Banna Sprays",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Banna",
    message:
      "From redesigning our graffiti cans to managing our vibrant social presence, Third Eye Creative has been our creative force—driving contests, brand collaborations, and an inspiring e-commerce experience for our community.",
  },
  {
    name: "Nagadri Sharma",
    title: "Zero & One",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Zero+%26+One",
    message:
      "Partnering with Third Eye Creative brought our clients’ brands to life with clarity. From branding to UI/UX and development, they crafted a seamless digital experience that reflects our vision and elevates our credibility.",
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
      "Partnering with Third Eye helped us translate Nature Knots’ soul into a rich digital experience. Their branding and design brought our venue’s story to life, capturing both luxury and serenity with elegance.",
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
      "Third Eye Creative helped us build our brand from the ground up. From our logo to digital outreach, patient education videos, podcasts, and staff uniforms—they made our brand stand out with heart and purpose.",
  },
  {
    name: "Nagendra",
    title: "Unique Vaccum Solutions",
    company: "",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Unique",
    message:
      "Partnering with Third Eye helped us present complex vacuum engineering solutions with clarity. Their branding and website turned technical details into clear value, making it easier for clients to understand and connect with us.",
  },
  {
    name: "Renita Mateuis",
    title: "EMPRI",
    company: "Karnataka Government",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=EMPRI",
    message:
      "Third Eye Creative built an intuitive platform that connects departments and government oversight. Their submission, scoring, and approval system streamlined our workflow and improved evaluation of environmental initiatives.",
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
          Voices that <span>Matter</span>
        </h3>
        <p className="absolute-paragraph-testimonial-showcase max-w-[476px]">
          When great work speaks, people listen
        </p>

        {/* horizontal sliders */}
        <div className="horizontal-scroller-container-testimonial-showcase relative">
          <HorizontalScroller
            data={[testimonialsGroup1, testimonialsGroup1]}
            renderCard={(item: Testimonial, index) => (
              <SpotlightCard
                className={`w-[380px] text-left min-w-[380px] min-h-[250px] max-h-[250px] h-full horizontal-scroller-card mx-2 bg-white/5 text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${
                  hoveredCard === item.name ? "" : ""
                }`}
                // className={`w-[360px] text-left min-w-[360px] h-full horizontal-scroller-card mx-2 bg-white/5 text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${
                //   hoveredCard === item.name ? "hovered-card-in-scroller" : ""
                // }`}
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
