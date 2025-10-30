"use client";
import React from "react";
import ScrollReveal from "../../../../../Reactbits/ScrollReveal/ScrollReveal";

function ExecutiveSummary({ data }) {
  return (
    <div className="executive-summary-container">
      <div className="desktop-text">
        {/* <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="scroll-reveal-text-wrapper-in-executive-summary"
        >
          {data}
        </ScrollReveal> */}

        <p className="scroll-reveal-text-wrapper-in-executive-summary">{data}</p>
      </div>

      <p className="mobile-text">{data}</p>
    </div>
  );
}

export default ExecutiveSummary;
