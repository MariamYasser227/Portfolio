import { Typography } from "@material-tailwind/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  return (
    <div
      className="flex items-center justify-center sm:px-8 md:px-16 bg-white dark:!bg-[#0e1a2b] pt-32"
      id="about"
    >
      <div className="flex flex-col-reverse items-center justify-center max-w-6xl gap-10 md:flex-row">
        <div
          className="flex flex-col flex-1 text-center md:text-left"
          data-aos="fade-up"
        >
          <div>
            <Typography
              variant="h1"
              className="mb-1 !text-[#0e1a2b] dark:!text-white overflow-hidden whitespace-nowrap border-r-4 border-r-black dark:border-r-white animate-typing text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi! I'm Mustafa Tarek
            </Typography>
            <Typography className="text-xl sm:text-2xl !text-[#1e3b66] dark:!text-[#a3c2d9]">
              Computer Engineer
            </Typography>
            <Typography className="mt-3 text-sm sm:text-base leading-relaxed !text-[#0e1a2b] dark:!text-white">
              Computer Engineering graduate from Cairo University with
              experience in software development, AI, and embedded systems.
              Skilled in C++, Python, and JavaScript, and passionate about
              creating efficient and reliable tech solutions.
            </Typography>

            <div className="flex items-center justify-center gap-2 mt-3 sm:gap-3 md:justify-start">
              <FaLocationDot className="!text-[#0e1a2b] dark:!text-[#a3c2d9] text-lg sm:text-xl" />
              <Typography className="text-sm sm:text-base !text-[#0e1a2b] dark:!text-[#a3c2d9]">
                Maadi, Cairo
              </Typography>
            </div>

            <div className="flex justify-center gap-4 mt-3 md:justify-start">
              <a
                href="https://github.com/MustafaTarek77?tab=repositories"
                target="_blank"
              >
                <FaGithub className="!text-[#0e1a2b] dark:!text-white text-2xl sm:text-3xl hover:scale-110 transition-all duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafa-tarek-298643248/"
                target="_blank"
              >
                <FaLinkedin className="!text-[#0e1a2b] dark:!text-white text-2xl sm:text-3xl hover:scale-110 transition-all duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center group transition-all duration-200 bg-[#0e1a2b] dark:bg-[#2f4f88]"
          data-aos="fade-down"
        >
          <img
            src="./Mustafa1.jpg"
            alt="profile"
            className="relative z-10 object-cover w-11/12 h-11/12 rounded-full shadow-[0_0_3rem_rgba(78,121,167,0.6)] group-hover:shadow-[0_0_5rem_rgba(163,194,217,0.8)] transition-all duration-200 ease-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
