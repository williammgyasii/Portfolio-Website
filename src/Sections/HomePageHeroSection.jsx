// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { FiArrowRightCircle } from "react-icons/fi";
import svgLogo from "../Assets/welcome.svg";
import { useNavigate } from "react-router-dom";
import StarryBackgoundHover from "../AnimatedComponents/StarryBackgoundHover";
import OpacityReveal from "../AnimatedComponents/OpacityReveal";
import { IoMail } from "react-icons/io5";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const HomePageHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const navigate = useNavigate();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [rotationEnabled, setRotationEnabled] = React.useState(false);

  const handleMouseEnter = () => {
    setRotationEnabled(true);
  };

  const handleMouseLeave = () => {
    setRotationEnabled(false);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function openMail() {
    const email = "gyasi.wk@gmail.com"; // Your email address
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  }

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
        zIndex: 10,
      }}
      className=" flex justify-between relative text-white w-full items-center h-screen "
    >
      {/* <StarryBackground /> */}
      <StarryBackgoundHover mouse={mouse} rotationEnabled={rotationEnabled} />
      <OpacityReveal>
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }} // Moving up and down
          transition={{
            duration: 3, // Duration of one cycle of the animation
            repeat: Infinity, // Looping the animation indefinitely
            ease: "easeInOut", // Smooth easing
          }}
          className="flex flex-col w-3/5 mx-auto  sm:w-full  items-start justify-center md:px-3 xs:px-4 xs:mt-4"
        >
          <h1 className="text-7xl font-sans font-bold mb-2 sm:mb-0 xs:text-5xl inline-block">
            Hey, I'm William<span className="text-yellow-400">.</span>
          </h1>
          <h1 className="text-2xl sm:text-2xl font-bold xs:text-lg">
            I'm a <span className="text-yellow-400">Front-End Developer.</span>
          </h1>
          <p className="text-sm sm:text-sm mb-6 mt-2 xs:text-xs">
            A front-end developer with a passion for crafting beautiful,
            user-friendly websites.
            <br /> Whether you're here to see some cool projects or just curious
            about what I do, you're in the right place.
            {/* <span className="text-2xl inline-block uppercase mt-2 ">
            {"<code>Let's build something awesome together!</code> "}
          </span> */}
          </p>
          <img src={svgLogo} alt="SVG Image" className="animated-svg" />
          <div className="flex gap-2  w-full justify-center  mt-4">
            <motion.button
              onClick={() => navigate("projects")}
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
              Projects
              <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
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
              onClick={() => navigate("/about")}
              className="relative cursor-pointer flex w-fit items-center gap-1.5 xs:text-xs rounded-md bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              View Resume
              <FiArrowRightCircle className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
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
              onClick={openMail}
              className="relative cursor-pointer flex w-fit items-center gap-1.5 xs:text-xs rounded-md bg-gray-950/10 px-5 py-3 text-gray-50 transition-colors hover:bg-gray-950/50"
            >
              Contact Me
              <IoMail className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </motion.div>
      </OpacityReveal>
    </motion.section>
  );
};

export default HomePageHeroSection;
