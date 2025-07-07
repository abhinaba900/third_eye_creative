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

export default function CategoryFilterBar({active, setActive}:{active: string, setActive: (category: string) => void}) {

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
            <button
              key={category}
              onClick={() => setActive(category)}
              className={clsx(
                "whitespace-nowrap rounded-full border px-4 py-1 text-sm font-medium transition-all work-grid-filter-button",
                active === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "border-[#C883FF] text-white hover:bg-purple-900"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
