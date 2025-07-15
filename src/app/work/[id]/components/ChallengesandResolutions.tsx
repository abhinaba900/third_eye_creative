import Image from "next/image";
import React from "react";

function ChallengesandResolutions({ data }) {
  console.log("ChallengesandResolutions Data:", data);
  return (
    <div>
      <div className="bg-black text-white px-6 mb-[8.813rem] max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title single-work-page-challenges-and-resolutions-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description mb-[5rem]">
          {data.description}
        </p>

        <div className="space-y-[1rem]">
          {/* Section: What we were up against */}
          <div className="flex bg-[#1b1725] rounded-2xl p-6 items-start relative">
            {/* Left Image Line */}
            <div className="relative w-10 h-full mr-4 ">
              <svg
                width="40"
                height="296"
                viewBox="0 0 40 296"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#7950FF" />
                <path
                  d="M26 20.5C26 20.5 21.5811 26.5 20 26.5C18.4188 26.5 14 20.5 14 20.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 13.5001C26 13.5001 21.5811 19.5 20 19.5C18.4188 19.5 14 13.5 14 13.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g filter="url(#filter0_f_668_3400)">
                  <line
                    x1="21.2"
                    y1="29.8726"
                    x2="21.2"
                    y2="287.234"
                    stroke="#7950FF"
                    strokeWidth="2.4"
                  />
                </g>
                <g filter="url(#filter1_i_668_3400)">
                  <line
                    x1="21.2"
                    y1="39.7241"
                    x2="21.2"
                    y2="288"
                    stroke="url(#paint0_linear_668_3400)"
                    strokeWidth="2.4"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_668_3400"
                    x="12"
                    y="21.8726"
                    width="18.4004"
                    height="273.362"
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
                      stdDeviation="4"
                      result="effect1_foregroundBlur_668_3400"
                    />
                  </filter>
                  <filter
                    id="filter1_i_668_3400"
                    x="20"
                    y="39.7241"
                    width="2.40039"
                    height="252.276"
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
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_668_3400"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_668_3400"
                    x1="21.5077"
                    y1="39.7241"
                    x2="21.0518"
                    y2="261.145"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.151484" stopColor="#7950FF" />
                    <stop offset="1" stopColor="#6C55FF" stopOpacity="0" />
                    <stop offset="1" stopColor="#7164FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {/* Content */}
            <div className="flex-1 ">
              <h2 className="text-white text-xl font-bold mb-4 single-work-page-bullet-point-title">
                {data.challenges.title}
              </h2>
              <ul className="flex flex-col gap-[2rem] text-white">
                {data.challenges.points.map((point, index) => (
                  <li key={index} className="flex items-start max-w-[472px] single-work-page-bullet-point-description">
                    <span className="text-yellow-400 mr-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M1.45898 14.0007C1.45898 20.9273 7.07408 26.5423 14.0007 26.5423C20.9273 26.5423 26.5423 20.9273 26.5423 14.0007C26.5423 7.07408 20.9273 1.45898 14.0007 1.45898C7.07408 1.45898 1.45898 7.07408 1.45898 14.0007Z"
                          fill="#7950FF"
                        />
                        <path
                          d="M19.6898 9.35711C19.9989 9.92242 19.7913 10.6313 19.226 10.9405C17.626 11.8154 16.1236 13.6471 14.9763 15.4037C14.4171 16.2601 13.9684 17.0575 13.6598 17.6405C13.5058 17.9313 13.3875 18.1674 13.3086 18.3289L13.1939 18.5686C13.0136 18.9625 12.6298 19.2246 12.1972 19.2485C11.7645 19.2723 11.3541 19.0543 11.1317 18.6824C10.7692 18.0763 10.1931 17.5231 9.65931 17.1011C9.39993 16.896 9.16645 16.7343 8.99984 16.6252L8.7545 16.4718C8.1951 16.1524 8.00031 15.4401 8.31945 14.8806C8.63867 14.3208 9.35117 14.1259 9.91087 14.4451L10.2784 14.6734C10.491 14.8126 10.7825 15.0146 11.1065 15.2707C11.354 15.4665 11.6308 15.7018 11.9103 15.9729C12.2099 15.4346 12.5844 14.7992 13.0227 14.1279C14.2089 12.3117 15.973 10.06 18.1065 8.89329C18.6717 8.58412 19.3806 8.79179 19.6898 9.35711Z"
                          fill="#7950FF"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Icon */}
            <div className="ml-auto -mt-5 -mr-5">
              <Image
                src={data.challenges.image}
                alt="Icon"
                width={335}
                height={300}
              />
            </div>
          </div>

          {/* Section: How we engineered the fix */}
          <div className="flex bg-[#1b1725] rounded-2xl p-6 items-start relative">
            {/* Left Image Line */}
            <div className="relative w-10 h-full mr-4">
              <svg
                width="40"
                height="380"
                viewBox="0 0 40 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#098709" />
                <path
                  d="M13 22.5C13 22.5 14.5 22.5 16.5 26C16.5 26 22.0588 16.8333 27 15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g filter="url(#filter0_f_672_3485)">
                  <line
                    x1="21.2"
                    y1="38.585"
                    x2="21.2"
                    y2="371.01"
                    stroke="#098709"
                    strokeWidth="2.4"
                  />
                </g>
                <g filter="url(#filter1_i_672_3485)">
                  <line
                    x1="21.2"
                    y1="40"
                    x2="21.2"
                    y2="372"
                    stroke="url(#paint0_linear_672_3485)"
                    strokeWidth="2.4"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_672_3485"
                    x="12"
                    y="30.585"
                    width="18.4004"
                    height="348.426"
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
                      stdDeviation="4"
                      result="effect1_foregroundBlur_672_3485"
                    />
                  </filter>
                  <filter
                    id="filter1_i_672_3485"
                    x="20"
                    y="40"
                    width="2.40039"
                    height="336"
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
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_672_3485"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_672_3485"
                    x1="21.5077"
                    y1="40"
                    x2="20.6924"
                    y2="336.088"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.151484" stopColor="#098709" />
                    <stop offset="1" stopColor="#6C55FF" stopOpacity="0" />
                    <stop offset="1" stopColor="#66FF66" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1  ">
              <h2 className="text-white text-xl font-bold mb-4 single-work-page-bullet-point-title">
                {data.solutions.title}
              </h2>
              <ul className="flex flex-col gap-[2rem] text-white">
                {data.solutions.points.map((point, index) => (
                  <li key={index} className="flex items-start max-w-[472px]">
                    <span className="text-yellow-400 mr-2 single-work-page-bullet-point-description">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M1.45898 14.0007C1.45898 20.9273 7.07408 26.5423 14.0007 26.5423C20.9273 26.5423 26.5423 20.9273 26.5423 14.0007C26.5423 7.07408 20.9273 1.45898 14.0007 1.45898C7.07408 1.45898 1.45898 7.07408 1.45898 14.0007Z"
                          fill="#098709"
                        />
                        <path
                          d="M19.6898 9.35711C19.9989 9.92242 19.7913 10.6313 19.226 10.9405C17.626 11.8154 16.1236 13.6471 14.9763 15.4037C14.4171 16.2601 13.9684 17.0575 13.6598 17.6405C13.5058 17.9313 13.3875 18.1674 13.3086 18.3289L13.1939 18.5686C13.0136 18.9625 12.6298 19.2246 12.1972 19.2485C11.7645 19.2723 11.3541 19.0543 11.1317 18.6824C10.7692 18.0763 10.1931 17.5231 9.65931 17.1011C9.39993 16.896 9.16645 16.7343 8.99984 16.6252L8.7545 16.4718C8.1951 16.1524 8.00031 15.4401 8.31945 14.8806C8.63867 14.3208 9.35117 14.1259 9.91087 14.4451L10.2784 14.6734C10.491 14.8126 10.7825 15.0146 11.1065 15.2707C11.354 15.4665 11.6308 15.7018 11.9103 15.9729C12.2099 15.4346 12.5844 14.7992 13.0227 14.1279C14.2089 12.3117 15.973 10.06 18.1065 8.89329C18.6717 8.58412 19.3806 8.79179 19.6898 9.35711Z"
                          fill="#098709"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Icon */}
            <div className="ml-auto -mb-6 -mr-5">
              <Image
                src={data.solutions.image}
                alt="Icon"
                width={335}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengesandResolutions;
