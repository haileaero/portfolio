import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_H787996a",
        "template_aufhzko",
        form.current,
        "qHOnnPpLzSMyJvkgI"
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2
          className="section-title"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <p
          className="section-subtitle"
          data-aos="fade-up"
        >
          Have a project or opportunity? I'd love to hear from you.
          Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <div className="contact-wrapper">

          <div
            className="contact-info"
            data-aos="fade-right"
          >

            <div className="contact-card">
              <h3>📍 Location</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>

            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>
                <a href="tel:+251970695370">
                  +251 970 695 370
                </a>
              </p>
            </div>

          </div>

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
            data-aos="fade-left"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading || sent}
              className={sent ? "sent-btn" : ""}
            >
              {loading
                ? "Sending..."
                : sent
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;