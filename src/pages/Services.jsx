
import React, { useRef } from "react";
import {
  Code2,
  MonitorSmartphone,
  Database,
  Rocket,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heading = useRef();
  const cards1 = useRef();
  const cards2 = useRef();
  const cards3 = useRef();
  const cards4 = useRef();
  const cta = useRef();

  useGSAP(() => {
    gsap.from(heading.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top 80%",
      },
    });

    gsap.from(cards1.current, {
      opacity: 0,

      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cards1.current,
        start: "top 75%",
      },
    });
    gsap.from(cards2.current, {
      opacity: 0,

      scale: 0.9,
      duration: 1,
      delay: 0.2,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cards2.current,
        start: "top 75%",
      },
    });
    gsap.from(cards3.current, {
      opacity: 0,
      delay: 0.4,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cards3.current,
        start: "top 75%",
      },
    });
    gsap.from(cards4.current, {
      opacity: 0,
      delay: 0.6,
      scale: 0.9,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: cards4.current,
        start: "top 75%",
      },
    });


    gsap.from(cta.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cta.current,
        start: "top 85%",
      },
    });
  });

  return (
    <section
      id="services"
      className="relative   overflow-hidden bg-background px-6 py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div ref={heading} className="text-center">
          <span className="rounded-full border border-purple-500/30 px-4 py-2 text-sm text-purple-400">
            What I Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Helping startups, businesses and creators build
            modern digital experiences that stand out.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <div ref={cards1} className="cursor-pointer">
            <div

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
            >


              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-purple-500/10 p-4 text-purple-400">
                  <MonitorSmartphone size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  Frontend Development
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  Modern, responsive and interactive websites built with React,
                  Tailwind CSS and GSAP.
                </p>

                <button className="mt-6 text-purple-400 transition hover:text-purple-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          <div ref={cards2} className="cursor-pointer">
            <div

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
            >


              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-purple-500/10 p-4 text-purple-400">
                  <Database size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  MERN Applications
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  Full-stack web applications using MongoDB, Express.js, React
                  and Node.js.
                </p>

                <button className="mt-6 text-purple-400 transition hover:text-purple-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          <div ref={cards3}  className="cursor-pointer">
            <div

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
            >


              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-purple-500/10 p-4 text-purple-400">
                  <Code2 size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  API Integration
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  REST APIs, third-party services and secure backend connectivity
                  for scalable applications.
                </p>

                <button className="mt-6 text-purple-400 transition hover:text-purple-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          <div ref={cards4} className="cursor-pointer">
            <div

              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,.25)]"
            >


              <div className="relative z-10">
                <div className="inline-flex rounded-2xl bg-purple-500/10 p-4 text-purple-400">
                  <Rocket size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  Performance Optimization
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  Improving speed, SEO, accessibility and user experience for
                  maximum engagement.
                </p>

                <button className="mt-6 text-purple-400 transition hover:text-purple-300">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div ref={cta} className="mt-20 text-center">
          <div className="inline-flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">
              Have a Project in Mind?
            </h3>

            <p className="mt-3 max-w-xl text-gray-400">
              Let's build something amazing together with modern
              technologies and smooth user experiences.
            </p>

            <a
              href="#contact"
              className="mt-6 rounded-full bg-purple-600 px-8 py-3 font-medium text-white transition hover:bg-purple-700"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

