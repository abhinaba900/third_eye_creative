import React from "react";
import CareersHerosection from "./components/CareersHerosection";
import OurVision from "./components/OurVision";
import PhotoGallary from "./components/PhotoGallary";
import LifeatThirdEye from "./components/LifeatThirdEye";
import OpenRoles from "./components/OpenRoles";
import GetinTouch from "./components/GetinTouch";

function page() {
  return (
    <div>
      <CareersHerosection />
      <OurVision />
      <PhotoGallary />
      <LifeatThirdEye />
      <OpenRoles />
      <GetinTouch />
    </div>
  );
}

export default page;
