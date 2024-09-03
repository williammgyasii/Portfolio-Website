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

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectsPage = () => {
  const color = useMotionValue(COLORS_TOP[3]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
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
        className=" flex flex-col bg-green-700  text-white w-full  items-center min-h-screen "
      >
        <ProjectHeroSection />

        <SectionLayout className={"mt-10"} sectionId={"#otherProjects"}>
          <div className=" w-full">
            {projects.length > 0 && (
              <div className="grid grid-cols-6 gap-10 ">
                {projects.map((project, index) => (
                  <ProjectBox
                    style={{
                      border,
                      // boxShadow
                    }}
                    className={"p-2 rounded-lg col-span-3"}
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
      <StarryBackgroundNoHover />
    </>
  );
};

export default ProjectsPage;
