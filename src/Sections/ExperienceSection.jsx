import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import React, { useEffect } from "react";
import { COLORS_TOP } from "../Utilities/Constants";
import Timeline from "../AnimatedComponents/AnimatedTimeline";

function ExperienceSection() {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;
  const contentBorder = useMotionTemplate`1px solid ${color}`;
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <motion.section
      style={{ zIndex: 10 }}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // Moving up and down
      transition={{
        duration: 3, // Duration of one cycle of the animation
        repeat: Infinity, // Looping the animation indefinitely
        ease: "easeInOut", // Smooth easing
      }}
      className="items-center flex flex-col justify-center py-10 w-4/5 md:w-full"
    >
      <motion.h1
        style={{
          borderBottom,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="inline-block text-4xl items-center cursor-pointer 
        xs:text-lg rounded-md bg-gray-950/10 px-4 mb-4 py-3 text-gray-50 
        transition-colors hover:bg-gray-950/50"
      >
        Work Experience
      </motion.h1>

      <motion.div>
        <Timeline />
      </motion.div>
    </motion.section>
  );
}

export default ExperienceSection;
