import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomePageHeroSection from "./Components/HomePageHeroSection";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Layouts/RootLayout";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import SwipeTransition from "./AnimatedComponents/SwipeTransition";
import ColorSwipeTransition from "./AnimatedComponents/SwipeTransition";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<HomePage />} index />
        <Route element={<AboutPage />} path="about" />
        <Route element={<ProjectsPage />} path="projects" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

// function App() {
//   return (
//     // <main className="font-sans text-lg bg-light min-h-screen">
//     //   <Navbar />
//     //   <Hero />
//     // </main>

//   );
// }

export default App;
