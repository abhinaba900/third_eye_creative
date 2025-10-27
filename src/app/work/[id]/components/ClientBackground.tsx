import Image from "next/image";
import React from "react";

function ClientBackground({ data }) {
  return (
    <div
      className="flex indevisual-page-client-background-container sm:w-[90%] max-w-[1232px] relative mb-[9.063rem]  mx-auto flex-col lg:flex-row  items-center  bg-gradient-to-br from-[#DCF9FF] via-[#621DBA] to-[#04001C] rounded-[1.5rem] client-background-main-container gap-5  text-white"
      style={{
        paddingLeft: data.type === "1" ? "0" : "",
        paddingTop: data.type === "1" ? "" : "0",
        paddingBottom: data.type === "1" ? "" : "0",
        overflow: data.type === "1" ? "" : "hidden",
      }}
    >
      {/* Left Section - App Screenshot */}
      <div
        className={`relative w-full h-full lg:w-[55%] aspect-video ${
          data.type === "3" ? "none" : ""
        }`}
        style={{
          display: data?.type === "3" ? "none" : "block",
        }}
      >
        {/* Glow/Blur Background */}
        <div className="absolute inset-0 rounded-2xl border border-[rgba(154,106,255,0.1)] bg-gradient-to-br from-white/40 via-[#A772E3] to-[#621DBA] blur-2xl opacity-50 z-0" />

        {/* Screenshot Image with rounded corners and slight shadow */}
        {data.type === "1" && (
          <div
            className="relative w-full h-100 max-h-[529px] z-1  left-[-50px] indevisual-page-client-background-image-container  shadow-xl"
            style={{ boxShadow: "-50px 50px 150px 20px #000000CC" }}
          >
            <Image
              src={data.leftImage}
              alt="Dashboard"
              fill
              className="object-cointain rounded-[0.5rem] overflow-hidden"
            />
          </div>
        )}

        {data.type === "2" && (
          <div className="relative flex justify-center gap-20 ">
            {/* First image aligned to the top */}
            <div className="relative w-[30%] h-[500px] sm:h-auto md:top-0 md:bottom-0 lg:-top-[8rem] flex items-start  double-image-second-container-2">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage}
                  alt="Dashboard 1"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden"
                />
              </div>
            </div>

            {/* Second image aligned to the bottom */}
            <div className="relative w-[30%] h-[500px] sm:-top-[8rem] md:top-0 md:bottom-0 lg:top-[4rem] flex items-end double-image-second-container">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage2}
                  alt="Dashboard 2"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden"
                />
              </div>
            </div>
          </div>
        )}
        {data.type === "4" && (
          <div className="relative flex justify-center gap-20 ">
            {/* First image aligned to the top */}
            <div className="relative w-[30%] h-[500px] sm:h-auto md:top-0 md:bottom-0 lg:-top-[7rem] flex items-start  double-image-second-container-2">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage}
                  alt="Dashboard 1"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden"
                />
              </div>
            </div>

            {/* Second image aligned to the bottom */}
            <div className="relative w-[30%] h-[500px] sm:-top-[8rem] md:top-0 md:bottom-0 lg:top-[2rem] flex items-end double-image-second-container">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage2}
                  alt="Dashboard 2"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden"
                />
              </div>
            </div>
          </div>
        )}
        {data.type === "5" && (
          <div className="relative flex justify-center gap-20 ">
            {/* First image aligned to the top */}
            <div className="relative w-[30%] h-[400px] sm:h-auto md:top-0 md:bottom-0 lg:-top-[10rem] flex items-start  double-image-second-container-2">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage}
                  alt="Dashboard 1"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden h-[400px]"
                />
              </div>
            </div>

            {/* Second image aligned to the bottom */}
            <div className="relative w-[30%] h-[500px] sm:-top-[8rem] md:top-0 md:bottom-0 lg:top-[4rem] flex items-end double-image-second-container">
              <div className="relative w-full h-full">
                <Image
                  src={data.leftImage2}
                  alt="Dashboard 2"
                  fill
                  className="object-contain rounded-[0.5rem] overflow-hidden"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {data.type === "3" && (
        <Image
          src={"/assets/client-background-overlay.png"} // Replace with your actual icon path
          alt="Energy Icon"
          width={949}
          height={849}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
      )}
      {/* Right Section - Project Info */}
      <div
        className={`flex flex-col gap-6 w-full lg:w-[40%] ${
          data.type === "1" ? "p-5 lg:py-[5rem]" : "p-8 lg:py-16 "
        }  ${data.type === "3" ? "lg:w-[70%] mx-auto" : ""}`}
      >
        <div>
          <Image
            src={data.rightContent.topIcon} // Replace with your actual icon path
            alt="Energy Icon"
            width={64}
            height={64}
          />
        </div>
        <h2 className="text-2xl lg:text-3xl font-semibold single-work-page-client-title">
          {data.rightContent.title}
        </h2>
        <p className="text-sm lg:text-base text-white/80 single-work-page-client-description">
          {data.rightContent.description}
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-white/70">
          {data.rightContent.footerContent.map((item, index) => (
            <div key={index}>
              <p className="font-semibold text-white single-work-page-client-footer-title">
                {item.title}
              </p>
              <p className="single-work-page-client-footer-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientBackground;
