import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Methilan Rameswaran, a dedicated software developer with 2+ years of experience in web and backend development.
         I specialize in React.js, Node.js, Spring Boot, and Python, focusing on scalable and user-centric applications.
          I hold a BSc in IT from SLIIT and worked at Dgateway Innovation for 18 months on MERN stack projects, handling both frontend and backend development. 
          I'm passionate about continuous learning, cloud technologies, and full-stack development. 
          I'm seeking new opportunities to grow and contribute to impactful software solutions.


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
