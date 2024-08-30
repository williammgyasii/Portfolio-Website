import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      class="flex sm:flex-col w-full  items-center justify-between  text-dark py-huge"
    >
      <div class="flex-1">
        <h1 class="text-4xl md:text-6xl font-bold text-teal-400 mb-4">
          Hi, I'm [Your Name]
        </h1>
        <h2 class="text-2xl md:text-4xl font-semibold mb-6">
          Front-End Developer
        </h2>
        <p class="text-lg md:text-xl leading-relaxed mb-8">
          I design and code beautiful, responsive websites with a focus on
          performance and user experience.
        </p>
        <a
          href="#portfolio"
          class="inline-block bg-teal-400 text-gray-900 font-semibold px-6 py-3 rounded-md text-lg hover:bg-teal-300 transition duration-300"
        >
          View My Work
        </a>
      </div>
      <div class="flex-shrink-0 w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="Your Image"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
