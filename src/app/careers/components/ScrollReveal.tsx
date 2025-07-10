import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    
    return children.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) {
        return <React.Fragment key={index}>{" "}</React.Fragment>;
      }
      return (
        <span 
          className="word inline-block" 
          key={index}
          style={{
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            willChange: 'opacity, filter'
          }}
        >
          {word}
        </span>
      );
    });
  }, [children, baseOpacity, enableBlur, blurStrength]);

  useEffect(() => {
    const el = containerRef.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;

    const scroller = scrollContainerRef?.current || window;

    // Container rotation animation
    gsap.fromTo(
      el,
      { 
        rotation: baseRotation,
        transformOrigin: "0% 50%",
      },
      {
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller: scroller as any,
          start: "top 80%",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    // Word animations
    const words = textEl.querySelectorAll<HTMLElement>(".word");
    
    // Opacity animation
    gsap.to(words, {
      opacity: 1,
      ease: "none",
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller: scroller as any,
        start: "top 75%",
        end: wordAnimationEnd,
        scrub: true,
      },
    });

    // Blur animation if enabled
    if (enableBlur) {
      gsap.to(words, {
        filter: "blur(0px)",
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller: scroller as any,
          start: "top 75%",
          end: wordAnimationEnd,
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal-container ${containerClassName}`}
    >
      <p
        ref={textRef}
        className={`scroll-reveal-text ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;