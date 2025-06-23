import Image from "next/image";
import React from "react";

function BuildWithUsBanner() {
  return (
    <div className="build-with-us-banner">
      <h3>
        Ideas don’t build themselves<span>, We do</span>
      </h3>
      <button className="view-more-button">
        Lets Build Something{" "}
        <Image src="/assets/project-data-button-arrow.png" alt="arrow" width={24} height={24} />
      </button>
    </div>
  );
}

export default BuildWithUsBanner;
