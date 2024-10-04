import React from "react";
import { FiMail } from "react-icons/fi";
import { Block } from "../AnimatedComponents/BentoProfile";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Header from "../Components/Header";
import { COLORS_TOP } from "../Utilities/Constants";
import StarryBackgroundNoHover from "../AnimatedComponents/StarryBackground";
import ContactHeroSection from "../Sections/ContactHeroSection";

function ContactPage() {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  return (
    <>
      <Header />
      <motion.main
        style={{
          backgroundImage,
        }}
        className=" flex flex-col bg-green-700 
         text-white w-full items-center xs:min-h-0"
      >
        <ContactHeroSection />
      </motion.main>
      <StarryBackgroundNoHover />
    </>
  );
}

export default ContactPage;
