import Image from "next/image";
import React from "react";

function Objectives({ data }) {
  return (
    <div className="max-w-[1232px] mx-auto mb-[7.75rem]">
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-work-page-objectives-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto single-work-page-objectives-description">
          {data.description}
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-1 mb-[1rem]">
        <div className="bg-[#161616] p-6 rounded-[24px] shadow-xl flex  items-center lg:pr-0">
          {/* Title and Description */}
          <div>
            <Image
              src={data.realTimeDiagnostics.icon}
              alt="Icon"
              width={50}
              height={50}
              className="object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 single-work-page-objectives-real-time-diagnostics-title">
              {data.realTimeDiagnostics.title}
            </h3>
            <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
              {data.realTimeDiagnostics.description}
            </p>
          </div>
          <div className="flex gap-5 align-middle w-full">
            {/* Main Image */}
            {data.realTimeDiagnostics.rightsideimage && (
              <div className="w-full mb-4">
                <img
                  src={data.realTimeDiagnostics.rightsideimage}
                  alt={data.realTimeDiagnostics.title}
                  width={800}
                  height={386}
                  className="w-full h-full rounded-lg "
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-[1rem] sm:grid-cols-1 lg:grid-cols-2 mb-[1rem]">
        <div className="h-full">
          <div className="bg-[#161616] p-6 rounded-[24px] shadow-xl overflow-hidden ">
            {/* Title and Description */}
            <div className="mb-[2.5rem]">
              <h3 className="text-lg font-semibold mb-2 single-work-page-objectives-real-time-diagnostics-title">
                {data.upsConnectivity.title}
              </h3>
              <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                {data.upsConnectivity.description}
              </p>
            </div>
            <div className="flex gap-5 align-middle w-full">
              {/* Main Image */}
              {data.upsConnectivity.image && (
                <div className="w-full -mb-38">
                  <img
                    src={data.upsConnectivity.image}
                    alt={data.upsConnectivity.title}
                    width={800}
                    height={386}
                    className="w-full h-full rounded-lg "
                  />
                </div>
              )}
            </div>
          </div>
          <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2 mt-[1rem]">
            <div className="bg-[#161616] p-6 rounded-[24px] shadow-xl flex  items-center ">
              {/* Title and Description */}
              <div className="">
                <Image
                  src={data.cloudSync.icon}
                  alt="Icon"
                  width={50}
                  height={50}
                  className="object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 single-work-page-objectives-real-time-diagnostics-title">
                  {data.cloudSync.title}
                </h3>
                <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                  {data.cloudSync.description}
                </p>
              </div>
            </div>
            <div className="bg-[#161616] p-6 rounded-[24px] shadow-xl flex  items-center  ">
              {/* Title and Description */}
              <div>
                <Image
                  src={data.unifiedProcess.icon}
                  alt="Icon"
                  width={50}
                  height={50}
                  className="object-contain mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 single-work-page-objectives-real-time-diagnostics-title">
                  {data.unifiedProcess.title}
                </h3>
                <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                  {data.unifiedProcess.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="bg-[#161616] p-6 rounded-[24px] shadow-xl  h-full flex flex-col  lg:pr-0 lg:pb-0">
            {/* Title and Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {data.smartReports.title}
              </h3>
              <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                {data.smartReports.description}
              </p>
            </div>
            {/* Main Image */}
            {data.smartReports.image && (
              <div className="w-full h-full max-h-[480px] my-auto ">
                {" "}
                {/* Match height from image */}
                <Image
                  src={data.smartReports.image}
                  alt={data.smartReports.title}
                  width={526}
                  height={486}
                  className="w-full h-full my-auto block rounded-lg object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objectives;
