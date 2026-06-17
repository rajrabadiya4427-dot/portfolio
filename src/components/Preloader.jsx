import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const words = [
    "Welcome",
    "Crafting Digital Experiences",
    "Building Modern Web Apps",
    "Powered By React & MERN",
    "With Raj",
];

const Preloader = ({ setLoading }) => {
    const loaderRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline();

        words.forEach((word) => {
            tl.set(textRef.current, {
                textContent: word,
            });

            tl.fromTo(
                textRef.current,
                {

                    opacity: 0,
                    y: 80,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "expo.out",
                }
            );

            tl.to(textRef.current, {
                opacity: 0,
                y: -80,
                duration: 0.5,
                delay: 0.3,
            });
        });

        // Website reveal start
        tl.to(
            "#main-content",
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "expo.out",
            },
            "-=0.4"
        );

        // Loader exit
        tl.to(loaderRef.current, {
            yPercent: "-100%",
            duration: 1.2,
            ease: "expo.inOut",
            onComplete: () => {
                setLoading(false);
            },
        });
    }, [setLoading]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
            <h1
                ref={textRef}
                className="text-white text-center text-4xl md:text-7xl font-bold px-5"
            />
        </div>
    );
};

export default Preloader;