import React, { useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import AboutHeroIntro from "../Components/AboutIntro";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutPage = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  return (
    <>
      <header className="bg-red-500 w-full flex flex-col items-center justify-center">
        <Navbar />
      </header>
      <motion.main
        style={{
          backgroundImage,
        }}
        className=" flex flex-col bg-green-700  text-white w-full  items-center min-h-screen "
      >
        <AboutHeroIntro />
      </motion.main>

      <StarryBackgroundNoHover />
    </>
  );
};

export default AboutPage;
