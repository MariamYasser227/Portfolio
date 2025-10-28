import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarSimple from "./Nav/Nav";
import Profile from "./About/Profile";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import "./index.css";
import Projects from "./Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="dark:!bg-[#0e1a2b] flex flex-col gap-32 min-h-screen max-w-screen overflow-x-hidden overflow-y-visible">
      <NavbarSimple />
      <div className="pt-20 dark:!bg-[#0e1a2b] flex flex-col gap-28 min-h-screen max-w-screen overflow-x-hidden">
        <Profile />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
