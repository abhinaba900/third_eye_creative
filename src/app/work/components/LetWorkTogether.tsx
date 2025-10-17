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
];

function LetWorkTogether() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="max-w-[1232px] h-auto mx-auto py-12 px-4 let-work-together-wrapper">
      <h3 className="text-center text-heading-our-expertise">
        Let’s Work <span>Together</span>
      </h3>
      <p className="text-center text-paragraph-our-expertise let-work-together-paragraph">
        Tell us a bit about your vision — we’ll bring <br /> the strategy,
        design, and code to life
      </p>

      {/* Form Container */}
      <div className="button-container-our-expertise-form  w-full">
        <form className="w-full max-w-[900px] mx-auto">
          {/* Name + Email */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7 md:gap-4 mb-7 md:mb-[2.5rem]">
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214]/20 backdrop-blur-md z-3 input-label-in-let-work-together"
              >
                NAME
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 input-in-let-work-together text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214]/20 backdrop-blur-md z-2 input-label-in-let-work-together"
              >
                EMAIL ID
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email ID"
                className="w-full px-4 py-3 input-in-let-work-together text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="relative mb-4 md:mb-[2.5rem]">
            <label
              htmlFor="project"
              className="absolute -top-3 left-3 px-1 text-sm font-medium text-[#9A6AFF] bg-[#121214]/20 backdrop-blur-md rounded z-2 input-label-in-let-work-together"
            >
              ABOUT YOUR PROJECT
            </label>
            <textarea
              placeholder="Tell us about your project..."
              name="project"
              rows={5}
              className="w-full px-4 py-3 text-white bg-transparent border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder:text-white/60 input-in-let-work-together"
            />
          </div>

          {/* Services */}
          {/* <p className="work-together-service-text">SERVICE(S) REQUIRED</p>
          <div className="flex flex-wrap gap-3 p-8 px-0 pt-0 md:p-4 sm:pb-6 sm:mb-8 md:mb-[5rem]">
            {services.map((service, index) => (
              <button
                key={service + index}
                type="button"
                onClick={() => toggleSelect(service)}
                className={clsx(
                  "px-6 py-2 rounded-full text-white font-medium text-sm transition cursor-pointer duration-300 let-work-together-button",
                  selected.includes(service)
                    ? "bg-custom-gradient"
                    : "border border-purple-500 bg-transparent hover:bg-purple-900"
                )}
              >
                {service}
              </button>
            ))}
          </div> */}

          {/* Submit Button */}
          <button
            className="view-more-button w-full lets-build-something-button"
            type="submit"
          >
            Lets Build Something{" "}
            <Image
              src="/assets/project-data-button-arrow.png"
              alt="arrow"
              width={32}
              height={27.44}
              className="view-more-button-arrow inline-block ml-2"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default LetWorkTogether;
