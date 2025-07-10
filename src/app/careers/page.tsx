import React from "react";
import CareersHerosection from "./components/CareersHerosection";
import OurVision from "./components/OurVision";
import PhotoGallary from "./components/PhotoGallary";
import LifeatThirdEye from "./components/LifeatThirdEye";
import OpenRoles from "./components/OpenRoles";

function page() {
  return (
    <div>
      <CareersHerosection />
      <OurVision />
      <PhotoGallary />
      <LifeatThirdEye />
      <OpenRoles />
    </div>
  );
}

export default page;
