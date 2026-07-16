import profile from "../assets/haile.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Passionate about building modern web applications with clean design,
          responsive layouts, and intuitive user experiences.
        </p>

        <div className="about-wrapper">

          <div
            className="about-image"
            data-aos="fade-right"
          >
            <img
              src={profile}
              alt="Haile Assefa Wube"
            />
          </div>

          <div
            className="about-content"
            data-aos="fade-left"
          >

            <h3>
              Frontend React Developer & Software Engineering Student
            </h3>

            <p>
              I'm <strong>Haile Assefa Wube</strong>, a passionate Frontend
              React Developer from Ethiopia who enjoys creating modern,
              responsive, and user-friendly web applications.
            </p>

            <p>
              I specialize in React, JavaScript, HTML5, CSS3, and REST APIs.
              My goal is to build applications that are fast, accessible, and
              visually appealing while delivering an excellent user experience.
            </p>

            <p>
              Besides web development, I have experience in GIS and continually
              improve my skills by building real-world projects and learning
              modern technologies.
            </p>

            <div className="about-highlights">

              <div className="highlight">
                ✅ React Development
              </div>

              <div className="highlight">
                ✅ Responsive Design
              </div>

              <div className="highlight">
                ✅ JavaScript (ES6+)
              </div>

              <div className="highlight">
                ✅ Clean UI / UX
              </div>

            </div>

          </div>

        </div>

        <div
          className="about-stats"
          data-aos="fade-up"
        >

          <div className="stat-card">
            <h3>1+</h3>
            <p>Years Learning</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Dedication</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;