import { animate, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import { Block } from "./BentoProfile";
import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import {
  DiBootstrap,
  DiGit,
  DiGithubBadge,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiApollographql,
  SiFirebase,
  SiGulp,
  SiMui,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

// Define icons for different technologies
const technologyIcons = {
  HTML: <FaHtml5 className="text-orange-600 mr-2" />,
  CSS: <FaCss3Alt className="text-blue-600 mr-2" />,
  JavaScript: <FaJsSquare className="text-yellow-500 mr-2" />,
  React: <FaReact className="text-cyan-500 mr-2" />,
  Vue: <FaVuejs className="text-green-500 mr-2" />,
  Angular: <FaAngular className="text-red-600 mr-2" />,
  Sass: <FaSass className="text-pink-500 mr-2" />,
  NodeJs: <FaNodeJs className="text-green-600 mr-2" />,
  Git: <DiGit className="text-red-600 mr-2" />,
  GitHub: <DiGithubBadge className="text-gray-900 mr-2" />,
  Bootstrap: <DiBootstrap className="text-purple-600 mr-2" />,
  jQuery: <DiJqueryLogo className="text-blue-600 mr-2" />,
  TailwindCSS: <SiTailwindcss className="text-blue-500 mr-2" />,
  Webpack: <SiWebpack className="text-asset-light mr-2" />,
  Gulp: <SiGulp className="text-orange-600 mr-2" />,
  TypeScript: <SiTypescript className="text-blue-600 mr-2" />,
  GraphQL: <SiApollographql className="text-purple-600 mr-2" />,
  Redux: <SiRedux className="text-purple-600 mr-2" />,
  API: <AiOutlineApi className="text-green-500 mr-2" />,
  ReactNative: <TbBrandReactNative className="text-blue-400 mr-2" />,
  iOS: <IoLogoApple className="text-gray-900 mr-2" />,
  Android: <IoLogoAndroid className="text-green-500 mr-2" />,
  MaterialUI: <SiMui className="text-blue-500 mr-2" />,
  Firebase: <SiFirebase className="text-yellow-500 mr-2" />,
  // Add more technologies and their corresponding icons here
};

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ProjectBox = ({
  imageSrc,
  title,
  style,
  description,
  technologies,
  projectLink,
  isFeatured,
  className,
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

  const openInNewTab = ({ link }) => {
    window.open(projectLink, "_blank");
  };

  return (
    <motion.div
      className={`flex sm:flex-col sm:items-center sm:justify-center ${
        isFeatured ? "flex-row " : "flex-col"
      }
    ${isFeatured ? "items-normal" : "items-center"}
    ${isFeatured ? "" : "w-full"}
    ${isFeatured ? "h-[23rem]" : "h-[25rem]"}
        ${className} sm:h-[30rem]`}
      style={style}
    >
      <div
        className={`sm:w-full ${
          isFeatured ? "w-1/3" : "w-full"
        }  relative overflow-hidden rounded-lg`}
      >
        <img
          src={imageSrc}
          alt={`${title} Image`}
          style={{ objectPosition: "center 25%" }} // Adjust as needed
          // style={{ backgroundPosition: "center center" }}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div
        className={`${
          isFeatured ? "w-2/3" : "w-full"
        }  text-white  items-center ${
          isFeatured ? "pl-6 " : "pl-0"
        } flex flex-col sm:w-full  sm:pl-0`}
      >
        <div className={`sm:flex sm:justify-between sm:items-center sm:w-full`}>
          {isFeatured && (
            <span className="text-white font-medium text-sm border border-pink-300 p-2 rounded-lg">
              Featured Project
            </span>
          )}
          <a
            href={projectLink}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2
              className={`${
                isFeatured ? "text-4xl" : "text-2xl"
              } font-bold text-white  my-2 text-left font-bold sm:text-lg`}
            >
              {title.toUpperCase()}
            </h2>
          </a>
        </div>

        <Block className="mb-3 w-full ">
          <p className="text-sm  text-center sm:text-xs">{description}</p>
        </Block>
        <div className="mb-1 flex items-center flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <span
              key={index.toString()}
              className="inline-flex  gap-2 p-2 border rounded-md items-center text-white text-xs px-3 py-1 mr-2 mb-2"
            >
              {technologyIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <motion.button
          onClick={openInNewTab}
          style={{
            backgroundColor: "green",
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="relative cursor-pointer flex w-fit items-center gap-1.5  rounded-md bg-green-950/10 px-4 py-2 xs:px-2 xs:text-xs text-yellow-50 transition-colors hover:bg-gray-950/50"
        >
          View Project
          <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
