"use client";
import Image from "next/image";
import Aurora from "../../../Reactbits/Aurora/Aurora";
import Counter from "../../../Reactbits/Counter/Counter";
// import TextPressure from "../../../Reactbits/TextPressure/TextPressure";
import VariableProximity from "../../../Reactbits/VariableProximity/VariableProximity";
import { useRef } from "react";

function HeroSection() {
  const containerRef = useRef(null);
  return (
    <div className="hero-section-wrapper">
      <Image
        src="/assets/Glass effect for hero section.svg"
        alt="Logo"
        width={"100"}
        height={"100"}
        className="mx-auto my-4 background-image-hero-section"
      />
      <div className="hero-section-content-wrapper">
        <Image
          src="/assets/Main-image.png"
          alt="Third Eye Creative Logo"
          width={881}
          height={450}
          style={{ display: "block", margin: "auto" }}
          className="m-auto d-block"
        />

        <h3 className="d-flex align-items-center hero-title-1 text-center " ref={containerRef}>
          We&apos; ve got a{" "}
          <span className="vision-text-gradient-desktop" >
            {" "}
            {/* <TextPressure
              text=" VISION"
              flex={false}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#772BF2" // Solid color as fallback
              strokeColor="#ff0000"
              minFontSize={35}
              inline={true}
              className="gradient-text " // Add gradient via class
            /> */}
            <VariableProximity
              label={"VISION"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </span>
          <span className="vision-text-gradient-mobile">VISION</span>
        </h3>

        <div className="w-full relative">
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
          />

          <div className="hero-content-wrapper">
            <h3 className="d-flex align-items-center hero-title-2 text-center">
              FOR YOUR BRAND
            </h3>
            <div className="hero-content-box-wrapper">
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={20}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  fontWeight={"900"}
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
                  fontWeight={"900"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p>Years of Creative Impact</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={50}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  fontWeight={"900"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p>Websites & Platforms Delivered</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center hero-content-box">
                <Counter
                  value={10}
                  fontSize={80}
                  padding={5}
                  gap={10}
                  textColor="white"
                  fontWeight={"900"}
                  gradientFrom="transparent"
                  gradientTo="transparent"
                />
                <p>Mobile Apps Engineered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
