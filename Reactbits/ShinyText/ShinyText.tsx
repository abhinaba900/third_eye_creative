"use client";

import React, { useEffect, useState } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '' 
}) => {
  const [position, setPosition] = useState(150); // Start position (%)

  useEffect(() => {
    if (disabled) return;

    const interval = setInterval(() => {
      setPosition(prev => {
        // Reset position when it goes beyond -50%
        if (prev < -50) return 150;
        return prev - 1;
      });
    }, speed * 10); // Adjust speed based on the prop

    return () => clearInterval(interval);
  }, [disabled, speed]);

  return (
    <div
      className={`shiny-text ${className}`}
      style={!disabled ? { 
        backgroundPosition: `${position}% 50%`,
        transition: `background-position ${speed * 0.5}s linear`
      } : undefined}
    >
      {text}
    </div>
  );
};

export default ShinyText;