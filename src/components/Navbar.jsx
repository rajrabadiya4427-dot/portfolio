import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GooeyNav from "./GooeyNav";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const logoref = useRef();
  const allnavref = useRef();
  const btnref = useRef();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#project" },
  ];

  const tl = gsap.timeline();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme setup (Default to Light)
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  useGSAP(() => {
    tl.from(logoref.current, {
      opacity: 0,
      delay: 0.5,
      x: -50,
      duration: 0.7,
      stagger: 0.1,
      ease: "power1.out",
    });
    // allnavref.current might not have children directly depending on GooeyNav
    if (allnavref.current && allnavref.current.children.length > 0) {
      tl.from(allnavref.current.children, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      });
    } else {
      tl.from(allnavref.current, {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      });
    }
    
    tl.from(btnref.current, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  });

  return (
    <nav
      className={`relative z-[999] w-full transition-all overflow-x-hidden duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl"
          : "bg-black"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
        {/* Logo */}
        <div className="logo" ref={logoref}>
          <h1 className="text-3xl font-bold text-purple-500 ">
            Code<span className="text-white">.</span>
          </h1>
          <p className="-mt-2 text-[10px] text-gray-500 dark:text-gray-400">Crafted</p>
        </div>

        {/* Links */}
        <div className="hidden md:flex" ref={allnavref}>
          <GooeyNav
            items={navItems}
            particleCount={12}
            particleDistances={[80, 10]}
            particleR={80}
            animationTime={500}
            scrolled={scrolled}
          />
        </div>

        <div className="flex items-center gap-4" ref={btnref}>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="butns rounded-full px-6 py-2 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:scale-105">
            <a href="#contact">Contact</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;