"use client";

import React from "react";
import GlassSurface from "../../../../Rectbits/GlassSurface/GlassSurface";
import { useRouter } from "next/navigation";

function GetinTouch() {
  const router = useRouter();
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
          <button onClick={() => router.push("/contactus")} className="flex items-center cursor-pointer lets-connect-button-in-careers-page px-8 py-4 md:px-[50px] md:py-[32px] mx-auto  rounded-[114.71px] bg-gradient-to-br from-[#fff6ed]/80 to-[#ffdab9]/80 shadow-[inset_0_0_10px_rgba(255,255,255,0.6)] border border-orange-300 relative text-orange-600 font-semibold text-lg md:text-2xl ">
            <span
              className="bg-gradient-to-r from-[#FF891D] to-[#EC4B7B] bg-clip-text text-transparent work-getintouch-button"
              style={{
                textShadow: "0px 4.59px 9.18px rgba(250, 95, 2, 0.2)",
              }}
            >
              Let’s Connect
            </span>

            <svg
              width="47"
              height="43"
              viewBox="0 0 47 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="getintouch-button-arrow  inline-block ml-2 w-fit h-fit transition-transform duration-400 ease-in-out group-hover:translate-x-1 group-hover:rotate-[-30deg]"
            >
              <g filter="url(#filter0_d_1653_1929)">
                <path
                  d="M11.5666 18.4323C11.6793 18.4505 11.7933 18.459 11.9073 18.4575L31.3288 18.4575L30.9053 18.6545C30.4914 18.8504 30.1148 19.117 29.7924 19.4424L24.3462 24.8886C23.6289 25.5733 23.5084 26.6748 24.0606 27.4985C24.7032 28.3762 25.9357 28.5668 26.8135 27.9241C26.8844 27.8721 26.9518 27.8155 27.0151 27.7546L36.8637 17.906C37.6334 17.1372 37.6341 15.89 36.8652 15.1204C36.8648 15.1199 36.8642 15.1193 36.8637 15.1188L27.0151 5.27025C26.2448 4.50212 24.9977 4.50384 24.2295 5.27413C24.1691 5.33476 24.1126 5.39926 24.0606 5.46722C23.5084 6.29087 23.6289 7.39237 24.3462 8.07709L29.7826 13.5332C30.0716 13.8225 30.4038 14.0651 30.7674 14.2522L31.3584 14.5181L12.0157 14.5181C11.0095 14.4807 10.1267 15.1836 9.93769 16.1726C9.76356 17.2464 10.4928 18.2581 11.5666 18.4323Z"
                  fill="url(#paint0_linear_1653_1929)"
                />
                <path
                  d="M26.7461 27.8311C25.9209 28.4352 24.7634 28.2573 24.1572 27.4346L24.1563 27.4346C23.6351 26.6573 23.7489 25.6179 24.4258 24.9717L29.874 19.5234C30.1869 19.2077 30.5524 18.949 30.9541 18.7588L31.377 18.5615L31.3291 18.3428L11.9063 18.3428C11.7988 18.3442 11.691 18.3365 11.585 18.3193C10.5748 18.1555 9.8888 17.2044 10.0508 16.1943C10.2292 15.2609 11.0621 14.5975 12.0117 14.6328L31.3584 14.6328L31.4053 14.4131L30.8184 14.1494C30.4663 13.9681 30.1443 13.7333 29.8643 13.4531L29.8643 13.4521L24.4277 7.99609L24.4258 7.99414C23.7489 7.34794 23.6361 6.30856 24.1572 5.53125C24.2048 5.46966 24.2556 5.41061 24.3105 5.35547C25.034 4.63004 26.2091 4.62817 26.9346 5.35156L26.9336 5.35156L36.7822 15.2002L36.7842 15.2012C37.5082 15.926 37.5071 17.1012 36.7822 17.8252L26.9355 27.6719C26.8761 27.729 26.8136 27.7832 26.7471 27.832L26.7461 27.8311Z"
                  stroke="#F8F8F8"
                  strokeWidth="0.229412"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1653_1929"
                  x="0.733685"
                  y="0.107077"
                  width="45.8842"
                  height="41.9623"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4.58824" />
                  <feGaussianBlur stdDeviation="4.58824" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.980392 0 0 0 0 0.372549 0 0 0 0 0.00784314 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1653_1929"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1653_1929"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1653_1929"
                  x1="23.6767"
                  y1="28.3047"
                  x2="23.6767"
                  y2="4.69528"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF891D" />
                  <stop offset="1" stopColor="#EC4B7B" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </GlassSurface>
      </div>
    </div>
  );
}

export default GetinTouch;
