import React, { useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import SkillsSection from "../Components/SkillsSection";
import Header from "../Components/Header";
import AboutHeroSection from "../Components/AboutHeroSection";
import AboutSkillsSection from "../Components/SkillsSection";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutPage = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  return (
    <>
      <Header />
      <motion.main
        style={{
          backgroundImage,
        }}
        className=" flex flex-col bg-green-700  text-white w-full  items-center min-h-screen xs:min-h-0 "
      >
        <AboutHeroSection />
        <AboutSkillsSection />
        {/* ABOUT EXPERIENCE <SECTION> */}
          {/* ABOUT EDUCATION SECTION
        </SECTION> */}
      </motion.main>

      <StarryBackgroundNoHover />
    </>
  );
};

export default AboutPage;
