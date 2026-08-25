import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./Footer.scss";

const links = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects",  href: "#projects" },
  { label: "Contact",   href: "#contact" },
];

const socials = [
  { icon: <FaGithub />,   href: "https://github.com/ap5667263-lang",                    label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abhay-pratap-623746341",  label: "LinkedIn" },
  { icon: <HiMail />,     href: "mailto:pratapabhay53506@gmail.com",                   label: "Email" },
];

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__top">

        {/* Brand */}
        <div className="footer__brand">
          <h3 className="footer__logo">ABP</h3>
          <p className="footer__name">Abhay Pratap</p>
          <p className="footer__college">
            Babu Banarasi Das Institute of Technology & Management
          </p>
          <a href="mailto:pratapabhay53506@gmail.com" className="footer__email">
            pratapabhay53506@gmail.com
          </a>
          <span className="footer__status">
            <span className="footer__dot" /> Open to Work
          </span>
        </div>

        {/* Nav links */}
        <div className="footer__center">
          <p className="footer__section-title">Quick Links</p>
          <nav className="footer__nav">
            {links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="footer__right">
          <p className="footer__section-title">Connect</p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer__social"
              >
                <i>{s.icon}</i>
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Abhay Pratap. Built with{" "}
          <FaHeart className="footer__heart" /> using React & GSAP.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
