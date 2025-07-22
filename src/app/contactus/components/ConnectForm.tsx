"use client";

import { useState } from "react";
import Hyperspeed from "../../../../Reactbits/Hyperspeed/Hyperspeed";
import Aurora from "./Aurora";

export default function ConnectForm() {
  const [activeTab, setActiveTab] = useState("start");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(" ");

  return (
    <div className="bg-black text-white  pb-12 contectus-connect-form">
      <div className="relative text-center h-40 md:h-48 lg:h-56">
        <Aurora
          colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
          blend={0.1}
          amplitude={1.0}
          speed={1}
        />
        <h3 className="absolute mt-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 contact-title-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          LETS CONNECT
        </h3>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl  mx-auto w-full md:min-h-[600px] lg:h-[800px] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#181818] p-4 sm:p-6 md:p-8 lg:p-[3rem] mt-8 sm:-mt-16 md:-mt-20 lg:mt-[1rem] opacity-95 rounded-2xl shadow-xl overflow-hidden">
        <div
          className="p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-scroll  flex flex-col h-full justify-between rounded-[20px] border border-[#3F3F3F]"
          style={{ scrollbarWidth: "none" }}
        >
          <div>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold contact-us-form-title">
                Connect with Us
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
              <button
                className={classNames(
                  "px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full border transition-all contact-change-tab-button",
                  activeTab === "work"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveTab("work")}
              >
                Work with us
              </button>
              <button
                className={classNames(
                  "px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full border transition-all contact-change-tab-button",
                  activeTab === "start"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveTab("start")}
              >
                Start a project with us
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-[1.75rem]">
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs sm:text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818] px-1 contact-us-form-label">
                  First Name
                </label>
                <input
                  className="bg-transparent border border-white/20 p-2 sm:p-3 rounded placeholder-white/50 text-sm sm:text-base"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs sm:text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818] px-1 contact-us-form-label">
                  Last Name
                </label>
                <input
                  className="bg-transparent border border-white/20 p-2 sm:p-3 rounded placeholder-white/50 text-sm sm:text-base contact-us-form-inputs"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-[1.75rem]">
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs sm:text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818] px-1 contact-us-form-label">
                  Email
                </label>
                <input
                  className="bg-transparent border border-white/20 p-2 sm:p-3 rounded placeholder-white/50 text-sm sm:text-base contact-us-form-inputs"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label className="text-xs sm:text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818] px-1 contact-us-form-label">
                  Phone
                </label>
                <input
                  className="bg-transparent border border-white/20 p-2 sm:p-3 rounded placeholder-white/50 text-sm sm:text-base contact-us-form-inputs"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4 sm:mb-[1.75rem] relative">
              <label className="text-xs sm:text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818] px-1 contact-us-form-label">
                {activeTab === "start"
                  ? "Tell us a little about your project"
                  : "Your message"}
              </label>
              <textarea
                maxLength={500} // or whatever you need
                className="w-full h-24 resize-none bg-transparent border border-white/20 p-2 sm:p-3 rounded placeholder-white/50 text-sm sm:text-base contact-us-form-inputs"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <p className="mb-2 text-xs sm:text-sm text-purple-400 contact-us-form-text-info-title">
              {activeTab === "start"
                ? "Services Required"
                : "Or write to us at"}
            </p>
            {activeTab === "start" ? (
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {["Website Development", "App Development", "Web Design"].map(
                  (service) => (
                    <button
                      key={service}
                      className={classNames(
                        "px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full border contact-us-form-service-button",
                        services.includes(service)
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : "border-white/30 text-white hover:bg-white/10"
                      )}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </button>
                  )
                )}
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <div className="text-xs sm:text-sm text-purple-400">
                  <a
                    href="mailto:hi@thirdeyegfx.in"
                    className="text-white underline text-base sm:text-lg font-medium contact-us-form-email-link"
                  >
                    hi@thirdeyegfx.in
                  </a>
                </div>

                <a
                  href="mailto:hi@thirdeyegfx.in"
                  className="contact-us-form-email-button inline-flex items-center gap-1 sm:gap-2 border border-white/30 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full hover:bg-white/10 transition-all text-xs sm:text-sm"
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.3681 6.66406L9.02809 8.00862C8.48469 8.55394 7.52856 8.56569 6.9734 8.00862L5.63331 6.66406L0.820312 11.4927C0.999469 11.5755 1.197 11.625 1.407 11.625H14.5945C14.8045 11.625 15.002 11.5756 15.1811 11.4927L10.3681 6.66406Z"
                      fill="url(#paint0_linear_901_3369)"
                    />
                    <path
                      d="M14.5944 0.375H1.40694C1.19694 0.375 0.999406 0.424438 0.820312 0.507281L5.96334 5.66737C5.96369 5.66772 5.96409 5.66778 5.96444 5.66812C5.96478 5.66847 5.96484 5.66894 5.96484 5.66894L7.63712 7.34675C7.81475 7.52437 8.18669 7.52437 8.36431 7.34675L10.0362 5.66922C10.0362 5.66922 10.0367 5.66847 10.037 5.66812C10.037 5.66812 10.0377 5.66772 10.0381 5.66737L15.181 0.50725C15.0019 0.424375 14.8044 0.375 14.5944 0.375Z"
                      fill="url(#paint1_linear_901_3369)"
                    />
                    <path
                      d="M0.149562 1.16284C0.056875 1.35028 0 1.55834 0 1.78122V10.2187C0 10.4416 0.0568125 10.6497 0.149531 10.8371L4.97087 6.00012L0.149562 1.16284Z"
                      fill="url(#paint2_linear_901_3369)"
                    />
                    <path
                      d="M15.8486 1.16217L11.0273 5.99951L15.8486 10.8365C15.9413 10.6491 15.9982 10.441 15.9982 10.2181V1.78061C15.9982 1.55767 15.9413 1.34961 15.8486 1.16217Z"
                      fill="url(#paint3_linear_901_3369)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_901_3369"
                        x1="4.97115"
                        y1="5.62227"
                        x2="17.05"
                        y2="8.35039"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9C9C9C" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_901_3369"
                        x1="4.97113"
                        y1="-1.11704"
                        x2="17.358"
                        y2="0.836381"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9C9C9C" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_901_3369"
                        x1="1.43678"
                        y1="-0.868751"
                        x2="5.82403"
                        y2="-0.692866"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9C9C9C" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_901_3369"
                        x1="12.4641"
                        y1="-0.869449"
                        x2="16.8513"
                        y2="-0.693569"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#9C9C9C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  Send us an email
                </a>
              </div>
            )}
          </div>

          <button className="contact-us-form-submit-button w-full py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-500 border border-white/30 rounded-full hover:opacity-90 transition-all text-sm sm:text-base mt-4 sm:mt-0">
            Lets Build Something →
          </button>
        </div>

        {/* Visual Section - Hidden on mobile */}
        <div className="relative hidden md:flex flex-col h-full rounded-[20px] bg-black/80 rounded-r-2xl overflow-hidden border border-[#3F3F3F]">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x181818,
                islandColor: 0x181818, // <-- set under track background to #181818
                background: 0x181818,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
