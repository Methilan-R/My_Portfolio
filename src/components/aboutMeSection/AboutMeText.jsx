import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Methilan Rameswaran, a passionate and results-oriented software developer with over 2 
        years of professional experience in web and backend development. I specialize in React.js,
        Spring Boot, Node.js, and Python, with a strong focus on building robust, scalable, 
        and user-centric applications.

        I earned my Bachelor of Science (BSc) in Information Technology from the Sri Lanka Institute
         of Information Technology (SLIIT), where I gained a solid academic foundation in software 
         engineering, data structures, and system design.

       Professionally, I worked at Dgateway Innovation for 18 months—first as a Software Intern for 
       6 months, and then as a Software Associate for 1 year. During my time there, I worked on several 
       real-world projects using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
       I was involved in full-cycle development processes including API integration, frontend development, 
       backend logic, and database design.

      I'm highly motivated by continuous learning and professional growth. I actively seek opportunities
       to explore new technologies and improve my development skills. I'm particularly enthusiastic about 
       cloud-based applications, microservices architecture, and full-stack development. 
       I enjoy collaborating in agile teams, solving complex problems, and contributing to meaningful
        tech solutions that improve user experiences.

      I am now looking to further my career in software engineering, 
      where I can apply my skills, take on new challenges, and keep growing as a developer.


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
