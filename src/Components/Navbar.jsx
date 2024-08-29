import React, { useState } from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const CustomLink = ({ href, title, className = "" }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <a href={href} className={`${className} relative group text-sm`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-yellow-400 absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${currentPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick=()=>{
    
  }
  return (
    <div className="w-full  px-8 font-normal flex items-center justify-between">
      <button>
        <TbLayoutDashboardFilled size={25} color="#C5A642" />
      </button>
      <Logo />
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>

      <nav className="mt-2">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/williammgyasii"
          target="_blank"
          className="inline-block"
        >
          <IoLogoGithub size={25} />
        </motion.a>
        <motion.a
          className="inline-block w-6 mx-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/wk_gyasi"
          target="_blank"
        >
          <RiTwitterXLine size={25} />
        </motion.a>
        <motion.a
          className="inline-block w-6 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/william-gyasi/"
          target="_blank"
        >
          <BsLinkedin size={25} color="#0077B5" />
        </motion.a>
      </nav>
    </div>
  );
};

export default Navbar;
