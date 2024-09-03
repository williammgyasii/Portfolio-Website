import React, { useEffect, useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import ProjectHeroSection from "../Components/ProjectHeroSection";
import FeatureProject from "../AnimatedComponents/FeaturedProject";
import AnimatedText from "../AnimatedComponents/AnimatedVerticalView";
import Header from "../Components/Header";
import FeaturedProject from "../AnimatedComponents/FeaturedProject";
import AnimatedVerticalView from "../AnimatedComponents/AnimatedVerticalView";
import { projects } from "../Utilities/projects";
import ProjectBox from "../AnimatedComponents/ProjectBox";
import SectionLayout from "../Layouts/SectionLayout";

const COLORS_TOP = [
  "#FF6F61", // Coral
  "#6B5B95", // Purple
  "#88D8C0", // Light Teal
  "#FFB347", // Light Orange
  "#D5AAFF", // Lavender
  "#FF9A8B", // Peach
  "#00B2A9", // Teal
  "#FF7F50", // Salmon
  "#A3C4BC", // Sage Green
  "#F7B7A3", // Light Salmon
  "#F8B400", // Mustard Yellow
  "#7D3F2A", // Coffee Brown
  "#C6E2E9", // Powder Blue
  "#8B9DC3", // Blue Grey
  "#D1B8E0", // Light Lilac
  "#E94F37", // Bright Red
  "#C2B280", // Sand
  "#E2A7B3", // Blush Pink
  "#7F8C8D", // Cool Grey
  "#B9FBC0", // Mint Green
  "#FFCCB6",
];

const ProjectsPage = () => {
  const color = useMotionValue(COLORS_TOP[3]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 100,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <Header />
      <motion.main
        style={{
          backgroundImage,
        }}
        className=" flex flex-col bg-green-700 relative text-white w-full  items-center min-h-screen sm:p-1 "
      >
        <StarryBackgroundNoHover />
        <ProjectHeroSection />

        <SectionLayout className={"mt-10"} sectionId={"#otherProjects"}>
          <div className=" w-full">
            {projects.length > 0 && (
              <div className="grid grid-cols-6 gap-10  ">
                {projects.map((project, index) => (
                  <ProjectBox
                    style={{
                      border,
                      // boxShadow
                    }}
                    className={"p-2 rounded-lg col-span-3 sm:col-span-6"}
                    key={index}
                    imageSrc={project.imageSrc}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    projectLink={project.projectLink}
                    isFeatured={project.isFeatured}
                  />
                ))}
              </div>
            )}
          </div>
        </SectionLayout>
      </motion.main>
    </>
  );
};

export default ProjectsPage;
