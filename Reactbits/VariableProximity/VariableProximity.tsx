"use client";

import {
  forwardRef,
  useMemo,
  useRef,
  useEffect,
  MutableRefObject,
  CSSProperties,
  HTMLAttributes,
} from "react";
import { motion } from "framer-motion";

// Utility: useAnimationFrame
function useAnimationFrame(callback: () => void) {
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      callback();
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
}

// Utility: Track mouse position relative to container
function useMousePositionRef(
  containerRef: MutableRefObject<HTMLElement | null>
) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = {
          x: x - rect.left,
          y: y - rect.top,
        };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) =>
      updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 0) {
        const touch = ev.touches[0];
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

// Component Props
interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: MutableRefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  (props, ref) => {
    const {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 100,
      falloff = "linear",
      className = "",
      onClick,
      style,
      ...restProps
    } = props;

    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const mousePositionRef = useMousePositionRef(containerRef);
    const lastPositionRef = useRef({ x: 0, y: 0 });

    const parsedSettings = useMemo(() => {
      const parseSettings = (settingsStr: string) => {
        const settings = new Map<string, number>();
        settingsStr.split(",").forEach((s) => {
          const [axis, value] = s.trim().split(" ");
          if (axis && value) {
            settings.set(axis.replace(/['"]/g, ""), parseFloat(value));
          }
        });
        return settings;
      };

      const fromSettings = parseSettings(fromFontVariationSettings);
      const toSettings = parseSettings(toFontVariationSettings);

      return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: toSettings.get(axis) ?? fromValue,
      }));
    }, [fromFontVariationSettings, toFontVariationSettings]);

    const calculateDistance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const calculateFalloff = (distance: number) => {
      const normalized = Math.min(Math.max(1 - distance / radius, 0), 1);
      switch (falloff) {
        case "exponential":
          return Math.pow(normalized, 2);
        case "gaussian":
          return Math.exp(-Math.pow(distance / (radius / 2), 2) / 2);
        case "linear":
        default:
          return normalized;
      }
    };

    // Animate proximity effect on each animation frame
    useAnimationFrame(() => {
      if (!containerRef?.current) return;

      const { x, y } = mousePositionRef.current;
      if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
        return;
      }
      lastPositionRef.current = { x, y };

      const containerRect = containerRef.current.getBoundingClientRect();

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return;

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

        const distance = calculateDistance(x, y, letterCenterX, letterCenterY);
        const falloffValue =
          distance >= radius ? 0 : calculateFalloff(distance);

        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue =
              fromValue + (toValue - fromValue) * falloffValue;
            return `'${axis}' ${interpolatedValue.toFixed(2)}`;
          })
          .join(", ");

        letterRef.style.fontVariationSettings = newSettings;
      });
    });

    const words = label.split(" ");
    let letterIndex = 0;

    return (
      <span
        ref={ref}
        onClick={onClick}
        style={{
          display: "inline",
          fontFamily: '"Roboto Flex", sans-serif',
          fontVariationSettings: fromFontVariationSettings,
          ...style,
        }}
        className={className}
        {...restProps}
      >
        {words.map((word, wordIndex) => (
          <span
            key={`word-${wordIndex}`}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((letter, charIndex) => {
              const currentLetterIndex = letterIndex++;
              return (
                <motion.span
                  key={`char-${wordIndex}-${charIndex}`}
                  ref={(el) => {
                    letterRefs.current[currentLetterIndex] = el;
                  }}
                  style={{
                    display: "inline-block",
                    fontFamily: '"Roboto Flex", sans-serif',
                    fontVariationSettings: fromFontVariationSettings,
                    fontWeight: 300,
                    fontSize: "8rem",
                    lineHeight: "120%",
                    letterSpacing: "-0.07em",
                    textTransform: "uppercase",
                    color: "#772BF2",
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    );
  }
);

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;
