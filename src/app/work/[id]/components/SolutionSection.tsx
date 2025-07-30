"use client";
import React from "react";
import MagicBentoCopy from "../../../../../Rectbits/MagicBento/MagicBentoCopy";

export default function SolutionSection({ data }) {
  console.log("SolutionSection Data:", data);

  return (
    <div className="bg-black text-white px-6 mb-[8.813rem] max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description">
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
