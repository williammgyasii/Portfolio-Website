import React from "react";
import { motion } from "framer-motion";

const BounceLoop = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // Moving up and down
      transition={{
        duration: 3, // Duration of one cycle of the animation
        repeat: Infinity, // Looping the animation indefinitely
        ease: "easeInOut", // Smooth easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default BounceLoop;
