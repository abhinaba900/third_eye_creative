import React from "react";
import CircularGallery from "../../../../Reactbits/CircularGallery/CircularGallery";

function PhotoGallary() {
  const items = [
    { image: "/assets/carrer-gallery-image-1.png", text: "" },
    { image: "/assets/carrer-gallery-image-2.png", text: "" },
    { image: "/assets/carrer-gallery-image-3.png", text: "" },
    { image: "/assets/carrer-gallery-image-4.jpg", text: "" },
  ];
  return (
    <div className="relative h-[500px] mb-[8.75rem]">
      <CircularGallery
        items={items}
        bend={0}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}

export default PhotoGallary;
