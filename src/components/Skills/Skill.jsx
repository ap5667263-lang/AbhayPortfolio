import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skill.scss";

import { FaPython, FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiMongodb, SiPostman, SiVscodium, SiTypescript, SiSass, SiRedux, SiMysql, SiFigma } from "react-icons/si";
import { TbBrain, TbChartDots, TbBrandOpenai, TbApi } from "react-icons/tb";
import { MdAnimation } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

// ================================
// DATA
// ================================

const programmingLanguages = [
  { name: "Python",     icon: <FaPython color="#3776ab" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "C/C++",      icon: <SiCplusplus color="#00599c" /> },
  { name: "Java",       icon: <FaJava color="#f89820" /> },
  { name: "HTML",       icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS",        icon: <FaCss3Alt color="#1572b6" /> },
];

const fullStack = [
  { name: "React",    icon: <FaReact color="#61dafb" /> },
  { name: "Redux",    icon: <SiRedux color="#764abc" /> },
  { name: "Node.js",  icon: <FaNodeJs color="#68a063" /> },
  { name: "Express",  icon: <SiExpress color="#fff" /> },
  { name: "MongoDB",  icon: <SiMongodb color="#47a248" /> },
  { name: "MySQL",    icon: <SiMysql color="#4479a1" /> },
  { name: "REST API", icon: <TbApi color="#aaa" /> },
  { name: "SCSS",     icon: <SiSass color="#cc6699" /> },
];

const tools = [
  { name: "Git",     icon: <FaGitAlt color="#f05032" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "VS Code", icon: <SiVscodium color="#007acc" /> },
  { name: "Figma",   icon: <SiFigma color="#f24e1e" /> },
  { name: "GSAP",    icon: <MdAnimation color="#88ce02" /> },
];

const professional = [
  "Agile Methodology",
  "Test-Driven Development",
  "Project Management",
  "Communication Skills",
  "Leadership",
  "Problem Solving",
];

const currentlyLearning = [
  { name: "Machine Learning", icon: <TbBrain color="#a78bfa" /> },
  { name: "AI Dev Tools",     icon: <TbBrandOpenai color="#10b981" /> },
  { name: "TypeScript",       icon: <SiTypescript color="#3178c6" /> },
  { name: "Data Models",      icon: <TbChartDots color="#fb923c" /> },
];

// ================================
// COMPONENT
// ================================

const Skill = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const root = skillRef.current;
      if (!root) return;

      const st = (trigger) => ({
        scrollTrigger: {
          trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Header
      const header = root.querySelector(".skill__header");
      const label  = root.querySelector(".skill__label");
      const heading = root.querySelector(".skill__heading");

      if (label)   gsap.fromTo(label,   { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", ...st(header) });
      if (heading) gsap.fromTo(heading, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.15, ...st(header) });

      // Each section
      root.querySelectorAll(".skill__section").forEach((section) => {
        const secHeader = section.querySelector(".skill__section-header");
        const items     = section.querySelectorAll(".skill__item");

        if (secHeader) gsap.fromTo(secHeader, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", ...st(section) });
        if (items.length) gsap.fromTo(items,  { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: "power3.out", delay: 0.15, ...st(section) });
      });

    }, skillRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skill" id="skills" ref={skillRef}>

      {/* Header */}
      <div className="skill__header">
        <h1 className="skill__heading">
          Skills <span>& Tools</span>
        </h1>
      </div>

      {/* Programming Languages */}
      <div className="skill__section">
        <div className="skill__section-header">
          <span>01</span>
          <h2>Programming Languages</h2>
        </div>
        <div className="skill__items">
          {programmingLanguages.map((s) => (
            <div className="skill__item" key={s.name}>
              <i>{s.icon}</i>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full Stack */}
      <div className="skill__section">
        <div className="skill__section-header">
          <span>02</span>
          <h2>Full-Stack Technologies</h2>
        </div>
        <div className="skill__items">
          {fullStack.map((s) => (
            <div className="skill__item" key={s.name}>
              <i>{s.icon}</i>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="skill__section">
        <div className="skill__section-header">
          <span>03</span>
          <h2>Tools & Design</h2>
        </div>
        <div className="skill__items">
          {tools.map((t) => (
            <div className="skill__item" key={t.name}>
              <i>{t.icon}</i>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div className="skill__section">
        <div className="skill__section-header">
          <span>04</span>
          <h2>Professional Skills</h2>
        </div>
        <div className="skill__items skill__items--pills">
          {professional.map((s) => (
            <div className="skill__item skill__item--text" key={s}>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Learning */}
      <div className="skill__section skill__learning">
        <div className="skill__section-header">
          <span>05</span>
          <h2>Currently Learning</h2>
        </div>
        <div className="skill__items">
          {currentlyLearning.map((s) => (
            <div className="skill__item" key={s.name}>
              <i>{s.icon}</i>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skill;
