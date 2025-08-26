"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

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
  return (
    <motion.div
      className="max-w-[1232px] mx-auto cursor-grab overflow-hidden mb-[5rem]"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
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
                  "rounded-full px-6 py-2 text-sm font-medium transition duration-200 w-fit work-grid-filter-button whitespace-nowrap",
                  active === category
                    ? "bg-custom-gradient text-white"
                    : "bg-black text-white hover:bg-purple-900 "
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
