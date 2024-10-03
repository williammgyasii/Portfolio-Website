import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Sample data for work experience
const workExperience = [
  {
    company: "TechCorp",
    position: "Software Engineer",
    date: "2022 - Present",
    position: "left",
    description: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver products on time.",
      "Optimized code performance to reduce load times by 20%.",
    ],
    address: "123 Tech Street, Silicon Valley, CA",
  },
  {
    company: "Web Solutions",
    position: "Frontend Developer",
    date: "2020 - 2022",
    position: "right",
    description: [
      "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
      "Worked with the UX team to improve design efficiency.",
      "Maintained and updated web components in a fast-paced environment.",
    ],
    address: "456 Web Avenue, New York, NY",
  },
  {
    company: "DesignStudio",
    position: "UI/UX Designer",
    date: "2018 - 2020",
    description: [
      "Designed user-centered digital experiences for a wide range of clients.",
      "Led design projects from concept to completion.",
      "Presented design solutions to stakeholders and received positive feedback.",
    ],
    address: "789 Creative Road, Austin, TX",
    position: "left",
  },
];

const Timeline = () => {
  const controls = useAnimation(); // Control for the purple line animation

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({
        height: `${Math.min(scrollPosition / 2, 1000)}px`, // Purple line grows with scroll
        transition: { duration: 0.6, ease: "easeOut" },
      });
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => window.removeEventListener("scroll", handleScroll); // Clean up
  }, [controls]);

  return (
    <div className="relative flex bg-yellow-700 flex-col items-center ">
      {/* Vertical timeline purple line */}
      <motion.div
        className="absolute bg-purple-500 left-1/2 transform -translate-x-1/2"
        style={{ width: "5px", height: "0px" }} // Start at 0px height
        animate={controls} // Controlled by scroll position
      />

      {workExperience.map((job, index) => (
        <motion.div
          className={`w-full bg-pink-300 w-1/2 p-6 mb-8 flex ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } items-center`}
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when in view
        >
          {/* Dot on the timeline */}
          <div className="w-4 h-4 bg-purple-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline content */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 w-full md:w-10/12 font-inter">
            <h3 className="text-lg font-bold">{job.position}</h3>
            <h4 className="text-gray-700">{job.company}</h4>
            <span className="text-sm text-gray-500">{job.date}</span>
            <span className="block text-sm text-gray-500 mt-1">
              {job.address}
            </span>

            {/* Work description as bullet points */}
            <ul className="mt-4 list-disc pl-5 text-gray-600">
              {job.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
