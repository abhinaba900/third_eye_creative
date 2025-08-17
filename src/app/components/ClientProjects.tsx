"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function ClientProjects() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Real estate website design for a Modern Living Brand",
      client: "Urbando",
      year: "2025",
      image: "/assets/our work banner image.png",
    },
    {
      title: "Smart Device Control App: UX/UI Design & Development",
      client: "Naren Electrix",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "AI-Powered Itinerary Generator: Mobile App Experience",
      client: "Xplorion AI",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "NEET PG Prep App: EdTech Platform Design & Development",
      client: "STEP BY GHA",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Real Estate Website Design for Premium Property Solutions",
      client: "Legacy Global Projects",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80",
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
        From bold brand identities to powerful digital solutions, our projects
        reflect our passion for design, innovation, and measurable impact —
        crafted to inspire and built to perform
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
        <button className="view-more-button ">
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
