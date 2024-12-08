import ProjectCard from "./ProjectCard";


const projects = [
  {
    imgSrc: "",
    title: "Bryt Manager",
    description: "Employee data management app",
    tags: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#",
  },
  {
    imgSrc: "",
    title: "Redundancy Calculator",
    description: "Calculate redundancy package employee is due on termination of contract by the company",
    tags: ["Django", "React", "TailwindCSS"],
    link: "#",
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8">
          My Projects
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
