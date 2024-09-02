import React from "react";
import SpinningBox from "./SpinningBox";

const ProjectBox = ({
  imageSrc,
  title,
  description,
  technologies,
  projectLink,
}) => {
  return (
    <div
      style={{ zIndex: 5 }}
      className="flex flex-row mt-5 w-full relative md:flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg mb-6 w-4/5"
    >
      <SpinningBox text={"Featured Project"} />
      <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
        <img
          src={imageSrc}
          alt={`${title} Image`}
          className="w-full rounded-lg"
        />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={projectLink}
          className="self-start bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
