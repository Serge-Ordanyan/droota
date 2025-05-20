import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motionVariants"; // adjust path if needed
import BottlesRive from "./animations/BottlesRive";
import CycleRive from "./animations/CycleRive";

function AnimationsSection() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Half: Background Video */}
      <div style={{ height: "50%", position: "relative" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        >
          <source src="/video/droota-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Half with Animated Title */}
      <motion.div
        style={{
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0d0d0d",
        }}
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          style={{
            color: "#fff",
            fontSize: "4rem",
            fontWeight: "bold",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            zIndex: 2,
          }}
          variants={fadeUpVariant}
        >
          The Setup
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default AnimationsSection;
