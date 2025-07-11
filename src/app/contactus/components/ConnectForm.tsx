"use client";

import { useState } from "react";
import Hyperspeed from "../../../../Reactbits/Hyperspeed/Hyperspeed";

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
    <div className="flex items-center justify-center bg-black text-white px-4 py-12 contectus-connect-form">
      <div className="max-w-6xl w-full md:h-[800px] grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#181818] p-[3rem] opacity-95 rounded-2xl shadow-xl overflow-hidden">
        {/* Form Section */}
        <div className="p-4 md:p-10 flex flex-col h-full justify-between rounded-[20px] border-1 border-[#3F3F3F]">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Connect with Us</h2>
            </div>

            <div className="flex gap-4 mb-6">
              <button
                className={classNames(
                  "px-4 py-2 rounded-full border transition-all",
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
                  "px-4 py-2 rounded-full border transition-all",
                  activeTab === "start"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-white hover:bg-white/10"
                )}
                onClick={() => setActiveTab("start")}
              >
                Start a project with us
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-[1.75rem]">
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818]">
                  First Name
                </label>
                <input
                  className="bg-transparent border border-white/20 p-3 rounded placeholder-white/50"
                  placeholder="First name"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818]">
                  Last Name
                </label>
                <input
                  className="bg-transparent border border-white/20 p-3 rounded placeholder-white/50"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-[1.75rem]">
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818]">
                  Email
                </label>
                <input
                  className="bg-transparent border border-white/20 p-3 rounded placeholder-white/50"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label className="text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818]">
                  Phone
                </label>
                <input
                  className="bg-transparent border border-white/20 p-3 rounded placeholder-white/50"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-[1.75rem] relative">
              <label className="text-sm font-medium text-purple-400 absolute left-0 -top-2.5 bg-[#181818]">
                Tell us a little about your project
              </label>
              <textarea
                className="w-full h-24 bg-transparent border border-white/20 p-3 rounded placeholder-white/50"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <p className="mb-2 text-sm text-purple-400">
              {activeTab === "start"
                ? "Services Required"
                : "Or write to us at"}
            </p>
            {activeTab === "start" ? (
              <div className="flex flex-wrap gap-3 mb-6">
                {["Website Development", "App Development", "Web Design"].map(
                  (service) => (
                    <button
                      key={service}
                      className={classNames(
                        "px-4 py-2 rounded-full border text-sm",
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
              <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Text */}
                <div className="text-sm text-purple-400">
                  <a
                    href="mailto:hi@thirdeyegfx.in"
                    className="text-white underline text-lg font-medium"
                  >
                    hi@thirdeyegfx.in
                  </a>
                </div>

                {/* Right Button */}
                <a
                  href="mailto:hi@thirdeyegfx.in"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2 rounded-full hover:bg-white/10 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12H8m0 0l4-4m-4 4l4 4"
                    />
                  </svg>
                  Send us an email
                </a>
              </div>
            )}
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 border border-white/30 rounded-full hover:opacity-90 transition-all">
            Lets Build Something →
          </button>
        </div>

        {/* Visual Section */}
        <div className="relative hidden md:flex flex-col h-full rounded-[20px] bg-black/80 rounded-r-2xl  overflow-hidden border-1 border-[#3F3F3F]">
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
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x3f3f3f,
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
