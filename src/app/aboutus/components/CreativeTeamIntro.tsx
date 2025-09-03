"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DarkVeil from "@/components/DarkVeil";

interface TeamData {
  id: number;
  title: string;
  tags: string[];
  description: string;
  images: string[];
  name: string;
  role: string;
  bannerimage: string;
}
const teamDatas: TeamData[] = [
  {
    id: 1,
    title: "Has more Illustrator shortcuts memorized than song lyrics.",
    tags: [
      "Digital Marketing",
      "Brand Strategist",
      "AI Tools",
      "Graphic Design",
      "SEO Specialist",
      "Concept Art",
    ],
    description:
      "Ramkrishna, the force behind Third Eye Creative — the Founder, CEO, and Creative Director who wears many hats with ease. Whether it’s managing teams, handling clients, or diving deep into design, he brings unmatched energy and passion to everything he does. A master of tools like Illustrator and Photoshop, he's always pushing creative boundaries, fueled by his love for AI, music, geopolitics, and lifelong learning.",
    images: ["/assets/creative team image ram image 3.png"],
    name: "RAMKRISHNA IYENGAR",
    role: "Founder, CEO & Creative Director",
    bannerimage: "/assets/creative team image ram banner image.png",
  },

  {
    id: 2,
    title: "Has more Illustrator shortcuts memorized than song lyrics.",
    tags: [
      "Digital Marketing",
      "Brand Strategist",
      "AI Tools",
      "Graphic Design",
      "SEO Specialist",
      "Concept Art",
    ],
    description:
      "Ramkrishna, the force behind Third Eye Creative — the Founder, CEO, and Creative Director who wears many hats with ease. Whether it’s managing teams, handling clients, or diving deep into design, he brings unmatched energy and passion to everything he does. A master of tools like Illustrator and Photoshop, he's always pushing creative boundaries, fueled by his love for AI, music, geopolitics, and lifelong learning.",
    images: ["/assets/creative team image siddharth image 1.png"],
    name: "SIDDHARTH SHANKAR",
    role: "CTO & Technical Head",
    bannerimage: "/assets/creative team image ram banner image2.png",
  },
  {
    id: 3,
    title: "Has more Illustrator shortcuts memorized than song lyrics.",
    tags: [
      "Digital Marketing",
      "Brand Strategist",
      "AI Tools",
      "Graphic Design",
      "SEO Specialist",
      "Concept Art",
    ],
    description:
      "Ramkrishna, the force behind Third Eye Creative — the Founder, CEO, and Creative Director who wears many hats with ease. Whether it’s managing teams, handling clients, or diving deep into design, he brings unmatched energy and passion to everything he does. A master of tools like Illustrator and Photoshop, he's always pushing creative boundaries, fueled by his love for AI, music, geopolitics, and lifelong learning.",
    images: ["/assets/creative team image ram image 3.png"],
    name: "RAMKRISHNA IYENGAR",
    role: "Founder, CEO & Creative Director",
    bannerimage: "/assets/creative team image ram banner image.png",
  },
  {
    id: 4,
    title: "Has more Illustrator shortcuts memorized than song lyrics.",
    tags: [
      "Digital Marketing",
      "Brand Strategist",
      "AI Tools",
      "Graphic Design",
      "SEO Specialist",
      "Concept Art",
    ],
    description:
      "Ramkrishna, the force behind Third Eye Creative — the Founder, CEO, and Creative Director who wears many hats with ease. Whether it’s managing teams, handling clients, or diving deep into design, he brings unmatched energy and passion to everything he does. A master of tools like Illustrator and Photoshop, he's always pushing creative boundaries, fueled by his love for AI, music, geopolitics, and lifelong learning.",
    images: ["/assets/creative team image siddharth image 2.png"],
    name: "SIDDHARTH SHANKAR",
    role: "CTO & Technical Head",
    bannerimage: "/assets/creative team image ram banner image2.png",
  },
];

interface BannerImage {
  id: number;
  bannerImage: string;
}

