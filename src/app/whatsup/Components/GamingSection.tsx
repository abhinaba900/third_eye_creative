"use client";

import ActivitySlider from "./EventsSliders";

function GamingSection() {
  const sliderData = [
    {
      title: "BoomKarts, Go-Karting Championship 2025",
      description:
        "We swapped our desks for the racetrack and went full throttle. The Go-Karting Championship wasn’t just about who finished first—it was about pushing limits, cheering for each other, and feeling the rush of competition outside the studio.",
      buttonText: "Watch Race Highlights",
      slides: [
        {
          src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
          alt: "A complex board game setup",
        },
        {
          src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
          alt: "People laughing while playing a card game",
        },
        {
          src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
          alt: "Friends playing a board game",
        },
      ],
    },
    {
      title: "CS:GO Laser Tag",
      description:
        "Inspired by one of our favorite games, we brought the CS:GO experience into real life with a themed laser tag showdown. Teams geared up, strategies were made, and the studio spirit lit up the arena with laughter, adrenaline, and a dash of rivalry.",
      buttonText: "Watch the Battle",
      slides: [
        {
          src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
          alt: "Friends playing a board game",
        },
        {
          src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
          alt: "People laughing while playing a card game",
        },

        {
          src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
          alt: "A complex board game setup",
        },
      ],
    },
    {
      title: "Creative Studio Nights",
      description:
        "Some of our best ideas come after hours. From impromptu jam sessions to brainstorming marathons, our Creative Studio Nights blend work, play, and passion. It’s where art, music, and imagination meet—fueling the culture that makes us who we are.",
      buttonText: "See the Vibes",
      slides: [
        {
          src: "/assets/Cyber Security Podcast 2 Thumbnail.webp",
          alt: "People laughing while playing a card game",
        },
        {
          src: "/assets/TEC Cyber Security Podcast Thumbnail.webp",
          alt: "Friends playing a board game",
        },
        {
          src: "/assets/TEC Dev Dispatch Podcast Thumbnail.webp",
          alt: "A complex board game setup",
        },
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
          />
        ))}
      </div>
    </div>
  );
}

export default GamingSection;
