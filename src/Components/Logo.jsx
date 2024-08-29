import React from "react";
import { motion } from "framer-motion";

// const motionLink=motion(a)


const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <motion.a
        whileHover={{
          transition: { duration: 1, repeat: Infinity },
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
        }}
        href="/"
        className="w-12 h-12 bg-dark text-light flex items-center justify-center
      rounded-full text-lg font-bold font-sans"
      >
        WG<span className="text-green-700">.</span>
      </motion.a>
    </div>
  );
};

export default Logo;
