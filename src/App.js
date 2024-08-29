import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <main className="font-sans text-lg bg-light min-h-screen">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
