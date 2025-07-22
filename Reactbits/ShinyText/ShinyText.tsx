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
  speed = 5, 
  className = '' 
}) => {
  return (
    <div
      className={`shiny-text ${!disabled ? 'animated' : ''} ${className}`}
      style={!disabled ? { animationDuration: `${speed}s` } : undefined}
    >
      {text}
    </div>
  );
};

export default ShinyText;