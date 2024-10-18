import localImage from "../Assets/SSS-2442.jpg"; // Import your local image

export const projects = [
  {
    imageSrc: localImage,
    title: "Featured Project 1",
    description: "A brief description of the featured project.",
    technologies: ["React", "JavaScript", "CSS"],
    projectLink: "https://example.com",
    isFeatured: false,
    taller: true,
  },
  {
    imageSrc: localImage,
    title: "Side Project 1",
    description: "A brief description of side project 1.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://example.com",
    isFeatured: false,
  },
  {
    imageSrc: localImage,
    title: "Side Project 2",
    description: "A brief description of side project 2.",
    technologies: ["React", "TypeScript", "Sass"],
    projectLink: "https://example.com",
    isFeatured: false,
  },
  // Add more projects as needed
];
