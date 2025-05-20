"use client";

import { useEffect, useRef, useState } from "react";
import {
  useRive,
  Fit,
  Alignment,
  Layout,
  StateMachineInput,
} from "@rive-app/react-canvas";
import Lenis from "@studio-freight/lenis";

export default function RiveAnimation() {
  const STATE_MACHINE_NAME = "State Machine 1";
  const SCROLL_INPUT_NAME = "scrollActive";
  const HOVER_INPUT_NAME = "hoverActive";

  const [scrollInput, setScrollInput] = useState<StateMachineInput | null>(
    null
  );
  const [hoverInput, setHoverInput] = useState<StateMachineInput | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { RiveComponent, rive } = useRive({
    // src: "/animations/untitled-5.riv",
    // src: "/animations/untitled-17.riv",
    src: "/animations/coffe.riv",
    // src: "/animations/bg_grid.riv",
    // src: "/animations/linear_bg.riv",
    // src: "/animations/planetdouch3.riv",
    // src: "/animations/lesson.riv",

    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      console.log("Rive loaded");

      if (rive) {
        const inputs = rive.stateMachineInputs(STATE_MACHINE_NAME);
        console.log(
          "Inputs:",
          inputs.map((i) => i.name)
        );

        const scroll = inputs.find((i) => i.name === SCROLL_INPUT_NAME);
        const hover = inputs.find((i) => i.name === HOVER_INPUT_NAME);

        if (!scroll) console.warn("Scroll input not found!");
        if (!hover) console.warn("Hover input not found!");

        if (scroll) setScrollInput(scroll);
        if (hover) setHoverInput(hover);
      }
    },
  });

  // Scroll animation with Lenis
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     lerp: 0.1, // controls smoothness: 0 (no smoothing) to 1 (max smoothing)
  //   });

  //   let rafId: number;

  //   const raf = (time: number) => {
  //     lenis.raf(time);
  //     rafId = requestAnimationFrame(raf);
  //   };
  //   rafId = requestAnimationFrame(raf);

  //   lenis.on("scroll", ({ scroll }: { scroll: number }) => {
  //     setScrollY(scroll);

  //     console.log("Scroll Y:", scroll);

  //     if (scrollInput) {
  //       console.log("Setting scrollInput TRUE");
  //       scrollInput.value = true;
  //       if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //       timeoutRef.current = setTimeout(() => {
  //         console.log("Setting scrollInput FALSE");
  //         scrollInput.value = false;
  //       }, 300);
  //     }
  //   });

  //   return () => {
  //     cancelAnimationFrame(rafId);
  //     lenis.destroy();
  //   };
  // }, [scrollInput]);

  // Hover handlers
  const handleMouseEnter = () => {
    console.log("Mouse entered");
    if (hoverInput) {
      hoverInput.value = true;
      console.log("hoverInput set to TRUE");
    }
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    if (hoverInput) {
      hoverInput.value = false;
      console.log("hoverInput set to FALSE");
    }
  };

  return (
    <div
      className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[200px] h-[76px] z-0 pointer-events-auto"
      style={{
        transform: `translateY(${scrollY * 0.05}px)`,
        display: "flex",
        justifyContent: "flex-start",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RiveComponent />
    </div>
  );
}
