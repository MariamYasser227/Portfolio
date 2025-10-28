import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";
import { CiPhone } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 p-6"
      id="contact"
    >
      <Typography className="text-3xl text-white p-5 bg-[#0e1a2b] dark:!bg-[#1e3b66] rounded-full">
        Get In Touch!
      </Typography>

      <Typography className="text-lg !text-[#1e3b66] dark:!text-[#a3c2d9] text-center w-3/6">
        Whether it’s building high-performance software, developing AI-powered
        systems, or creating scalable web applications, I’m open to new projects
        and collaborations.
      </Typography>

      <div className="flex items-center justify-center gap-4">
        <HiOutlineMail className="text-6xl !text-[#0e1a2b] dark:!text-[#1e3b66]" />
        <Typography className="text-3xl dark:text-white p-5 text-[#0e1a2b] rounded-full">
          mustafatarek104@gmail.com
        </Typography>
      </div>

      <div className="flex items-center justify-center gap-4">
        <CiPhone className="text-6xl !text-[#0e1a2b] dark:!text-[#1e3b66]" />
        <Typography className="text-3xl dark:text-white p-5 text-[#0e1a2b] rounded-full">
          +201024656077
        </Typography>
      </div>

      <Typography className="text-base !text-[#1e3b66] dark:!text-[#a3c2d9] text-center w-3/6">
        You may also find me on these platforms!
      </Typography>
      <div className="flex justify-center gap-4 mt-3 md:justify-start">
        <a
          href="https://github.com/MustafaTarek77?tab=repositories"
          target="_blank"
        >
          <FaGithub className="!text-[#0e1a2b] dark:!text-white text-2xl sm:text-3xl " />
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-tarek-298643248/"
          target="_blank"
        >
          <FaLinkedin className="!text-[#0e1a2b] dark:!text-white text-2xl sm:text-3xl " />
        </a>
      </div>
    </div>
  );
};

export default Contact;
