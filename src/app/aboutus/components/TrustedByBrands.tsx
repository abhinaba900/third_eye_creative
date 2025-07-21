"use client";
import HorizontalScroller from "@/app/components/HorizontalScroller";
import React from "react";
type itemData = {
  image: string;
};
const branddata = [
  {
    image: "/assets/Big Bite.svg",
  },

  {
    image: "/assets/Livguard.svg",
  },
  {
    image: "/assets/Prokennex.svg",
  },
  {
    image: "/assets/Microtek.svg",
  },
  {
    image: "/assets/Mesha.svg",
  },
  {
    image: "/assets/Step GHA (1).svg",
  },
  {
    image: "/assets/Step GHA.svg",
  },
  {
    image: "/assets/naren electrix.svg",
  },
  {
    image: "/assets/Banna.svg",
  },
  {
    image: "/assets/KSAPCC logo.svg",
  },
  {
    image: "/assets/Empri logo.svg",
  },
];

// this  is function 

function TrustedByBrands() {
  return (
    <div className="trusted-by-brands-wrapper">
      <div className="heading-content-holders">
        <h3>
          Brands that <br />
          <span>Trust</span> Us
        </h3>
        <p>
          We&apos;re not just designing, we&apos;re crafting experiences that
          amplify your brand to the next level. Let&apos;s make some magic
          together!
        </p>
      </div>

      <div className="horizontal-scroller-container-testimonial-showcase relative">
        <HorizontalScroller
          data={[branddata, branddata, branddata]} // Pass the branddata array directly
          renderCard={(item: itemData, index) => (
            <div
              key={index}
              className={`text-left min-w-[180px] h-full horizontal-scroller-card backdrop-blur-md flex flex-col justify-start gap-4 `}
              style={{ margin: "0 8px", background: "transparent" }}
            >
              <img src={item.image} className="w-[160px]" alt="brand" />
            </div>
          )}
        />
      </div>
    </div>
  );
}
export default TrustedByBrands;
