import React, { useEffect, useState } from "react";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import {
  animate,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { motion } from "framer-motion";
import Header from "../Components/Header";
import AnimatedVerticalView from "../AnimatedComponents/AnimatedVerticalView";

import SectionLayout from "../Layouts/SectionLayout";
import PageTitles from "../AnimatedComponents/PageTitles";
import { twMerge } from "tailwind-merge";
import akronbanner from "../Assets/Akronbanner.png";
import fintapbanner from "../Assets/Fintap.png";
import dressupbanner from "../Assets/dressup.jpg";
import { useNavigate } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi";
import { TechIcons } from "../Utilities/Constants";
import FeatureBlock from "../Components/FeatureBlock";

const COLORS_TOP = [
  "#FF6F61", // Coral
  "#6B5B95", // Purple
  "#FFB347", // Light Orange
  "#D5AAFF", // Lavender
  "#FF9A8B", // Peach
  "#00B2A9", // Teal
  "#FF7F50", // Salmon
  "#A3C4BC", // Sage Green
  "#F7B7A3", // Light Salmon
  "#7D3F2A", // Coffee Brown
  "#8B9DC3", // Blue Grey
  "#D1B8E0", // Light Lilac
  "#E94F37", // Bright Red
  "#C2B280", // Sand
  "#E2A7B3", // Blush Pink
  "#7F8C8D", // Cool Grey
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
            className={"mt-[0.8rem] pb-[4rem] min-h-screen "}
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
              gap-4 md:gap-2 px-[4rem] md:px-3  sm:px-1 "
            >
              <FeatureBlock
                bgColor={color}
                taller
                imageSrc={fintapbanner}
                textsize="small"
                projectLink={"https://penny-server--akron-server.us-central1.hosted.app/"}
                title={"Penny Pilot"}
                description="A comprehensive financial health platform for everyone and professionals, enabling effective budgeting, income forecasting, and spending insights to improve financial stability and decision-making."
                stack={["Next.js", "Redux", "Firebase"]}
                className="col-span-3 row-span-6"
              />

              {/* <FeatureBlock
                imageSrc={fintapbanner}
                title={"Fintap"}
                projectLink={"https://fintapp.framer.website/"}
                description=" An platform designed for churches to track partnerships, record monetary contributions, and include a payment platform."
                stack={["React", "Tailwind", "Redux", "Firebase"]}
                className="col-span-3 row-span-5 "
              />

<FeatureBlock
                imageSrc={dressupbanner}
                title={"Dressup - Mobile App"}
                projectLink={"https://dressup.framer.website/"}
                description=" DRESSUP helps people with outfit planning, offering AI-generated styling suggestions. The platform includes features like virtual wardrobe management, event-based outfit planning, and integration with shopping options."
                stack={["React", "Tailwind", "Redux", "Firebase"]}
                className="col-span-3 row-span-4 "
              /> */}

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

export default ProjectsPage;
