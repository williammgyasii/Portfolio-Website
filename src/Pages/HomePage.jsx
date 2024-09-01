import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Layout from "../Layouts/Layout";
import OpacityReveal from "../Components/OpacityReveal";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";

const HomePage = () => {
  return (
    <>
      <header className="w-full relative flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <Hero />
      </header>
    </>
  );
};

export default HomePage;
