import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await emailjs.send(
        "service_jhyxkg8",
        "template_gzy3pia",
        {
          name: name,
          email: email,
          message: message,
        },
        {
          publicKey: "d1b2ss8afVnnujTRt",
        }
      );

      setSubmitted(true);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-heading">
        <p className="section-subtitle">Get In Touch</p>

        <h2>Contact Me</h2>

        <p>
          Have a project or opportunity? Feel free to
          get in touch with me.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your message"
            rows={6}
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="success-message">
          Thank you! Your message has been sent successfully. 😊
        </p>
      )}
    </section>
  );
}

export default Contact;