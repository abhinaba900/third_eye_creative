import React from "react";
import CareersHerosection from "./components/CareersHerosection";
import OurVision from "./components/OurVision";
import PhotoGallary from "./components/PhotoGallary";
import LifeatThirdEye from "./components/LifeatThirdEye";
import OpenRoles from "./components/OpenRoles";
import GetinTouch from "./components/GetinTouch";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Careers at Third Eye Creative | Join a Bold Creative Team in Bangalore',
  description: 'We’re hiring designers, developers & creators who think differently. Join Third Eye Creative and build work that actually moves people.',
};

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
