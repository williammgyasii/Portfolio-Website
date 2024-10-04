import React, { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  Block,
  FirstColumn,
  SecondColumn,
  ThirdColumn,
} from "../AnimatedComponents/BentoProfile";
import AnimatedVerticalView from "../AnimatedComponents/AnimatedVerticalView";
import PageTitles from "../AnimatedComponents/PageTitles";
import ContactForm from "../Components/ContactForm";
import { getFirebaseFunctions } from "../Firebase/getFirebase";
import { httpsCallable } from "firebase/functions";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ContactHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  // Single state object to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Function to update input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Dynamically update the field based on name
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const sendEmail = httpsCallable(getFirebaseFunctions, "sendContactEmail");

    try {
      const result = await sendEmail(formData);
      if (result.data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{ zIndex: 10 }}
      className="items-center flex h-screen   flex-col justify-center 
      xs:mt-huge w-4/5 mt-[5rem] md:w-full"
    >
      <AnimatedVerticalView>
        <PageTitles text={"Contact Me"} />
      </AnimatedVerticalView>

      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto w-full "
      >
        <Block className="flex flex-col items-center justify-center w-full">
          <p className="mb-3 text-2xl text-zinc-300 ">
            Bring your ideas to reality
          </p>
          <form onSubmit={handleSubmit} className=" w-[50%] ">
            {/* Name Input */}
            <div className="mb-3 space-y-5">
              {/* <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label> */}
              <input
                type="text"
                name="name"
                className="w-full text-dark px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                className="w-full px-3 py-4 text-dark border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="">
              <textarea
                name="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </Block>
        <ContactForm />
      </motion.div>
    </motion.section>
  );
};

export default ContactHeroSection;
