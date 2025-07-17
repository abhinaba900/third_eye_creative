// components/SplineViewer.js
"use client";

import { useEffect, useRef } from "react";

export default function SplineViewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!viewerRef.current?.scene) return;

      const splineApp = viewerRef.current.scene;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const normX = (e.clientX / width - 0.5) * 2;
      const normY = (e.clientY / height - 0.5) * -2;

      const maxYaw = 50;
      const maxPitch = 30;

      const yaw = normX * maxYaw;
      const pitch = normY * maxPitch;

      const object =
        splineApp.findObjectByName("Eyeball") || splineApp.children[0];
      if (object) {
        object.rotation.y = (yaw * Math.PI) / 180;
        object.rotation.x = (pitch * Math.PI) / 180;
      }
    };

    const viewer = viewerRef.current;

    const onLoad = () => {
      console.log("✅ Spline loaded");
      window.addEventListener("mousemove", handleMouseMove);
    };

    viewer?.addEventListener("load", onLoad);

    return () => {
      viewer?.removeEventListener("load", onLoad);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
      <div  className=" h-[550px] relative overflow-hidden ">
          <div className="w-[100%] h-[100%] absolute top-0 left-0"></div>
      <spline-viewer
        ref={viewerRef}
        url="https://prod.spline.design/n9NXzA4MWZcCsCpa/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
          background: "transparent",
        }}
      />
    </div>
  );
}
