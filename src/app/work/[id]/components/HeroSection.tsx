import Image from "next/image";
import React from "react";
import Aurora from "../../../../../Reactbits/Aurora/Aurora";

function HeroSection({ data }) {

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center hero-section-in-single-work  overflow-hidden text-white">
      {/* Tags */}
      <div className="flex space-x-3 mb-4 z-1">
        {data.tags?.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 text-sm rounded-full border border-[#9f5eff] bg-[#1a1a1a] text-[#e3d1ff] work-single-page-tag"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold z-10 px-4 max-w-[1157px] work-single-page-hero-title">
        {data.title}
      </h1>

      {/* Phone Mockup */}
      <div className="relative -mt-30 z-1">
        <Image
          src={data.footerimage}
          alt="Mobile Showcase"
          width={1920}
          height={600}
          className="w-full h-full object-fit-cover"
        />
      </div>

      {/* Gradient Glow */}
      <div className="absolute bottom-0 w-full  bg-gradient-to-t from-[#7f00ff40] to-transparent z-0">
        <Aurora
          colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
          blend={0.1}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Vertical Guide Line (optional) */}
    </div>
  );
}

export default HeroSection;
