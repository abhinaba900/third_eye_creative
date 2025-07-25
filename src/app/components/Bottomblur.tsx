"use client";
import React from "react";
import { useEffect, useState } from "react";
import Aurora from "../../../Reactbits/Aurora/Auroracopy";

function Bottomblur() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollY + windowHeight >= documentHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-16 z-10 "
      style={{ display: !isAtBottom ? "block" : "none" }}
    >
      <Aurora
        colorStops={["black", "black", "black"]}
        blend={0.4}
        amplitude={0.5}
        speed={0}
      />
    </div>
  );
}

export default Bottomblur;
