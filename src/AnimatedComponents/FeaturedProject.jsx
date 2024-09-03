import React, { useEffect } from "react";
import ProjectBox from "./ProjectBox";
import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import localImage from "../Assets/SSS-2442.jpg"; // Import your local image

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const FeaturedProject = ({ isFeatured }) => {
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
      style={{ borderBottom, borderTop: borderBottom, boxShadow }}
      className=" w-full flex rounded-md  justify-center  p-5"
    >
      <ProjectBox
        imageSrc={localImage}
        isFeatured
        title="Akron"
        description="Discover a powerful task management app designed for seamless group collaboration.
         Built with React and Material-UI, this app excels in organizing and managing tasks within teams. 
         It features real-time updates and intuitive group assignments,
         ensuring everyone stays aligned and informed."
        technologies={["Firebase", "Material-UI", "JavaScript", "React","Redux"]}
        projectLink="https://akron-server.web.app/"
      />
    </motion.div>
  );
};

export default FeaturedProject;
