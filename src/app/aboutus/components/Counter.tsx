"use client";

import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type ResponsiveValue<T> =
  | T
  | {
      base?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
  textGradient: string;
}

function Number({ mv, number, height, textGradient }: NumberProps) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span
      className="absolute inset-0 flex items-center justify-center"
      style={{
        y,
        background: textGradient,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
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
  textGradient: string;
}

function Digit({
  place,
  value,
  height,
  digitClassName = "",
  textGradient,
}: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      className={`relative w-[1ch] font-tabular-nums ${digitClassName}`}
      style={{ height: `${height}px` }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number
          key={i}
          mv={animatedValue}
          number={i}
          height={height}
          textGradient={textGradient}
        />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: ResponsiveValue<number>;
  padding?: ResponsiveValue<number>;
  gap?: ResponsiveValue<number>;
  borderRadius?: ResponsiveValue<number>;
  horizontalPadding?: ResponsiveValue<number>;
  fontWeight?: ResponsiveValue<string>;
  containerClassName?: string;
  counterClassName?: string;
  digitClassName?: string;
  gradientHeight?: ResponsiveValue<number>;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientClassName?: string;
  bottomGradientClassName?: string;
  duration?: number;
  textGradientFrom?: string;
  textGradientTo?: string;
  textGradientDegree?: number;
  textGradientStops?: string[];
  threshold?: number;
}

// Helper type guard
function isResponsiveObject<T>(
  value: ResponsiveValue<T>
): value is { base?: T; sm?: T; md?: T; lg?: T; xl?: T } {
  return (
    typeof value === "object" &&
    value !== null &&
    ("base" in value ||
      "sm" in value ||
      "md" in value ||
      "lg" in value ||
      "xl" in value)
  );
}

export default function Counter({
  value,
  fontSize = 200,
  padding = 0,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
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
  textGradientFrom = "#772BF2",
  textGradientTo = "#EC4B7B",
  textGradientDegree = 180,
  textGradientStops,
  threshold = 0.1,
}: CounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const getResponsiveValue = <T,>(value: ResponsiveValue<T>, defaultVal: T) => {
    if (isResponsiveObject(value)) {
      return {
        base: value.base ?? defaultVal,
        sm: value.sm ?? value.base ?? defaultVal,
        md: value.md ?? value.sm ?? value.base ?? defaultVal,
        lg: value.lg ?? value.md ?? value.sm ?? value.base ?? defaultVal,
        xl:
          value.xl ??
          value.lg ??
          value.md ??
          value.sm ??
          value.base ??
          defaultVal,
      };
    }
    return {
      base: value,
      sm: value,
      md: value,
      lg: value,
      xl: value,
    };
  };

  const responsiveFontSize = getResponsiveValue(fontSize, 200);
  const responsivePadding = getResponsiveValue(padding, 0);
  const responsiveGap = getResponsiveValue(gap, 8);
  const responsiveBorderRadius = getResponsiveValue(borderRadius, 4);
  const responsiveHorizontalPadding = getResponsiveValue(horizontalPadding, 8);
  const responsiveFontWeight = getResponsiveValue(fontWeight, "bold");
  const responsiveGradientHeight = getResponsiveValue(gradientHeight, 16);

  const height = {
    base: responsiveFontSize.base + responsivePadding.base,
    sm: responsiveFontSize.sm + responsivePadding.sm,
    md: responsiveFontSize.md + responsivePadding.md,
    lg: responsiveFontSize.lg + responsivePadding.lg,
    xl: responsiveFontSize.xl + responsivePadding.xl,
  };

  const numDigits =
    value === 0 ? 1 : Math.floor(Math.log10(Math.max(1, value))) + 1;
  const places = Array.from({ length: numDigits }, (_, i) =>
    Math.pow(10, numDigits - 1 - i)
  );

  useEffect(() => {
    if (!counterRef.current || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted, threshold]);

  useEffect(() => {
    if (!hasStarted) return;

    const targetValue = Math.max(value, 0);
    const startValue = currentValue;
    const valueDifference = targetValue - startValue;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const newValue = Math.floor(startValue + easedProgress * valueDifference);

      setCurrentValue(newValue);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, value, duration]);

  const easeOutQuad = (t: number): number => t * (2 - t);

  const textGradient = textGradientStops
    ? `linear-gradient(${textGradientDegree}deg, ${textGradientStops.join(
        ", "
      )})`
    : `linear-gradient(${textGradientDegree}deg, ${textGradientFrom}, ${textGradientTo})`;

  return (
    <div
      ref={counterRef}
      className={`flex items-center justify-center relative ${containerClassName}`}
    >
      <div
        className={`flex items-center overflow-hidden leading-none shadow-none ${counterClassName}`}
        style={{
          fontSize: `clamp(${Math.min(
            120,
            responsiveFontSize.base * 0.6
          )}px, 8vw, ${responsiveFontSize.xl}px)`,
          gap: `clamp(${responsiveGap.base * 0.5}px, 1vw, ${
            responsiveGap.xl
          }px)`,
          borderRadius: `clamp(${responsiveBorderRadius.base}px, 0.5vw, ${responsiveBorderRadius.xl}px)`,
          paddingLeft: `clamp(${responsiveHorizontalPadding.base}px, 1vw, ${responsiveHorizontalPadding.xl}px)`,
          paddingRight: `clamp(${responsiveHorizontalPadding.base}px, 1vw, ${responsiveHorizontalPadding.xl}px)`,
          fontWeight: responsiveFontWeight.base,
        }}
      >
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={currentValue}
            height={height.base}
            digitClassName={digitClassName}
            textGradient={textGradient}
          />
        ))}
        <span
          className="plus-icon-in-counter"
          style={{
            background: textGradient,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontSize: `inherit`,
          }}
        >
          +
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`w-full ${topGradientClassName}`}
          style={{
            height: `clamp(${responsiveGradientHeight.base * 0.5}px, 1.5vw, ${
              responsiveGradientHeight.xl
            }px)`,
            background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
          }}
        />
        <div
          className={`absolute bottom-0 w-full ${bottomGradientClassName}`}
          style={{
            height: `clamp(${responsiveGradientHeight.base * 0.5}px, 1.5vw, ${
              responsiveGradientHeight.xl
            }px)`,
            background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
          }}
        />
      </div>
    </div>
  );
}
