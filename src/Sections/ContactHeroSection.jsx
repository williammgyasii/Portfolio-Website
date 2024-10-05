import React, { useEffect, useRef, useState } from "react";
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
import emailjs from "@emailjs/browser";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ContactHeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const form = useRef();

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

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

    const mailtoLink = `mailto:gyasi.wk@gmail.com`;
    window.location.href = mailtoLink;

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAIL_SERVICE_ID,
    //     "contact_form",
    //     form.current,
    //     {
    //       publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
    //     }
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       setSubmitted(true);
    //       setFormData({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //       setTimeout(() => {
    //         setSubmitted(false);
    //         setLoading(false);
    //       }, 3000);
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
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
      xs:mt-huge w-4/5 mt-[0] md:w-full"
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
        <motion.div className="flex flex-col items-center justify-center w-full">
          <p className="mb-3 text-2xl text-zinc-300 ">
            Bring your ideas to reality
          </p>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className=" w-[70%] md:w-[95%] "
          >
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

            <div className="my-4">
              <textarea
                name="message"
                rows="8"
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              style={{
                border,
                boxShadow,
              }}
              className="relative cursor-pointer bg-blue-600 flex w-full 
              items-center justify-center gap-1.5 rounded-md bg-green-950/10 px-5 py-3 xs:px-2 
              xs:text-xs text-yellow-50 transition-colors hover:bg-gray-950/50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V4z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : submitted ? (
                <span className="text-green-500 text-center flex flex-col  animate-pulse">
                  {/* <IoCheckmark /> */}
                  Message Sent
                </span>
              ) : (
                <span className="text-white">Send Message</span>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactHeroSection;
