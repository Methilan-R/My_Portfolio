 
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import {   FaJava,FaPython  } from "react-icons/fa";

const skills = [
 {
     skill: "ReactJS",
     icon: FaReact,
   },
   {
     skill: "Java",
     icon: FaJava,
   },
   {
     skill: "Python",
     icon: FaPython,
   },
   {
     skill: "TypeScript",
     icon: SiTypescript,
   },
   {
     skill: "JavaScript",
     icon: IoLogoJavascript,
   },
   {
     skill: "Redux",
     icon: SiRedux,
   },
   {
     skill: "NextJS",
     icon: SiNextdotjs,
   },
   {
     skill: "TailwindCSS",
     icon: RiTailwindCssFill,
   },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
