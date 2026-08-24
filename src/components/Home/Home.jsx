import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.scss";
import profileImage from "../../assets/profile.jpg";

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".home__intro",       { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" })
        .from(".home__name",        { y: 80, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.3")
        .from(".home__title",       { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".home__description", { y: 25, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".home__buttons",     { y: 25, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".home__social a",    { y: 20, opacity: 0, duration: 0.4, stagger: 0.12, ease: "power3.out" }, "-=0.2")
        .from(".home__photo",       { x: 100, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
        .from(".home__availability",{ y: 20, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.5");
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home" id="home" ref={homeRef}>

      {/* Left Content */}
      <div className="home__container">

        <p className="home__intro">Hello, I'm</p>

        <h1 className="home__name">
          Abhay <span>Pratap</span>
        </h1>

        <h2 className="home__title">Full-Stack Developer</h2>

        <p className="home__description">
          I'm a passionate developer creating amazing web experiences
          with React, Node.js, and modern web technologies.
        </p>

        <div className="home__buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>

        {/* Social Icons */}
        <div className="home__social">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>

      {/* Right Content */}
      <div className="home__right">
        <div className="home__photo">
          <img src={profileImage} alt="Abhay Pratap" />

          {/* Open to Work badge */}
          <div className="home__availability">
            <span className="home__dot"></span>
            <p>Open to Work</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
