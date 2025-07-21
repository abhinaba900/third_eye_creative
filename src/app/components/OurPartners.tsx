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
      name: "Partner 1",
      logo: "/assets/shell.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/Sathya sai.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/Indian Railways.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/NDP.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/livguard.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/prokennex.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/microtek.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/mesha.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/xplorion ai.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/step gha.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/naren electrix.svg",
    },
    {
      name: "Partner 1",
      logo: "/assets/banna.svg",
    },
    
    {
      name: "Partner 1",
      logo: "/assets/KSAPCC logo.svg",
    },
    {
      name: "Partner 1",
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
