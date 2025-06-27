import React from "react";
import Counter from "./Counter";

function ImpactStats() {
  return (
    <div className="impact-stats-wrapper">
      <div className="impact-stats-divider">
        <Counter
          value={20}
          fontSize={{
            base: 120, // for mobile (0-640px)
            sm: 150, // for small devices (640px+)
            md: 180, // for medium devices (768px+)
            lg: 200, // for large devices (1024px+)
            xl: 220, // for extra large devices (1280px+)
          }}
        />
        <p>Brands Transformed</p>
      </div>
      <div className="impact-stats-divider">
        <Counter
          value={50}
          fontSize={{
            base: 120, // for mobile (0-640px)
            sm: 150, // for small devices (640px+)
            md: 180, // for medium devices (768px+)
            lg: 200, // for large devices (1024px+)
            xl: 220, // for extra large devices (1280px+)
          }}
        />
        <p>Websites & Platforms Delivered</p>
      </div>
      <div className="impact-stats-divider">
        <Counter
          value={10}
          fontSize={{
            base: 120, // for mobile (0-640px)
            sm: 150, // for small devices (640px+)
            md: 180, // for medium devices (768px+)
            lg: 200, // for large devices (1024px+)
            xl: 220, // for extra large devices (1280px+)
          }}
        />
        <p>Mobile Apps Engineered</p>
      </div>
      <div className="impact-stats-divider">
        <Counter
          value={8}
          fontSize={{
            base: 120, // for mobile (0-640px)
            sm: 150, // for small devices (640px+)
            md: 180, // for medium devices (768px+)
            lg: 200, // for large devices (1024px+)
            xl: 220, // for extra large devices (1280px+)
          }}
        />
        <p>Years of Creative Impact</p>
      </div>
    </div>
  );
}

export default ImpactStats;
