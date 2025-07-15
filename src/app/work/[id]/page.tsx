"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import { useParams } from "next/navigation";
import workData from "../workData/WorkData";
import ExecutiveSummary from "./components/ExecutiveSummary";
import ClientBackground from "./components/ClientBackground";
import ProblemStatement from "./components/ProblemStatement";
import SolutionSection from "./components/SolutionSection";
import Objectives from "./components/Objectives";
import ChallengesandResolutions from "./components/ChallengesandResolutions";
import Results from "./components/Results";
import Gallery from "../components/Gallery";

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

type ObjectiveType = {
  title: string;
  description: string;
  realTimeDiagnostics: {
    icon: string;
    title: string;
    description: string;
    rightsideimage: string;
  };
  upsConnectivity: {
    title: string;
    description: string;
    image: string;
  };
  smartReports: {
    title: string;
    description: string;
    image: string;
  };
  cloudSync: {
    title: string;
    description: string;
    icon: string;
  };
  unifiedProcess: {
    title: string;
    description: string;
    icon: string;
  };
};

type SolutionType = {
  layout: string;
  title: string;
  description: string;
  offlineFunctionality: {
    title: string;
    description: string;
    image: string;
    buttonImage: string;
  };
  realTimeDiagnostics: {
    title: string;
    description: string;
    image: string;
  };
  seamlessBluetoothIntegration: {
    title: string;
    description: string;
    image: string;
  };
  technologyBackbone: {
    title: string;
    description: string;
    image: string;
  };
  technicianCommandCenter: {
    title: string;
    description: string;
    image: string;
  };
  cloudPoweredAnalytics: {
    title: string;
    description: string;
    image: string;
  };
  automatedReporting: {
    title: string;
    description: string;
    image: string;
  };
};

type ChallengesAndResolutionsType = {
  title: string;
  description: string;
  challenges: {
    title: string;
    points: string[];
    image: string;
  };
  solutions: {
    title: string;
    points: string[];
    image: string;
  };
};

type MetricsItem = {
  value: string;
  description: string;
};

type ResultsType = {
  title: string;
  description: string;
  metrics: MetricsItem[];
};

type GalleryItem =
  | { type: "single"; image: string }
  | { type: "multiple"; images: string[] }
  | { type: string; image?: string; images?: string[] };

type WorkDataType = {
  id: string;
  herosection?: HeroSectionType;
  ExecutiveSummary?: string;
  ClientBackground?: ClientBackgroundType;
  ProblemStatement?: ProblemStatementType;
  objectives?: ObjectiveType;
  Solution?: SolutionType;
  ChallengesandResolutions?: ChallengesAndResolutionsType;
  Results?: ResultsType;
  gallery?: GalleryItem[];

  // add other fields here if needed
};

const Page = () => {
  const { id: workId } = useParams();
  const [workDatas, setWorkDatas] = useState<WorkDataType | null>(null);

  useEffect(() => {
    const matchedWork = workData.find((data) => data.id === workId);
    setWorkDatas(matchedWork || null);
    window.scrollTo(0, 0);
  }, []);

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
      {workDatas ? (
        <Objectives data={workDatas.objectives} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
      {workDatas ? (
        <SolutionSection data={workDatas.Solution} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
      {workDatas ? (
        <ChallengesandResolutions data={workDatas.ChallengesandResolutions} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
      {workDatas ? (
        <Results data={workDatas.Results} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
      {workDatas ? (
        <Gallery data={workDatas.gallery} />
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
    </div>
  );
};

export default Page;
