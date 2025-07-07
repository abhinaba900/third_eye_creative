"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const services = [
  "Custom Software Development",
  "UI-UX Design",
  "Branding",
  "Brand Marketing",
  "Web Design",
  "Brand Marketing",
  "UI-UX Design",
  "Branding",
  "Custom Software Development",
  "Web Design",
];
function LetWorkTogether() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };
  return (
    <div className="our-expertise-wrapper max-w-[1232px]  overflow-hidden mx-auto let-work-together-wrapper">
      <img
        src="/assets/Our-Expertise-background-image.png"
        alt="Our Expertise Background"
        className="background-image-our-expertise"
      />
      <h3 className="text-center text-heading-our-expertise">
        Let’s Work <span>Together</span>
      </h3>
      <p className="text-center text-paragraph-our-expertise let-work-together-paragraph">
        Tell us a bit about your vision — we’ll bring <br /> the strategy,
        design, and code to life
      </p>

      <div className="button-container-our-expertise-form falling-text-container-highlight ">
        <form action="">
          <div className="grid grid-cols-2 gap-4 mb-[2.5rem]">
            <div className="relative">
              <label className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214] z-10">
                NAME
              </label>
              <input
                type="text"
                defaultValue="Rohan Canara"
                className="w-full px-4 py-3 text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60 "
              />
            </div>
            <div className="relative">
              <label className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214] z-10">
                EMAIL ID
              </label>
              <input
                type="text"
                defaultValue="Rohan Canara"
                className="w-full px-4 py-3 text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60 "
              />
            </div>
          </div>
          <div className="relative mb-[2.5rem]">
            <label className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214] z-10">
              ABOUT YOUR PROJECT
            </label>
            <textarea
              defaultValue="Rohan Canara"
              rows={5}
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60 "
            />
          </div>

          <p className="work-together-service-text">SERVICE(S) REQUIRED</p>
          <div className="flex flex-wrap gap-3 p-4 mb-[5rem]">
            {services.map((service, index) => (
              <button
                key={service + index}
                type="button"
                onClick={() => toggleSelect(service)}
                className={clsx(
                  "px-6 py-2 rounded-full text-white font-medium text-sm transition duration-300 let-work-together-button",
                  selected.includes(service)
                    ? "bg-gradient-to-r from-purple-600 to-pink-500"
                    : "border border-purple-500 bg-transparent hover:bg-purple-900/20"
                )}
              >
                {service}
              </button>
            ))}
          </div>
          <button
            className="view-more-button w-full lets-build-something-button "
            type="submit"
          >
            Lets Build Something{" "}
            <Image
              src="/assets/project-data-button-arrow.png"
              alt="arrow"
              width={32}
              height={27.44}
              className="view-more-button-arrow"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default LetWorkTogether;
