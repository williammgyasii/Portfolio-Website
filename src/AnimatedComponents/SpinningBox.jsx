import React from "react";
import { motion } from "framer-motion";

const spinningBoxVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    },
  },
};

const SpinningBox = ({ text }) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      variants={spinningBoxVariants}
      initial="spin"
      animate="spin"
    >
      <div className="w-40 h-40 border border-gray-300 rounded-lg bg-white flex items-center justify-center">
        <span className="text-lg font-semibold text-gray-800">{text}</span>
      </div>
    </motion.div>
  );
};

export default SpinningBox;
