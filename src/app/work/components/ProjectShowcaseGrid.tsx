"use client";

import React, { useState } from "react";
import CategoryFilterBar from "./CategoryFilterBar";
import Image from "next/image";

interface Project {
  id: number;
  image: string;
  categories: string[];
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/project1.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Naren Electrix — Smart Control, Simplified",
    description:
      "An IoT mobile app that lets users control smart devices in real time. We combined functionality with sleek UI for smooth and seamless access.",
  },
  {
    id: 2,
    image: "/assets/project2.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Xplorion AI — Travel, Reimagined",
    description:
      "For Xplorion AI, we crafted an itinerary mobile app that blends AI-driven personalization with intuitive UX.",
  },
  {
    id: 3,
    image: "/assets/project3.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "Urbando — Artfully Engineered Living",
    description:
      "A sleek, responsive website designed to showcase Urbando’s premium homes with elegance and ease.",
  },
  {
    id: 4,
    image: "/assets/project4.png",
    categories: ["UI-UX Design", "Brand Marketing", "Web Development"],
    title: "STEP — The Smarter Way to Prep",
    description:
      "A NEET PG prep app designed for serious medical aspirants on the go. Built for structured, distraction-free study.",
  },
];

function ProjectShowcaseGrid() {
  const [active, setActive] = useState("Brand Marketing");

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(active)
  );

  return (
    <div>
      <CategoryFilterBar active={active} setActive={setActive} />
      <div className="max-w-[1232px] mx-auto px-4 py-10 grid gap-10 md:grid-cols-2 mb-[8.75rem]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="space-y-3">
              {/* Fixed Height Image Box */}
              <Image
                src={project.image}
                alt={project.title}
                width={609}
                height={454}
                className="object-cover rounded-lg image-box-project-showcase-grid"
              />

              {/* Tags */}
              <div className="text-xs font-medium bg-gradient-to-r from-[#FF891D] to-[#EC4B7B] bg-clip-text text-transparent uppercase tracking-wide space-x-2 project-tags-in-project-showcase-grid">
                {project.categories.map((cat, i) => (
                  <span key={i}>
                    {cat}
                    {i < project.categories.length - 1 && " · "}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white leading-snug project-title-in-project-showcase-grid">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 project-description-in-project-showcase-grid">{project.description}</p>
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
