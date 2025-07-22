"use client";
import React from "react";
import HorizontalScroller from "./HorizontalScroller";

type partner = {
  name: string;
  logo: string;
};

function OurPartners() {
  const partners: partner[] = [
    {
      name: "Shell",
      logo: "/assets/Shell.svg",
    },
    {
      name: "Sathya Sai",
      logo: "/assets/Sathya sai.svg",
    },
    {
      name: "Indian Railways",
      logo: "/assets/Indian Railways.svg",
    },
    {
      name: "NDP",
      logo: "/assets/NDP.svg",
    },
    {
      name: "Livguard",
      logo: "/assets/Livguard.svg",
    },
    {
      name: "Prokennex",
      logo: "/assets/Prokennex.svg",
    },
    {
      name: "Microtek",
      logo: "/assets/Microtek.svg",
    },
    {
      name: "Mesha",
      logo: "/assets/Mesha.svg",
    },
    {
      name: "xplorion ai",
      logo: "/assets/xplorion ai.svg",
    },
    {
      name: "Step GHA",
      logo: "/assets/Step GHA.svg",
    },
    {
      name: "Naren Electric",
      logo: "/assets/naren electrix.svg",
    },
    {
      name: "Banna",
      logo: "/assets/Banna.svg",
    },
    
    {
      name: "KSAPCC",
      logo: "/assets/KSAPCC logo.svg",
    },
    {
      name: "Empri",
      logo: "/assets/Empri logo.svg",
    },
    
  ];
  return (
    <div className="our-partners-section">
      <div className="">
        <HorizontalScroller
          data={[partners]}
          isHoverable={false}
          renderCard={(partner: partner, index) => (
            <div
              key={index}
              className={`w-[200px]  flex flex-col justify-center items-center gap-4`}
              style={{ margin: "0 8px" }} // 8px horizontal margin (equivalent to mx-2)
            >
              <div key={index} className="flex items-center">
                <img src={partner.logo} className="w-[160px]" alt={partner.name} />
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default OurPartners;
