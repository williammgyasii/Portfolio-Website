import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { Block } from "./BentoProfile";

// Define icons for different technologies
const technologyIcons = {
  HTML: <FaHtml5 className="text-orange-600 mr-2" />,
  CSS: <FaCss3Alt className="text-blue-600 mr-2" />,
  JavaScript: <FaJsSquare className="text-yellow-500 mr-2" />,
  React: <FaReact className="text-cyan-500 mr-2" />,
  // Add more technologies and their corresponding icons here
};

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectBox = ({
  imageSrc,
  title,
  description,
  technologies,
  projectLink,
  isFeatured,
}) => {
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
    <div className="flex flex-row h-[22rem]">
      <div className="w-1/3  relative overflow-hidden rounded-lg">
        <img
          src={imageSrc}
          alt={`${title} Image`}
          style={{ backgroundPosition: "center center" }}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="w-2/3 text-white  items-center pl-6 flex flex-col">
        {isFeatured&&(<span className="text-white font-medium text-sm border border-pink-300 p-2 rounded-lg">Featured Project</span>)}
        <a
          href={projectLink}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-4xl font-bold text-white  my-2 text-left font-bold">
            {title.toUpperCase()}
          </h2>
        </a>

        <Block className="mb-3">
          <p className="text-sm">{description}</p>
        </Block>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index.toString()}
              className="inline-flex  gap-2 p-2 border rounded-md items-center text-white text-sm px-3 py-1 mr-2 mb-2"
            >
              {technologyIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <motion.button
          style={{
            backgroundColor: "rgb(250 ,204 ,21)",
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="relative cursor-pointer flex w-fit items-center gap-1.5 w-fit rounded-md bg-green-950/10 px-5 py-3 xs:px-2 xs:text-xs text-yellow-50 transition-colors hover:bg-gray-950/50"
        >
          View Project
          <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectBox;
