"use client";

import {
  MotionValue,
  motion,
  useInView,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span
      className="absolute inset-0 flex items-center justify-center"
      style={{ y }}
    >
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitClassName?: string;
}

function Digit({ place, value, height, digitClassName = "" }: DigitProps) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      className={`relative w-[1ch] font-tabular-nums ${digitClassName}`}
      style={{ height: `${height}px` }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number; // in pixels
  padding?: number;
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: string;
  containerClassName?: string;
  counterClassName?: string;
  digitClassName?: string;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientClassName?: string;
  bottomGradientClassName?: string;
  duration?: number;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerClassName = "",
  counterClassName = "",
  digitClassName = "",
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientClassName = "",
  bottomGradientClassName = "",
  duration = 2000,
}: CounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const height = fontSize + padding;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numDigits =
    value === 0 ? 1 : Math.floor(Math.log10(Math.max(1, value))) + 1;
  const places = Array.from({ length: numDigits }, (_, i) =>
    Math.pow(10, numDigits - 1 - i)
  );

  useEffect(() => {
    if (!isInView) return;

    const targetValue = Math.max(value, 0);

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const newValue = Math.floor(easedProgress * targetValue);

      setCurrentValue(newValue);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  function easeOutQuad(t: number): number {
    return t * (2 - t);
  }

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center relative ${containerClassName}`}
    >
      <div
        className={`flex items-center h-[${fontSize}px] overflow-hidden leading-none shadow-none ${counterClassName}`}
        style={{
          fontSize: `${fontSize}px`,
          gap: `${gap}px`,
          borderRadius: `${borderRadius}px`,
          paddingLeft: `${horizontalPadding}px`,
          paddingRight: `${horizontalPadding}px`,
          color: textColor,
          fontWeight,
          height: `${fontSize}px`,
        }}
      >
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={currentValue}
            height={height}
            digitClassName={digitClassName}
          />
        ))}
        <span className="plus-icon-in-counter">+</span>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`w-full ${topGradientClassName}`}
          style={{
            height: `${gradientHeight}px`,
            background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
          }}
        />
        <div
          className={`absolute bottom-0 w-full ${bottomGradientClassName}`}
          style={{
            height: `${gradientHeight}px`,
            background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
          }}
        />
      </div>
    </div>
  );
}
