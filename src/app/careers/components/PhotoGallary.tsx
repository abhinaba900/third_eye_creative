import React from "react";
// import Masonry from "../../../../Rectbits/Masonry/Masonry";
import DomeGallery from "@/components/DomeGallery";

function PhotoGallary() {
  // const items = [
  //   { id: "1", img: "/assets/carrer-gallery-image-1.jpg", height: 400 },
  //   { id: "2", img: "/assets/carrer-gallery-image-2.jpg", height: 500 },
  //   { id: "3", img: "/assets/carrer-gallery-image-3.jpg", height: 700 },
  //   { id: "4", img: "/assets/carrer-gallery-image-4.jpg", height: 400 },
  //   { id: "5", img: "/assets/carrer-gallery-image-5.jpg", height: 600 },
  //   { id: "6", img: "/assets/carrer-gallery-image-6.jpg", height: 500 },
  //   { id: "7", img: "/assets/carrer-gallery-image-7.jpg", height: 700 },
  // ];
  // const items2 = [
  //   {
  //     image: "/assets/carrer-gallery-image-1.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-2.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-3.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-4.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-5.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-6.jpg",
  //     text: "",
  //   },
  //   {
  //     image: "/assets/carrer-gallery-image-7.jpg",
  //     text: "",
  //   },
  // ];

  return (
    <div className="relative   mt-[5rem]  mb-[5rem]">
      {/* <CircularGallery
        items={items2}
        bend={0}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      /> */}

      <div style={{ width: "100%" }} className="h-[600px]">
        <DomeGallery fit={1} grayscale={false} />
      </div>

      {/* <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={true}
      /> */}
    </div>
  );
}

export default PhotoGallary;
