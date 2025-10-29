import { Typography } from "@material-tailwind/react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaJenkins,
  FaCode,
  FaMicrochip,
  FaAws
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiTerraform,
  SiAnsible
} from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";

const Skills = () => {
  const skills = [
    { icon: SiCplusplus, name: "C++", color: "#00599C" },
    { icon: SiC, name: "C", color: "#555555" },
    { icon: FaPython, name: "Python", color: "#3776ab" },
    { icon: FaJava, name: "Java", color: "#f89820" },
    { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
    { icon: FaDatabase, name: "SQL", color: "#f29111" },
    { icon: FaMicrochip, name: "Verilog", color: "#ee1c25" },
    { icon: FaMicrochip, name: "VHDL", color: "#0084d1" },
    { icon: FaCode, name: "Assembly8086", color: "#6e4c2b" },
    { icon: FaNodeJs, name: "NodeJS", color: "#68a063" },
    { icon: SiNestjs, name: "NestJS", color: "#e0234e" },
    { icon: FaNodeJs, name: "Express", color: "#68a063" },
    { icon: FaDocker, name: "Docker", color: "#0db7ed" },
    { icon: FaCode, name: "CMake", color: "#064f8c" },
    { icon: SiPostgresql, name: "Postgres", color: "#336791" },
    { icon: SiMongodb, name: "MongoDB", color: "#47a248" },
    { icon: SiPrisma, name: "ORM/Prisma", color: "#0c344b" },
    { icon: SiTensorflow, name: "TensorFlow", color: "#ff6f00" },
    { icon: SiPytorch, name: "PyTorch", color: "#ee4c2c" },
    { icon: SiScikitlearn, name: "Scikit-learn", color: "#f7931e" },
    { icon: SiOpencv, name: "OpenCV", color: "#5c3ee8" },
    { icon: SiPandas, name: "Pandas", color: "#150458" },
    { icon: SiNumpy, name: "NumPy", color: "#013243" },
    { icon: FaDocker, name: "Docker", color: "	#4e79a7" },
    { icon: AiOutlineKubernetes, name: "Kubernetes", color: "#326ce5" },
    { icon: FaJenkins, name: "Jenkins", color: "#d33833" },
    { icon: SiTerraform, name: "Terraform", color: "#623ce4" },
    { icon: FaAws, name: "AWS", color: "#ff9900" },
    { icon: SiAnsible, name: "Ansible", color: "#ee0000" },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-12 px-4 py-8"
      id="skills"
    >
      <Typography
        variant="h1"
        className="mb-1 !text-[#0e1a2b] dark:!text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl"
        data-aos="zoom-in-down"
      >
        Skills
      </Typography>
      <div
        className="grid grid-cols-3 gap-6 sm:grid-cols-5 md:grid-cols-8 sm:gap-6"
        data-aos="zoom-in-down"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              style={{
                boxShadow: `0 4px 15px 0 ${skill.color}`,
              }}
              className="flex flex-col items-center gap-2 p-2 transition-transform duration-300 rounded-lg hover:scale-110 dark:shadow-white"
            >
              <Icon size={40} color={skill.color} />
              <Typography
                variant="small"
                className="!text-[#0e1a2b] dark:!text-white text-center"
              >
                {skill.name}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
