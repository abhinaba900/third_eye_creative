"use client";

import { motion, Variants } from "framer-motion";

export default function TextPressure({
  text = "",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const letters = text.split("");

  // Smoother animation variants for font weight
  const letterVariants: Variants = {
    initial: { fontWeight: 300 },
    hover: {
      fontWeight: 800,
      transition: {
        fontWeight: {
          repeat: Infinity,
          repeatType: "reverse" as const,
          duration: 0,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-4xl font-sans">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`${className} inline-block cursor-pointer select-none`}
            variants={letterVariants}
            initial="initial"
            whileHover="hover"
            transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
