"use client";

import React, { useState } from "react";
import CategoryFilterBar from "./CategoryFilterBar";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

interface Project {
  id: number;
  image: string;
  categories: string[];
  title: string;
  flag: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/project1.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Naren Electrix — Smart Control, Simplified",
    flag: "project",

    description:
      "An IoT mobile app that lets users control smart devices in real time. We combined functionality with sleek UI for smooth and seamless access.",
  },
  {
    id: 2,
    image: "/assets/project2.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Xplorion AI — Travel, Reimagined",
    flag: "project",

    description:
      "For Xplorion AI, we crafted an itinerary mobile app that blends AI-driven personalization with intuitive UX.",
  },
  {
    id: 3,
    image: "/assets/project3.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Urbando — Artfully Engineered Living",
    flag: "website",

    description:
      "A sleek, responsive website designed to showcase Urbando's premium homes with elegance and ease.",
  },
  {
    id: 4,
    image: "/assets/project4.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "STEP — The Smarter Way to Prep",
    flag: "website",
    description:
      "A NEET PG prep app designed for serious medical aspirants on the go. Built for structured, distraction-free study.",
  },
  {
    id: 5,
    image: "/assets/project1.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Naren Electrix — Smart Control, Simplified",
    flag: "project",

    description:
      "An IoT mobile app that lets users control smart devices in real time. We combined functionality with sleek UI for smooth and seamless access.",
  },
  {
    id: 6,
    image: "/assets/project2.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Xplorion AI — Travel, Reimagined",
    flag: "project",

    description:
      "For Xplorion AI, we crafted an itinerary mobile app that blends AI-driven personalization with intuitive UX.",
  },
  {
    id: 7,
    image: "/assets/project3.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Urbando — Artfully Engineered Living",
    flag: "website",

    description:
      "A sleek, responsive website designed to showcase Urbando's premium homes with elegance and ease.",
  },
  {
    id: 8,
    image: "/assets/project4.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "STEP — The Smarter Way to Prep",
    flag: "website",
    description:
      "A NEET PG prep app designed for serious medical aspirants on the go. Built for structured, distraction-free study.",
  },
];

function ProjectShowcaseGrid() {
  const [active, setActive] = useState("Brand Marketing");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(active)
  );

  return (
    <div>
      <CategoryFilterBar active={active} setActive={setActive} />
      <div className="max-w-[1232px] mx-auto px-4 py-10 grid gap-10 md:grid-cols-2 mb-[8.75rem]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="space-y-3 group">
              <Link
                href={`/work/${project.id}`}
                className="relative block overflow-hidden"
              >
                {/* Image with hover effect */}
                <div
                  className="relative"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCursorPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                    setHoveredId(project.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={609}
                    height={454}
                    className="object-cover rounded-lg image-box-project-showcase-grid w-full h-auto"
                  />

                  {/* Tracker Button - Only visible when hovering over image */}
                  {hoveredId === project.id &&
                    (project.flag === "project" ? (
                      <div
                        className="absolute pointer-events-none transition-transform duration-100 whitespace-nowrap"
                        style={{
                          top: cursorPos.y,
                          left: cursorPos.x,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => Router.push(`/work/${project.id}`)}
                      >
                        <div className="flex  work-section-button-work-and-project  items-center gap-1 text-xs font-semibold text-white from-[#C883FF] to-[#772BF2] via-[#CE0AFF] bg-gradient-to-r px-3 py-1 rounded-full shadow-lg">
                          View Project
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="absolute pointer-events-none transition-transform duration-100 whitespace-nowrap"
                        style={{
                          top: cursorPos.y,
                          left: cursorPos.x,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => Router.push(`/work/${project.id}`)}
                      >
                        <div className="flex work-section-button-work-and-project  items-center gap-1 text-xs font-semibold text-white from-[#C883FF] to-[#772BF2] via-[#CE0AFF] bg-gradient-to-r px-3 py-1 rounded-full shadow-lg">
                          View Website
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                </div>
              </Link>

              {/* Project details below the image */}
              <div>
                {/* Tags */}
                <div className="text-xs font-medium bg-gradient-to-r from-[#FF891D] to-[#EC4B7B] bg-clip-text text-transparent uppercase tracking-wide space-x-2">
                  {project.categories.map((cat, i) => (
                    <span key={i}>
                      {cat}
                      {i < project.categories.length - 1 && " · "}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-white text-lg font-medium py-20">
            No projects available for &quot;
            <span className="text-[#FF891D]">{active}</span>&quot;
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectShowcaseGrid;
