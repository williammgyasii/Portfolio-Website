import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import FeaturedProject from "../AnimatedComponents/FeaturedProject";
import PageTitles from "../AnimatedComponents/PageTitles";
import AnimatedVerticalView from "../AnimatedComponents/AnimatedVerticalView";
import BounceLoop from "../AnimatedComponents/BounceLoop";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  return (
    <motion.section
      style={{ zIndex: 10 }}
      className="items-center flex flex-col justify-center xs:mt-huge my-xsHuge w-4/5 md:w-full"
    >
      <AnimatePresence>
        <AnimatedVerticalView>
          <PageTitles text={"Some of my best WORKS!"} />
        </AnimatedVerticalView>

        <BounceLoop>
          <FeaturedProject />
        </BounceLoop>
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectHeroSection;
