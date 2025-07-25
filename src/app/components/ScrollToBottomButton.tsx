"use client";
import { useEffect, useState } from "react";

export default function ScrollToBottomButton({ containerRef, targetRef }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let isElementInView = false; // Track if the element is in view

    const observer = new IntersectionObserver(
      (entries) => {
        isElementInView = entries[0].isIntersecting;
        // Only update visibility if scrolling normally (not forcing on scroll up)
        setIsVisible(isElementInView);
      },
      { threshold: 0.5 }
    );

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isScrollingUp && isElementInView) {
        setIsVisible(true); // Force visible if scrolling up and element is in view
      }

      lastScrollY = currentScrollY;
    };

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef]);

  const scrollToBottom = () => {
    const target = targetRef.current;
    if (target) {
      setIsVisible(false);
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToBottom}
      className="fixed bottom-15 right-5 z-3  h-fit pt-0 rounded-full  text-white  transition-opacity duration-500 opacity-100 "
      aria-label="Scroll to bottom"
    >
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
      </div>
    </button>
  );
}
