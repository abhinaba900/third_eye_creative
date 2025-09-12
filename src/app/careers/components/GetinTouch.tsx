"use client";

import Image from "next/image";
import React from "react";
import GlassSurface from "../../../../Rectbits/GlassSurface/GlassSurface";

function GetinTouch() {
  return (
    <div className="relative w-full px-4 py-20 sm:py-20 md:py-90 2xl:py-130 bg-black text-white overflow-visible overflow-x-hidden get-in-touch-wrapper-careers-page">
      {/* SVG Background */}
      {/* <svg
        viewBox="0 0 2227 1247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 overflow-visible w-full z-1 h-full object-contain get-in-touch-svg-background-careers-page"
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
      </svg> */}

      {/* Content */}
      <div className="relative max-w-[1100px] mx-auto text-center z-2 w-full">
        <h3 className="work-getintouch-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-0 whitespace-nowrap">
          Get in Touch
        </h3>
        <div className="flex flex-col md:flex-row  items-center gap-1 md:gap-[6.25rem] mb-[2.75rem] get-in-touch-text-wrapper-careers-page">
          <p className="work-getintouch-text text-base sm:text-lg md:text-xl">
            Have a spark we haven’t listed?
          </p>
          <p className="work-getintouch-text text-base sm:text-lg md:text-xl">
            Show us what you can build @ Third Eye
          </p>
        </div>

        <GlassSurface
          width={"fit-content"}
          height={"fit-content"}
          borderRadius={114.71}
          distortionScale={0}
          className="mx-auto p-0 md:p-4 cursor-pointer group transition-transform duration-400 ease-in-out hover:scale-105 "
          style={{}}
        >
          <button className="flex items-center cursor-pointer lets-connect-button-in-careers-page px-8 py-4 md:px-[50px] md:py-[32px] mx-auto  rounded-[114.71px] bg-gradient-to-br from-[#fff6ed]/80 to-[#ffdab9]/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.6)] border border-orange-300 relative text-orange-600 font-semibold text-lg md:text-2xl ">
            <span
              className="bg-gradient-to-r from-[#FF891D] to-[#EC4B7B] bg-clip-text text-transparent work-getintouch-button"
              style={{
                textShadow: "0px 4.59px 9.18px rgba(250, 95, 2, 0.2)",
              }}
            >
              Let’s Connect
            </span>

            <span className="inline-block ml-2 -mb-2.5 transition-transform duration-400 ease-in-out group-hover:translate-x-1 group-hover:rotate-[-30deg]">
              <Image
                src="/assets/work-getintouch-button-arrow.png"
                alt="arrow"
                className="getintouch-button-arrow"
                width={45}
                height={20}
              />
            </span>
          </button>
        </GlassSurface>
      </div>
    </div>
  );
}

export default GetinTouch;
