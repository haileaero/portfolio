import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h2>Haile Assefa Wube</h2>

        <p className="footer-title">
          Frontend React Developer • Software Engineering Student • GIS Specialist
        </p>

        <div className="social-icons">

          <a
            href="https://github.com/haileaero"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/haile-assefa-63b1b8283"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="YOUR_FACEBOOK_LINK"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://t.me/Solution_With_Haile"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <FaTelegramPlane />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Haile Assefa Wube. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;