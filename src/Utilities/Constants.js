import {
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import {
  DiBootstrap,
  DiGit,
  DiGithubBadge,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiApollographql,
  SiFirebase,
  SiGulp,
  SiMui,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";

export const COLORS_TOP = [
  "#FF6F61", // Coral
  "#6B5B95", // Purple
  "#88D8C0", // Light Teal
  "#FFB347", // Light Orange
  "#D5AAFF", // Lavender
  "#FF9A8B", // Peach
];

export const TechIcons = {
  HTML: <FaHtml5 className="text-orange-600 mr-2" />,
  CSS: <FaCss3Alt className="text-blue-600 mr-2" />,
  JavaScript: <FaJsSquare className="text-yellow-500 mr-2" />,
  React: <FaReact className="text-cyan-500 mr-2" />,
  Vue: <FaVuejs className="text-green-500 mr-2" />,
  Angular: <FaAngular className="text-red-600 mr-2" />,
  Sass: <FaSass className="text-pink-500 mr-2" />,
  NodeJs: <FaNodeJs className="text-green-600 mr-2" />,
  Git: <DiGit className="text-red-600 mr-2" />,
  GitHub: <DiGithubBadge className="text-gray-900 mr-2" />,
  Bootstrap: <DiBootstrap className="text-purple-600 mr-2" />,
  jQuery: <DiJqueryLogo className="text-blue-600 mr-2" />,
  TailwindCSS: <SiTailwindcss className="text-blue-500 mr-2" />,
  Webpack: <SiWebpack className="text-asset-light mr-2" />,
  Gulp: <SiGulp className="text-orange-600 mr-2" />,
  TypeScript: <SiTypescript className="text-blue-600 mr-2" />,
  GraphQL: <SiApollographql className="text-purple-600 mr-2" />,
  Redux: <SiRedux className="text-purple-600 mr-2" />,
  API: <AiOutlineApi className="text-green-500 mr-2" />,
  ReactNative: <TbBrandReactNative className="text-blue-400 mr-2" />,
  iOS: <IoLogoApple className="text-gray-900 mr-2" />,
  Android: <IoLogoAndroid className="text-green-500 mr-2" />,
  MaterialUI: <SiMui className="text-blue-500 mr-2" />,
  Firebase: <SiFirebase className="text-yellow-500 mr-2" />,
  NextJS: <SiNextdotjs className="text-green-500" />,
  // Add more technologies and their corresponding icons here
};
