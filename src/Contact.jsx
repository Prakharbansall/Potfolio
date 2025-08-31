import React, { useState } from "react";
import "./Contact.css";
import SocialIcon from "./SocialIcon";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Replace these with your actual EmailJS IDs
    const serviceID = "service_od2nljh";
    const templateID = "template_k875ijm";
    const publicKey = "S3ut-kjyknLhb4w2H";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        publicKey
      )
      .then((res) => {
        console.log("EmailJS Success:", res);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError("Oops! Something went wrong. Try again.");
      });
  };

  return (
    <section id="contact">
      <h2>
        Let’s work together <span>🚀</span>
      </h2>
      <p>
        Have a project in mind or just want to say hi? Fill out the form below
        or connect with me on social media!
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit" disabled={submitted}>
          {submitted ? "Thank you! 🎉" : "Send Message"}
        </button>
      </form>

      {submitted && (
        <div className="submitted-msg">✅ Your message has been sent!</div>
      )}
      {error && <div className="error-msg">❌ {error}</div>}

      <div className="social-icons">
        <SocialIcon url="https://github.com/Prakharbansall" type="github" />
        <SocialIcon
          url="https://www.linkedin.com/in/prakhar-m03/"
          type="linkedin"
        />
        <SocialIcon url="https://x.com/PrakharBan16313" type="twitter" />
        <SocialIcon
          url="mailto:prakharbansal@example.com?subject=Hello%20Prakhar&body=Hi%20Prakhar,"
          type="email"
        />
      </div>
    </section>
  );
}
