"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// --- Define the props for our component ---
interface Slide {
  src: string;
  alt: string;
}

interface ActivitySliderProps {
  slides: Slide[];
  title: string;
  description: string;
  buttonText: string;
}

// --- The Slider Component ---
const ActivitySlider: React.FC<ActivitySliderProps> = ({
  slides,
  title,
  description,
  buttonText,
}) => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Track mouse position to toggle navigation visibility
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const sliderWidth = e.currentTarget.clientWidth;
    const mouseX = e.clientX - e.currentTarget.getBoundingClientRect().left;

    if (mouseX < sliderWidth / 2) {
      setShowLeft(true);
      setShowRight(false);
    } else {
      setShowRight(true);
      setShowLeft(false);
    }
  };

  const handleMouseLeave = () => {
    setShowLeft(false);
    setShowRight(false);
  };
  return (
    <div className="w-full max-w-[1232px] mx-auto ">
      {/* Main container with group class for hover effects */}
      <div
        className="relative group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          // Swiper options
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          // Custom navigation elements
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="rounded-2xl overflow-hidden"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[559px] ">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Left Arrow */}
        <div
          className={`swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 z-1
                         bg-opacity-40 text-white rounded-full w-[70px] h-[70px] flex items-center justify-center
                        cursor-pointer opacity-0 ${
                          showLeft ? "group-hover:opacity-100" : ""
                        } transition-opacity duration-300
                        hover:bg-opacity-60`}
        >
          <Image
            src="/assets/Hover over button left.png"
            alt="arrow"
            width={100}
            height={100}
            className="view-more-button-arrow"
          />
        </div>

        {/* Custom Right Arrow */}
        <div
          className={`swiper-button-next-custom absolute top-1/2 right-4 transform -translate-y-1/2 z-1
                         bg-opacity-40 text-white rounded-full w-[70px] h-[70px] flex items-center justify-center
                        cursor-pointer opacity-0 ${
                          showRight ? "group-hover:opacity-100" : ""
                        } transition-opacity duration-300
                        hover:bg-opacity-60`}
        >
          <Image
            src="/assets/Hover over button right.png"
            alt="arrow"
            width={100}
            height={100}
            className="view-more-button-arrow"
          />
        </div>
      </div>

      {/* Text Content Below Slider */}
      <div className="mt-6 text-center text-white">
        <h2 className="text-2xl font-bold inside-the-slider-title-section">
          {title}
        </h2>
        <p className="mt-2 text-gray-300 inside-the-slider-description">
          {description}
        </p>
        <button
          className=" px-8 py-3 bg-transparent border border-gray-500 rounded-full
                         flex items-center justify-center mx-auto gap-2
                         hover:bg-white hover:text-black transition-colors duration-300 w-full view-more-button events-slider-button"
        >
          <span>{buttonText}</span>
          <Image
            src="/assets/project-data-button-arrow.png"
            alt="arrow"
            width={24}
            height={24}
            className="view-more-button-arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ActivitySlider;
