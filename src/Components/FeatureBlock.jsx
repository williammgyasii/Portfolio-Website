import { FiArrowRightCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { TechIcons } from "../Utilities/Constants";

const FeatureBlock = ({
  className,
  taller,
  short,
  textsize,
  border,
  shadow,
  height = "5rem",
  boxShadow,
  bgColor = "bg-zinc-800",
  children,
  imageSrc,
  projectLink,
  stack,
  description,
  title,
  ...rest
}) => {
  return (
    <motion.div
      style={{
        border: border,
        boxShadow: boxShadow,
        backgroundColor: bgColor,
        // height: taller ? "25rem" : "20rem",
      }}
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        `rounded-lg border-zinc-700 overflow-hidden flex flex-col items-start justify-start
           bg-zinc-800 p-3 sm:col-span-6 relative sm:h-[34rem]`,
        className
      )}
      {...rest}
    >
      <div
        className={`sm:w-full ${
          taller ? "h-[20rem]" : "h-[17rem]"
        }  relative w-full overflow-hidden rounded-lg`}
      >
        <img
          src={imageSrc}
          alt={`${title} Image`}
          style={{ objectPosition: "center 25%" }} // Adjust as needed
          // style={{ backgroundPosition: "center center" }}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <span
        className=" text-xl font-sans 
        font-bold text-zinc-100 mt-3"
      >
        {title}
      </span>
      <span
        className="leading-snug font-thin text-balance text-sm font-sans 
     text-zinc-100 mb-2"
      >
        {description}
      </span>

      <div className="flex  w-[70%] sm:w-full flex-row flex-wrap">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="px-2 py-1 bg-zinc-700 mr-1 text-xs rounded-lg flex-row flex items-center mb-1"
          >
            {TechIcons[tech]}
            {tech}
          </div>
        ))}
      </div>

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
        onClick={() =>
          window.open(projectLink, "_blank", "noopener,noreferrer")
        }
        className="absolute -bottom-1 -right-1 px-6 py-2  cursor-pointer flex w-fit 
            items-center gap-1.5 xs:text-base text-sm bg-green-700 rounded-md
             text-gray-50 transition-colors hover:bg-gray-950/50 "
      >
        View Project
        <FiArrowRightCircle
          className="transition-transform 
            group-hover:-rotate-45 group-active:-rotate-12"
        />
      </motion.button>
    </motion.div>
  );
};

export default FeatureBlock;
