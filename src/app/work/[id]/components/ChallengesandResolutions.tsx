import Image from "next/image";
import React from "react";

function ChallengesandResolutions({ data }) {
  return (
    <div>
      <div className="bg-black text-white px-3 mb-[9.036rem] max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title single-work-page-challenges-and-resolutions-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-[1.5rem] text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description mb-[6.25rem]">
          {data.description}
        </p>

        <div className="space-y-[1rem]">
          {/* Section: What we were up against */}
          <div className="flex bg-[#1b1725]  border border-[rgba(255,255,255,0.1)] rounded-2xl p-[3rem] items-stretch justify-between relative indevisual-page-challenges-and-resolutions-container indevisual-page-challenges-and-resolutions-container-1">
            {/* FIX: Simplified the wrapper.
              - The parent's `items-stretch` class is what makes this div full height.
              - We keep `items-stretch` on this div to make its own children (the SVG wrapper and the text) the same height.
            */}
            <div className="flex items-start h-fit">
              {/* Left Image Line */}
              <div className="relative w-10 mr-4 hidden lg:block">
                {/* FIX:
                  - Set height to "100%" to fill the parent.
                  - Added preserveAspectRatio="none" to allow vertical stretching.
                  - Simplified the line to a single <line> element for clarity and reliable stretching.
                */}
                <svg
                  width="40"
                  height="100%"
                  viewBox="0 0 40 296"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMin meet"
                  className="w-full h-full object-cover"
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
                  <line
                    x1="20"
                    y1="40"
                    x2="20"
                    y2="296"
                    stroke="#7950FF"
                    strokeWidth="2.4"
                  />
                </svg>
              </div>
              {/* Content */}
              <div className="h-fit">
                <h2 className="text-white text-xl font-bold mb-[2rem] single-work-page-bullet-point-title">
                  {data.challenges.title}
                </h2>
                <ul className="flex flex-col gap-[2rem] text-white">
                  {data.challenges.points.map((point, index) => (
                    <li key={index} className="flex items-start max-w-[472px]">
                      <span className="text-yellow-400 mr-2 single-work-page-bullet-point-description">
                        {/* Bullet point SVG */}
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
                      <span style={{ opacity: "0.8" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right Icon */}
            <div className="relative -right-12 -top-12 left-auto">
              <Image
                src={data.challenges.image}
                alt="Icon"
                width={335}
                height={300}
              />
            </div>
          </div>

          {/* Section: How we engineered the fix */}
          <div className="flex bg-[#1b1725] border border-[rgba(255,255,255,0.1)] rounded-2xl p-[3rem] items-stretch justify-between relative indevisual-page-challenges-and-resolutions-container">
            {/* FIX: Applied the same simplification here */}
            <div className="flex items-stretch">
              {/* Left Image Line */}
              <div className="relative w-10 mr-4 hidden lg:block">
                {/* FIX: Same SVG corrections as above */}
                <svg
                  width="40"
                  height="100%"
                  viewBox="0 0 40 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <circle cx="20" cy="20" r="20" fill="#098709" />
                  <path
                    d="M13 22.5C13 22.5 14.5 22.5 16.5 26C16.5 26 22.0588 16.8333 27 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="20"
                    y1="40"
                    x2="20"
                    y2="380"
                    stroke="#098709"
                    strokeWidth="2.4"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="">
                <h2 className="text-white text-xl font-bold mb-[2rem] single-work-page-bullet-point-title">
                  {data.solutions.title}
                </h2>
                <ul className="flex flex-col gap-[2rem] text-white">
                  {data.solutions.points.map((point, index) => (
                    <li key={index} className="flex items-start max-w-[472px]">
                      <span className="text-yellow-400 mr-2 single-work-page-bullet-point-description">
                        {/* Bullet point SVG */}
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
                      <span style={{ opacity: "0.8" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Icon */}
            <div className="relative -right-12 -bottom-12 left-auto">
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
