import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { IoCloseSharp, IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
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

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "Articles", href: "articles" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`w-full ${
        scroll ? "bg-white" : "bg-transparent"
      }  px-8  fixed font-normal flex items-center justify-between `}
    >
      <button className="hidden sm:flex" onClick={handleClick}>
        <TbLayoutDashboardFilled size={25} color="#C5A642" />
      </button>
      <Logo />

      <nav className="sm:hidden">
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>

      <nav className="mt-2 sm:hidden">
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
      {/* <button c/lassName="bg-dark rounded-sm p-2 text-white hidden sm:block" >Contact</button> */}

      {/* MOBILE NAV VIEW */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            exit="exit"
            animate="animate"
            className="fixed flex flex-col origin-top  items-center left-0 top-0 w-full min-h-screen p-12 pt-minus bg-yellow-500 text-black"
          >
            <div className="flex  items-center justify-between">
              <Logo />
              <button className="absolute top-5 right-2" onClick={handleClick}>
                <IoCloseSharp size={25} />
              </button>
            </div>
            <div className="flex flex-col mt-10 items-center w-full justify-center font-mono gap-4">
              {navLinks.map((link, index) => {
                return (
                  <MobileNavLink
                    key={index}
                    title={link.title}
                    href={link.href}
                  />
                );
              })}
            </div>
            <nav className="mt-10 ">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavLink = ({ title, href }) => {
  return (
    <div className="text-5xl uppercase text-black">
      <motion.a whileHover={{ scale: 0.9 }} href={href}>
        {title}
      </motion.a>
    </div>
  );
};

export default Navbar;
