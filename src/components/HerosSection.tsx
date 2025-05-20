import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motionVariants"; // adjust path if needed
import LottieMonster from "../components/animations/LottieMonster";

function HerosSection() {
  return (
    <section className="relative h-[60vh] w-full flex flex-col justify-center items-center bg-black px-4 overflow-hidden">
      {/* LOGO TOP LEFT */}
      <motion.div
        className="absolute top-6 left-6"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase text-white font-orbitron bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-md">
          droota
        </h2>
      </motion.div>

      {/* HERO TEXT */}
      <motion.h1
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center leading-tight uppercase tracking-wider font-orbitron z-10"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.span className="block text-gray-200">{`WHEELS SPIN.`}</motion.span>
        <motion.span className="block text-blue-400">{`MOTION BENDS.`}</motion.span>
        <motion.span className="block text-green-200">{`CANVAS BURNS.`}</motion.span>
      </motion.h1>

      {/* ANIMATION */}
      <motion.div
        className="absolute bottom-4 w-[200px] sm:w-[300px]"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <LottieMonster />
      </motion.div>
    </section>
  );
}

export default HerosSection;
