"use client";

import React, { useEffect, useState } from "react";
import monster from "../../../public/animations/monster.json"; // local JSON

function LottieMonster() {
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    // Import only in the browser
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  if (!Lottie) return null;

  return (
    <div className="w-[150px] opacity-[0.2]">
      <Lottie animationData={monster} loop autoplay />
    </div>
  );
}

export default LottieMonster;
