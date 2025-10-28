import { useEffect, useState } from "react";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex items-center cursor-pointer">
      {darkMode ? (
        <LuSunMedium
          onClick={() => setDarkMode(false)}
          className="w-6 h-6 text-[#0e1a2b] dark:text-white dark:hover:!text-[#a3c2d9]"
        />
      ) : (
        <IoMoonOutline
          onClick={() => setDarkMode(true)}
          className="w-6 h-6 text-[#0e1a2b] dark:text-white hover:!text-[#1e3b66]"
        />
      )}
    </div>
  );
};

const NavList = ({ darkMode, setDarkMode, closeNav }) => {
  const sections = [
    { name: "About Me", id: "about" },
    { name: "Work Experience", id: "work" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];
  const handleScroll = (id) => {
    if (closeNav) closeNav();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200);
  };

  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      {sections.map((section) => (
        <Typography
          key={section.id}
          as="li"
          variant="small"
          className="p-1 font-medium"
        >
          <button
            onClick={() => handleScroll(section.id)}
            className="flex items-center text-lg !text-[#0e1a2b] dark:!text-white hover:!text-[#1e3b66] dark:hover:!text-[#a3c2d9] hover:scale-110 transition-all duration-200"
          >
            {section.name}
          </button>
        </Typography>
      ))}

      <div className="flex flex-row items-center justify-center gap-8 mt-2 lg:gap-16 lg:mt-0">
        <li>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </li>
        <li>
          <a href="/Mustafa_Tarek_CV.pdf" download>
            <Button
              variant="filled"
              className="bg-[#0e1a2b] dark:bg-[#1e3b66] dark:!text-white hover:scale-105 transition-all duration-200"
            >
              Download CV
            </Button>
          </a>
        </li>
      </div>
    </ul>
  );
};

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 max-w-full z-50 px-6 py-3 bg-white rounded !rounded-0 dark:bg-[#0e1a2b] transition-colors duration-300 shadow-lg border border-[#1e3b66] border-t-0 border-x-0">
      <div className="flex items-center justify-between w-full">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 !text-[#0e1a2b] dark:!text-[#a3c2d9] hover:scale-105 transition-all duration-300"
        >
          Mustafa Tarek
        </Typography>

        <div className="hidden lg:block">
          <NavList darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <IconButton
          variant="text"
          className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden !text-[#0e1a2b] dark:!text-white"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <NavList
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          closeNav={() => setOpenNav(false)}
        />
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
