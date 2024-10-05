import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useScroll,
  useAnimation,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { COLORS_TOP } from "../Utilities/Constants";
import CustomSection from "../Components/CustomSection";
import ExperienceContainer from "../AnimatedComponents/ExperienceContainer";
import { workExperience } from "../Utilities/workExperience";

function ExperienceSection() {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`3px solid ${color}`;
  const controls = useAnimation(); // Control for the purple line animation

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({
        height: `${Math.min(scrollPosition / 2, 1000)}px`, // Purple line grows with scroll
        transition: { duration: 0.6, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up
  }, [controls]);

  return (
    <CustomSection className={"mb-[10rem]  md:px-4"}>
      <motion.h1
        style={{
          borderBottom: border,
        }}
        whileHover={{
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="inline-block text-4xl items-center cursor-pointer 
        xs:text-lg rounded-md bg-gray-950/10 px-4 py-1 text-gray-50 
        transition-colors hover:bg-gray-950/50"
      >
        Work Experience
      </motion.h1>

      <motion.div
        ref={ref}
        className=" w-full my-4 flex flex-col items-center justify-center relative"
      >
        {workExperience.map((job, index) => (
          <motion.div
            className={`w-2/3 mb-3 md:w-full md:mx-auto`}
            key={index}
            initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
            whileInView={{ opacity: 1 }} // Fade in when in view
            exit={{ opacity: 0 }} // Fade out when leaving view
            transition={{ duration: 1, type: "spring" }} // Animation duration
            viewport={{ once: false, amount: 0.3 }} // Trigger on entering view and leaving view
          >
            <motion.div
              key={index}
              style={{ border: border }}
              className="bg-white/90 p-4 shadow-lg rounded-lg w-full font-inter"
            >
              <h3 className="text-4xl md:text-3xl text-primary font-bold">
                {job.position}
              </h3>
              <h4 className="text-gray-700">{job.company}</h4>
              <span className="text-sm text-gray-500">{job.date}</span>
              <span className="block text-sm text-gray-500 mt-1">
                {job.address}
              </span>

              {/* Work description as bullet points */}
              <ul className="mt-2 md:text-sm list-disc pl-5 text-gray-600">
                {job.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </CustomSection>
  );
}

export default ExperienceSection;
