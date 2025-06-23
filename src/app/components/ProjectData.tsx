import Image from "next/image";
import FlowingMenu from "../../../Reactbits/FlowingMenu/FlowingMenu";

function ProjectData() {
  const projects = [
    {
      title: "Real estate website design for a Modern Living Brand",
      client: "Urbando",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80", // Modern house
    },
    {
      title: "Smart Device Control App: UX/UI Design & Development",
      client: "Naren Electrix",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80", // Smart home devices
    },
    {
      title: "AI-Powered Itinerary Generator: Mobile App Experience",
      client: "Xplorion AI",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80", // Travel planning
    },
    {
      title: "NEET PG Prep App: EdTech Platform Design & Development",
      client: "STEP BY GHA",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80", // Education/graduation
    },
    {
      title: "Real Estate Website Design for Premium Property Solutions",
      client: "Legacy Global Projects",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80", // Luxury home
    },
  ];
  return (
    <>
      <div className="w-full h-full mx-auto project-data-container">
        <FlowingMenu items={projects} />
      </div>
      <button className="view-more-button">
        View More{" "}
        <Image
          src="/assets/project-data-button-arrow.png"
          alt="Arrow Right"
          width={32}
          height={27.44}
        />
      </button>
    </>
  );
}

export default ProjectData;
