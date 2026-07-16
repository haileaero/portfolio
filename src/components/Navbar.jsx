import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "home",
    "about",
    "skills",
    "projects",
    "services",
    "contact",
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">

        <h2 className="logo">
          Haile
        </h2>

        <nav>

          <ul className="nav-links">

            {links.map((link) => (

              <li key={link}>

                <a
                  href={`#${link}`}
                  className={active === link ? "active" : ""}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>

              </li>

            ))}

          </ul>

        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;