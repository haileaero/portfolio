function Services() {
  const services = [
    {
      title: "Frontend Development",
      desc: "Building fast, responsive, and modern web applications using React, JavaScript, HTML5, and CSS3.",
      icon: "💻",
    },
    {
      title: "Responsive Web Design",
      desc: "Creating websites that provide a seamless experience across desktops, tablets, and mobile devices.",
      icon: "📱",
    },
    {
      title: "UI / UX Design",
      desc: "Designing clean, modern, and user-friendly interfaces with attention to usability and accessibility.",
      icon: "🎨",
    },
    {
      title: "REST API Integration",
      desc: "Connecting frontend applications with RESTful APIs to deliver dynamic and interactive experiences.",
      icon: "🌐",
    },
    {
      title: "Performance Optimization",
      desc: "Improving website speed, code quality, and overall performance for a better user experience.",
      icon: "⚡",
    },
    {
      title: "Maintenance & Support",
      desc: "Providing continuous improvements, bug fixes, and feature enhancements for existing web applications.",
      icon: "🛠️",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          My Services
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          I provide high-quality frontend development services with a focus on
          clean code, modern design, and exceptional user experience.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;