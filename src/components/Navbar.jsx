import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GooeyNav from "./GooeyNav";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const logoref = useRef();
  const allnavref = useRef();
  const btnref = useRef();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#project" },
  ];


  const tl = gsap.timeline()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    tl.from(logoref.current,
      {
        opacity: 0,
        delay: 0.5,
        x: -50,
        duration: 0.7,
        stagger: 0.1,
        ease: "power1.out"
      })
    tl.from(allnavref.current.children, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.out"
    })
    tl.from(btnref.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power1.out"
    })
  })

  return (
    <nav
      className={`fixed top-0 left-0 z-999 w-full transition-all overflow-x-hidden duration-500 ${scrolled
        ? "bg-black/60 backdrop-blur-xl"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">

        {/* Logo */}
        <div className="logo" ref={logoref}>
          <h1 className="text-3xl font-bold text-purple-500 ">
            Code<span className="text-white">.</span>
          </h1>
          <p className="-mt-2 text-[10px] text-gray-400">
            Crafted
          </p>
        </div>

        {/* Links */}
        <div
          className="hidden md:flex"
          ref={allnavref}
        >
          <GooeyNav
            items={navItems}
            particleCount={12}
            particleDistances={[80, 10]}
            particleR={80}
            animationTime={500}
          />
        </div>

        <div className="" ref={btnref}>
          <button className=" butns rounded-full  px-6 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:scale-105">
            <a href="#contact"> Contact</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;