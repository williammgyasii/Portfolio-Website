import React from "react";
import { motion } from "framer-motion";

function CustomSection({ children, className }) {
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
      className={`items-center flex flex-col justify-center w-4/5 md:w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default CustomSection;
