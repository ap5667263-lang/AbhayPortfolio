import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loader.scss";

const Loader = ({ onComplete }) => {
  const loaderRef  = useRef(null);
  const textRef    = useRef(null);
  const nameRef    = useRef(null);
  const lineRef    = useRef(null);
  const subRef     = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Step 1 — line grows
    tl.fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.inOut" }
    )

    // Step 2 — "Welcome" fades in
    .fromTo(textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    )

    // Step 3 — Name slides up
    .fromTo(nameRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" },
      "-=0.2"
    )

    // Step 4 — subtitle
    .fromTo(subRef.current,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.3"
    )

    // Step 5 — pause
    .to({}, { duration: 1.2 })

    // Step 6 — everything fades up & out
    .to(loaderRef.current.querySelectorAll(".loader__content > *"), {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.in",
    })

    // Step 7 — overlay slides up revealing portfolio
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
      onComplete,
    });

  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__overlay" ref={overlayRef} />

      <div className="loader__content">
        <span className="loader__welcome" ref={textRef}>Welcome to my Portfolio</span>
        <div className="loader__line" ref={lineRef} />
        <h1 className="loader__name" ref={nameRef}>
          Abhay <span>Pratap</span>
        </h1>
        <p className="loader__sub" ref={subRef}>Full-Stack Developer</p>
      </div>
    </div>
  );
};

export default Loader;
