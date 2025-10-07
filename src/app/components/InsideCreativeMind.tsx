"use client";

import dynamic from "next/dynamic";

// Dynamically import ReactPlayer only on the client
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

function InsideCreativeMind() {
  return (
    <div className="inside-creative-mind-wrapper">
      <h3>
        Inside the <span>Creative</span> Mind
      </h3>
      <p>
        Step into the studio with our founders and creative leads as they unpack
        the passion, philosophy, and chaos behind every idea we bring to life
      </p>

      <div className="video-wrapper">
        <div className="responsive-player">
          <ReactPlayer
            url="https://youtu.be/AYiWdIBxidI?si=R0aM3LcjvQUPNV30"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default InsideCreativeMind;
