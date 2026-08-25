import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import resumeImg from "../../assets/Resume.jpg";
import "./Navbar.scss";

const Navbar = () => {
  const navbarRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!navbarRef.current) return;

    // GSAP entrance animation
    const tl = gsap.timeline();
    tl.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    ).fromTo(
      navbarRef.current.querySelectorAll(".navbar__logo, .navbar__links a, .navbar__resume"),
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.08 },
      "-=0.3"
    );

    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} ref={navbarRef}>

      <a href="#home" className="navbar__logo">ABP</a>

      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href={resumeImg}
        download="Abhay_Pratap_Resume.jpg"
        className="navbar__resume"
        target="_blank"
        rel="noreferrer"
      >
        Resume ↗
      </a>

    </nav>
  );
};

export default Navbar;
