// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className=" min-h-screen w-full p-32 bg-purple-900 text-white ">
      <div className="flex-1 flex flex-col items-start justify-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I am a passionate Front-End Developer with a knack for creating
          beautiful and functional web applications.
        </p>
        <a
          href="#projects"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          See My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
