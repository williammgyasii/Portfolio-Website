import React from "react";
import { AnimatePresence, motion } from "framer-motion";

function SectionLayout({ children, sectionId, className }) {
  return (
    <motion.section
      id={sectionId}
      style={{ zIndex: 10 }}
      className={`items-center flex flex-col justify-center xs:mt-huge mt-xsHuge w-4/5 md:w-full ${className}`}
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </motion.section>
  );
}

export default SectionLayout;
