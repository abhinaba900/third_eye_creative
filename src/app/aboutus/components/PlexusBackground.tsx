// components/GradientBackground.tsx
"use client";

import React from "react";

const GradientBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0  bg-[#CF00A3]/20 rounded-full filter blur-[100px] animate-blob ">
      <div className="relative w-full h-full">
        <div className="absolute top-0 -left-1/2 w-3/4 h-3/4 bg-[#280075]/70 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-blue-800/30 rounded-full filter blur-[80px] animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default GradientBackground;
