"use client";
import { useState } from "react";

function ClientProjects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const defaultImage = "/assets/our work banner image.png";

  const projects = [
    {
      title: "Real estate website design for a Modern Living Brand",
      client: "Urbando",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80",
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

  const bannerImage =
    hoveredIndex !== null
      ? projects[hoveredIndex].image
      : activeIndex !== null
      ? projects[activeIndex].image
      : defaultImage;

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

      {/* Banner Image */}
      <div className="overflow-hidden transition duration-300 ease-in-out">
        <img
          src={bannerImage}
          alt="Our Work"
          className="w-full max-w-[1232px] max-h-[714px] object-cover transition-all duration-300 ease-in-out client-projects-image rounded-[40px]"
        />
      </div>

      {/* Project Cards */}
      <div className="w-full h-full mx-auto project-data-container">
        {projects.map(({ title, client, year }, idx) => {
          const isActive = idx === activeIndex || idx === hoveredIndex;

          return (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(idx)}
              className="group flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] flowing-menu-item-projects-data-container transition-colors duration-300"
            >
              <a className="flex flex-col items-center justify-center h-full relative cursor-pointer uppercase no-underline focus:text-white focus-visible:text-white">
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
          );
        })}
      </div>

      {/* View More Button */}
      <button className="view-more-button flex items-center gap-2">
        View More{" "}
        <img
          src="/assets/project-data-button-arrow.png"
          alt="Arrow Right"
          width={32}
          height={28}
        />
      </button>
    </div>
  );
}

export default ClientProjects;
