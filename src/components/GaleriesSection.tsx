import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motionVariants";

function GaleriesSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const galleries = [
    {
      title: "Downhill Rush",
      description: "Fast & Raw Terrain Domination",
      slug: "downhill",
    },
    {
      title: "Urban Slam",
      description: "Concrete playgrounds & night rides",
      slug: "urban",
    },
    {
      title: "Trail Fire",
      description: "Twists, roots, and forest heat",
      slug: "mountain",
    },
    {
      title: "Mud Lords",
      description: "Dirty, gritty, zero apologies",
      slug: "mud",
    },
    {
      title: "Crank City",
      description: "Tech setups & gear rituals",
      slug: "crank",
    },
    {
      title: "Highline Edge",
      description: "Altitude, wind, and risk",
      slug: "highline",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-black text-white grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {galleries.map((item, index) => {
        const imagePath = `/images/galleries/${item.slug}${
          isMobile ? "-mobile" : ""
        }.webp`;

        return (
          <motion.div
            key={index}
            className="relative h-[calc(100vh/3)] sm:h-[calc(100vh/2)] overflow-hidden group"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-105"
              style={{
                backgroundImage: `url(${imagePath})`,
                filter: "brightness(0.6)",
              }}
            />
            {/* Overlay text */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <h2 className="text-2xl font-bold uppercase">{item.title}</h2>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default GaleriesSection;
