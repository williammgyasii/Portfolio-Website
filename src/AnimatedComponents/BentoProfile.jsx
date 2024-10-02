import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import myImage from "../Assets/SSS-2442.jpg";
import { MdMovieCreation } from "react-icons/md";

export const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "rounded-lg border-zinc-700 bg-zinc-800 p-4",
        className
      )}
      {...rest}
    />
  );
};

export const HeaderBlock = () => (
  <>
    <div className="col-span-6 row-span-1 md:col-span-6 gap-2">
      <Block className={"col-span-6"}>
        <h1 className="mb-3 text-xl font-light leading-tight md:text-sm">
          Hi, I’m William, a passionate front-end developer with over 4 years of
          experience
          <span className="text-zinc-400">
            {" "}
            specializing in React for web development and React Native for
            mobile applications.
          </span>
        </h1>
        <a
          href="/projects"
          className="flex items-center gap-1 text-red-300 hover:underline"
        >
          View Projects <FiArrowRight />
        </a>
      </Block>
      <Block className={"col-span-6"}>
        <AboutBlock />
      </Block>
    </div>
  </>
);

export const ImageBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-4  flex items-center justify-center row-span-4
       bg-transparent cursor-pointer p-0 md:col-span-3"
    >
      <div className="relative w-[auto]  h-[auto] rounded-md overflow-hidden ">
        <img
          src={myImage}
          alt="Sample"
          style={{ objectPosition: "center 25%" }} // Adjust as needed
          className="object-cover w-full h-full"
        />
      </div>
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-2 flex items-center justify-center flex-col bg-green-600 md:col-span-3"
    >
      <h1 className="text-5xl font-bold">4+</h1>
      <span className="text-md">Experience </span>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-2 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <MdMovieCreation />
      </a>
    </Block>
  </>
);

export const AboutBlock = () => (
  <>
    {/* <Block className="col-span-6 text-xl leading-snug">
      <p>
        Alter Egos
        <span className="text-zinc-400 text-sm">
          {" "}
          has been driven by a deep love for creating{" "}
          <span className="text-blue-400 text-2xl"> BEAUTIFUL </span>,
          functional, and
          <span className="text-yellow-400  text-2xl"> USER-FRIENDLY </span>
          experiences.
        </span>
      </p>
    </Block> */}
    <Block className="col-span-6 text-xl leading-snug">
      <h1 className="mb-3 text-xl font-light leading-tight text-center md:text-sm">
        I look forward to the opportunity to bring my skills and passion to your
        next project.
        <span className="text-zinc-400">
          Whether I'm working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on.{" "}
        </span>
      </h1>
    </Block>
  </>
);

export const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

export const EmailListBlock = () => (
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
);

export const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

// export const Footer = () => {
//   return (
//     <footer className="mt-12">
//       <p className="text-center text-zinc-400">
//         Made with ❤️ by{" "}
//         <a href="#" className="text-red-300 hover:underline">
//           @tomisloading
//         </a>
//       </p>
//     </footer>
//   );
// };
