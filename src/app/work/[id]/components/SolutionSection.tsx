"use client";
import Image from "next/image";
import React from "react";

export default function SolutionSection({ data }) {
  console.log("SolutionSection Data:", data);

  return (
    <div className="bg-black text-white px-6 mb-[8.813rem] max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight single-page-solution-section-title"
          dangerouslySetInnerHTML={{ __html: data.title }}
        />

        <p className="mt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto single-page-solution-section-description">
          {data.description}
        </p>
      </div>

      {data.layout === "1" ? (
        <>
          {/* Grid */}
          <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2">
            {data.offlineFunctionality && (
              <div className="bg-[#161616] p-6 h-fit rounded-xl shadow-xl flex flex-col items-start lg:pb-0">
                {/* Title and Description */}
                <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                  {data.offlineFunctionality.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                  {data.offlineFunctionality.description}
                </p>
                <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-4 mt-4">
                  {/* Main Image */}
                  {data.offlineFunctionality.image && (
                    <div className="w-full ">
                      <img
                        src={data.offlineFunctionality.image}
                        alt={data.offlineFunctionality.title}
                        width={240}
                        height={280}
                        className="w-100  h-[217px]  max-w-[230px] object-contain"
                      />
                    </div>
                  )}

                  {/* Optional Button Image */}
                  {data.offlineFunctionality.buttonImage && (
                    <div className="mt-4">
                      <Image
                        src={data.offlineFunctionality.buttonImage}
                        alt="Button"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {data.realTimeDiagnostics && (
              <div className="bg-[#161616] h-fit p-6 rounded-xl shadow-xl flex flex-col items-start lg:pb-0">
                {/* Title and Description */}
                <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                  {data.realTimeDiagnostics.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                  {data.realTimeDiagnostics.description}
                </p>
                {/* Main Image */}
                {data.realTimeDiagnostics.image && (
                  <div className="w-full  mx-auto block mt-4">
                    <img
                      src={data.realTimeDiagnostics.image}
                      alt={data.realTimeDiagnostics.title}
                      width={240}
                      height={280}
                      className="w-100 h-[217px] max-w-[230px] object-contain block mx-auto"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-[0.7fr_1.3fr_0.7fr] gap-[1rem] my-[1rem] bg-black text-white">
            {/* Column 1 */}
            {"seamlessBluetoothIntegration" in data && (
              <div className="bg-[#111111] rounded-2xl p-6 shadow-lg lg:pb-0 overflow-hidden">
                <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                  {data.seamlessBluetoothIntegration.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 single-page-solution-cards-description">
                  {data.seamlessBluetoothIntegration.description}
                </p>
                <div className="relative w-full h-48 rounded-lg overflow-hidden -mb-5">
                  <Image
                    src={data.seamlessBluetoothIntegration.image}
                    alt="Bluetooth Integration"
                    fill
                    className="max-h-[280px] "
                  />
                </div>
              </div>
            )}

            {/* Column 2 */}
            {"technologyBackbone" in data && (
              <div className="bg-[#111111] rounded-2xl p-[3rem] shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold mb-3">
                  {data.technologyBackbone.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {data.technologyBackbone.description}
                </p>
                <div className="relative w-full h-full -ml-13 rounded-lg overflow-hidden">
                  <Image
                    src={data.technologyBackbone.image}
                    alt="Technology Stack"
                    fill
                    className="max-w-[500px] max-h-[280px] "
                  />
                </div>
              </div>
            )}

            {/* Column 3 */}
            {"technicianCommandCenter" in data && (
              <div className="bg-[#111111] rounded-2xl p-6 shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold mb-3">
                  {data.technicianCommandCenter.title}
                </h3>
                <p className="text-sm text-gray-300 mb-8">
                  {data.technicianCommandCenter.description}
                </p>
                <div className="relative w-full h-48 rounded-lg overflow-hidden -mb-8">
                  <Image
                    src={data.technicianCommandCenter.image}
                    alt="Command Center"
                    fill
                    className="max-h-[300px]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Grid */}
          <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2 ">
            {data.cloudPoweredAnalytics && (
              <div className="bg-[#161616] h-fit p-6 rounded-xl shadow-xl flex flex-col items-start lg:pb-0 lg:pr-0 overflow-hidden">
                {/* Title and Description */}
                <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                  {data.cloudPoweredAnalytics.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                  {data.cloudPoweredAnalytics.description}
                </p>
                {/* Main Image */}
                {data.cloudPoweredAnalytics.image && (
                  <div className="w-full  ml-auto block mt-4">
                    <img
                      src={data.cloudPoweredAnalytics.image}
                      alt={data.cloudPoweredAnalytics.title}
                      width={240}
                      height={280}
                      className="w-full h-[217px]   block ml-auto "
                    />
                  </div>
                )}
              </div>
            )}
            {data.automatedReporting && (
              <div className="bg-[#161616] h-fit p-6 rounded-xl shadow-xl flex flex-col items-start lg:pb-0">
                {/* Title and Description */}
                <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                  {data.automatedReporting.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                  {data.automatedReporting.description}
                </p>
                {/* Main Image */}
                {data.automatedReporting.image && (
                  <div className="w-full  mx-auto block mt-4">
                    <img
                      src={data.automatedReporting.image}
                      alt={data.automatedReporting.title}
                      width={240}
                      height={280}
                      className="w-100 h-[217px]  block mx-auto"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2">
            {data.offlineFunctionality && (
              <div className="bg-[#161616]  h-fit rounded-xl shadow-xl flex justify-between items-center lg:pb-0">
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                    {data.offlineFunctionality.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                    {data.offlineFunctionality.description}
                  </p>
                </div>
                <div className="">
                  {/* Main Image */}
                  {data.offlineFunctionality.image && (
                    <div className="w-full ">
                      <img
                        src={data.offlineFunctionality.image}
                        alt={data.offlineFunctionality.title}
                        width={240}
                        height={280}
                        className="w-fit  h-[280px]  max-w-[230px] object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {data.realTimeDiagnostics && (
              <div className="bg-[#161616] h-fit  rounded-xl shadow-xl flex justify-between items-center lg:pb-0">
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                    {data.realTimeDiagnostics.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                    {data.realTimeDiagnostics.description}
                  </p>
                </div>
                {/* Main Image */}
                {data.realTimeDiagnostics.image && (
                  <div className="">
                    <img
                      src={data.realTimeDiagnostics.image}
                      alt={data.realTimeDiagnostics.title}
                      width={240}
                      height={280}
                      className="w-fit h-[280px] max-w-[230px] object-cover block mx-auto"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-[1rem] my-[1rem] bg-black text-white">
            {/* Column 2 */}
            {"technologyBackbone" in data && (
              <div className="bg-[#111111] rounded-2xl p-[3rem] shadow-lg overflow-hidden">
                <h3 className="text-xl font-semibold mb-3">
                  {data.technologyBackbone.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {data.technologyBackbone.description}
                </p>
                <div className="relative w-full h-full -ml-13 rounded-lg overflow-hidden">
                  <Image
                    src={data.technologyBackbone.image}
                    alt="Technology Stack"
                    fill
                    className="max-w-[500px] max-h-[280px] "
                  />
                </div>
              </div>
            )}

            <div className="space-y-[1rem]">
              {/* Column 1 */}
              {"seamlessBluetoothIntegration" in data && (
                <div className="bg-[#111111] rounded-2xl flex justify-between items-center  shadow-lg lg:pb-0 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {data.seamlessBluetoothIntegration.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 single-page-solution-cards-description">
                      {data.seamlessBluetoothIntegration.description}
                    </p>
                  </div>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden ">
                    <Image
                      src={data.seamlessBluetoothIntegration.image}
                      alt="Bluetooth Integration"
                      fill
                      className="max-h-[280px] "
                    />
                  </div>
                </div>
              )}

              {/* Column 3 */}
              {"technicianCommandCenter" in data && (
                <div className="bg-[#111111] rounded-2xl flex justify-between items-center flex-row-reverse shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {data.technicianCommandCenter.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-8">
                      {data.technicianCommandCenter.description}
                    </p>
                  </div>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden ">
                    <Image
                      src={data.technicianCommandCenter.image}
                      alt="Command Center"
                      fill
                      className="max-h-[300px]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
            {data.cloudPoweredAnalytics && (
              <div className="bg-[#161616]  h-fit rounded-xl shadow-xl flex flex-col items-start lg:pb-0">
                <div className="pt-6 pl-6 pr-6">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                    {data.cloudPoweredAnalytics.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                    {data.cloudPoweredAnalytics.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-1 gap-4 mt-4">
                  {/* Main Image */}
                  {data.cloudPoweredAnalytics.image && (
                    <div className="w-full ">
                      <img
                        src={data.cloudPoweredAnalytics.image}
                        alt={data.cloudPoweredAnalytics.title}
                        height={280}
                        className="w-full  h-[217px]   object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {data.automatedReporting && (
              <div className="bg-[#161616] h-fit  rounded-xl shadow-xl flex flex-col items-end lg:pb-0">
                <div className="pt-6 pl-6 pr-6">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                    {data.automatedReporting.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                    {data.automatedReporting.description}
                  </p>
                </div>

                <div className="grid relative grid-cols-1 items-center justify-center lg:grid-cols-1 gap-4 mt-4 mx-auto">
                  {/* Main Image */}
                  {data.automatedReporting.image && (
                    <div className="w-full   mt-4">
                      <img
                        src={data.automatedReporting.image}
                        alt={data.automatedReporting.title}
                        height={280}
                        className="w-full relative right-0 h-[217px] ml-auto block  object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {data.SaveandEditPlans && (
              <div className="bg-[#161616] h-fit  rounded-xl shadow-xl flex flex-col items-end lg:pb-0">
                <div className="pt-6 pl-6 pr-6">
                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                    {data.SaveandEditPlans.title}
                  </h3>
                  <p className="text-sm text-gray-400 max-w-[456px] single-page-solution-cards-description">
                    {data.SaveandEditPlans.description}
                  </p>
                </div>
                <div className="grid relative grid-cols-1 items-center justify-center lg:grid-cols-1 gap-4 mt-4 ">
                  {/* Main Image */}
                  {data.SaveandEditPlans.image && (
                    <div className="w-full  ">
                      <img
                        src={data.SaveandEditPlans.image}
                        alt={data.SaveandEditPlans.title}
                        height={280}
                        className="w-full relative right-0 h-[217px] ml-auto block  object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
