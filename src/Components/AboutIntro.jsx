import React, { useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import myImage from "../Assets/SSS-2442.jpg";
import { FiArrowRightCircle } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AboutHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;
  const contentBorder = useMotionTemplate`1px solid ${color}`;

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
      className="items-center flex flex-col justify-center mt-huge w-4/5"
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
      <motion.div
        style={{ borderBottom, borderTop: borderBottom }}
        className=" grid w-full rounded-md py-3 grid-cols-8 gap-8 mt-10"
      >
        <div className="col-span-3 flex flex-col items-center  text-white justify-start">
          <h2 className="mb-4 gap-4 text-2xl font-light uppercase text-white">
            Biography
          </h2>
          <p className="text-sm">
            Hi, I’m William, a passionate front-end developer with over 4 years
            of experience specializing in React for web development and React
            Native for mobile applications.
          </p>

          <p className="text-sm">
            <br />
            My journey in the tech world has been driven by a deep love for
            creating beautiful, functional, and user-friendly digital
            experiences.
          </p>

          <p className="text-sm">
            {" "}
            <br />
            Whether I'm working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
          <motion.button
            style={{
              backgroundColor: "rgb(250 ,204 ,21)",
              borderBottom,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="relative cursor-pointer flex w-fit items-center gap-1.5 w-fit rounded-md bg-green-950/10 px-5 py-3 xs:px-2 xs:text-xs text-yellow-50 transition-colors hover:bg-gray-950/50"
          >
            Resume
            <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </div>

        <motion.div className="col-span-3 relative h-max rounded-2xl  bg-light ">
          <motion.div
            style={{ backgroundImage }}
            className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1em] "
          />
          <img
            src={myImage}
            alt="My Image"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        <motion.div className="col-span-2 relative flex flex-col items-end justify-center ">
          <span>
            
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutHeroSection;
