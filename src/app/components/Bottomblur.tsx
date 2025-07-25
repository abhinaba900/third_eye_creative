"use client";
import React from "react";
import { useEffect, useState } from "react";

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
      className="fixed bottom-0 left-0 right-0 h-16 z-10 glass-card"
      style={{ display: !isAtBottom ? "block" : "none" }}
    ></div>
  );
}

export default Bottomblur;
