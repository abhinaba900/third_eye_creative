"use client";

import { useState } from "react";
import Image from "next/image";
import HorizontalScroller from "./HorizontalScroller";
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
    title: "Director",
    company: "Banna Sprays",
    image: "https://dummyimage.com/200x200/4a86e8/ffffff&text=Amogh+V",
    message:
      "Banna Sprays needed a fresh perspective, and TEC delivered with brilliance. From packaging to digital, everything looked and felt on-brand and exciting. Their team worked like an extension of ours — quick, responsive, and deeply creative. We're thrilled with the results.",
  },
  {
    name: "Sandeep V",
    title: "Marketing Lead",
    company: "Wester Terrain Coffee",
    image: "https://dummyimage.com/200x200/e67c73/ffffff&text=Sandeep+V",
    message:
      "We turned to TEC to lead our digital marketing and design overhaul. Their creativity, precision, and clarity in execution were refreshing. Our engagement metrics have grown significantly since launch. They’re more than a team — they’re creative collaborators.",
  },
  {
    name: "Raj N",
    title: "Director",
    company: "Legacy Builders",
    image: "https://dummyimage.com/200x200/5bba6f/ffffff&text=Raj+N",
    message:
      "Third Eye Creative brought new life to our brand’s online presence. Their website design was clean, modern, and aligned perfectly with our audience. The experience felt smooth from kickoff to handover. They truly understand how to blend function with elegance.",
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
            data={[testimonialsGroup1, testimonialsGroup2]}
            renderCard={(item: Testimonial, index) => (
              <div
                key={index}
                className={`w-[360px] text-left min-w-[360px] h-full horizontal-scroller-card bg-white/5 text-white rounded-2xl p-5 shadow-lg border border-white/10 backdrop-blur-md flex flex-col justify-start gap-4 ${hoveredCard === item.name ? "hovered-card-in-scroller" : ""}`}
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
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {item.title}
                      {item.company && `, ${item.company}`}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mt-4 line-clamp-6">
                  {item.message}
                </p>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
