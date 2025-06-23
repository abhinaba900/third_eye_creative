import Image from "next/image";
import ProjectData from "./ProjectData";

function ClientProjects() {
  return (
    <div className="w-full h-full mx-auto client-projects-container">
      <h3 className="client-projects-title">
        Our <span>Work</span> in Action
      </h3>
      <p className="client-projects-description">
        From bold brand identities to powerful digital solutions, our projects
        reflect our passion for design, innovation, and measurable impact —
        crafted to inspire and built to perform.
      </p>
      <Image
        src="/assets/our work banner image.png"
        alt="Our Work"
        width={1200}
        height={800}
        className=" max-w-[1232px] max-h-[714px] client-projects-image"
      />
      <ProjectData />
    </div>
  );
}

export default ClientProjects;
