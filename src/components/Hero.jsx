import React, { useRef, useState } from "react";

import ImageModle from "./ImageModle";
import assets from "../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Antigravity from '../components/AntigravityInner';

const Hero = () => {



  const intro = useRef()
  const texts = useRef()
  const startbtn = useRef()



  const tl = gsap.timeline()

  useGSAP(() => {

    tl.to(".letter", {
      y: 0,
      opacity: 1,
      stagger: 0.025,
      duration: 1,
      ease: "power4.out",
      delay: 1,
    });

    tl.from(texts.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.5,
      ease: "power2.out"
    })

    tl.from(startbtn.current, {
      scale: 0,
      duration: 0.5,
      stagger: 0.5,
      ease: "power3.out"
    })


  })

  const splitText = (text, className = "") => {
    return (
      <span className={className}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="overflow-hidden inline-block"
          >
            <span className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="relative h-screen overflow-hidden bg-[#000000] text-white flex items-center justify-center" >

      <div className="absolute inset-0 z-0">
        <Antigravity
          count={1000}
          color="#5227FF"
          particleSize={0.8}
          autoAnimate={true}
          rotationSpeed={0.2}
          magnetRadius={5}
          ringRadius={5}
          waveAmplitude={2}
          depthFactor={2}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        <h1
          ref={intro}
          className="text-xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight"
        >
          {splitText("Building ")}
          {splitText(" Modern ", "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-cyan-400 inline-block glow-blue")}
          {splitText(
            "Websites"
          )}

          <br />

          {splitText("For Growing ")}

          {splitText(
            "Business",
            "bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-cyan-500 inline-bloc glow-blue"
          )}
        </h1>

        <p ref={texts} className="mt-6 max-w-xl text-sm text-gray-400 md:text-base">
          I'm a web developer who crafts
          high-converting websites for startups,
          creators and businesses.
        </p>

        <div ref={startbtn}>
          <button className="mt-10 flex items-center gap-3 rounded-full border border-purple-500/30 bg-white/5 px-8 py-2 backdrop-blur-md transition hover:border-purple-500">
            <a href="#contact">Start Your Project</a>
            <span>→</span>
          </button>
        </div>


      </div>
    </section>
  );
};

export default Hero;