"use client";
import HorizontalScroller from "@/app/components/HorizontalScroller";
import React, { useState } from "react";

type Service = {
  name: string;
};

const serviceData: Service[] = [
  { name: "Software that scales." },
  { name: "Apps that click." },
  { name: "Marketing that moves." },
  { name: "Media that matters." },
];

function ServiceTags() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleMouseEnter = (name: string) => {
    setHoveredCard(name);
  };

  return (
    <div className="w-full bg-black py-4">
      <HorizontalScroller
        data={[serviceData]}
        renderCard={(item: Service, index) => (
          <div
            key={index}
            className="rounded-full p-[2px] mx-2 inline-block"
            style={{
              background: `linear-gradient(0deg, #C883FF, #C883FF), 
                           linear-gradient(180deg, #772BF2 0%, rgba(206, 10, 255, 0) 100%), 
                           linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
              backgroundBlendMode: "overlay",
            }}
          >
            <div
              className={`rounded-full px-6 py-2 text-white text-sm font-medium bg-black transition duration-200 w-fit ${
                hoveredCard === item.name ? "bg-[#a259ff] text-black" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p className="servicetags-text whitespace-nowrap">{item.name}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default ServiceTags;
