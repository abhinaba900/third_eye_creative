import Image from "next/image";
import React from "react";

function ServiceHighlights() {
  const stages = [
    {},
    {
      id: "02",
      image: "/assets/service-highlite-image-1.png",
      name: "Design & Develop",
      description:
        "From concept to execution, we craft thoughtful designs and build seamless digital experiences tailored to your vision.",
    },
    {
      id: "03",
      image: "/assets/service-heighlite-image-2.png",
      name: "Launch & Elevate",
      description:
        "We deliver refined solutions and support you through a smooth launch, ensuring your brand makes a lasting impact and stays ahead.",
    },
  ];

  return (
    <div className="relative service-highlights">
      <div
        className="workflow-stages-grid-container"
        style={{
          position: "relative",
          top: 0,
          left: 0,
          transform: "translate(0,0)",
        }}
      >
        {stages.map((stage, index) =>
          Object.keys(stage).length === 0 ? (
            <div key={index} />
          ) : (
            <div key={stage.id} className="gradient-border">
              <Image
                src={stage.image}
                alt="Stage Icon"
                width={24}
                height={24}
                className="workflow-stage-icon"
              />
              <h3 className="workflow-stage-title">{stage.name}</h3>
              <p className="workflow-stage-description">{stage.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default ServiceHighlights;
