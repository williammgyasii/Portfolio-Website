import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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

const COLORS_TOP = ["#13FF9A", "#1E6aC6", "#CE34CF", "#DDc35C"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const color = useMotionValue(COLORS_TOP[2]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020631 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      style={{ boxShadow, zIndex: 20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-4/5 sm:w-full bg-transparent text-white p-1 fixed 
       top-0 font-normal flex items-center justify-between rounded-bl-lg rounded-br-lg  `}
    >
      <button className="hidden sm:flex" onClick={handleClick}>
        <TbLayoutDashboardFilled size={25} color="#fff" />
      </button>
      <Logo />

      <nav className="sm:hidden">
        <CustomLink href="/" title={"Home"} className="mr-2" />
        <CustomLink href="/about" title={"About"} className="mx-2" />
        <CustomLink href="/projects" title={"Projects"} className="mx-2" />
        <CustomLink href="/articles" title={"Articles"} className="ml-2" />
      </nav>

      <nav className="mt-2 sm:hidden">
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://github.com/williammgyasii"
          target="_blank"
          className="inline-block"
        >
          <IoLogoGithub size={20} />
        </motion.a>
        <motion.a
          className="inline-block w-6 mx-2"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://x.com/wk_gyasi"
          target="_blank"
        >
          <RiTwitterXLine size={20} />
        </motion.a>
        <motion.a
          className="inline-block w-6 mr-3"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/william-gyasi/"
          target="_blank"
        >
          <BsLinkedin size={20} color="#0077B5" />
        </motion.a>
      </nav>
      {/* <button c/lassName="bg-dark rounded-sm p-2 text-white hidden sm:block" >Contact</button> */}

      {/* MOBILE NAV VIEW */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            style={{
              zIndex: 9,
              backgroundImage,
            }}
            initial="initial"
            exit="exit"
            animate="animate"
            className="fixed z-10 flex flex-col origin-top  items-center left-0 top-0 w-full min-h-screen p-12 pt-minus  text-white"
          >
            <div className="flex  items-center justify-between">
              <Logo />
              <button className="absolute top-5 right-2" onClick={handleClick}>
                <IoCloseSharp size={25} />
              </button>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit={"initial"}
              className="flex flex-col mt-10 items-center w-full justify-center font-mono gap-4"
            >
              {navLinks.map((link, index) => {
                return (
                  <div className="overflow-hidden">
                    <MobileNavLink
                      key={index.toString()}
                      title={link.title}
                      href={link.href}
                    />
                  </div>
                );
              })}
            </motion.div>
            <motion.nav
              variants={containerVars}
              initial="initial"
              animate="open"
              exit={"initial"}
              className="mt-10"
            >
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
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white"
    >
      <motion.a whileHover={{ scale: 0.9 }} href={href}>
        {title}
      </motion.a>
    </motion.div>
  );
};

export default Navbar;
