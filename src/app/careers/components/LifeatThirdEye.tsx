"use client";

import ScrollReveal from "./ScrollReveal";

const values = [
  {
    id: "01",
    title: "Breaking the Mold, by Design",
    desc: "We’re a creative company that refuses to fit into neat boxes, because innovation thrives when you color outside the lines.",
  },
  {
    id: "02",
    title: "Built for the Unconventional Thinker",
    desc: "A space where individuals who question the rules and defy the ordinary can bring bold ideas to life.",
  },
  {
    id: "03",
    title: "Balance that Works for Life",
    desc: "A hybrid work culture designed to support your best ideas and your personal well-being, equally.",
  },
  {
    id: "04",
    title: "Embrace Every Challenge, and Then Some",
    desc: "Fueled by a can-do attitude, we don’t just meet expectations — we stretch them into something extraordinary.",
  },
  {
    id: "05",
    title: "Powered by Diverse Perspectives",
    desc: "Different backgrounds, voices, and ideas come together here to spark richer creativity and build stronger solutions.",
  },
];

function LifeatThirdEye() {
  return (
    <div className="lifeat-third-eye-wrapper">
      <h3 className="lifeat-third-eye-title">
        <span>Life at</span> Third Eye
      </h3>
      <p className="lifeat-third-eye-desc">
        Where creative freedom meets real impact , a culture built on curiosity,
        collaboration, and doing work that matters
      </p>

      <div className="bg-black text-white py-16 px-4 md:px-20 max-w-[1262px] mx-auto mb-[8.75rem]">
        {values.map((item, idx) => (
          <div key={idx} className="">
            <div className="flex items-center gap-6">
              <div className="w-50 shrink-0 py-6">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                  textClassName="  text-like-id-wrapper "
                >
                  {item.id}
                </ScrollReveal>
              </div>
              <div>
                <div className="py-6">
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-xl md:text-2xl font-semibold mb-2 text-like-header-wrapper"
                  >
                    {item.title}
                  </ScrollReveal>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-sm md:text-base text-white/70 text-like-paragraph-wrapper"
                  >
                    {item.desc}
                  </ScrollReveal>
                </div>
                <hr
                  className={`w-full h-[1px] bg-[#3F3F3F] opacity-50 ${
                    idx === values.length - 1 ? "hidden" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeatThirdEye;
