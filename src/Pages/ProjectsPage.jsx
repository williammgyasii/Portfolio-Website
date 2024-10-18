import React, { useEffect, useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import {
  animate,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
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
import ProjectTabs from "../Components/ProjectTabs";
import PageTitles from "../AnimatedComponents/PageTitles";
import { twMerge } from "tailwind-merge";
import akronbanner from "../Assets/Akronbanner.png";

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
        className=" flex flex-col 
        bg-green-700 relative text-white w-full  items-center min-h-screen sm:p-1 "
      >
        <StarryBackgroundNoHover />

        <AnimatePresence>
          <SectionLayout
            className={"mt-4 pb-[4rem] "}
            sectionId={"#otherProjects"}
          >
            <AnimatedVerticalView>
              <PageTitles text={"Some of my best WORKS!"} />
            </AnimatedVerticalView>

            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                staggerChildren: 0.05,
              }}
              className="grid grid-cols-6 grid-rows-12 h-[60rem] w-full 
              gap-4 md:gap-2 px-[8rem] md:px-3 sm:px-1"
            >
              <FeatureBlock
                bgColor={color}
                taller
                title={"Akron-Group Management App "}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                className="col-span-3 row-span-6"
              >
                1
              </FeatureBlock>
              <FeatureBlock
                title={"Akron"}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                className="col-span-3 row-span-5 "
              >
                2
              </FeatureBlock>
              <FeatureBlock
                title={"Akron"}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                className="col-span-3 col-start-1 row-span-5"
              >
                3
              </FeatureBlock>
              <FeatureBlock
                title={"Akron"}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                taller
                className="col-span-3 row-span-6 col-start-4 row-start-6"
              >
                4
              </FeatureBlock>
            </motion.div>
          </SectionLayout>
        </AnimatePresence>
      </motion.main>
    </>
  );
};

const FeatureBlock = ({
  className,
  taller,
  short,
  border,
  shadow,
  height = "5rem",
  boxShadow,
  bgColor = "bg-zinc-800",
  children,
  imageSrc,
  title,
  ...rest
}) => {
  return (
    <motion.div
      style={{
        border: border,
        boxShadow: boxShadow,
        backgroundColor: bgColor,
        // height: taller ? "25rem" : "20rem",
      }}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        `rounded-lg border-zinc-700 flex flex-col items-start justify-start
         bg-zinc-800 p-3 sm:col-span-6`,
        className
      )}
      {...rest}
    >
      <div
        className={`sm:w-full ${
          taller ? "h-[70%]" : "h-[60%]"
        }  relative w-full overflow-hidden rounded-lg`}
      >
        <img
          src={imageSrc || akronbanner}
          alt={`${title} Image`}
          style={{ objectPosition: "center 25%" }} // Adjust as needed
          // style={{ backgroundPosition: "center center" }}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="w-full flex flex-row items-center mt-4">
        <span className="leading-snug text-xl font-sans font-normal text-zinc-100">{title}</span>
      </div>
      {children}
    </motion.div>
  );
};

export default ProjectsPage;
