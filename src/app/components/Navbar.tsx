"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Particles from "../../../Reactbits/Particles/Particles";

function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
    { label: "Work", href: "#" },
    { label: "Careers", href: "#" },
  ];

  const [active, setActive] = useState(0);
  const pathname = usePathname(); // e.g. /aboutus/123

  useEffect(() => {
    const index = items.findIndex((item) => {
      // Match exact or dynamic routes like /aboutus/123
      if (item.href === "/") return pathname === "/";
      return pathname.startsWith(item.href);
    });

    if (index !== -1) {
      setActive(index);
    }
  }, []);

  return (
    <section className="flex  items-center  justify-between py-2 text-white navbar-wrapper">
      <Link href={"/"} className="btn">
        <strong className="text-section-in-navbar">
          <span>THIRD</span>
          <Image
            src="/assets/logo eye.png"
            alt="arrow"
            width={24}
            height={17}
          />
          <span>CREATIVE</span>
        </strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </Link>

      <div className="navitems-section-wrapper relative">
        {/* Particle Background */}
        <Particles
          particleCount={400}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={40}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          className="particle-background-in-navbar"
        />

        {/* Navigation Items */}
        <div className="relative z-10 flex items-center gap-4">
          {items.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              onClick={() => setActive(idx)}
              className={`nav-item ${active === idx ? "active-nav" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="galaxy-button  ">
        <button className="space-button start-project-button">
          <span className="backdrop"></span>
          <span className="galaxy"></span>
          <label className="text relative flex items-center gap-2 ">
            Start Project{" "}
            <Image
              src="/assets/Navbar-start-project-arrow.png"
              alt="arrow"
              width={16}
              height={16}
            />
            <img
              src="/assets/navbar-start-project-background.png"
              className="buttom-background-in-navbar"
              alt="background"
            />
          </label>
        </button>
        <div className="bodydrop"></div>
      </div>
    </section>
  );
}

export default Navbar;
