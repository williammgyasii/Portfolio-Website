import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Layout from "../Layouts/Layout";
import OpacityReveal from "../Components/OpacityReveal";

const HomePage = () => {
  return (
    <>
      <header className="w-full flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        
          <Hero />
        
      </header>
    </>
  );
};

export default HomePage;
