import React, { useRef } from "react";
import AnimatedCircles from "./AnimatedCircles";
import { motion } from "framer-motion";

function ExperienceContainer({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) {
  const ref = useRef(null);
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      ref={ref}
      className="my-8 md:my-1 w-[60%]  mx-auto flex flex-col
     items-center justify-between"
    >
      <AnimatedCircles reference={ref} />
      <h3 className="capitalize font-bold text-2xl">
        {position} &nbsp;
        <a
          className="text-primary capitalize"
          target="_blank"
          href={companyLink}
        >
          @{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-white/75">
        {time} | {address}
      </span>
      <p className="font-medium w-full">{work}</p>
    </motion.div>
  );
}

export default ExperienceContainer;
