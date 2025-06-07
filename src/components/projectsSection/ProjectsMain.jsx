import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Dental Appointment Booking",
    year: "Mar 2025",
    align: "right",
    image: "../../public/images/dental.webp",
    link: "https://dental-care-appointment-booking-fro-hazel.vercel.app/",
  },
  {
    name: "Travel Booking system",
    year: "Dec 2024",
    align: "left",
    image: "../../public/images/Travel.webp",
    link: "https://travel-4lma.vercel.app/",
  },
  {
    name: "Business company",
    year: "May 2025",
    align: "right",
    image: "../../public/images/land.webp",
    link: "https://business-gray.vercel.app/",
  },
  {
    name: "RealEstate Business",
    year: "Feb 2025",
    align: "left",
    image: "../../public/images/Estate.webp",
    link: "https://business-m3pe.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // ✅ Pass the link here
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
