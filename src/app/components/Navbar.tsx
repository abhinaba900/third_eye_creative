"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Particles from "../../../Reactbits/Particles/Particles";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const items = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutus" },
    { label: "Work", href: "/work" },
    { label: "Careers", href: "#" },
  ];

  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);


  // Animation variants
  const menuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        staggerDirection: 1,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 , duration: 0.1},
    visible: { x: 0, opacity: 1 , duration: 0.1},
  };

  useEffect(() => {
    const index = items.findIndex((item) => {
      if (item.href === "/") return pathname === "/";
      return pathname.startsWith(item.href);
    });

    if (index !== -1) {
      setActive(index);
    }
  }, [pathname]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`navbar-background ${isScrolled ? "navbar-transparent" : ''}`}>
       <section className="flex items-center justify-between lg:py-2 lg:px-4 gap-2 text-white navbar-wrapper relative z-50">
      {/* Logo - Visible on all screens */}
      <Link href="/" className="btn flex items-center gap-2">
        <strong className="text-section-in-navbar flex items-center gap-2">
          <span>THIRD</span>
          <Image src="/assets/logo eye.png" alt="logo" width={24} height={17} />
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

      {/* Hamburger for Mobile & Tablet - Hidden on desktop */}
      <button
        className="lg:hidden z-50 relative w-5 h-5 focus:outline-none"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <motion.div
          className="flex flex-col justify-between w-full h-full"
          initial={false}
          animate={menuOpen ? "open" : "closed"}
        >
          {/* Top line */}
          <motion.span
            className="w-full h-0.5 bg-white block rounded-full"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 7 },
            }}
            transition={{ duration: 0.2 }}
          />

          {/* Middle line */}
          <motion.span
            className="w-full h-0.5 bg-white block rounded-full"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />

          {/* Bottom line */}
          <motion.span
            className="w-full h-0.5 bg-white block rounded-full"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -7 },
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </button>
      <div className="hidden lg:block items-center gap-8">
        <div className="navitems-section-wrapper relative">
          <Particles
            particleCount={2000}
            particleSpread={20}
            speed={0.3}
            particleBaseSize={40}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
            className="particle-background-in-navbar"
          />
          <div className="relative z-10 flex items-center gap-6">
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
      </div>

      {/* Desktop Nav - Hidden on mobile & tablet */}
      <div className="hidden lg:block items-center gap-8">
        {/* Desktop Button - Hidden on mobile & tablet */}
        <div className="galaxy-button">
          <button className="space-button start-project-button">
            <span className="backdrop"></span>
            <span className="galaxy"></span>
            <label className="text relative flex items-center gap-2">
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
      </div>

      {/* Mobile Menu - Hidden on desktop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 left-0 w-100 h-screen bg-black text-white flex flex-col items-start py-20 gap-6 lg:hidden z-40 overflow-y-auto"
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setActive(idx);
                    setMenuOpen(false);
                  }}
                  className={`nav-item text-xl w-full ${
                    active === idx ? "active-nav" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile Button */}
            <motion.div className="w-full mt-4" variants={itemVariants}>
              <button className="space-button start-project-button w-full">
                <span className="backdrop"></span>
                <span className="galaxy"></span>
                <label className="text relative flex items-center justify-center gap-2 py-3">
                  Start Project{" "}
                  <Image
                    src="/assets/Navbar-start-project-arrow.png"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </label>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
   </div>
  );
}

export default Navbar;
