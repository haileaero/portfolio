import {
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiVite,
  SiLeaflet,
  SiPostman,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          My Skills
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Technologies and tools I use to build modern,
          responsive and high-performance web applications.
        </p>

        {/* Frontend */}

        <div
          className="skills-category"
          data-aos="fade-up"
        >

          <h3>Frontend Development</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <FaReact />
              <span>React</span>
            </div>

            <div className="skill-card">
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div className="skill-card">
              <FaCss3Alt />
              <span>CSS3</span>
            </div>

            <div className="skill-card">
              <FaCode />
              <span>VS Code</span>
            </div>

          </div>

        </div>

        {/* Tools */}

        <div
          className="skills-category"
          data-aos="fade-up"
        >

          <h3>Development Tools</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <FaGitAlt />
              <span>Git</span>
            </div>

            <div className="skill-card">
              <FaGithub />
              <span>GitHub</span>
            </div>

            <div className="skill-card">
              <SiVite />
              <span>Vite</span>
            </div>

            <div className="skill-card">
              <SiPostman />
              <span>Postman</span>
            </div>

          </div>

        </div>

        {/* Other */}

        <div
          className="skills-category"
          data-aos="fade-up"
        >

          <h3>Other Skills</h3>

          <div className="skills-grid">

            <div className="skill-card">
              <SiLeaflet />
              <span>GIS</span>
            </div>

            <div className="skill-card">
              📱
              <span>Responsive Design</span>
            </div>

            <div className="skill-card">
              🌐
              <span>REST APIs</span>
            </div>

            <div className="skill-card">
              ✉️
              <span>EmailJS</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;