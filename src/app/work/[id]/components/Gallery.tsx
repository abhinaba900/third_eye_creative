import React from "react";

function Gallery({ data }) {
  return (
    <div className="grid gap-4 max-w-[1232px] px-3 sm:px-0 mx-auto mb-[9.036rem] gallery-main-container-individual-page margin-buttom-for-mobile">
      {data.map((item, index) => {
        if (item.type === "multiple") {
          return (
            <div key={index} className="grid grid-cols-2 gap-4 items-stretch">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery image ${index}-${i}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ))}
            </div>
          );
        } else {
          return (
            <div key={index}>
              <img
                src={item.image}
                alt={`Gallery image ${index}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Gallery;
