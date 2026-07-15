import React, { useState, useEffect, useRef, useCallback } from "react";
const mee1 = "/mee1.png";
const mee2 = "/mee2.png";


const Hero = () => {
  const [trail, setTrail] = useState([]);
  const idCounter = useRef(0);
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!imageWrapperRef.current) return;
    const rect = imageWrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    idCounter.current += 1;
    const newPoint = { x, y, id: idCounter.current, time: Date.now() };

    setTrail((prev) => [...prev, newPoint]);
  }, []);

  // Cleanup old trail points to avoid massive array
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrail((prev) => prev.filter((p) => now - p.time < 1500)); // Keep for 1.5s
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black flex flex-col justify-end items-center pb-24">
      {/* Full screen mouse listener container - Desktop Only */}
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full cursor-crosshair overflow-hidden hidden md:block"
        onMouseMove={handleMouseMove}
      >
        {/* Centered borderless 60% wrapper - Stuck to bottom */}
        <div 
          ref={imageWrapperRef}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[90vw] md:w-[50vw] h-[95vh] overflow-hidden"
        >
          {/* Bottom Image */}
          <img 
            src={mee2} 
            alt="Boy Bottom" 
            className="absolute inset-0 w-full h-full object-cover object-center object-bottom z-0 pointer-events-none"
          />

          {/* Middle layer text - UI / UX Designer */}
          <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 z-10 text-center select-none w-full pointer-events-none">
            <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-purple-500 uppercase drop-shadow-2xl">
              UI / UX Designer
            </h2>
          </div>
          
          {/* Top Image inside SVG with dynamic trail mask */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" preserveAspectRatio="none">
            <defs>
              <style>
                {`
                  @keyframes fadeOut {
                    0% { opacity: 1; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0.2); }
                  }
                  .trail-circle {
                    animation: fadeOut 1s forwards ease-out;
                  }
                `}
              </style>
              <filter id="blur-filter">
                <feGaussianBlur stdDeviation="15" />
              </filter>
              <mask id="eraser-mask">
                {/* White background means fully visible */}
                <rect width="100%" height="100%" fill="white" />
                {/* Black circles erase the top image */}
                <g filter="url(#blur-filter)">
                  {trail.map((p) => (
                    <circle 
                      key={p.id} 
                      cx={p.x} 
                      cy={p.y} 
                      r="110" 
                      fill="black"
                      className="trail-circle"
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                  ))}
                </g>
              </mask>
            </defs>
            <g mask="url(#eraser-mask)">
              {/* Background Rect to prevent background image from showing through transparent parts */}
              <rect width="100%" height="100%" className="fill-black" />
              <image 
                href={mee1}
                width="100%"
                className="h-[95vh]"
                preserveAspectRatio="xMidYMax slice"
              />
              <foreignObject x="0" y="0" width="100%" height="100%">
                <div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 text-center select-none w-full">
                  <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-xl nowrap">
                    MERN Stack Developer
                  </h1>
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>
      </div>

      {/* Mobile Intro Content - Centered */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center select-none px-6 md:hidden">
        <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase drop-shadow-xl mb-4">
          MERN Stack Developer
        </h1>
        <p className="text-gray-300 text-base max-w-sm leading-relaxed mb-8">
          I build high-performance full-stack web applications using MongoDB, Express, React, and Node.js. Passionate about clean code, modern UI, and smooth animations.
        </p>
        <a 
          href="#about" 
          className="rounded-full bg-purple-600 px-8 py-3.5 font-semibold text-white transition hover:bg-purple-700 pointer-events-auto shadow-lg shadow-purple-600/30"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;