import React from "react";

function Results({ data, galleryData }) {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(0deg, #772BF2, #EC4B7B), linear-gradient(180deg, #CE0AFF 0%, rgba(206, 10, 255, 0) 100%)",
  };

  // Usage in a component:
  // <div style={gradientStyle}>...</div>
  return (
    <div
      className={`max-w-[1232px] mx-auto ${
        galleryData.length > 0 && "mb-[9.036rem]"
      }`}
    >
      <h2
        className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title single-page-results-section-title"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />

      <p className="mt-[1.5rem] text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description mb-[6.25rem]">
        {data.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 rounded-lg overflow-hidden">
        {data.metrics.map((metric, index) => (
          <div
            key={index}
            className={`
              p-6 text-center bg-black text-white transition duration-300
              hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white
              
              border-transparent
              [border-image:linear-gradient(0deg,_#772BF2,_#EC4B7B)_1]

              [&:nth-child(odd)]:border-r-[1px]
              [&:not(:nth-last-child(-n+2))]:border-b-[1px]

              md:[&:not(:nth-last-child(-n+4))]:border-b-[1px]
              md:[&:not(:nth-child(4n))]:border-r-[1px]
              md:[&:nth-last-child(-n+4)]:border-b-0

              ${
                metric.highlight
                  ? "bg-gradient-to-r from-pink-500 to-purple-600"
                  : ""
              }
            `}
            
          >
            <h3 className="text-2xl font-semibold mb-2 single-page-results-metric-value">
              {metric.value}
            </h3>
            <p className="text-sm single-page-results-metric-description">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
