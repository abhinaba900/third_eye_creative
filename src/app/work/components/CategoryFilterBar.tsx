"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const categories = [
  "Custom Software Development",
  "UI-UX Design",
  "Brand Marketing",
  "Graphics Design",
  "Branding & Content",
  "Web Design",
];

export default function CategoryFilterBar({
  active,
  setActive,
}: {
  active: string;
  setActive: (category: string) => void;
}) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const innerWidth = innerRef.current.scrollWidth;

        // Calculate how much we can drag to the left
        const maxDrag = containerWidth - innerWidth;

        setConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="max-w-[1232px] mx-auto cursor-grab overflow-hidden mb-[5rem]"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        ref={innerRef}
        drag="x"
        dragConstraints={constraints}
        className="flex gap-6 px-2"
      >
        <div className="flex gap-4 px-4 py-2 w-max">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-full p-[2px] inline-block"
              style={{
                background: `linear-gradient(0deg, #C883FF, #C883FF), 
                             linear-gradient(180deg, #772BF2 0%, rgba(206, 10, 255, 0) 100%), 
                             linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))`,
                backgroundBlendMode: "overlay",
              }}
            >
              <button
                onClick={() => setActive(category)}
                className={clsx(
                  "rounded-full px-6 py-2 text-sm font-medium transition duration-200 w-fit whitespace-nowrap",
                  active === category
                    ? "bg-custom-gradient text-white"
                    : "bg-black text-white hover:bg-purple-900"
                )}
              >
                {category}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
