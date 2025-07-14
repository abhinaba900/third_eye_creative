"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { useParams } from "next/navigation";
import workData from "../workData/WorkData";
import ExecutiveSummary from "./components/ExecutiveSummary";
import ClientBackground from "./components/ClientBackground";
import ProblemStatement from "./components/ProblemStatement";

// Types
type HeroSectionType = {
  title: string;
  tags: string[];
  footerimage: string;
};
type ClientBackgroundType = {
  type: string;
  leftImage: string;
  rightContent: {
    topIcon: string;
    title: string;
    description: string;
    footerContent: {
      title: string;
      description: string;
    }[];
  };
};

type ProblemStatementType = {
  title: string;
  description: string;
  contentSection: {
    icon: string;
    title: string;
    description: string;
    rightsideData: {
      id: string;
      title: string;
    }[];
  };
};

type WorkDataType = {
  id: string;
  herosection: HeroSectionType;
  ExecutiveSummary: string;
  ClientBackground: ClientBackgroundType;
  ProblemStatement: ProblemStatementType;
  // add other fields here if needed
};

const Page = () => {
  const { id: workId } = useParams();
  const [workDatas, setWorkDatas] = useState<WorkDataType | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const matchedWork = workData.find((data) => data.id === workId);
    setWorkDatas(matchedWork || null);
  }, [workId]);

  return (
    <div>
      {workDatas ? (
        <HeroSection data={workDatas.herosection} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}

      {workDatas ? (
        <ExecutiveSummary data={workDatas.ExecutiveSummary} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}

      {workDatas ? (
        <ClientBackground data={workDatas.ClientBackground} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}

      {workDatas ? (
        <ProblemStatement data={workDatas.ProblemStatement} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
    </div>
  );
};

export default Page;
