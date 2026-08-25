import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import "./Contact.scss";

gsap.registerPlugin(ScrollTrigger);

// ─── EmailJS config ───────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free)
// 2. Add Email Service → copy SERVICE_ID
// 3. Create Email Template → copy TEMPLATE_ID
//    Template variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Account → API Keys → copy PUBLIC_KEY
const EJS_SERVICE       = "service_lyql0cs";
const EJS_TEMPLATE_ME   = "template_a58lu79"; // tujhe aayega — client info
const EJS_TEMPLATE_AUTO = "template_0sqyat7"; // user ko auto-reply
const EJS_PUBLIC        = "DZUv-uEAebrqJbX4H";
// ──────────────────────────────────────────────────────────────

const Contact = () => {
  const contactRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".contact__label, .contact__heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".contact__header", start: "top 85%" } }
      );

      gsap.fromTo(
        ".contact__info-item",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".contact__left", start: "top 80%" } }
      );

      gsap.fromTo(
        ".contact__form",
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".contact__form", start: "top 85%" } }
      );

    }, contactRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const templateParams = {
      from_name:  form.name,
      from_email: form.email,
      phone:      form.phone,
      subject:    form.subject,
      message:    form.message,
      reply_to:   form.email,
    };

    try {
      // 1. Tujhe email aayega — client ki info
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE_ME, templateParams, EJS_PUBLIC);

      // 2. User ko auto-reply
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE_AUTO, templateParams, EJS_PUBLIC);

      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error("EmailJS ERROR:", err.text);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={contactRef}>

      {/* Header */}
      <div className="contact__header">
        <p className="contact__label">GET IN TOUCH</p>
        <h2 className="contact__heading">
          Let's <span>work together</span>
        </h2>
      </div>

      <div className="contact__body">

        {/* Left — info */}
        <div className="contact__left">

          <p className="contact__tagline">
            I'm currently open to new opportunities. Whether you have a
            project in mind or just want to say hi — my inbox is always open!
          </p>

          <div className="contact__info-list">

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <HiMail color="#60a5fa" />
              </div>
              <div>
                <span>Email</span>
                <a href="mailto:ap5667263@gmail.com">ap5667263@gmail.com</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MdPhone color="#4ade80" />
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+91">+91 XXXXX XXXXX</a>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MdLocationOn color="#f472b6" />
              </div>
              <div>
                <span>Location</span>
                <p>Uttar Pradesh, India</p>
              </div>
            </div>

          </div>

          {/* Socials */}
          <div className="contact__socials">
            <a
              href="https://github.com/ap5667263-lang"
              target="_blank"
              rel="noreferrer"
              className="contact__social-btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-pratap-623746341"
              target="_blank"
              rel="noreferrer"
              className="contact__social-btn contact__social-btn--linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

        </div>

        {/* Right — Form */}
        <form className="contact__form" onSubmit={handleSubmit}>

          <div className="contact__row">
            <div className="contact__field">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Abhay Pratap"
                required
              />
            </div>
            <div className="contact__field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                required
              />
            </div>
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="contact__field">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity"
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              required
            />
          </div>

          <button type="submit" className="contact__submit" disabled={loading}>
            <FiSend />
            {loading ? "Sending..." : sent ? "Message Sent! ✅" : "Send Message"}
          </button>

          {sent && (
            <p className="contact__success">
              ✅ Thanks! I'll get back to you soon.
            </p>
          )}

          {error && (
            <p className="contact__error">{error}</p>
          )}

        </form>

      </div>

    </section>
  );
};

export default Contact;
