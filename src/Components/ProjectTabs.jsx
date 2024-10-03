import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectBox from "../AnimatedComponents/ProjectBox";
import localImage from "../Assets/Akron-Splash.png"; // Import your local image

// Sample project data
const projects = [
  { id: 1, title: "Portfolio Website", category: "Web" },
  { id: 2, title: "E-commerce App", category: "Web" },
  { id: 3, title: "Mobile Banking App", category: "Mobile" },
  { id: 4, title: "Task Management App", category: "Web" },
  { id: 5, title: "Fitness Tracker App", category: "Mobile" },
  { id: 6, title: "Social Media App", category: "Web" },
  { id: 7, title: "Travel App", category: "Mobile" },
  { id: 8, title: "Blog Platform", category: "Web" },
];

// Variants for tab animation
const tabVariants = {
  hidden: { opacity: 0, y: 10 }, // Tab button fade in from below
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// Variants for project animation
const projectVariants = {
  hidden: { opacity: 0, y: 50 }, // Project card fades in from below
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const itemsPerPage = 3; // Number of projects to display per page

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); // Pagination state

  // Filter projects based on selected tab
  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Get the projects for the current page
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="w-full p-8">
      {/* Tab Layout with animated tab transitions */}
      <motion.div className="flex xs:flex-col flex-row justify-center xs:mb-8 space-x-2 mb-8">
        {["All", "Web", "Mobile"].map((tab, index) => (
          <motion.button
            key={index}
            className={`px-6 py-2 sm:mb-2 rounded-md text-lg font-medium ${
              activeTab === tab
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-dark"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setCurrentPage(1); // Reset to page 1 when tab is switched
            }}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards with spring animation */}
      <motion.div className="grid grid-cols-6 gap-6">
        <AnimatePresence mode="wait">
          {paginatedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="w-full bg-zinc-800 col-span-6 flex rounded-md justify-center p-5"
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ProjectBox
                imageSrc={localImage}
                title={project.title}
                description="Discover a powerful task management app designed for seamless group collaboration. Built with React and Material-UI."
                technologies={[
                  "Firebase",
                  "Material-UI",
                  "JavaScript",
                  "React",
                  "Redux",
                ]}
                projectLink="https://akron-server.web.app/"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pagination Controls */}
      <div className="flex flex-row  items-center mt-8 justify-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm rounded-md ${
            currentPage === 1 ? "bg-gray-300" : "bg-purple-500 text-white"
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 xs:text-xs text-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-purple-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectTabs;
