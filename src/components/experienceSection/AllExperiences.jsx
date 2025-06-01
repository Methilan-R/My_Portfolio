import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer Intern", 
    company: "Dgateway Innovation",
    date: "2023 Feb - Aug",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Software Associate",
    company: "Dgateway Innovation",
    date: "2023 Sep - 2024 April",
    responsibilities: [
      "Developed and maintained full-stack applications using MERN stack.",
      "Implemented new features and optimized existing functionalities.",
      "Managed API integrations and database operations.",
    ],
  },
  {
    job: "Delivered Projects",
    company: "Dgateway Innovation",
    date: "2024 - May",
    responsibilities: [
      "Construction Project",
      "Laundry Service Project",
      "Payroll Management System",
      "Cleaning Service Booking & Payment System"
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
