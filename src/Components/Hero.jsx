// src/components/HeroSection.jsx
import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className=" flex justify-between text-white w-fullitems-center h-screen "
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }} // Moving up and down
        transition={{
          duration: 3, // Duration of one cycle of the animation
          repeat: Infinity, // Looping the animation indefinitely
          ease: "easeInOut", // Smooth easing
        }}
        className="flex flex-col w-3/5 mx-auto  sm:w-full  items-start justify-center xs:px-5"
      >
        <h1 className="text-7xl font-sans font-bold mb-2 sm:mb-0">
          Hey, I'm William<span className="text-green-700">.</span>
        </h1>
        <h1 className="text-2xl sm:text-2xl font-bold">
          I'm a <span className="text-green-700">Front-End Developer</span>
        </h1>
        <p className="text-sm sm:text-xs mb-6">
          A front-end developer with a passion for crafting beautiful,
          user-friendly websites. Whether you're here to see some cool projects
          or just curious about what I do, you're in the right place. Let's
          build something awesome together!"
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          View Resume
          <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </motion.div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default HeroSection;
