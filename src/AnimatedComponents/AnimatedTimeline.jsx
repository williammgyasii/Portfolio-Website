import React from "react";
import { motion } from "framer-motion";

const workExperience = [
  {
    company: "TechCorp",
    position: "Software Engineer",
    date: "2022 - Present",
    description:
      "Developed and maintained web applications using React and Node.js.",
  },
  {
    company: "Web Solutions",
    position: "Frontend Developer",
    date: "2020 - 2022",
    description:
      "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript.",
  },
  {
    company: "DesignStudio",
    position: "UI/UX Designer",
    date: "2018 - 2020",
    description:
      "Designed user-centered digital experiences for a wide range of clients.",
  },
];

const Timeline = () => {
  return (
    <div className="relative flex flex-col items-center my-10">
      {/* Vertical timeline line */}
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

      {workExperience.map((job, index) => (
        <motion.div
          className={`w-full md:w-1/2 p-6 mb-8 flex ${
            index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Dots on the timeline */}
          <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

          {/* Timeline content */}
          <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 w-full md:w-10/12">
            <h3 className="text-lg font-bold">{job.position}</h3>
            <h4 className="text-gray-700">{job.company}</h4>
            <span className="text-sm text-gray-500">{job.date}</span>
            <p className="mt-4 text-gray-600">{job.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
