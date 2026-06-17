import React, { useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGsap,
} from "react-icons/si";
import resumeImg from "../assets/resume.pdf";
import assets from "../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {


  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeImg;
    link.download = "Resume.pdf";
    link.click();
  };


  const about = useRef()
  const abouts = useRef()
  const card = useRef()
  const aboutsec = useRef()
  const whatdo = useRef()
  const stake = useRef()
  const stakecard = useRef()


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(about.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: about.current,
        start: "top 85%",
      }

    })

    gsap.from(abouts.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: about.current,
        start: "top 75%",
      }

    })

    gsap.from(card.current, {
      opacity: 0,
      duration: 1,
      rotateZ: -20,
      x: -200,
      ease: "power4.out",

      stagger: 0.2,
      scrollTrigger: {
        trigger: card.current,
        start: "top 80%",

      }

    })

    gsap.from(aboutsec.current.children, {
      opacity: 0,
      duration: 1,
      x: 200,
      ease: "back.out(1.7)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: aboutsec.current,
        start: "top 80%",
      }
    })

    gsap.from(whatdo.current.children, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: whatdo.current,
        start: "top 70%",
      }
    })

    gsap.from(stake.current.children, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: stake.current,
        start: "top 70%",
      }
    })

    gsap.from(stakecard.current.children, {
      opacity: 0,
      duration: 0.5,
      scale: 0.5,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: stakecard.current,
        start: "top 70%",
      }
    })

  }, { scope: about })

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07020f] py-24 text-white "
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[200px]" />

      {/* Grid Pattern */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="text-center">
          <span ref={about} className="rounded-full border border-purple-500/30 px-5 py-2 text-sm text-purple-400">
            ABOUT ME
          </span>

          <h2 ref={abouts} className="mt-6 text-4xl font-bold md:text-6xl">
            Passionate About Building
            <span className="text-purple-500">
              {" "}
              Modern Web Experiences
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex justify-center">
            <div ref={card} className="group relative [perspective:1200px]">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-[40px] bg-purple-600/30 blur-3xl transition duration-700 group-hover:bg-purple-500/50" />

              {/* Card */}
              <div
                className="
                relative
                h-[300px]
                w-[250px]
                lg:h-[450px]
                lg:w-[340px]
                md:h-[400px]
                md:w-[320px]
                overflow-hidden
                rounded-[32px]
                border
                border-purple-500/20
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-700
                group-hover:scale-105
                group-hover:[transform:rotateY(12deg)_rotateX(6deg)]
              "
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/20 opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* Image */}
                <img
                  src={assets.me}
                  alt="Raj "
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07020f] via-transparent to-transparent" />

                {/* Text */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold">
                    Raj
                  </h3>

                  <p className="text-purple-400">
                    Frontend & MERN Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div ref={aboutsec}>
            <h3 className="text-3xl font-bold md:text-4xl">
              Hi, I'm
              <span className="text-purple-500">
                {" "}Raj
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm a passionate Frontend & MERN Stack Developer
              focused on creating modern, responsive, and
              user-friendly web applications.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              I specialize in React.js, Tailwind CSS, GSAP,
              Node.js, Express.js, and MongoDB to build
              full-stack applications with exceptional user
              experiences.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              My goal is to transform ideas into powerful
              digital products that are visually stunning,
              highly performant, and scalable.
            </p>

            <div>
              <button onClick={handleDownload} className="mt-8 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium shadow-lg shadow-purple-700/30 transition hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div ref={whatdo} className="mt-28">
          <h3 className="mb-12 text-center text-3xl font-bold">
            What I Do
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Frontend Development",
                desc: "Building responsive, modern and interactive user interfaces using React and Tailwind CSS.",
              },
              {
                title: "MERN Applications",
                desc: "Creating scalable full-stack applications using MongoDB, Express, React and Node.js.",
              },
              {
                title: "API Integration",
                desc: "Connecting applications with REST APIs, authentication systems and third-party services.",
              },
              {
                title: "Performance Optimization",
                desc: "Improving website speed, SEO, accessibility and overall user experience.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-500"
              >
                <h4 className="text-xl font-semibold text-purple-400">
                  {item.title}
                </h4>

                <p className="mt-3 text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div ref={stake} className="relative mt-28">
          <h3 className="mb-12 text-center text-3xl font-bold">
            My Tech Stack
          </h3>

          <div
            ref={stakecard}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {/* React */}
            <a href="#" className="hover-3d relative w-full cursor-pointer react">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 blue">
                    <FaReact />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    React.js
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* Node */}
            <a href="#" className="hover-3d relative w-full cursor-pointer node">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 green">
                    <FaNodeJs />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    Node.js
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* Express */}
            <a href="#" className="hover-3d relative w-full cursor-pointer ex">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 white">
                    <SiExpress />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    Express.js
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* MongoDB */}
            <a href="#" className="hover-3d relative w-full cursor-pointer mongo">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 green">
                    <SiMongodb />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    MongoDB
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* JavaScript */}
            <a href="#" className="hover-3d relative w-full cursor-pointer js">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 yellow">
                    <FaJsSquare />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    JavaScript
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* GSAP */}
            <a href="#" className="hover-3d relative w-full cursor-pointer gsap">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 green">
                    <SiGsap />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    GSAP
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* Tailwind */}
            <a href="#" className="hover-3d relative w-full cursor-pointer tail">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 blue">
                    <SiTailwindcss />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    Tailwind CSS
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>

            {/* Git */}
            <a href="#" className="hover-3d relative w-full cursor-pointer git">
              <div className="card w-full h-[160px] sm:h-[180px] md:h-[200px] bg-white/5 text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em] rounded-3xl">
                <div className="card-body flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
                  <div className="logo text-5xl sm:text-6xl md:text-7xl mb-3 md:mb-4 text-purple-500 white">
                    <FaGitAlt />
                  </div>
                  <p className="font-medium text-sm sm:text-base md:text-lg text-center">
                    Git
                  </p>
                </div>
              </div>

              <div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;