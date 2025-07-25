"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 0.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  // Remove the noise-based height calculation and use a straight line
  float height = ((1.0 - uv.y) * 3.5 - 0.5 + 0.5);

  float intensity = 0.5 * height;
  float midPoint = 0.25;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.7, midPoint + uBlend * 0.7, intensity);

  vec3 auroraColor = intensity * rampColor * 0.6;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
}

export default function Aurora(props: AuroraProps) {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5,
    speed = 1.0,
  } = props;
  const propsRef = useRef<AuroraProps>(props);
  propsRef.current = props;

  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program: Program | undefined;

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const parseColor = (hex: string | undefined): [number, number, number] => {
      try {
        const isValidHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex || "");
        if (!isValidHex) {
          if (!warnedColors.has(hex)) {
            console.warn(`Invalid color: ${hex}, using black as fallback`);
            warnedColors.add(hex);
          }
          return [0, 0, 0];
        }
        if (!hex) return [0, 0, 0];
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      } catch (e) {
        console.warn(`Invalid color: ${hex}, using black as fallback`);
        return [0, 0, 0];
      }
    };

    const warnedColors = new Set();

    const getColorStops = () => {
      const stops = propsRef.current.colorStops || colorStops;
      const defaultStops = ["#5227FF", "#7cff67", "#5227FF"];
      return Array.from({ length: 3 }, (_, i) => stops[i] || defaultStops[i]);
    };

    const colorStopsArray = getColorStops().map(parseColor);

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [0, 0] },
        uBlend: { value: blend },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let width = 0;
    let height = 0;

    const resize = () => {
      const newWidth = ctn.offsetWidth;
      const newHeight = ctn.offsetHeight;
      if (width !== newWidth || height !== newHeight) {
        width = newWidth;
        height = newHeight;
        renderer.setSize(width, height);
        program!.uniforms.uResolution.value = [width, height];
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(ctn);
    resize();

    let animateId = 0;
    const loopDuration = 40.0;
    const startTime = performance.now();

    const update = () => {
      animateId = requestAnimationFrame(update);
      const elapsed = (performance.now() - startTime) * 0.001;
      const loopedTime =
        (elapsed % loopDuration) * (propsRef.current.speed ?? speed);

      if (program) {
        program.uniforms.uTime.value = loopedTime;
        program.uniforms.uAmplitude.value =
          propsRef.current.amplitude ?? amplitude;
        program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
        program.uniforms.uColorStops.value = getColorStops().map(parseColor);
      }

      resize();
      renderer.render({ scene: mesh });
    };

    animateId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animateId);
      observer.disconnect();
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, blend, colorStops, speed]);

  return <div ref={ctnDom} className="w-full h-[500px] -mt-20 "></div>;
}
