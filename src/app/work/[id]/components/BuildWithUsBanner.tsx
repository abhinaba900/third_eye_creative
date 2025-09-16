import Image from "next/image";
import React from "react";

function BuildWithUsBanner() {
  return (
    <div className="build-with-us-banner single-page-build-with-us-banner">
      <img
        src="/assets/BuildWithUsBanner-bg-in-single-page.svg"
        alt=""
        className="absolute top-1/2 left-1/2 w-auto h-auto -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none object-contain"
      />
      <div className="relative z-1 flex flex-col items-center justify-center h-full w-full text-center">
        <h3 className="text-white text-4xl font-semibold">
          Ideas don’t build themselves<span>, We do</span>
        </h3>

        <p className="build-with-us-banner-description">
          Share your vision , we’ll bring the strategy, design, and <br /> tech to make
          it real
        </p>

        <button className="view-more-button mt-4 flex items-center gap-2">
          Let&apos;s Build Something{" "}
          <Image
            src="/assets/project-data-button-arrow.png"
            alt="arrow"
            width={24}
            height={24}
            className="view-more-button-arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default BuildWithUsBanner;
