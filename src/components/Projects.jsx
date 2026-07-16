function Projects() {
  const projects = [
    {
      title: "Weather Dashboard",
      image: "/projects/weather-dashboard.png",
      description:
        "A modern weather application that provides current weather conditions and a 5-day forecast using the OpenWeather API.",
      technologies: ["React", "Vite", "CSS", "OpenWeather API"],
      github: "#",
      demo: "#",
    },

    {
      title: "Task Manager",
      image: "/projects/task-manager.png",
      description:
        "A task management application with task creation, completion, priorities, due dates, dark mode, and responsive design.",
      technologies: ["React", "Vite", "CSS"],
      github: "#",
      demo: "#",
    },

    {
      title: "Student Management System",
      image: "/projects/student-management.png",
      description:
        "A student management system for adding, updating, searching, and deleting student records with a clean interface.",
      technologies: ["React", "Vite", "CSS"],
      github: "#",
      demo: "#",
    },

    {
      title: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      description:
        "A modern responsive portfolio website showcasing my projects, technical skills, resume, and contact information.",
      technologies: ["React", "Vite", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Here are some of the projects I've built while learning and improving
          my frontend development skills.
        </p>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="tech"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;