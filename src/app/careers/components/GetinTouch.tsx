"use client";

import Image from "next/image";
import React from "react";

function GetinTouch() {
  return (
    <div className="relative w-full px-4 py-16 sm:py-20 md:py-32 bg-black text-white overflow-visible">
      {/* SVG Background */}
      <svg
        viewBox="0 0 2227 1247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 overflow-visible w-full z-1 h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <g filter="url(#filter0_f_941_2538)">
          <ellipse
            cx="899.881"
            cy="611.873"
            rx="294.5"
            ry="647.5"
            transform="rotate(-90 899.881 611.873)"
            fill="#772BF2"
          />
        </g>
        <g filter="url(#filter1_f_941_2538)">
          <ellipse
            cx="1114.38"
            cy="562.873"
            rx="245.5"
            ry="862"
            transform="rotate(-90 1114.38 562.873)"
            fill="#EC4B7B"
          />
        </g>
        <g filter="url(#filter2_f_941_2538)">
          <ellipse
            cx="904.273"
            cy="623.76"
            rx="300.019"
            ry="615.892"
            transform="rotate(-102.88 904.273 623.76)"
            fill="#FF891D"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_941_2538"
            x="52.3809"
            y="117.373"
            width="1695"
            height="989"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_941_2538"
            />
          </filter>
          <filter
            id="filter1_f_941_2538"
            x="2.38086"
            y="67.373"
            width="2224"
            height="991"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="125"
              result="effect1_foregroundBlur_941_2538"
            />
          </filter>
          <filter
            id="filter2_f_941_2538"
            x="0.111328"
            y="0.593262"
            width="1808.32"
            height="1246.33"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="150"
              result="effect1_foregroundBlur_941_2538"
            />
          </filter>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-2 w-full">
        <h3 className="work-getintouch-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 whitespace-nowrap">
          Get in Touch
        </h3>
        <div className="flex flex-col md:flex-row  items-center gap-6 md:gap-[6.25rem] mb-10">
          <p className="work-getintouch-text text-base sm:text-lg md:text-xl">
            Have a spark we haven’t listed?
          </p>
          <p className="work-getintouch-text text-base sm:text-lg md:text-xl">
            Show us what you can build @ Third Eye
          </p>
        </div>

        <button className="px-8 py-4 md:px-10 md:py-6 mx-auto block rounded-full bg-gradient-to-br from-[#fff6ed] to-[#ffdab9] shadow-[inset_0_0_10px_rgba(255,255,255,0.6)] border border-orange-300 relative text-orange-600 font-semibold text-lg md:text-2xl group hover:scale-105 transition-all duration-300">
          <span className="bg-gradient-to-r from-[#772bf273] via-[#FF891D] to-[#EC4B7B] bg-clip-text text-[#c5553b] work-getintouch-button">
            Let’s Connect
          </span>
          <span className="inline-block ml-2 -mb-2.5 transition-transform group-hover:translate-x-1">
            <Image
              src="/assets/work-getintouch-button-arrow.png"
              alt="arrow"
              className="getintouch-button-arrow"
              width={45}
              height={20}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

export default GetinTouch;
