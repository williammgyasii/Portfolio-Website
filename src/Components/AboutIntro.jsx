import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ zIndex: 10 }}
      className="items-center justify-center mt-xsHuge"
    >
      <motion.h1
        style={{
          borderBottom,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="inline-block text-4xl items-center cursor-pointer xs:text-lg rounded-md bg-gray-950/10 px-4 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
      >
        This is William Gyasi
      </motion.h1>
    </motion.section>
  );
};

export default AboutHeroSection;
