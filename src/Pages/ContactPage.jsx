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
        <Block className="col-span-12 md:col-span-9">
          <p className="mb-3 text-lg">Join my mailing list</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
            />
            <button
              type="submit"
              className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
            >
              <FiMail /> Join the list
            </button>
          </form>
        </Block>
      </motion.main>
      <StarryBackgroundNoHover />
    </>
  );
}

export default ContactPage;
