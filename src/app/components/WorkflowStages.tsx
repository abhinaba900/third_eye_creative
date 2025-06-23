import Image from "next/image";
import ScrollVelocity from "../../../Reactbits/ScrollVelocity/ScrollVelocity";

function WorkflowStages() {
  const stages = [
    {
      id: "01",
      name: "Discover & Define",
      description:
        "We begin by understanding your brand, audience, and goals — conducting deep research and strategic analysis to lay a solid foundation.",
    },
    {
      id: "02",
      name: "Design & Develop",
      description:
        "From concept to execution, we craft thoughtful designs and build seamless digital experiences tailored to your vision.",
    },
    {
      id: "03",
      name: "Launch & Elevate",
      description:
        "We deliver refined solutions and support you through a smooth launch, ensuring your brand makes a lasting impact and stays ahead.",
    },
  ];
  return (
    <div className="w-full h-full mx-auto workflow-stages-container">
      <ScrollVelocity
        texts={["THIRD EYE", "THIRD EYE"]}
        velocity={100}
        className="custom-scroll-text-in-workflow-stages"
      />

      <div className="workflow-stages-grid-container">
        {stages.map((stage) => (
          <div key={stage.id} className="gradient-border">
            <h4 className="workflow-stage-id">{stage.id}</h4>
            <div>
              <h3 className="workflow-stage-title">{stage.name}</h3>
              <p className="workflow-stage-description">{stage.description}</p>
            </div>
            <Image
              src={"/assets/arrow.png"}
              alt="Arrow Icon"
              width={24}
              height={24}
              className="workflow-stage-arrow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkflowStages;
