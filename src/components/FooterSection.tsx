import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motionVariants"; // adjust path as needed

function FooterSection() {
  return (
    <motion.footer
      className="w-full bg-black text-white py-10 px-6 md:px-12"
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold uppercase font-orbitron text-white">
            Droota
          </h2>
          <p className="text-gray-400 mt-2 text-sm max-w-sm">
            Ride hard. Spin fast. Burn the canvas.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3 uppercase">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#galleries" className="hover:text-white transition">
                Galleries
              </a>
            </li>
            <li>
              <a href="#setup" className="hover:text-white transition">
                Setup
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-white transition">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact or Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3 uppercase">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Email:{" "}
              <a href="mailto:info@droota.com" className="hover:text-white">
                info@droota.com
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/droota"
                className="hover:text-white"
              >
                @droota
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a href="https://youtube.com/droota" className="hover:text-white">
                Droota Rides
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Droota — All rights reserved.
      </div>
    </motion.footer>
  );
}

export default FooterSection;
