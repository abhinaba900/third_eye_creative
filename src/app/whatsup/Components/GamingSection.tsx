"use client";

import ActivitySlider from "./EventsSliders";

function GamingSection() {
  const sliderData = [
    {
      title: "BoomKarts 2025 — Go-Kart Championship",
      description:
        " Where our competitive spirit hits the racetrack — full speed, full fun.",
      buttonText: "Replay the Race",
      url:"https://youtu.be/T7Bz9RWhN1c?si=fMWGJVUbpDEpmzth",
      slides: [
       
        {
          src: "/assets/whatsup-slider-1st-image.jpg",
          alt: "Go-Kart on a race track",
        },
        // {
        //   src: "/assets/whatsup-slider-2nd-image.png",
        //   alt: "Racers at the starting line",
        // },
        // {
        //   src: "/assets/whatsup-slider-3rd-image.png",
        //   alt: "A go-kart drifting around a corner",
        // },
        // {
        //   src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
        //   alt: "People laughing while playing a card game",
        // },

        // {
        //   src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
        //   alt: "A complex board game setup",
        // },
      ],
    },
    {
      title: "Web Apps Under Attack",
      description:
        "A quick dive into real threats—and how hackers exploit the web.",
      buttonText: "Watch the Breach",
      url:"https://youtu.be/tra9bnmpPXs?si=_jfvLJj9U-yD_M9t",
      slides: [
        {
          src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
          alt: "People laughing while playing a card game",
        },
        // {
        //   src: "/assets/whatsup-slider-2nd-image.png",
        //   alt: "Close-up of a laser tag gun",
        // },
        // {
        //   src: "/assets/whatsup-slider-1st-image.jpg",
        //   alt: "Players in a laser tag arena",
        // },

        // {
        //   src: "/assets/whatsup-slider-3rd-image.png",
        //   alt: "A team planning their strategy",
        // },

        // {
        //   src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
        //   alt: "Friends playing a board game",
        // },
        // {
        //   src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
        //   alt: "A complex board game setup",
        // },
      ],
    },
    {
      title: "Cybersecurity Made Simple",
      description:
        "Understand the threats. Strengthen your defense. In just minutes.",
      buttonText: "Learn the Hacks",
      url:"https://youtu.be/AYiWdIBxidI?si=ssRrqYghVei3cxNF",
      slides: [
        {
          src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
          alt: "Friends playing a board game",
        },
        // {
        //   src: "/assets/whatsup-slider-3rd-image.png",
        //   alt: "People laughing while playing a card game",
        // },
        // {
        //   src: "/assets/whatsup-slider-1st-image.jpg",
        //   alt: "Friends playing a board game",
        // },
        // {
        //   src: "/assets/whatsup-slider-2nd-image.png",
        //   alt: "A complex board game setup",
        // },
        // {
        //   src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
        //   alt: "People laughing while playing a card game",
        // },
        
      ],
    },
    {
      title: "AI x Coding: The New Era",
      description:
        "Speed up. Collaborate smarter. Code with AI — not against it.",
      buttonText: "See the Shift",
      url:"https://youtu.be/L2DWwwmyi6k?si=GmZvxaR_2jJmLUPq",
      slides: [
        {
          src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
          alt: "A complex board game setup",
        },
        // {
        //   src: "/assets/whatsup-slider-3rd-image.png",
        //   alt: "People laughing while playing a card game",
        // },
        // {
        //   src: "/assets/whatsup-slider-1st-image.jpg",
        //   alt: "Friends playing a board game",
        // },
        // {
        //   src: "/assets/whatsup-slider-2nd-image.png",
        //   alt: "A complex board game setup",
        // },
        // {
        //   src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
        //   alt: "People laughing while playing a card game",
        // },
        // {
        //   src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
        //   alt: "Friends playing a board game",
        // },
      ],
    },
  ];
  return (
    <div className="inside-creative-mind-wrapper gaming-section-wrapper">
      <h3>
        Work Hard, <span>Play Harder</span>
      </h3>
      <p>
        Because deadlines aren’t the only thing <br /> we race against
      </p>

      <div className="w-full">
        {sliderData.map((data, index) => (
          <ActivitySlider
            key={index}
            title={data.title}
            description={data.description}
            buttonText={data.buttonText}
            slides={data.slides}
            url={data.url}
          />
        ))}
      </div>
    </div>
  );
}

export default GamingSection;
