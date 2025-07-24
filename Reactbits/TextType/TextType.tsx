"use client";

import { ElementType, useEffect, useRef, useState, createElement } from "react";
import { gsap } from "gsap";

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  highlightedText?: string;
  highlightedClassName?: string;
  highlightedText2?: string;
  highlightedClassName2?: string;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  highlightedText = "",
  highlightedClassName = "",
  highlightedText2 = "",
  highlightedClassName2 = "",
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return "#ffffff";
    return textColors[currentTextIndex % textColors.length];
  };

  // Function to process text and apply highlighted classes
 const processTextWithHighlights = (text: string) => {
  if (!highlightedText && !highlightedText2) {
    return <span>{text}</span>;
  }

  // Create an array to hold the processed parts
  const parts: { text: string; className?: string }[] = [];
  let remainingText = text;

  // Process the text in order, checking for both highlights
  while (remainingText.length > 0) {
    // Find positions of both highlights
    const pos1 = highlightedText ? remainingText.indexOf(highlightedText) : -1;
    const pos2 = highlightedText2 ? remainingText.indexOf(highlightedText2) : -1;

    // Determine which highlight comes first
    let nextHighlightPos = Infinity;
    let nextHighlightLength = 0;
    let nextHighlightClass = '';

    if (pos1 >= 0 && pos1 < nextHighlightPos) {
      nextHighlightPos = pos1;
      nextHighlightLength = highlightedText.length;
      nextHighlightClass = highlightedClassName;
    }

    if (pos2 >= 0 && pos2 < nextHighlightPos) {
      nextHighlightPos = pos2;
      nextHighlightLength = highlightedText2.length;
      nextHighlightClass = highlightedClassName2;
    }

    // Check if both highlights start at the same position
    if (pos1 >= 0 && pos2 >= 0 && pos1 === pos2) {
      // Use the longer highlight and apply both classes
      if (highlightedText.length >= highlightedText2.length) {
        nextHighlightLength = highlightedText.length;
        nextHighlightClass = `${highlightedClassName} ${highlightedClassName2}`;
      } else {
        nextHighlightLength = highlightedText2.length;
        nextHighlightClass = `${highlightedClassName} ${highlightedClassName2}`;
      }
    }
    // Check if one highlight contains the other
    else if (pos1 >= 0 && pos2 >= 0) {
      const overlapStart = Math.max(pos1, pos2);
      const overlapEnd = Math.min(
        pos1 + highlightedText.length,
        pos2 + highlightedText2.length
      );
      
      if (overlapStart < overlapEnd) {
        // There's an overlap, combine the classes
        const combinedStart = Math.min(pos1, pos2);
        const combinedEnd = Math.max(
          pos1 + highlightedText.length,
          pos2 + highlightedText2.length
        );
        nextHighlightPos = combinedStart;
        nextHighlightLength = combinedEnd - combinedStart;
        nextHighlightClass = `${highlightedClassName} ${highlightedClassName2}`;
      }
    }

    if (nextHighlightPos === Infinity) {
      // No more highlights found
      parts.push({ text: remainingText });
      break;
    }

    // Add text before the highlight
    if (nextHighlightPos > 0) {
      parts.push({ text: remainingText.slice(0, nextHighlightPos) });
    }

    // Add the highlighted text
    const highlightedTextPart = remainingText.slice(
      nextHighlightPos,
      nextHighlightPos + nextHighlightLength
    );
    parts.push({
      text: highlightedTextPart,
      className: nextHighlightClass,
    });

    // Move remaining text
    remainingText = remainingText.slice(nextHighlightPos + nextHighlightLength);
  }

  return (
    <>
      {parts.map((part, index) => (
        <span key={index} className={part.className}>
          {part.text}
        </span>
      ))}
    </>
  );
};

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(
                (prev) => prev + processedText[currentCharIndex]
              );
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline" style={{ color: getCurrentTextColor() }}>
      {processTextWithHighlights(displayedText)}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${
          shouldHideCursor ? "hidden" : ""
        } ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
