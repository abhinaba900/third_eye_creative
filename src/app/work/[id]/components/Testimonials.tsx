"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonials({ data }) {
  return (
    data.length > 0 && (
      <div className="relative border-red-900 testimonial-showcase-main-container-indevisual-page">
        <Image
          src="/assets/testimonial-showcase background image.png"
          alt="Testimonial Background"
          width={602}
          height={557}
          className="backround-image-testimonial-showcase"
        />

        <div className="absolute-container-testimonial-showcase">
          <h3 className="absolute-title-testimonial-showcase">
            Voices of <span>Trust</span>
          </h3>
          <p className="absolute-paragraph-testimonial-showcase max-w-[476px] in-indevisual-work-page-testimonial-description">
            What our clients say about creating with us
          </p>

          <div
            className="bg-[rgba(255,255,255,0.1)] p-6 rounded-xl max-w-[1232px] max-h-full h-full mx-auto"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="testimonial-swiper"
            >
              {data.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col  lg:flex-row gap-6  items-center rounded-xl lg:p-6">
                    {/* Video Section */}
                    <div className="w-full lg:w-1/2 overflow-hidden rounded-xl h-full">
                      <video
                        src={item.video}
                        controls
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Text Section */}
                    <div
                      className="w-full lg:w-1/2 p-6 rounded-xl relative h-full flex flex-col justify-between text-left"
                      style={{
                        background:
                          "linear-gradient(79.59deg, rgba(51, 51, 62, 0.16) 6.21%, rgba(83, 84, 108, 0.16) 98.02%)",
                        border: "1px solid rgba(63, 63, 63, 1)",
                      }}
                    >
                      <div>
                        <Image
                          src="/assets/single-page-testimonial-left-coma.svg"
                          alt="Left Coma"
                          width={40}
                          height={40}
                          className="mb-4"
                        />
                        <h3 className="text-lg font-semibold single-page-testimonial-name">
                          {item.rightContent.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 single-page-testimonial-title">
                          {item.rightContent.details}
                        </p>
                        <p className="text-sm single-page-testimonial-description">
                          {item.rightContent.description}
                        </p>
                      </div>
                      <Image
                        src="/assets/single-page-testimonial-right-coma.svg"
                        alt="Right Coma"
                        width={40}
                        height={40}
                        className=" absolute bottom-4 right-4"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Swiper Pagination styling */}
            <style jsx global>{`
              .testimonial-swiper .swiper-pagination {
                margin-top: 20px !important;
                text-align: center;
                margin-bottom: -13px;
              }

              .testimonial-swiper .swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: #666;
                opacity: 1;
                margin: 0 6px !important;
                transition: all 0.3s ease;
              }

              .testimonial-swiper .swiper-pagination-bullet-active {
                background: #a855f7;
                width: 12px;
                height: 12px;
              }
            `}</style>
          </div>
        </div>
      </div>
    )
  );
}

export default Testimonials;
