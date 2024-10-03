import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  useScroll,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { COLORS_TOP } from "../Utilities/Constants";
import Timeline from "../AnimatedComponents/AnimatedTimeline";
import CustomSection from "../Components/CustomSection";
import ExperienceContainer from "../AnimatedComponents/ExperienceContainer";

function ExperienceSection() {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const borderBottom = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate` 0px 4px 24px ${color}`;
  const contentBorder = useMotionTemplate`1px solid ${color}`;

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
  }, []);
  return (
    <CustomSection className={""}>
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
        className="inline-block text-4xl items-center cursor-pointer 
        xs:text-lg rounded-md bg-gray-950/10 px-4 py-1 text-gray-50 
        transition-colors hover:bg-gray-950/50"
      >
        Work Experience
      </motion.h1>

      <motion.div
        ref={ref}
        className=" w-full bg-blue-900 flex flex-col items-center justify-center relative"
      >
        {/* <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 right-0 top-0 bottom-0 w-[5px] h-full bg-white origin-top"
        />
        <ExperienceContainer
          position={"Lead Front-End Developer"}
          company={"Asqii LLC"}
          companyLink={"https://schooldesk.cc/"}
          time={"2021-2023"}
          address={"Accra,Ghana"}
          work={
            "Designed user-centered digital experiences for a wide range of clients,Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript. "
          }
        /> */}

        {/* <Timeline /> */}
      </motion.div>
    </CustomSection>
  );
}

export default ExperienceSection;
