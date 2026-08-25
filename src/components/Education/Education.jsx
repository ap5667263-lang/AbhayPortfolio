import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoSchool } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { FaUniversity, FaTrophy, FaBriefcase } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import "./Education.scss";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    id: "01",
    icon: <IoSchool color="#60a5fa" />,
    type: "10th",
    school: "B.R. Public High School",
    year: "2020",
    grade: "High School",
    status: "completed",
    desc: "Completed 10th standard with focus on Science and Mathematics.",
  },
  {
    id: "02",
    icon: <MdOutlineSchool color="#f472b6" />,
    type: "12th",
    school: "Vivekanand Inter College",
    year: "2022",
    grade: "Intermediate",
    status: "completed",
    desc: "Completed 12th standard in Science stream (PCM).",
  },
  {
    id: "03",
    icon: <FaUniversity color="#a78bfa" />,
    type: "B.Tech",
    school: "Babu Banarasi Das Institute of Technology & Management",
    year: "2023 — 2027",
    grade: "Computer Science & Engineering",
    status: "ongoing",
    desc: "Pursuing B.Tech in Computer Science. Focused on Full-Stack Development, DSA, and modern web technologies. Currently maintaining 7+ CGPA.",
  },
  {
    id: "04",
    icon: <FaTrophy color="#fbbf24" />,
    type: "Event",
    school: "Larnovate 2025–26",
    year: "2025–26",
    grade: "Babu Banarasi Das Institute of Technology & Management, Lucknow",
    status: "attended",
    desc: "Attended Larnovate — a tech fest held at Babu Banarasi Das Institute of Technology & Management. Participated in workshops, tech talks, and innovation challenges.",
  },
  {
    id: "05",
    icon: <FaBriefcase color="#34d399" />,
    type: "Internship",
    school: "Grasstech PVT Limited",
    year: "Completed",
    grade: "Software Development Intern",
    status: "completed",
    desc: "Completed internship at Grasstech PVT Limited. Gained hands-on experience in software development, working on real-world projects and industry practices.",
  },
];

const Education = () => {
  const eduRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header
      gsap.fromTo(
        ".edu__label",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".edu__header", start: "top 85%" } }
      );
      gsap.fromTo(
        ".edu__heading",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.15,
          scrollTrigger: { trigger: ".edu__header", start: "top 85%" } }
      );

      // Timeline items stagger
      gsap.fromTo(
        ".edu__item",
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: ".edu__timeline", start: "top 80%" },
        }
      );

    }, eduRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="edu" id="education" ref={eduRef}>

      {/* Header */}
      <div className="edu__header">
        <p className="edu__label">EDUCATION</p>
        <h2 className="edu__heading">
          My <span>journey</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="edu__timeline">
        {timeline.map((item) => (
          <div className="edu__item" key={item.id}>

            {/* Left — year + line */}
            <div className="edu__left">
              <span className="edu__year">{item.year}</span>
              <div className="edu__line" />
            </div>

            {/* Dot */}
            <div className={`edu__dot ${item.status === "ongoing" ? "edu__dot--active" : ""}`}>
              <i>{item.icon}</i>
            </div>

            {/* Right — card */}
            <div className="edu__card">
              <div className="edu__card-top">
                <span className={`edu__badge edu__badge--${item.status}`}>
                  {item.status === "ongoing" ? "Ongoing" : item.status === "attended" ? "Attended" : "Completed"}
                </span>
                <span className="edu__type">{item.type}</span>
              </div>
              <h3 className="edu__school">{item.school}</h3>
              <p className="edu__grade">{item.grade}</p>
              <p className="edu__desc">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Education;
