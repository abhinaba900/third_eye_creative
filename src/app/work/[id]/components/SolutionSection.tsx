"use client";
import React from "react";
import MagicBentoCopy from "../../../../../Rectbits/MagicBento/MagicBentoCopy";

export default function SolutionSection({ data }) {
  console.log("SolutionSection Data:", data);

  return (
    <div className="bg-black text-white px-[0.75rem] mb-[9.036rem] max-w-7xl mx-auto margin-buttom-for-mobile">
      {/* Header */}
      <div className="text-center mb-[3rem] sm:mb-[6.25rem]">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-[1rem] sm:mt-[1.5rem] text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description">
          {data.description}
        </p>
      </div>

      <MagicBentoCopy
        cardDatas={data}
        textAutoHide={false}
        enableStars={false}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      
    </div>
  );
}
