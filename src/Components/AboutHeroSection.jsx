import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  AboutBlock,
  FirstColumn,
  ImageBlock,
  SecondBlock,
  SecondColumn,
} from "../AnimatedComponents/BentoProfile";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{ zIndex: 10 }}
      className="items-center flex flex-col justify-center 
      xs:mt-huge my-xsHuge w-4/5 md:w-full"
    >
      <motion.h1
        style={{
          borderBottom,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="inline-block text-4xl items-center cursor-pointer xs:text-lg rounded-md bg-gray-950/10 px-4 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
      >
        This is William Gyasi
      </motion.h1>

      <div className=" px-4 py-2 mt-5 text-zinc-50">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid grid-flow-dense grid-cols-12 md:grid-cols-6 gap-1"
        >
          <FirstColumn border={borderBottom} boxShadow={boxShadow} />
          <SecondColumn />
          
        </motion.div>
      </div>
    </motion.section>
    // {/* <SKILLS></SKILLS> */}

    //   {/* EXPERIENCE */}
    //   {/* EDUCATION */}
  );
};

export default AboutHeroSection;
