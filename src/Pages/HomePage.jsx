import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <header className="w-full min-h-screen">
        <Navbar />
        <Hero />;
      </header>
    </>
  );
};

export default HomePage;
