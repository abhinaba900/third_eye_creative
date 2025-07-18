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
      logo: "/assets/shell.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/Sathya sai.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/indian ralways.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/NDP.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/livguard.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/prokennex.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/microtek.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/mesha.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/xplorion ai.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/step gha.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/Naren_electrix.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/banna.png",
    },
    
    {
      name: "Partner 1",
      logo: "/assets/ksapcc.png",
    },
    {
      name: "Partner 1",
      logo: "/assets/empri.png",
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
