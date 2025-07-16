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
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BuildWithUsBanner from "./components/BuildWithUsBanner";

// Types
type HeroSectionType = {
  title: string;
  tags: string[];
  footerimage: string;
};
type ClientBackgroundType = {
  type: string;
  leftImage: string;
  leftImage2?: string;
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
  SaveandEditPlans?: {
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

type testimonialstype = {
  leftVideo: string;
  rightContent: {
    title: string;
    description: string;
    details: string;
  };
};

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
  testimonials?: testimonialstype[];

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
        <>
          <HeroSection data={workDatas.herosection} />
          <ExecutiveSummary data={workDatas.ExecutiveSummary} />
          <ClientBackground data={workDatas.ClientBackground} />
          <ProblemStatement data={workDatas.ProblemStatement} />
          <Objectives data={workDatas.objectives} />
          <SolutionSection data={workDatas.Solution} />
          <ChallengesandResolutions data={workDatas.ChallengesandResolutions} />
          <Results data={workDatas.Results} />
          <Gallery data={workDatas.gallery} />
          <Testimonials data={workDatas.testimonials} />
          <BuildWithUsBanner />
        </>
      ) : (
        <p className="text-white p-4 text-center">Work not found.</p>
      )}
    </div>
  );
};

export default Page;
