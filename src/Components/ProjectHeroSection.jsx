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
import SectionLayout from "../Layouts/SectionLayout";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  return (
    <SectionLayout>
      <AnimatedVerticalView>
        <PageTitles text={"Some of my best WORKS!"} />
      </AnimatedVerticalView>

      <BounceLoop>
        <FeaturedProject />
      </BounceLoop>
    </SectionLayout>
  );
};

export default ProjectHeroSection;
