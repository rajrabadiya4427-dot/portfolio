import React, { useState, useEffect, useRef, useCallback } from "react";
import mee1 from "../assets/mee1.jpeg"

const Hero = () => {
  const [trail, setTrail] = useState([]);
  const idCounter = useRef(0);
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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
    <section className="relative h-screen overflow-hidden bg-background flex items-center justify-center border-b border-black">
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl h-[60vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-2xl cursor-crosshair mx-4"
        onMouseMove={handleMouseMove}
      >
        {/* Bottom Image */}
        <img 
          src={mee1} 
          alt="Boy Bottom" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Top Image inside SVG with dynamic trail mask */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
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
                    r="90" 
                    fill="black"
                    className="trail-circle"
                    style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                  />
                ))}
              </g>
            </mask>
          </defs>
          <image 
            href="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop" 
            width="100%" 
            height="100%" 
            preserveAspectRatio="xMidYMid slice"
            mask="url(#eraser-mask)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;