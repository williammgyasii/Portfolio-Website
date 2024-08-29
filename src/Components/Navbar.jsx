import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="w-full px-8 font-normal flex items-center justify-between">
      <Logo />
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/articles">Articles</a>
      </nav>

      <nav>
        <a href="/" target="_blank">
          Twitter
        </a>
        <a href="/" target="_blank">
          Twitter
        </a>
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
