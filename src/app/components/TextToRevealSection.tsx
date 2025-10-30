import ScrollReveal from "../../../Reactbits/ScrollReveal/ScrollReveal";

function TextToRevealSection() {
  const text =
    "We are a creatively driven, strategy-led design agency crafting impactful brand & digital experiences. Our team is a dynamic collective of designers, developers, storytellers, strategists, & tech enthusiasts, united by a passion for building bold, meaningful solutions that move brands forward.";
  return (
    <div className="text-to-reveal-section-wrapper">
      {/* <div className="">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="scroll-reveal-text-wrapper"
          containerClassName="mobile-class-name-text-for-text-to-reveal"
        >
          {text}
        </ScrollReveal>
      </div> */}
      <p className="scroll-reveal-text-wrapper">{text}</p>
    </div>
  );
}

export default TextToRevealSection;
