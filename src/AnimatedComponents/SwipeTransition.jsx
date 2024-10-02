import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ColorSwipeTransition = ({ children }) => {
  const swipeVariants = {
    initial: {
      x: "100vw", // Start fully off-screen to the right
    },
    animate: {
      x: 0, // Swipe to cover the entire screen
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1], // Smooth animation curve
      },
    },
    exit: {
      x: "-100vw", // Swipe out to the left, revealing the next page
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      className="color-swipe"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={swipeVariants}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10, // Ensure it covers the entire screen
        backgroundColor: "#FF6347", // Color for the swipe (customize as needed)
      }}
    />
  );
};

export default ColorSwipeTransition;
