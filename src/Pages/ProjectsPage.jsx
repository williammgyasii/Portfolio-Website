import React, { useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import ProjectHeroSection from "../Components/ProjectIntro";
import FeatureProject from "../AnimatedComponents/FeaturedProject";
import AnimatedText from "../AnimatedComponents/AnimatedVerticalView";
import Header from "../Components/Header";
import FeaturedProject from "../AnimatedComponents/FeaturedProject";
import AnimatedVerticalView from "../AnimatedComponents/AnimatedVerticalView";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectsPage = () => {
  const color = useMotionValue(COLORS_TOP[3]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <>
      <Header />
      <motion.main
        style={{
          backgroundImage,
        }}
        className=" flex flex-col bg-green-700  text-white w-full  items-center min-h-screen "
      >
        {/* PROJECT HEADING */}
     
          <ProjectHeroSection />
  

        <div style={{ zIndex: 10 }} className="grid">
          a grid of projects
        </div>
      </motion.main>
      <StarryBackgroundNoHover />
    </>
  );
};

export default ProjectsPage;
