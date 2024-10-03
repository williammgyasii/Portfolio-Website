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
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;
  const contentBorder = useMotionTemplate`1px solid ${color}`;
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
    <CustomSection className={"mb-[10rem]"}>
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
        className=" w-full flex flex-col items-center justify-center relative"
      >
        {/* Vertical timeline purple line */}

        <motion.div
          className="absolute left-[10rem] "
          style={{ width: "5px", height: "0px", border }} // Start at 0px height
          animate={controls} // Controlled by scroll position
        />
        {workExperience.map((job, index) => (
          <motion.div
            className={`w-2/3 my-3 flex  items-center`}
            key={index}
            initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
            whileInView={{ opacity: 1 }} // Fade in when in view
            exit={{ opacity: 0 }} // Fade out when leaving view
            transition={{ duration: 1, type: "spring" }} // Animation duration
            viewport={{ once: false, amount: 0.3 }} // Trigger on entering view and leaving view
          >
            {/* Dot on the timeline */}
            {/* <div className="w-4 h-4 left-[10rem] top-0 text-4xl bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2">
            0{++index}
          </div> */}

            {/* Timeline content */}
            <motion.div
              style={{ border: border }}
              className="bg-white/90 p-4 shadow-lg rounded-lg w-full md:w-10/12 font-inter"
            >
              <h3 className="text-4xl text-primary font-bold">
                {job.position}
              </h3>
              <h4 className="text-gray-700">{job.company}</h4>
              <span className="text-sm text-gray-500">{job.date}</span>
              <span className="block text-sm text-gray-500 mt-1">
                {job.address}
              </span>

              {/* Work description as bullet points */}
              <ul className="mt-4 list-disc pl-5 text-gray-600">
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
