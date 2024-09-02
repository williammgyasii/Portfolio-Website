import React, { useEffect } from "react";
import ProjectBox from "./ProjectBox";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const FeaturedProject = ({}) => {
  const color = useMotionValue(COLORS_TOP[0]);

  const borderBottom = useMotionTemplate`1px solid ${color}`;
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
    <motion.div
      style={{ borderBottom, borderTop: borderBottom }}
      className=" w-full flex rounded-md  justify-center"
    >
      <ProjectBox
        imageSrc="path/to/your/image.jpg"
        title="Awesome Project"
        description="This project is a web application that solves a specific problem."
        technologies={["HTML", "CSS", "JavaScript", "React"]}
        projectLink="https://yourprojectwebsite.com"
      />
    </motion.div>
  );
};

export default FeaturedProject;
