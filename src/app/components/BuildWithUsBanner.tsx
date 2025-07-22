import Image from "next/image";
import React from "react";
import Silk from "../../../Reactbits/Silk/Silk";
import TextPressure from "../../../Reactbits/TextPressure/TextPressure";

function BuildWithUsBanner() {
  return (
    <div className="build-with-us-banner">
      <div className="silk-background">
        <Silk
          speed={5}
          scale={1}
          color="#772BF2"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <h3 className="">
        Ideas don’t build themselves
        <TextPressure text=", We do " className={"build-with-us-span-text"} />
      </h3>

      <button className="view-more-button">
        Lets Build Something{" "}
        <Image
          src="/assets/project-data-button-arrow.png"
          alt="arrow"
          width={24}
          height={24}
          className="view-more-button-arrow"
        />
      </button>
    </div>
  );
}

export default BuildWithUsBanner;
