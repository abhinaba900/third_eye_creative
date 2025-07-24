"use client";
// import Image from "next/image";
import Aurora from "../../../Reactbits/Aurora/Aurora";
import Counter from "../../../Reactbits/Counter/Counter";
// import TextPressure from "../../../Reactbits/TextPressure/TextPressure";
// import VariableProximity from "../../../Reactbits/VariableProximity/VariableProximity";
import { useRef } from "react";
// import Script from "next/script";
import SplineViewer from "./SplineViewer";
import ScrollToBottomButton from "./ScrollToBottomButton";
// import TextPressure from "../../../Reactbits/TextPressure/TextPressure";
// import PrinceText from "./PrinceText";
import TextType from "../../../Reactbits/TextType/TextType";

function HeroSection() {
  const containerRef = useRef(null);
  const containerref2 = useRef(null);
  const text2Ref = useRef(null);
  return (
    <div
      ref={containerref2}
      className="hero-section-wrapper background-image-hero-section"
    >
      {/* <Image
        src="/assets/Glass effect for hero section.svg"
        alt="Logo"
        width={"100"}
        height={"100"}
        className="mx-auto my-4 background-image-hero-section"
      /> */}
      <ScrollToBottomButton containerRef={containerref2} targetRef={text2Ref} />
      <div className="hero-section-content-wrapper">
        {/* <Image
          src="/assets/Main-image.png"
          alt="Third Eye Creative Logo"
          width={881}
          height={450}
          style={{ display: "block", margin: "auto" }}
          className="m-auto d-block"
        /> */}

        <>
          {/* <Script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.10.32/build/spline-viewer.js"
            strategy="beforeInteractive"
          /> */}
          <SplineViewer />
        </>

        <h3
          className="flex justify-center items-center hero-title-1 text-center -mt-30 relative z-2 opacity-100 -mb-25 h-80"
          style={{ backgroundColor: "black", opacity: 1 }}
          ref={text2Ref}
        >
          {" "}
          <span className="vision-text-gradient-desktop">
            {" "}
            {/* <TextPressure
              text=" VISION"
              className={"variable-proximity-demo"}
            /> */}
            {/* <PrinceText
              children={"VISION"}
              className="variable-proximity-demo"
            /> */}
            <TextType
              text={["We've got a vision \n FOR YOUR BRAND", "We've got a vision \n FOR YOUR BRAND"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              highlightedText="vision"
              highlightedClassName="variable-proximity-demo"
              highlightedText2="FOR YOUR BRAND"
              highlightedClassName2="hero-title-2"
              
            />
            {/* <VariableProximity
              label={"VISION"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            /> */}
          </span>
          {/* <span className="vision-text-gradient-mobile">VISION</span> */}
        </h3>
        {/* <h3 className="d-flex align-items-center hero-title-2 text-center -mb-25">
          FOR YOUR BRAND
        </h3> */}

        <div className="w-full relative z-5"> 
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
          />
          <div className="hero-content-wrapper">
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
