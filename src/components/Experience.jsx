import React, { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const headingRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Heading
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

    // Timeline Line Grow
    gsap.fromTo(
      lineRef.current,
      {
        scaleY: 0,
        transformOrigin: "top center",
      },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        },
      }
    );

    // Cards One By One
    gsap.from(cardsRef.current[0], {
      x: -120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 85%",
      },
    });

    gsap.from(cardsRef.current[1], {
      x: 120,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current[1],
        start: "top 85%",
      },
    });
  }, []);

  return (<section
    id="experience"
    className="relative overflow-hidden bg-background px-6 py-24"
  >
    {/* Glow */} <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[180px]" />

    <div className="relative z-10 mx-auto max-w-6xl" >
      {/* Heading */}
      < div ref={headingRef} className="text-center" >
        <span className="rounded-full border border-purple-500/30 px-4 py-2 text-sm text-purple-400">
          My Journey
        </span>

        <h2 className="mt-6 text-4xl font-bold text-black dark:text-white md:text-5xl">
          Experience Timeline
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          A quick overview of my professional journey, projects,
          and growth as a developer.
        </p>
      </div >

      <div className="relative mt-20">
        {/* Center Line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent md:block"
        />
        {/* Experience Card 1 */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="relative mb-12 flex items-center md:justify-start"
        >
          <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-purple-500 md:block" />

          <div className="w-full md:w-[45%]">
            <div className="group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-500/20 p-3">
                  <Briefcase
                    className="text-purple-400"
                    size={20}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    Frontend Developer & MERN Stack Developer
                  </h3>

                  <p className="text-purple-400">
                    Way to Web
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar size={16} />
                <span>2025 - 2026</span>
              </div>

              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Built modern React applications, optimized
                performance, integrated REST APIs and collaborated
                with UI/UX designers. Developed full-stack MERN
                applications with authentication, dashboards and
                responsive interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="relative mb-12 flex items-center md:justify-end"
        >
          <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-purple-500 md:block" />

          <div className="w-full md:w-[45%]">
            <div className="group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-purple-500/20 p-3">
                  <Briefcase
                    className="text-purple-400"
                    size={20}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    UI/UX Designer
                  </h3>

                  <p className="text-purple-400">
                    SCOTTENEX NEXTGEN LLP
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar size={16} />
                <span>7 July - 6 January (6 Months)</span>
              </div>

              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                Designed user-centric web and mobile interfaces, built high-fidelity wireframes and interactive prototypes, created consistent design systems, and worked on user experience optimization.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div >
  </section >


  );
};

export default Experience;
