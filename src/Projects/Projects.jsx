import { Carousel, Typography, Button } from "@material-tailwind/react";
import { CiLink } from "react-icons/ci";

const projects = [
  {
    name: "GPU-Accelerated Custom DBMS with CUDA",
    description:
      "Designed and implemented a customDBMS in C++ using object-oriented programming, multithreading, and CUDA to accelerate high-performance query execution. The system processes SQL queries including selection, projection, joins, filtering, sorting, and aggregation on large CSV datasets. Focused on parallelizing traditionally sequential database operations using parallel computing techniques to improve execution speed and efficiency.",
    github: "https://github.com/MustafaTarek77/DBMS_CUDA",
    tech: ["C++", "CUDA", "OOP", "Multithreading", "SQL"],
  },
  {
    name: "Smart Order Parser",
    description:
      "Developed an NLP system to extract structured information from free-form food order text using trainable word embeddings and a Bi-directional LSTM model. The system accurately identified key entities such as pizza toppings, sizes, crust types, and drink options by understanding the context and sequence of words. The output was a hierarchical parsing tree representing the full order, enabling smooth integration with order management systems.",
    github: "https://github.com/MustafaTarek77/Smart-Order-Parser",
    tech: ["Python", "NLP", "LSTM", "Word Embeddings"],
  },
  {
    name: "Fraud Detector",
    description:
      "Developed a credit card fraud detection system using a highly imbalanced dataset. Applied preprocessing techniques like scaling, outlier removal, feature selection, undersampling, and SMOTE oversampling. Trained and evaluated models including XGBoost, KNN, Logistic Regression, Random Forest, and Decision Tree using ROC-AUC and F1-Score.",
    github: "https://github.com/MustafaTarek77/Fraud_Detector",
    tech: [
      "Python",
      "Machine Learning",
      "XGBoost",
      "KNN",
      "SMOTE",
      "Data Preprocessing",
    ],
  },
  {
    name: "Arabic Font Recognition",
    description:
      "Developed a complete ML pipeline to classify Arabic text images into one of four fonts. The system included preprocessing steps to handle various image variations. Feature extraction was done using Local Phase Quantization (LPQ) to capture texture details. A Support Vector Machine (SVM) model was trained and tuned, with performance compared against KNN, AdaBoost, Decision Tree, and Random Forest classifiers. The final model was deployed on a cloud hosting service for real-time font classification from screenshots.",
    github: "https://github.com/MustafaTarek77/Arabic-Fonts-Recognition",
    tech: ["Python", "SVM", "LPQ", "KNN", "AdaBoost", "ML Pipeline"],
  },
  {
    name: "Grades Autofiller",
    description:
      "Developed an automated assistant for TAs and Professors to streamline the grading process by extracting and organizing grades from diverse printed sheets using OCR and features, and automatically correcting multiple-choice bubble sheet exams based on a provided model answer with configurable grading values.",
    github: "https://github.com/MustafaTarek77/Grades-Auto-Filler",
    tech: ["Python", "OCR", "Automation", "Data Extraction"],
  },
  {
    name: "Twitter Clone",
    description:
      "Replicates the core features of the social media platform, including authentication, registration, and profile management. It allows users to follow, unfollow, block, and mute others, create and interact with tweets, explore timelines, trends, and hashtags, and exchange direct messages. The system also supports media uploads, notifications, and user search for a complete social experience using Node.js with Express, TypeORM, and PostgreSQL.",
    github: "https://github.com/MustafaTarek77/Twitter-Clone-BackEnd",
    tech: ["Node.js", "Express", "TypeORM", "PostgreSQL", "REST API"],
  },
  {
    name: "Operating System Scheduler",
    description:
      "Developed a custom OS scheduler in C on Linux, implementing Round Robin, FIFO, HPF, and SRTN algorithms to manage process execution. Integrated First Fit and Buddy Memory strategies for memory allocation. Used multiprocessing and Linux system calls to ensure efficient CPU and memory utilization.",
    github: "https://github.com/MustafaTarek77/Operating-System-CPU-Scheduler",
    tech: ["C", "Linux", "OS Scheduling", "Memory Management", "System Calls"],
  },
  {
    name: "Order Management System",
    description:
      "Developed the backend of an e-commerce platform to manage users, products, carts, orders, and discount coupons. Built scalable services using NestJS with a modular architecture for maintainability. Designed and managed relational schemas using Prisma ORM with PostgreSQL. Implemented secure user authentication and profile management, along with RESTful APIs for catalog, cart, order processing, and coupon application.",
    github: "https://github.com/MustafaTarek77/Order-Management-System",
    tech: ["NestJS", "Prisma", "PostgreSQL", "REST API", "Backend Development"],
  },
  {
    name: "Vectorized Semantic Search Engine",
    description:
      "Built a scalable semantic search database handling up to 20 million entries using vector embeddings. Used cosine similarity to measure semantic relevance between queries and data points. Implemented an Inverted File Index (IVF) to speed up searches by clustering and limiting search scope. Developed in Python with advanced database indexing techniques. Optimized for fast, accurate retrieval in large-scale datasets.",
    github: "https://github.com/MustafaTarek77/Semantic_Search",
    tech: [
      "Python",
      "Vector Search",
      "Cosine Similarity",
      "IVF",
      "Database Indexing",
    ],
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-6 px-4 sm:px-8 md:px-12 lg:px-24"
      id="projects"
    >
      <Typography
        variant="h1"
        className="mb-6 !text-[#0e1a2b] dark:!text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        data-aos="zoom-in-up"
      >
        Projects
      </Typography>
      <Carousel
        className="w-full overflow-hidden rounded-xl"
        prevArrow={({ handlePrev }) => (
          <button
            onClick={handlePrev}
            className="absolute z-10 p-3 text-[#0e1a2b] dark:text-[#1e3b66] transition-colors duration-300 -translate-y-1/2 bg-transparent rounded-full shadow-lg sm:p-4 top-1/2 left-4 sm:left-8 hover:bg-gray-100"
          >
            ❮
          </button>
        )}
        nextArrow={({ handleNext }) => (
          <button
            onClick={handleNext}
            className="absolute z-10 p-3 text-[#0e1a2b] dark:text-[#1e3b66] transition-colors duration-300 -translate-y-1/2 bg-transparent rounded-full shadow-lg sm:p-4 top-1/2 right-4 sm:right-8 hover:bg-gray-100"
          >
            ❯
          </button>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute z-50 flex justify-center gap-2 bottom-[-2rem] w-full">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-[#0e1a2b] dark:bg-[#a3c2d9]"
                    : "bg-gray-300 dark:bg-[#1e3b66]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center w-full p-2 sm:p-4 h-[28rem] sm:h-[30rem] md:h-[32rem] lg:h-[28rem]"
            data-aos="flip-up"
          >
            <div className="max-w-4xl w-full p-4 sm:p-6 text-center shadow-xl dark:bg-[#1e3b66] rounded-3xl flex flex-col items-center">
              <Typography
                variant="h3"
                className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold !text-[#0e1a2b] dark:!text-white"
              >
                {project.name}
              </Typography>
              <Typography
                variant="lead"
                className="mb-2 text-sm sm:text-base md:text-base lg:text-lg opacity-90 !text-[#1e3b66] dark:!text-[#a3c2d9] font-medium"
              >
                {project.description}
              </Typography>
              <div className="flex flex-wrap justify-center gap-1 mb-3">
                {project.tech?.map((techItem, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 bg-[#1e3b66] text-white text-xs sm:text-sm md:text-sm rounded-full dark:bg-[#a3c2d9] dark:text-[#0e1a2b]"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <a href={project.github} target="_blank">
                <Button
                  size="md"
                  color="white"
                  variant="text"
                  className="!bg-[#0e1a2b] text-white hover:!bg-[#1e3b66] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center gap-1">
                    <Typography className="text-xs sm:text-sm md:text-base">
                      VIEW PROJECT
                    </Typography>
                    <CiLink className="text-xl sm:text-2xl" />
                  </div>
                </Button>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