function CreativeTeamIntro() {
  const [bannerimages, setBannerImages] = React.useState<BannerImage[]>([]);
  const [active, setActive] = React.useState<number>(1);
  const [isTablate, setIsTablate] = React.useState<true | false>(false);
  const [direction, setDirection] = React.useState<number>(1);

  const teamMember = teamDatas.find((project) => project.id === active)!;

  // ✅ track window size safely
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  React.useEffect(() => {
    const MOBILE_BREAKPOINT = { width: 1024, height: 1366 };

    const check = () => {
      setIsTablate(
        window.innerWidth <= MOBILE_BREAKPOINT.width &&
          window.innerHeight <= MOBILE_BREAKPOINT.height
      );
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ better direction detection (circular)
  const handleSelect = (newId: number) => {
    if (newId === active) return;

    const prevActive = active;
    const prevIndex = teamDatas.findIndex((m) => m.id === prevActive);
    const newIndex = teamDatas.findIndex((m) => m.id === newId);
    const length = teamDatas.length;

    const forwardDiff = (newIndex - prevIndex + length) % length;
    const backwardDiff = (prevIndex - newIndex + length) % length;

    let newDirection = 1;
    if (forwardDiff === 0) {
      return;
    } else if (forwardDiff <= backwardDiff) {
      newDirection = 1;
    } else {
      newDirection = -1;
    }

    setDirection(newDirection);
    setActive(newId);
  };

  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const innerWidth = innerRef.current.scrollWidth;

        // Calculate how much we can drag to the left
        const maxDrag = containerWidth - innerWidth;

        setConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  React.useEffect(() => {
    const images: { id: number; bannerImage: string }[] = teamDatas.map(
      (item) => ({
        id: item.id,
        bannerImage: item.bannerimage,
      })
    );
    setBannerImages(images);
  }, []);

  return (
    <div className="creative-team-intro-wrapper">
      <div className="text-wraper-in-creative-team">
        <h3 className="creative-team-intro-title">
          Minds Built to <span>Create</span>
        </h3>
        <div className="text-section-in-creative-team">
          <p>
            Meet the thinkers, makers, & <br />
            dreamers of Third Eye
          </p>
          <p>
            A team engineered with Precision,
            <br /> Passion, & Skill
          </p>
          <p>
            Together, we transform Ideas into <br />
            Realities
          </p>
        </div>
      </div>

      {/* Top banner images clickable */}
      <div className="creative-team-image-wrapper">
        <motion.div
          className="horizontal-scroller-container-testimonial-showcase cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
          ref={containerRef}
        >
          <motion.div
            drag="x"
            dragConstraints={constraints}
            className="flex  px-2"
            ref={innerRef}
          >
            {bannerimages.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.id)}
                className={`flex items-center justify-center p-2 px-3 rounded-md shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105`}
              >
                <div
                  className={`brand-logo hover-fill-transition w-full flex justify-center creative-team-image ${
                    teamDatas[index].id === teamMember.id
                      ? "active-team-member-border"
                      : ""
                  }`}
                >
                  <Image
                    src={item.bannerImage}
                    alt="image"
                    width={100}
                    height={100}
                    className="teem-members-icon-clickble"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main section */}
      <div className="relative max-w-[1300px] w-full mx-auto">
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <DarkVeil  speed={0.8}/>
        </div>
        <div className="overflow-hidden text-white max-w-[1279px] w-full mx-auto mb-[8.75rem] md:px-6 lg:px-0 creative-team-info-wrapper-and-holder relative">
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-6 lg:gap-[10%] items-start">
            {/* Left: Text Content */}
            <div className="lg:w-[40%] w-full space-y-6">
              <h2 className="text-3xl font-semibold leading-snug main-heading-tet-in-creative-team relative z-1">
                {teamMember.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {teamMember.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 border-2 border-[#FF891D] text-sm rounded-full text-white creative-team-tags"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed creative-team-description relative z-1">
                {teamMember.description}
              </p>
            </div>

            {/* Background images (visible across breakpoints) */}

            {/* Right: Image Stack with 3-Layer PvP Animation */}
            <div className="relative lg:w-[55%] w-full h-[500px] lg:h-[550px] flex items-cente1r justify-center ">
              {/* <img
              src="/assets/Pink background blurred.png"
              alt="background-image"
              className="bg-image"
            />
            <Image
              width={785}
              height={499}
              src="/assets/background in creative team info.png"
              alt="background-image"
              className="bg-image-foreground"
            /> */}

              <AnimatePresence initial={false} mode="popLayout">
                {teamDatas.map((member, idx) => {
                  const activeIndex = teamDatas.findIndex(
                    (m) => m.id === active
                  );
                  const positionIndex =
                    (idx - activeIndex + teamDatas.length) % teamDatas.length;

                  let styles = {
                    zIndex: 0,
                    opacity: 0,
                    scale: 0.8,
                    x: 0,
                  };

                  const initialvalue =
                    positionIndex === 0
                      ? {
                          x: direction === 1 ? 300 : -300,
                          opacity: 0,
                          scale: 1.1,
                        }
                      : { opacity: 0 };

                  const exitValue =
                    positionIndex === 0
                      ? {
                          x: direction === 1 ? -300 : 300,
                          opacity: 0,
                          scale: 0.9,
                        }
                      : { opacity: 0 };

                  if (isMobile) {
                    // Mobile → only show active member
                    if (positionIndex === 0) {
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: 0 };
                    } else {
                      return null;
                    }
                  } else if (isTablate) {
                    // Tablet → show 2 stacked (active, next)
                    if (positionIndex === 0) {
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: -80 };
                    } else if (positionIndex === 1) {
                      styles = { zIndex: 2, opacity: 0.8, scale: 0.9, x: 60 };
                    } else {
                      return null;
                    }
                  } else {
                    // Desktop / tablet → show 3 stacked in FORWARD order (active, next, next-next)
                    if (positionIndex === 0) {
                      // Active (center/highlight)
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: -150 };
                    } else if (positionIndex === 1) {
                      // 2nd in array (next on the right)
                      styles = { zIndex: 2, opacity: 0.8, scale: 0.9, x: -20 };
                    } else if (positionIndex === 2) {
                      // 3rd in array (next-next; place on the left/back)
                      styles = { zIndex: 1, opacity: 0.3, scale: 0.88, x: 80 };
                    } else {
                      // Hide the rest
                      return null;
                    }
                  }

                  return (
                    <motion.div
                      key={member.id + "-" + member.images[0]}
                      className="absolute flex items-center justify-center"
                      animate={styles}
                      initial={initialvalue}
                      exit={exitValue}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={member.images[0]}
                        alt={member.name}
                        width={360}
                        height={550}
                        className={`rounded-xl transition-all duration-700 ${
                          positionIndex === 0 ? "scale-100" : "scale-90"
                        }`}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {/* Name Card for Active Member */}
              <div className="absolute bottom-0 right-0 left-0 z-40">
                <div className="relative rounded-xl p-[2px] overflow-hidden">
                  {/* Glow Layer */}
                  <div className="glow-layer" />

                  {/* Inner Card */}
                  <div className="relative bg-black px-6 py-6 pt-8 rounded-xl flex flex-col items-start w-full overflow-hidden">
                    <div className="card-top-bar" />

                    <h3 className="text-lg font-bold text-purple-200 z-10 creative-team-name">
                      {teamMember?.name}
                    </h3>
                    <p className="text-sm text-gray-300 z-10 creative-team-role">
                      {teamMember?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeTeamIntro;
