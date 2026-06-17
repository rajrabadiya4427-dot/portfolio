import React, { useRef } from "react";

import assets from "../assets/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ name, description, liveLink, githubLink }) => {

  const headingRef = useRef(null);
  const cardsRef1 = useRef();
  const cardsRef2 = useRef();
  const cardsRef3 = useRef();

  useGSAP(() => {
    gsap.from(headingRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cardsRef1.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardsRef1.current,
        start: "top 90%",

      },
    });
    gsap.from(cardsRef2.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardsRef2.current,
        start: "top 80%",

      },
    });
    gsap.from(cardsRef3.current, {
      y: 100,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cardsRef3.current,
        start: "top 70%",

      },
    });
  }, []);

  return (
    <section
      
      className="bg-[#07020f] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div ref={headingRef}>
          <h2 className="mb-4 text-center text-4xl font-bold text-white">
            My Projects
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
            Some of my recent work built using React, MERN Stack,
            Tailwind CSS and GSAP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div ref={cardsRef1}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.3)]">

              <div className="overflow-hidden">
                <img
                  src={assets.project1}
                  alt={name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>

                <div className="mt-6 flex gap-4">

                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                  >
                    <ExternalLink size={16} />
                    <a href="https://app-bxay.onrender.com">Live Demo</a>
                  </a>

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-500"
                  >
                    <FaGithub size={16} />
                    <a href="">Github</a>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div ref={cardsRef2}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.3)]">

              <div className="overflow-hidden">
                <img
                  src={assets.project2}
                  alt={name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>

                <div className="mt-6 flex gap-4">

                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                  >
                    <ExternalLink size={16} />
                    <a href="">Live Demo</a>
                  </a>

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-500"
                  >
                    <FaGithub size={16} />
                    <a href="">Github</a>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div ref={cardsRef3}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.3)]">

              <div className="overflow-hidden">
                <img
                  src={''}
                  alt={name}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>

                <div className="mt-6 flex gap-4">

                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700"
                  >
                    <ExternalLink size={16} />
                    <a href="">Live Demo</a>
                  </a>

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-purple-500"
                  >
                    <FaGithub size={16} />
                    <a href="">Github</a>

                  </a>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;