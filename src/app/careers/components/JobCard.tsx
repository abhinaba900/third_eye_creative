// components/JobCard.tsx
import Image from "next/image";
import { FC } from "react";

interface JobCardProps {
  title: string;
  description: string;
}

const JobCard: FC<JobCardProps> = ({ title, description }) => {
  return (
    <div className="bg-[#141313] border h-[400px] border-white/10 rounded-[1.5rem] p-6 flex flex-col justify-between shadow-lg hover:shadow-purple-500/20 transition duration-300">
      <div className="flex flex-col justify-between  h-full">
        {/* Tags */}

        {/* Title & Description */}
        <div className="flex flex-col justify-end">
          <div className="flex gap-2 mb-[24px] ">
            {["Hybrid", "Full-Time", "Internship"].map((tag) => (
              <div
                key={tag}
                className="p-[1px] rounded-full bg-gradient-to-b from-[#772BF2] via-[#EC4B7B] to-[#CE0AFF] job-card-tag"
              >
                <span className="text-xs px-3 py-1 block bg-black rounded-full text-white font-medium backdrop-blur-sm">
                  {tag}
                </span>
              </div>
            ))}
          </div>
          <h2 className="text-xl font-semibold  job-card-title mb-[24px]">
            {title}
          </h2>
          <p className="text-sm text-white/80 job-card-description">
            {description}
          </p>
        </div>

        {/* Apply Button */}
        <button
          className="w-full view-more-button py-2 bg-[#141313] job-card-apply-button cursor-pointer text-white rounded-full font-medium flex justify-center items-center gap-2 hover:bg-[#1a1a1a] transition-all"
          style={{ marginBottom: "0" }}
        >
          Apply
          <Image
            src="/assets/Navbar-start-project-arrow.png"
            alt="Arrow Right"
            className="view-more-button-arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
