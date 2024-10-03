import React from "react";
import { motion } from "framer-motion";

const FadeInOnScroll = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        className="w-64 h-64 bg-purple-500 text-white flex justify-center items-center"
        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
        whileInView={{ opacity: 1 }} // Fade in when in view
        exit={{ opacity: 0 }} // Fade out when leaving view
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: false, amount: 0.3 }} // Trigger on entering view and leaving view
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInOnScroll;
