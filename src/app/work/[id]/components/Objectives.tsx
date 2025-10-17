import React from "react";
import MagicBento from "../../../../../Rectbits/MagicBento/MagicBento";

function Objectives({ data }) {
  return (
    <div className="max-w-[1232px] mx-auto p-3 md:p-0 mb-[9.036rem] relative project-objectives-container-section margin-buttom-for-mobile">
      {/* Header */}
      <div className="text-center mb-[3rem] sm:mb-[6.25rem]">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-work-page-objectives-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-[1rem] sm:mt-[1.5rem] text-gray-300 text-sm md:text-base max-w-xl mx-auto single-work-page-objectives-description">
          {data.description}
        </p>
      </div>

      <MagicBento
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

export default Objectives;
