import React from "react";
import { motion } from "framer-motion";

const FadeInOnScroll = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        className=" text-white"
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
