import React, { useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { FiArrowRightCircle } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutPage = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <>
      <StarryBackgroundNoHover />
      <header className="bg-red-500 w-full flex flex-col items-center justify-center">
        <Navbar />
      </header>
      <motion.main
        style={{
          backgroundImage,
          zIndex: 1,
        }}
        className=" flex flex-col  text-white w-full items-center min-h-screen "
      >
        <motion.section className=" h-full w-full items-center justify-center mt-huge">
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
            className="text-center inline-block text-7xl w-fit items-center gap-1.5 xs:text-xs rounded-md bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            About
          </motion.h1>
        </motion.section>
      </motion.main>
    </>
  );
};

export default AboutPage;
