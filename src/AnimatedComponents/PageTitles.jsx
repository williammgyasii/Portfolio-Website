import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

function PageTitles({ text }) {
  const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
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
      className="inline-block text-4xl mb-5 items-center cursor-pointer xs:text-lg rounded-md bg-gray-950/10 px-4 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
    >
      {text}
    </motion.h1>
  );
}

export default PageTitles;
