"use client";

import Image from "next/image";
import GooeyNav from "../../../Reactbits/GooeyNav/GooeyNav";

function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "aboutus" },
    { label: "Work", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <section className="flex  items-center  justify-between py-2 text-white navbar-wrapper">
      <Image src="/assets/main-logo.png" alt="Logo" width={259} height={51} />

      <div className="navitems-section-wrapper">
        <GooeyNav
          items={items}
          particleCount={20}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <button className="start-project-button">
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
      </button>
    </section>
  );
}

export default Navbar;
