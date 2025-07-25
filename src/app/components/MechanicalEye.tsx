'use client';

import { useEffect, useRef } from 'react';

export default function MechanicalEye() {
  const ballRef = useRef(null);
  const eyeRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const eye = eyeRef.current;

    if (!ball || !eye) return;

    const init = () => {
      const eyeRect = eye.getBoundingClientRect();
      const ballRect = ball.getBoundingClientRect();

      /* reduce rim to allow more movement at smaller scales */
      const rim = eyeRect.width * 0.02;  // reduced from 0.04 to 0.02

      const a = (eyeRect.width - 2 * rim - ballRect.width) / 2,
            b = (eyeRect.height - 2 * rim - ballRect.height) / 2,
            a2 = a * a,
            b2 = b * b;

      /* movement amplification factor for smaller scales */
      const scaleCompensation = 1.8;  // increase movement by 80%

      const handleMouseMove = (e) => {
        const r = eye.getBoundingClientRect(),
              dx = (e.clientX - (r.left + r.width / 2)) * scaleCompensation,
              dy = (e.clientY - (r.top + r.height / 2)) * scaleCompensation;

        const t = (dx * dx) / a2 + (dy * dy) / b2,
              s = t > 1 ? 1 / Math.sqrt(t) : 1,
              x = dx * s,
              y = dy * s;

        ball.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    };

    // Wait for images to load
    const images = Array.from(eye.querySelectorAll('img'));
    const imagePromises = images.map(img => {
      if ((img as HTMLImageElement).complete) return Promise.resolve();
      return new Promise(resolve => {
        (img as HTMLImageElement).addEventListener('load', resolve);
        (img as HTMLImageElement).addEventListener('error', resolve);
      });
    });

    Promise.all(imagePromises).then(init);
  }, []);

  return (
    <div className="scale-80-percent">
      <div ref={eyeRef} className="eye">
        {/* Sclera layer */}
        <img src="/assets/sclera.png" className="sclera" alt="" />
        {/* Eyeball that tracks cursor */}
        <img 
          ref={ballRef} 
          src="/assets/eyeball.png" 
          className="eyeball" 
          alt="" 
        />
        {/* Eyelid */}
        <img src="/assets/eyelid.png" className="eyelid" alt="" />
      </div>
    </div>
  );
}