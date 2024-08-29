import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <a href={href} className={`${className} relative group text-sm`}>
      {title}
      <span
        className="h-[1px] inline-block w-0 bg-yellow-400 absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300"
      >
        &nbsp;
      </span>
    </a>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-8 font-normal flex items-center justify-between">
      <Logo />
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
      </nav>

      <nav>
        <a href="/" target="_blank">
          Twitter
        </a>
        <s href="/" target="_blank">
          Twitter
        </s>
        <a href="/" target="_blank">
          Twitter
        </a>
        <a href="/" target="_blank">
          Twitter
        </a>
        <a href="/" target="_blank">
          Twitter
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
