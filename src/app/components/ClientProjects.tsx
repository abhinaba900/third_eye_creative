"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ClientProjects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "IoT Data Platform for an Electric Mobility Leader",
      client: "Mesha",
      year: "2025",
      image: "/assets/Artboard 3.jpg",
    },
    {
      title: "Smart Device Control App: UX/UI Design & Development",
      client: "Naren Electrix",
      year: "2025",
      image:
        "/assets/Naren-IOT-17.jpg",
    },
    {
      title: "AI-Powered Itinerary Generator: Mobile App Experience",
      client: "Xplorion AI",
      year: "2025",
      image:
        "/assets/xplorean-13.jpg",
    },
    {
      title: "NEET PG Prep App: EdTech Platform Design & Development",
      client: "STEP BY GHA",
      year: "2025",
      image:
        "/assets/step-gha-2.jpg",
    },
    {
      title: "IoT App Design for a Smart Power Solution",
      client: "Mesha",
      year: "2025",
      image:
        "/assets/mesha-2-24.jpg",
    },
  ];

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleProjectClick = (idx: number) => {
    setActiveIndex(idx);

    setTimeout(() => {
      if (imageRef.current) {
        const yOffset = 0;
        const y =
          imageRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 0); // Small timeout ensures state update renders the image first
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full mx-auto client-projects-container">
      {/* Header & Description */}
      <h3 className="client-projects-title">
        Our <span>Work</span> in Action
      </h3>
      <p className="client-projects-description">
        Where creativity meets impact — designed to inspire, built to perform
      </p>

      {/* Project List */}
      <div className="w-full h-full mx-auto  project-data-container ">
        {projects.map(({ title, client, year }, idx) => {
          const isActive = idx === activeIndex;

          return (
            <section
              key={idx}
              className="first:shadow-none shadow-[0_-1px_0_0_#fff]"
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "100vh",
                height: isActive && (isMobile ? "82vh" : "100vh"),
              }}
            >
              {/* Image Display Area */}
              {isActive && (
                <div
                  ref={imageRef}
                  className="relative w-full max-w-[1232px] h-[70vh] sm:h-[50vh] md:h-[80vh] lg:h-[70vh] xl:h-[80vh] mx-auto overflow-hidden rounded-[40px] mb-6"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={projects[activeIndex].image}
                      src={projects[activeIndex].image}
                      alt="Our Work"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover rounded-[40px] pt-5"
                    />
                  </AnimatePresence>
                </div>
              )}
              <div
                onClick={() => handleProjectClick(idx)}
                className="group flex-1 h-[10%] relative overflow-hidden text-center flowing-menu-item-projects-data-container transition-colors duration-300 cursor-pointer"
              >
                <a className="flex flex-col items-center justify-center h-full relative uppercase no-underline focus:text-white focus-visible:text-white">
                  <div className="flex justify-between w-full items-center">
                    <h4
                      className={`font-semibold text-[4vh] leading-[4.5vh] title-text-in-projects-data transition duration-200 ${
                        isActive ? "text-white" : "text-[#999999]"
                      }`}
                    >
                      {title}
                    </h4>
                    <p
                      className={`font-normal text-[2vh] paragraph-text-in-projects-data transition duration-200 ${
                        isActive ? "text-white" : "text-[#999999]"
                      }`}
                    >
                      {client}
                      <span> {year}</span>
                    </p>
                  </div>
                </a>
              </div>
            </section>
          );
        })}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center view-more-button-in-client-projects mt-10">
        <button className="view-more-button in-mobile-add-container-width">
          View More{" "}
          <Image
            src="/assets/project-data-button-arrow.png"
            alt="arrow"
            width={24}
            height={24}
            className="view-more-button-arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default ClientProjects;
