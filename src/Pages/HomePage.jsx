import React from "react";
import Hero from "../Sections/HomePageHeroSection";
import Navbar from "../Components/Navbar";
import Layout from "../Layouts/Layout";
import OpacityReveal from "../AnimatedComponents/OpacityReveal";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import { Footer } from "../AnimatedComponents/BentoProfile";
import Header from "../Components/Header";
import HomePageHeroSection from "../Sections/HomePageHeroSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HomePageHeroSection />
      </main>
    </>
  );
};

export default HomePage;
