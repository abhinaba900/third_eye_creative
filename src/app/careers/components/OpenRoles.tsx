import React from "react";
import JobCard from "./JobCard";

const jobs = [
  {
    title: "Visual Designer",
    description:
      "Bring bold concepts to life through branding, layouts, and visuals that tell a story and move people.",
  },
  {
    title: "UI/UX Designer",
    description:
      "Design intuitive, user-first interfaces that blend aesthetic appeal with seamless usability.",
  },
  {
    title: "Front-End Developer",
    description:
      "Turn design systems and prototypes into smooth, responsive web/mobile experiences.",
  },
  {
    title: "Copywriter",
    description:
      "Write words that connect, inspire, and convert — from punchy taglines to deep brand narratives.",
  },
  {
    title: "Motion Designer",
    description:
      "Add rhythm, emotion, and energy to static designs, creating animations and interactions.",
  },
  {
    title: "Project Coordinator",
    description:
      "Be the anchor for teams — manage timelines, align vision, and move projects forward seamlessly.",
  },
];

function OpenRoles() {
  return (
    <div className="open-roles-wrapper">
      <h3 className="open-roles-wrapper-title deskpot-text">
        <span>Open Roles,</span> Open Minds
      </h3>
      <h3 className="open-roles-wrapper-title mobile-text">
        <span>Open Roles</span>
        <br />Open Minds
      </h3>
      <p className="open-roles-wrapper-desc">
        Explore opportunities to craft, code, and create alongside a team that
        believes great ideas can come from anywhere
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 px-4 sm:px-4 md:px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible open-roles-cards-wrapper">
        {jobs.map((job, idx) => (
          <JobCard key={idx} title={job.title} description={job.description} />
        ))}
      </div>
    </div>
  );
}

export default OpenRoles;
