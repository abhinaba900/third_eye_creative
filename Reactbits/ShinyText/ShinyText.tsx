import React from 'react';


interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ 
  text, 
  disabled = false, 
  speed = 2, 
  className = '' 
}) => {
  return (
    <span className={`shiny-text-container ${className}`}>
      <span className={`shiny-text ${disabled ? '' : 'shiny-animate'}`}
        style={{ '--speed': `${speed}s` } as React.CSSProperties}>
        {text}
      </span>
    </span>
  );
};

export default ShinyText;