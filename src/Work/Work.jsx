import { Typography } from "@material-tailwind/react";
import "aos/dist/aos.css";
import "../index.css";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";

const Work = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-screen gap-12 overflow-x-hidden"
      id="work"
      data-aos="zoom-in-up"
    >
      <Typography
        variant="h1"
        className="mb-1 !text-[#0e1a2b] dark:!text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
      >
        Work Experience
      </Typography>
      <div className="w-full px-4 sm:w-10/12 md:w-8/12 lg:w-7/12">
        <Timeline className="space-y-8">
          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  Faculty of Engineering — Cairo University,
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Teaching Assistant
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  Sept 2025 – Present
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Assisted in teaching and mentoring undergraduate students in
                  the Microprocessors course, by applying embedded systems
                  concepts to microprocessor programming, debugging, and
                  hardware–software integration.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Assisted in designing and supervising lab sessions and
                  projects involving assembly language, C programming, and
                  interfacing techniques.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  Siemens EDA,
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Digital Twin Training
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  July 2025 – August 2025
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Gained hands-on experience in digital twin development with
                  design integration, and simulation.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Applied the VSI framework using ROS, FMI, and mechatronics
                  simulators for system modeling and verification.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Built a Line-Following Robot with PID control using VSI,
                  modeling robot kinematics, simulating disturbances, and
                  evaluating control performance metrics.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  Siemens EDA,
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Software Engineer Intern
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  April 2025 – June 2025
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Working under Siemens’ sponsorship as part of my graduation
                  project.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Developing a Digital Twin to simulate and optimize vehicle
                  acceleration using Model Predictive Control (MPC) and
                  reinforcement learning for fuel efficiency.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Integrating adaptive algorithms to accommodate diverse
                  driving styles and road conditions.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Utilizing QEMU, CARLA, and VSI toolchains to develop and
                  test the complete system architecture.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  Vodafone,
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Software Engineer Intern
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  Sept 2024 – Oct 2024
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Scraped and processed Ookla website data for analysis.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Designed multiple visualizations, including graphs and
                  interactive charts, to illustrate trends and insights
                  effectively.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Built a website with a Flask-based backend for data handling
                  and a React frontend for user interaction.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  Asset-Technology,
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Software Engineer Intern
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  Aug 2024 – Sept 2024
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Gained experience with OpenText for knowledge management by
                  defining document structures and workflows.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Contributed to designing a secure platform for streamlined
                  inter-departmental data access.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem className="p-4 transition-all duration-300 shadow-lg hover:scale-105 dark:!bg-[#1e3b66]">
            <TimelineConnector />
            <TimelineHeader className="items-center gap-5">
              <TimelineIcon className="mr-1 !bg-[#1e3b66] dark:!bg-[#a3c2d9]" />
              <div className="flex flex-col w-full gap-2 sm:flex-row sm:justify-between sm:items-center">
                <Typography
                  variant="h6"
                  className="flex-1 break-words !text-[#0e1a2b] dark:!text-white"
                >
                  National Telecommunication Institute (NTI),
                  <Typography
                    component="span"
                    className="!text-[#1e3b66] dark:!text-[#a3c2d9] !inline ml-2"
                  >
                    Artificial Intelligence Training
                  </Typography>
                </Typography>
                <Typography
                  variant="h6"
                  className="flex-shrink-0 whitespace-nowrap !text-gray-700 dark:!text-gray-400"
                >
                  July 2021 – Aug 2021
                </Typography>
              </div>
            </TimelineHeader>
            <TimelineBody>
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Gained proficiency in Python, focusing on applying it for AI
                  projects.
                </Typography>
                <Typography
                  variant="small"
                  className="!text-[#0e1a2b] dark:!text-white"
                >
                  ○ Acquired foundational knowledge and hands-on skills in
                  machine and deep learning techniques.
                </Typography>
              </div>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Work;
