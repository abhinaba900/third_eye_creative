import ScrollReveal from "../../../Reactbits/ScrollReveal/ScrollReveal";

function TextToRevealSection() {
  const text =
    "We are a creatively driven, strategy-led design agency crafting impactful brand and digital experiences. Our team is a dynamic collective of designers, developers, storytellers, strategists, and tech enthusiasts, united by a passion for building bold, meaningful solutions that move brands forward.";
  return (
    <div className="text-to-reveal-section-wrapper" >
      <div className="desktop-text">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="scroll-reveal-text-wrapper"
        >
          {text}
        </ScrollReveal>
      </div>
      <p className="mobile-text">{text}</p>
    </div>
  );
}

export default TextToRevealSection;
