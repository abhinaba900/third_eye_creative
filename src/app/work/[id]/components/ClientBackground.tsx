import Image from "next/image";
import React from "react";

function ClientBackground({ data }) {
  return (
    <div
      className="flex max-w-[1232px] mb-[9.063rem]  mx-auto flex-col lg:flex-row  items-center justify-between bg-gradient-to-br from-[#DCF9FF] via-[#621DBA] to-[#04001C] rounded-[1.5rem] p-8 lg:p-16 gap-10 lg:gap-20 text-white"
      style={{ paddingLeft: "0" }}
    >
      {/* Left Section - App Screenshot */}
      <div className="relative w-full h-full lg:w-[55%] aspect-video">
        {/* Glow/Blur Background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 via-[#A772E3] to-[#621DBA] blur-2xl opacity-50 z-0" />

        {/* Screenshot Image with rounded corners and slight shadow */}
        <div className="relative w-full h-100 max-h-[529px] z-1 -left-0 lg:-left-20   rounded-[1rem] shadow-xl">
          <Image
            src={data.leftImage}
            alt="Dashboard"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Section - Project Info */}
      <div className="flex flex-col gap-6 w-full lg:w-[40%]">
        <div>
          <Image
            src={data.rightContent.topIcon} // Replace with your actual icon path
            alt="Energy Icon"
            width={64}
            height={64}
          />
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold">
          {data.rightContent.title}
        </h2>
        <p className="text-sm lg:text-base text-white/80">
          {data.rightContent.description}
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-white/70">
          {data.rightContent.footerContent.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-white">{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientBackground;
