import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

// Frontend icons
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiRedux, SiExpress, SiJsonwebtokens, SiAxios, SiMongodb, SiMysql, SiTypescript, SiThreedotjs, SiFigma, SiNextdotjs, SiLeetcode, SiCplusplus } from "react-icons/si";
import { TbApi, TbBrandOpenai } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";
import { MdOutlineWork, MdAnimation } from "react-icons/md";
import { FiActivity, FiCode, FiAward } from "react-icons/fi";
import { BsGraphUpArrow, BsPersonWorkspace } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { FaBriefcase, FaTrophy, FaMicrophone } from "react-icons/fa";

// ========================================
// DATA
// ========================================

const skills = [
  {
    title: "Frontend",
    tags: [
      { name: "HTML",       icon: <FaHtml5 color="#e34f26" /> },
      { name: "CSS",        icon: <FaCss3Alt color="#1572b6" /> },
      { name: "SCSS",       icon: <FaSass color="#cc6699" /> },
      { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
      { name: "React",      icon: <FaReact color="#61dafb" /> },
      { name: "Redux",      icon: <SiRedux color="#764abc" /> },
    ],
  },
  {
    title: "Backend",
    tags: [
      { name: "Node.js",  icon: <FaNodeJs color="#68a063" /> },
      { name: "Express",  icon: <SiExpress color="#fff" /> },
      { name: "REST API", icon: <TbApi color="#aaa" /> },
      { name: "JWT",      icon: <SiJsonwebtokens color="#d63aff" /> },
      { name: "Axios",    icon: <SiAxios color="#5a29e4" /> },
    ],
  },
  {
    title: "Database",
    tags: [
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
      { name: "MySQL",   icon: <SiMysql color="#4479a1" /> },
    ],
  },
  {
    title: "Programming",
    tags: [
      { name: "Python", icon: <FaPython color="#3776ab" /> },
      { name: "Java",   icon: <FaJava color="#f89820" /> },
      { name: "C/C++",  icon: <SiCplusplus color="#00599c" /> },
      { name: "DSA",    icon: <SiLeetcode color="#ffa116" /> },
    ],
  },
  {
    title: "SIH Participation",
    tags: [
      { name: "Smart India Hackathon", icon: <FaTrophy color="#fbbf24" /> },
      { name: "Problem Solving",       icon: <FaBriefcase color="#aaa" /> },
      { name: "Team Collaboration",    icon: <FaMicrophone color="#aaa" /> },
    ],
  },
  {
    title: "Soft Skills",
    tags: [
      { name: "Communication",   icon: <FaMicrophone color="#aaa" /> },
      { name: "Teamwork",        icon: <FaBriefcase color="#aaa" /> },
      { name: "Problem Solving", icon: <FaTrophy color="#fbbf24" /> },
      { name: "Leadership",      icon: <FaBriefcase color="#aaa" /> },
      { name: "Adaptability",    icon: <FaMicrophone color="#aaa" /> },
    ],
  },
];

const work = [
  {
    icon: <FaBriefcase color="#60a5fa" />,
    title: "Freelance Developer",
    description: "Building client projects independently — from concept to deployment. Delivered full-stack platforms like hourcompany.in and Collabritz.",
  },
  {
    icon: <TbBrandOpenai color="#10b981" />,
    title: "AI & Vibe Coding",
    description: "Leveraging AI tools to ship faster, smarter, and more creatively. Designed AI/ML models for environmental rainwater harvesting optimization.",
  },
  {
    icon: <FaTrophy color="#fbbf24" />,
    title: "Hackathons",
    description: "Participated in Smart India Hackathon (SIH). Competing under pressure, collaborating in teams and shipping fast.",
  },
  {
    icon: <FaMicrophone color="#f472b6" />,
    title: "Tech Events & Talks",
    description: "Presenting at college tech events, workshops, and community sessions. Active contributor to tech culture at BBDITM.",
  },
  {
    icon: <MdOutlineWork color="#a78bfa" />,
    title: "Internship",
    description: "Interned at Upflairs Private Limited — built real-world full-stack platforms and gained hands-on industry experience.",
  },
  {
    icon: <FiActivity color="#fb923c" />,
    title: "Open Source & Projects",
    description: "Actively building personal projects with React, Node.js, and GSAP. Focused on clean UI, performance, and modern design.",
  },
];

const facts = [
  { icon: <HiLocationMarker color="#f87171" />,   label: "Location",    value: "Uttar Pradesh, India" },
  { icon: <IoSchool color="#60a5fa" />,            label: "College",     value: "BBDITM" },
  { icon: <GiGraduateCap color="#a78bfa" />,       label: "Degree",      value: "B.Tech — CS (2027)" },
  { icon: <BsGraphUpArrow color="#34d399" />,      label: "CGPA",        value: "7+ CGPA" },
  { icon: <MdOutlineWork color="#fbbf24" />,       label: "Internship",  value: "Upflairs Pvt. Ltd." },
  { icon: <FiCode color="#f472b6" />,              label: "Primary Tech", value: "React · Node · Python" },
  { icon: <FiAward color="#fb923c" />,             label: "Hackathon",   value: "SIH Participant" },
  { icon: <BsPersonWorkspace color="#38bdf8" />,   label: "Currently",   value: "Building & Learning" },
];

const exploring = [
  { name: "AI Dev Tools", icon: <TbBrandOpenai color="#10b981" size={32} /> },
  { name: "Three.js",     icon: <SiThreedotjs color="#ffffff" size={32} /> },
  { name: "GSAP",         icon: <MdAnimation color="#88ce02" size={32} /> },
  { name: "TypeScript",   icon: <SiTypescript color="#3178c6" size={32} /> },
  { name: "Figma",        icon: <SiFigma color="#f24e1e" size={32} /> },
  { name: "Next.js",      icon: <SiNextdotjs color="#ffffff" size={32} /> },
];


// ========================================
// COMPONENT
// ========================================

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Helper — reusable scrollTrigger config
      const st = (trigger) => ({
        scrollTrigger: {
          trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Header
      gsap.from(".about__label", {
        y: 25, opacity: 0, duration: 0.8, ease: "power3.out",
        ...st(".about__header"),
      });
      gsap.from(".about__heading", {
        y: 50, opacity: 0, duration: 1.0, ease: "power4.out",
        delay: 0.15,
        ...st(".about__header"),
      });

      // Bio paragraphs
      gsap.from(".about__bio p", {
        y: 25, opacity: 0, duration: 1.4, stagger: 0.15, ease: "power3.out",
        ...st(".about__bio"),
      });

      // What I Do cards
      gsap.from(".about__work-card", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        ...st(".about__work"),
      });

      // What I Work With cards
      gsap.from(".about__card", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out",
        ...st(".about__skills"),
      });

      // Quick Facts
      gsap.from(".about__fact", {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.08, ease: "power3.out",
        ...st(".about__facts"),
      });

      // Currently Exploring
      gsap.from(".about__explore-item", {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.07, ease: "power3.out",
        ...st(".about__explore-list"),
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>

      {/* Header */}
      <div className="about__header">
        <p className="about__label">ABOUT ME</p>
        <h2 className="about__heading">
          A little <span>about me</span>
        </h2>
      </div>

      {/* Bio */}
      <div className="about__bio">
        <p>
          I am a dedicated <strong>B.Tech Computer Science</strong> student
          at <strong>BBDITM</strong> with <strong>7+ CGPA</strong> and a strong focus on
          Full Stack Development. Proficient in <strong>Python, JavaScript,</strong> and{" "}
          <strong>C/C++</strong>, I bring adaptable coding practices to building modern,
          user-centric web applications.
        </p>
        <p>
          My goal is to contribute to a forward-thinking engineering team, delivering
          cutting-edge web solutions that prioritize performance, responsiveness, and
          user experience. I thrive in collaborative environments where I can tackle
          complex challenges alongside experienced professionals.
        </p>
        <p>
          My practical background includes an internship at{" "}
          <strong>Upflairs Private Limited</strong>, building full-stack platforms like{" "}
          <strong>hourcompany.in</strong> and <strong>Collabritz</strong>, and designing
          data-driven AI/ML models for environmental rainwater harvesting optimization.
        </p>
      </div>

      {/* What I Do */}
      <div className="about__section">
        <div className="about__section-title">
          <span>01</span>
          <h3>What I Do</h3>
        </div>

        <div className="about__work">
          {work.map((item) => (
            <div className="about__work-card" key={item.title}>
              <div className="about__work-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What I Work With */}
      <div className="about__section">
        <div className="about__section-title">
          <span>02</span>
          <h3>What I Work With</h3>
        </div>

        <div className="about__skills">
          {skills.map((skill) => (
            <div className="about__card" key={skill.title}>
              <h4>{skill.title}</h4>
              <div className="about__tags">
                {skill.tags.map((tag) => (
                  <span className="about__tag" key={tag.name}>
                    <i className="about__tag-icon">{tag.icon}</i>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Facts */}
      <div className="about__section">
        <div className="about__section-title">
          <span>03</span>
          <h3>Quick Facts</h3>
        </div>

        <div className="about__facts">
          {facts.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <span className="about__fact-label">
                <i className="about__fact-icon">{fact.icon}</i>
                {fact.label}
              </span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Currently Exploring */}
      <div className="about__section about__exploring">
        <div className="about__section-title">
          <span>04</span>
          <h3>Currently Exploring</h3>
        </div>

        <div className="about__explore-list">
          {exploring.map((item) => (
            <span className="about__explore-item" key={item.name}>
              <i className="about__explore-icon">{item.icon}</i>
              {item.name}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
