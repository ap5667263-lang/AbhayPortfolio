import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase } from "react-icons/si";
import empVideo from "../../assets/Empolymanagement.mp4";
import portfolioVideo from "../../assets/Abhay Portfolio .mp4";
import instagramImg from "../../assets/instagram.png";
import "./Project.scss";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "Abhay Portfolio",
    desc: "A personal developer portfolio built with React and GSAP animations. Features smooth scroll-triggered animations, responsive design, and modern dark UI.",
    tags: [
      { name: "React",   icon: <FaReact color="#61dafb" /> },
      { name: "GSAP",    icon: null },
      { name: "SCSS",    icon: null },
      { name: "Vite",    icon: null },
    ],
    github: "https://github.com/ap5667263-lang/AbhayPortfolio",
    live: "#",
    number: "01",
    featured: true,
    video: portfolioVideo,
  },
  {
    id: "02",
    title: "Employee Management",
    desc: "A full-stack Employee Management System to add, update, delete and track employee records. Includes role-based access, search filters, and dashboard analytics.",
    tags: [
      { name: "React",   icon: <FaReact color="#61dafb" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
      { name: "Express", icon: <SiExpress color="#fff" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    ],
    github: "https://github.com/ap5667263-lang/EmployeeMangement",
    live: "#",
    number: "02",
    featured: true,
    video: empVideo,
  },
  {
    id: "03",
    title: "Instagram Clone",
    desc: "A full-stack social media clone built with MERN stack. Features include user auth, post upload, like/comment system, follow/unfollow, and real-time feed.",
    tags: [
      { name: "React",   icon: <FaReact color="#61dafb" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
      { name: "Express", icon: <SiExpress color="#fff" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    ],
    github: "https://github.com/ap5667263-lang/Instagramclone",
    live: "#",
    number: "03",
    featured: false,
    image: instagramImg,
  },
  {
    id: "04",
    title: "Pizza Delivery App",
    desc: "A fully functional pizza ordering web app with menu browsing, cart management, order tracking, and payment integration. Built with modern React and state management.",
    tags: [
      { name: "React",   icon: <FaReact color="#61dafb" /> },
      { name: "Redux",   icon: <SiRedux color="#764abc" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
    ],
    github: "https://github.com/ap5667263-lang",
    live: "#",
    number: "04",
    featured: false,
    video: empVideo,
  },
];

const Project = () => {
  const projectRef = useRef(null);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".project__label, .project__heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".project__header", start: "top 85%" } }
      );

      gsap.fromTo(
        ".project__card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".project__grid", start: "top 80%" } }
      );

    }, projectRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="project" id="projects" ref={projectRef}>

      {/* Header */}
      <div className="project__header">
        <p className="project__label">PROJECTS</p>
        <h2 className="project__heading">
          Things I've <span>built</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="project__grid">
        {projects.map((proj) => (
          <div
            className={`project__card ${proj.featured ? "project__card--featured" : ""}`}
            key={proj.id}
            onMouseEnter={() => setActive(proj.id)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Video or Image preview */}
            {proj.video && (
              <div className="project__video-wrapper">
                <video src={proj.video} autoPlay muted loop playsInline className="project__video" />
              </div>
            )}
            {proj.image && !proj.video && (
              <div className="project__video-wrapper">
                <img src={proj.image} alt={proj.title} className="project__video" />
              </div>
            )}

            {/* Top row */}
            <div className="project__card-top">
              <span className="project__number">{proj.number}</span>
              {proj.featured && <span className="project__badge">Featured</span>}
            </div>

            {/* Title */}
            <h3 className="project__title">{proj.title}</h3>

            {/* Desc */}
            <p className="project__desc">{proj.desc}</p>

            {/* Tags */}
            <div className="project__tags">
              {proj.tags.map((tag) => (
                <span className="project__tag" key={tag.name}>
                  {tag.icon && <i>{tag.icon}</i>}
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="project__links">
              <a href={proj.github} target="_blank" rel="noreferrer" className="project__link">
                <FaGithub /> Code
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Project;
