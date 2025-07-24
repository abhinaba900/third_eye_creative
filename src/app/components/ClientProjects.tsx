"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <div className="w-full h-full mx-auto client-projects-container">
      {/* Header & Description */}
      <h3 className="client-projects-title">
        Our <span>Work</span> in Action
      </h3>
      <p className="client-projects-description">
        From bold brand identities to powerful digital solutions, our projects
        reflect our passion for design, innovation, and measurable impact —
        crafted to inspire and built to perform.
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
                height: isActive && "100vh",
              }}
            >
              {/* Image Display Area */}
              {isActive && (
                <div
                  ref={imageRef}
                  className="relative w-full max-w-[1232px] h-[80%] mx-auto overflow-hidden rounded-[40px] mb-6 "
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
                className="group flex-1 h-[20%] relative overflow-hidden text-center flowing-menu-item-projects-data-container transition-colors duration-300 cursor-pointer"
              >
                <a className="flex flex-col items-center justify-center h-full relative uppercase no-underline focus:text-white focus-visible:text-white">
                  <div className="flex justify-between w-full items-center">
                    <h4
                      className={`font-semibold text-[4vh] leading-[1.2] title-text-in-projects-data transition duration-200 ${
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
        <div className="relative group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-[6.25rem] shadow-[#1098ad] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
            <span className="absolute inset-0 rounded-[6.25rem] bg-gradient-to-r from-[#f79533] via-[#f37055] to-[#ef4e7b] p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 block px-6 py-3 rounded-[6.25rem] bg-neutral-950">
              <div className="relative z-10 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                  View More
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                >
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientProjects;
