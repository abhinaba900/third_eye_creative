import Image from "next/image";
import React from "react";

function ProblemStatement({ data }) {
  console.log("ProblemStatement data:", data);

  return (
    <section className="bg-black text-white max-w-[1232px] mx-auto px-4 sm:px-6 lg:px-0 mb-[9.036rem]">
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className="text-3xl sm:text-4xl font-bold leading-snug single-work-page-problem-statement-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-[650px] mx-auto single-work-page-problem-statement-description">
          {data.description}
        </p>
      </div>

      <div className="bg-[#1A1A1A] rounded-[24px] overflow-hidden flex flex-col lg:flex-row border border-[rgba(255,255,255,0.1)] ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 space-y-4 flex flex-col justify-center indevisual-page-problem-statement-icon-container">
          <Image
            src={data.contentSection.icon}
            alt="Problem Icon"
            width={48}
            height={48}
            className="sm:w-[64px] sm:h-[64px] "
          />
          <h3 className="text-xl sm:text-2xl font-semibold max-w-[440px] single-work-page-problem-statement-content-title">
            {data.contentSection.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-[440px] leading-relaxed single-work-page-problem-statement-content-description">
            {data.contentSection.description}
          </p>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 bg-[#191919] flex flex-col indevisual-page-problem-statement-icon-container gap-6 sm:gap-[2.438rem] justify-center px-4 sm:px-6 py-[2.5rem] border-l border-dashed border-gray-700">
          {data.contentSection.rightsideData.map((issue, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center gap-3 relative sm:-left-8 md:left-0 lg:-left-[4.25rem] bg-[#191919]"
            >
              <Image
                src="/assets/problemStatement-right-sede-icon.png"
                alt="Issue Icon"
                width={16}
                height={16}
                className="indevesual-page-problem-statement-icon"
              />
              <div className="single-work-page-problem-statement-content-description-tags flex items-center gap-3 text-sm sm:text-base bg-[#1a1a1a] border border-pink-500 px-4 py-2 rounded-full text-white">
                {issue.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemStatement;
