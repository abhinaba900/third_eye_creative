"use client";
import Aurora from "../../../Reactbits/Aurora/Aurora";
import Counter from "../../../Reactbits/Counter/Counter";
import { useRef } from "react";
import TextType from "../../../Reactbits/TextType/TextType";
import MechanicalEye from "./MechanicalEye";
import Image from "next/image";

function HeroSection() {
  const containerRef = useRef(null);
  const containerref2 = useRef(null);
  const text2Ref = useRef(null);

  return (
    <div
      ref={containerref2}
      className="hero-section-wrapper background-image-hero-section"
    >
      <div className="hero-section-content-wrapper">
        <Image
          src="/assets/Main-image.png"
          alt="Third Eye Creative Logo"
          width={881}
          height={450}
          style={{ display: "block", margin: "auto" }}
          className="m-auto d-block relative z-3 hero-section-third-eye-image"
        />

        <>
          <div className="flex justify-center items-center third-eye-image-container-for-desktop">
            <MechanicalEye />
          </div>
        </>

        <h3
          className="flex justify-center items-center hero-title-1 text-center -mt-30 relative z-2 opacity-100 -mb-25 h-80"
          style={{ backgroundColor: "black", opacity: 1 }}
          ref={text2Ref}
        >
          {" "}
          <span className="vision-text-gradient-desktop">
            <TextType
              text={[
                "We've got a vision \n FOR YOUR BRAND",
                "We've got a vision \n FOR YOUR BRAND",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              highlightedText="vision"
              highlightedClassName="variable-proximity-demo"
              highlightedText2="FOR YOUR BRAND"
              highlightedClassName2="hero-title-2"
            />
          </span>
        </h3>

        <div className="w-full relative z-5">
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
          />
          <div className="hero-content-wrapper -mt-20">
            <div></div>
            <div
              className="hero-content-box-wrapper mb-10"
              ref={containerRef}
              id="text-to-reveal-scroll"
            >
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={20}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  counterClassName="counter-classes-in-hero-section"
                  fontWeight={"700"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p className="counter-subtitle">Brands Transformed</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={8}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  counterClassName="counter-classes-in-hero-section"
                  fontWeight={"700"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p className="counter-subtitle">Years of Creative Impact</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={50}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  counterClassName="counter-classes-in-hero-section"
                  fontWeight={"700"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p className="counter-subtitle">
                  Websites & Platforms Delivered
                </p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={10}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  counterClassName="counter-classes-in-hero-section"
                  textColor="white"
                  fontWeight={"700"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p className="counter-subtitle">Mobile Apps Engineered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
