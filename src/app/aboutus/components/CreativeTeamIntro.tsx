"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    images: [
      "/assets/creative team image ram image 3.png",
      "/assets/creative team image ram image 2.png",
      "/assets/creative team image ram image 1.png",
    ],
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
    images: [
      "/assets/creative team image siddharth image 1.png",
      "/assets/creative team image ram image 2.png",
      "/assets/creative team image siddharth image 2.png",
    ],
    name: "SIDDHARTH SHANKAR",
    role: "CTO & Technical Head",
    bannerimage: "/assets/creative team image ram banner image2.png",
  },
];

function CreativeTeamIntro() {
  const [bannerimages, setBannerImages] = React.useState<string[]>([]);
  const [active, setActive] = React.useState<number>(1);

  const teamMember = teamDatas.find((project) => project.id === active);

  React.useEffect(() => {
    const images = teamDatas.map((item) => item.bannerimage);
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
      <div className="creative-team-image-wrapper">
        <motion.div
          className="horizontal-scroller-container-testimonial-showcase cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            className="flex gap-6 px-2"
          >
            {bannerimages.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index + 1)}
                className="min-w-[200px] flex items-center justify-center p-4  rounded-md shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105"
              >
                <div className="brand-logo hover-fill-transition w-full flex justify-center creative-team-image">
                  <Image src={item} alt="image" width={100} height={100} />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className=" overflow-hidden text-white  max-w-7xl mx-auto mb-[8.75rem]  relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start ">
          {/* Left: Text Content */}
          <div className="lg:w-[40%] w-full space-y-6">
            <h2 className="text-3xl font-semibold leading-snug main-heading-tet-in-creative-team">
              {teamMember.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
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
            <p className="text-gray-300 leading-relaxed creative-team-description">
              {teamMember.description}
            </p>
          </div>

          <img
            src="/assets/Pink background blurred.png"
            alt="background-image"
            className="absolute -top-20 left-35 w-full h-screen z-2 right-0"
          />
          <Image
            width={785}
            height={499}
            src="/assets/background in creative team info.png"
            alt="background-image"
            className="absolute -top-30 left-80  z-3 right-0"
          />

          {/* Right: Image Stack */}
          <div className="relative lg:w-[60%] w-full h-[500px] lg:h-[550px] overflow-hidden ">
            {teamMember.images.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Character ${idx}`}
                width={360}
                height={550}
                className={`absolute top-0 transition-all duration-300
                ${
                  idx === 0
                    ? "z-3 left-0 opacity-100"
                    : idx === 1
                    ? "z-2 left-32 top-10"
                    : "z-1 left-64 top-20"
                }
              `}
              />
            ))}

            {/* Name Card Positioned Absolutely */}
            <div className="absolute bottom-0 right-0 left-0 z-40">
              <div className="bg-gradient-to-r from-[#772BF2] via-[#EC4B7B] to-[#CE0AFF] p-[2px] rounded-xl mx-4">
                <div className="bg-black px-6 py-4 rounded-xl flex flex-col items-start w-full relative overflow-hidden">
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 w-full h-3 rounded-t-xl bg-gradient-to-r from-[#ff73ff] via-[#d86cf8] to-[#9271f9]" />

                  <h3 className="text-lg font-bold text-purple-200 z-10 creative-team-name">
                    {teamMember.name}
                  </h3>
                  <p className="text-sm text-gray-300 z-10 creative-team-role">
                    {teamMember.role}
                  </p>
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
