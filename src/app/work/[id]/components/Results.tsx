import React from "react";

function Results({ data, galleryData }) {
  return (
    <div
      className={`max-w-[1232px] mx-auto ${
        galleryData.length > 0 && "mb-[8.75rem]"
      }`}
    >
      <h2
        className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title single-page-results-section-title"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />

      <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description mb-[5rem]">
        {data.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg overflow-hidden">
        {data.metrics.map((metric, index) => (
          <div
            key={index}
            className={`p-6 text-center bg-black text-white transition duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white ${
              metric.highlight
                ? "bg-gradient-to-r from-pink-500 to-purple-600"
                : ""
            }`}
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
