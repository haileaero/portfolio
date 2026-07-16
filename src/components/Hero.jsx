import profile from "../assets/haile.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div
          className="hero-content"
          data-aos="fade-right"
        >
          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1>
            Haile <span>Assefa Wube</span>
          </h1>

          <h2>
            <TypeAnimation
              sequence={[
                "Frontend React Developer",
                2000,
                "Software Engineering Student",
                2000,
                "GIS Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-description">
            I build modern, responsive, and high-performance web applications
            using React, JavaScript, HTML, and CSS. I enjoy transforming ideas
            into beautiful, user-friendly digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>

            <a
              href="/Haile_Assefa_Wube_CV.pdf"
              download
              className="btn btn-outline"
            >
              Download CV
            </a>
          </div>
        </div>

        <div
          className="hero-image"
          data-aos="fade-left"
        >
          <img
            src={profile}
            alt="Haile Assefa Wube"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;