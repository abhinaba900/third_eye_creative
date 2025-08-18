"use client";
import Image from "next/image";
import React from "react";
import {  useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SpotlightCard from "../../../../Reactbits/SpotlightCard/SpotlightCard";

function ServiceHighlights() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const stages = [
    {
      id: "01",
      image: "/assets/service-highlite-image-1.png",
      name: "Discover & Plan",
      description:
        "We analyze your needs and create a strategic roadmap for your digital product.",
    },
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
    {
      id: "04",
      image: "/assets/service-heighlite-image-2.png",
      name: "Optimize & Scale",
      description:
        "Post-launch, we help refine and scale your solution to maximize performance and growth.",
    },
  ];


  return (
    <div
      className="service-highlights overflow-hidden py-5"
      ref={ref}
      style={{
        marginBottom: "8.75rem",
        maxWidth: "1260px",
        margin: "0 auto",
        padding: "10px 16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        className="workflow-stages-grid-container"
        style={{
          position: "relative",
          top: 0,
          left: 0,
          transform: "translate(0,0)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          width: "100%",
        }}
      >
        {stages.map((stage) => (
          <div key={stage.id} className="gradient-border gradient-border-2">
            <SpotlightCard className="workflow-stage-card">
              <Image
                src={stage.image}
                alt="Stage Icon"
                width={24}
                height={24}
                className="workflow-stage-icon"
              />
              <div>
                <h3
                  className="workflow-stage-title"
                  dangerouslySetInnerHTML={{ __html: stage.name }}
                />
                <p className="workflow-stage-description">
                  {stage.description}
                </p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceHighlights;
