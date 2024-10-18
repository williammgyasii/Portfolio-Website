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
import fintapbanner from "../Assets/Fintap.png";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { TechIcons } from "../Utilities/Constants";

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
        bg-green-700 relative text-white w-full h-full items-center "
      >
        <StarryBackgroundNoHover />

        <AnimatePresence>
          <SectionLayout
            className={"mt-4 pb-[4rem] h-full "}
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
              className="grid grid-cols-6 w-full 
              gap-4 md:gap-2 px-[4rem] md:px-3 sm:px-1 "
            >
              <FeatureBlock
                bgColor={color}
                taller
                imageSrc={akronbanner}
                textsize="small"
                projectLink={"https://akron.framer.website/"}
                title={"Akron-Group Task Management App "}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["ReactNative", "Redux", "Firebase"]}
                className="col-span-3 row-span-7"
              />

              <FeatureBlock
                imageSrc={fintapbanner}
                title={"Fintap"}
                projectLink={"https://fintapp.framer.website/"}
                description=" An platform designed for churches to track partnerships, record monetary contributions, and include a payment platform."
                stack={["React", "Tailwind", "Redux", "Firebase"]}
                className="col-span-3 row-span-5 "
              />

              {/* <FeatureBlock
                title={"Akron 3"}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                className="col-span-3 row-span-6"
              />

              <FeatureBlock
                title={"Akron 4"}
                description="A mobile group task management app that enhances productivity with unique features for team collaboration."
                stack={["React", "JavaScript", "CSS"]}
                taller
                className="col-span-3 row-span-5"
              /> */}
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
  textsize,
  border,
  shadow,
  height = "5rem",
  boxShadow,
  bgColor = "bg-zinc-800",
  children,
  imageSrc,
  projectLink,
  stack,
  description,
  title,
  ...rest
}) => {
  const navigate = useNavigate();
  const sizes = {
    small: "text-[1rem]",
    large: "text-[4rem]",
  };

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
        `rounded-lg border-zinc-700 overflow-hidden flex flex-col items-start justify-start
         bg-zinc-800 p-3 sm:col-span-6 relative sm:h-[30rem]`,
        className
      )}
      {...rest}
    >
      <div
        className={`sm:w-full ${
          taller ? "h-[20rem]" : "h-[17rem]"
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
      <span
        className=" text-xl font-sans 
      font-bold text-zinc-100 mt-3"
      >
        {title}
      </span>
      <span
        className="leading-snug font-thin text-balance text-sm font-sans 
   text-zinc-100 mb-2"
      >
        {description}
      </span>

      <div className="flex  w-[70%] flex-row flex-wrap">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="px-2 py-1 bg-zinc-700 mr-1 text-xs rounded-lg flex-row flex items-center mb-1"
          >
            {TechIcons[tech]}
            {tech}
          </div>
        ))}
      </div>

      <motion.button
        style={{
          border,
          boxShadow,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        onClick={() =>
          window.open(projectLink, "_blank", "noopener,noreferrer")
        }
        className="absolute -bottom-1 -right-1 px-6 py-2  cursor-pointer flex w-fit 
          items-center gap-1.5 xs:text-base text-sm bg-green-700 rounded-md
           text-gray-50 transition-colors hover:bg-gray-950/50 "
      >
        View Project
        <FiArrowRightCircle
          className="transition-transform 
          group-hover:-rotate-45 group-active:-rotate-12"
        />
      </motion.button>
    </motion.div>
  );
};

export default ProjectsPage;
