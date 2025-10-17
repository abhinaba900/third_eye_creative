"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Software that scales.",
    image: "/assets/srvice overview image 1.png",
  },
  {
    title: "Apps that click.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Marketing that moves.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
  },
  {
    title: "Media that matters.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
  },
];

function ServicesOverview() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  const currentIndex = hovered !== null ? hovered : active;
  const currentService = services[currentIndex];

  return (
    <div className="services-overview-wrapper">
      <h3 className="services-overview-title">
        We do <span>Four</span> things exactly
      </h3>
      <p className="services-overview-description">
        Turning bold ideas into powerful brands, experiences, and digital magic
        — one pixel, one strategy at a time
      </p>

      <div className="services-overview-content flex flex-col md:flex-row gap-10">
        {/* Image Preview */}
        <div className="w-full rounded-lg overflow-hidden flex justify-center">
          <motion.img
            key={currentService.image} // triggers animation on image change
            src={currentService.image}
            alt={currentService.title}
            width={520}
            height={797}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/520x797?text=No+Image";
            }}
            className="rounded-xl w-full h-full object-cover service-overview-image"
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Service List */}
        <div className="w-full space-y-[2rem]">
          {services.map((service, index) => {
            const isActive = active === index;
            const isHovered = hovered === index;

            const isHighlight = isHovered || isActive;

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => {
                  setActive(index);
                  sessionStorage.setItem("activeService", service.title);
                  router.push("/work");
                }}
                className={`cursor-pointer text-xl font-semibold flex items-center gap-2 transition-all services-overview-list ${
                  isHighlight ? "text-white" : "text-gray-500"
                }`}
              >
                <AnimatePresence>
                  {isHighlight && (
                    <motion.span
                      key={`arrow-${index}`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={"/assets/service overview arrow.png"}
                        alt="arrow"
                        width={50}
                        height={42}
                      />
                    </motion.span>
                  )}
                </AnimatePresence>
                <p>{service.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
