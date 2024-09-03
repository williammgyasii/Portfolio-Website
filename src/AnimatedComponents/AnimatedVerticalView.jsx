import React from "react";
import { motion } from "framer-motion";

function AnimatedVerticalView({ className, children }) {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const singelWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={singelWord}
      initial="initial"
      animate="animate"
      className="w-full mx-auto ру-2 flex items-center justify-center text-center"
    >
      {children}
    </motion.div>
  );
}

export default AnimatedVerticalView;
