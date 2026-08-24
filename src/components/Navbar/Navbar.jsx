import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Navbar.scss";

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    const tl = gsap.timeline();

    // Pehle navbar background slide in karo
    tl.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    // Phir logo, links aur button stagger se aayenge
    .fromTo(
      navbarRef.current.querySelectorAll(".navbar__logo, .navbar__links a, .navbar__resume"),
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.08,
      },
      "-=0.3" // navbar ke aane ke saath thoda overlap
    );
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar__logo">ABP</div>

      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#Education"> Euducation</a>
      </div>

      <button className="navbar__resume">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;