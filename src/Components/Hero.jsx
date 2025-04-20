import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef, useEffect } from 'react'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const keyboardRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(".fade", {
            opacity: 0,
        })

        tl.to(".fade", {
            opacity: 0,
            delay: 1
        })

        tl.from(".nav", {
            opacity: 0,
            duration: 1,
            delay: 1
        })

        tl.from(".title", {
            opacity: 0,
            y: 30,
            duration: 1
        })

        tl.from(".contents li", {
            opacity: 0,
            y: -30,
            duration: 1,
            stagger: 0.5
        })

        tl.from(".greeting", {
            opacity: 0,
            duration: 1,
            y: -30,
        })

        tl.to(".wave", {
            scale: 1.2
        })

        tl.from(".wave", {
            rotateZ: 20,
            duration: 0.5,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
        })

        // Keyboard initial animation
        tl.from(".keyboard", {
            opacity: 0,
            y: 50,
            duration: 1
        })

        // Create scroll-triggered animation for the keyboard
        gsap.to(".keyboard", {
            rotateX: 0, // End with keyboard standing upright
            z: 100, // Move up on z-axis
            y: -50, // Slight upward movement
            transformOrigin: "bottom center",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".keyboard-container",
                start: "top center",
                end: "bottom top",
                scrub: 1,
                markers: false
            }
        });

        // Key illumination effect
        const keys = gsap.utils.toArray('.key');

        // Create wave animation on keys when keyboard appears
        gsap.to(keys, {
            backgroundColor: "#6272a4",
            boxShadow: "0 0 10px rgba(137, 221, 255, 0.5), 0 2px 4px rgba(0, 0, 0, 0.7)",
            duration: 0.15,
            stagger: {
                grid: "auto",
                from: "center",
                amount: 1.5
            },
            yoyo: true,
            repeat: 1
        });

        // Random key animations to simulate typing
        keys.forEach(key => {
            if (Math.random() > 0.8) {
                const randomDelay = Math.random() * 8;

                gsap.to(key, {
                    backgroundColor: "#ff79c6",
                    boxShadow: "0 0 15px rgba(255, 121, 198, 0.7), 0 2px 4px rgba(0, 0, 0, 0.7)",
                    y: -2,
                    duration: 0.1,
                    ease: "power1.inOut",
                    repeat: 3,
                    repeatDelay: Math.random() * 0.5,
                    yoyo: true,
                    delay: randomDelay
                });
            }
        });

        // Create ambient light glow animation
        gsap.to(".keyboard", {
            boxShadow: "0 15px 30px rgba(130, 90, 240, 0.3), 0 10px 15px rgba(130, 90, 240, 0.2), 0 0 40px rgba(130, 90, 240, 0.1)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // RGB light strip animation
        gsap.to(".keyboard-light-strip", {
            backgroundPosition: "-200px 0",
            duration: 5,
            ease: "none",
            repeat: -1
        });
    });


    // Add hover effect for keys
    useEffect(() => {
        const keys = document.querySelectorAll('.key');

        keys.forEach(key => {
            key.addEventListener('mouseenter', () => {
                gsap.to(key, {
                    backgroundColor: "#ff79c6",
                    y: -2,
                    boxShadow: "0 0 15px rgba(255, 121, 198, 0.7), 0 4px 8px rgba(0, 0, 0, 0.4)",
                    duration: 0.2
                });
            });

            key.addEventListener('mouseleave', () => {
                gsap.to(key, {
                    backgroundColor: "",
                    y: 0,
                    boxShadow: "",
                    duration: 0.3,
                    clearProps: "backgroundColor,boxShadow"
                });
            });

            key.addEventListener('mousedown', () => {
                gsap.to(key, {
                    backgroundColor: "#bd93f9",
                    y: 1,
                    boxShadow: "0 0 15px rgba(189, 147, 249, 0.7), 0 1px 3px rgba(0, 0, 0, 0.5)",
                    duration: 0.1
                });
            });

            key.addEventListener('mouseup', () => {
                gsap.to(key, {
                    backgroundColor: "#ff79c6",
                    y: -2,
                    boxShadow: "0 0 15px rgba(255, 121, 198, 0.7), 0 4px 8px rgba(0, 0, 0, 0.4)",
                    duration: 0.1
                });
            });
        });

        return () => {
            keys.forEach(key => {
                key.removeEventListener('mouseenter', () => { });
                key.removeEventListener('mouseleave', () => { });
                key.removeEventListener('mousedown', () => { });
                key.removeEventListener('mouseup', () => { });
            });
        };
    }, []);

    useEffect(() => {
        //svg
        let inititalPath = `M 10 100 Q 500 100 1490 100`

        let finalPath = `M 10 100 Q 500 100 1490 100`

        let string = document.querySelector(".string")

        string.addEventListener("mousemove", function (dets) {
            let y = dets.y - 400
            let path = `M 10 100 Q ${dets.x} ${y} 1490 100`

            gsap.to("svg path", {
                attr: { d: path },
                duration: 0.2,
                ease: "power3.out"
            })
        })

        string.addEventListener("mouseleave", function () {
            gsap.to("svg path", {
                attr: { d: finalPath },
                duration: 1,
                ease: "elastic.out(1,0.2)"
            })
        })
    })

    return (
        <>
            <div className="page1">
                <div className="fade">WELCOME TO MY PORTFOLIO!</div>
                <div className="nav">
                    <div className="title">Portfolio</div>
                    <div className="contents">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Skills</li>
                            <li>Education</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="greeting"><span className='hello'>Hello</span>, Myself ISHITA <span className='wave'>&#128075;</span></div>

                    <div className="keyboard-container" ref={containerRef}>
                        <div className="keyboard" ref={keyboardRef}>
                            <div className="keyboard-light-strip"></div>
                            <div className="keyboard-row">
                                <div className="key function">Esc</div>
                                <div className="key function">F1</div>
                                <div className="key function">F2</div>
                                <div className="key function">F3</div>
                                <div className="key function">F4</div>
                                <div className="key function">F5</div>
                                <div className="key function">F6</div>
                                <div className="key function">F7</div>
                                <div className="key function">F8</div>
                                <div className="key function">F9</div>
                                <div className="key function">F10</div>
                                <div className="key function">F11</div>
                                <div className="key function">F12</div>
                            </div>
                            <div className="keyboard-row">
                                <div className="key accent">`</div>
                                <div className="key">1</div>
                                <div className="key">2</div>
                                <div className="key">3</div>
                                <div className="key">4</div>
                                <div className="key">5</div>
                                <div className="key">6</div>
                                <div className="key">7</div>
                                <div className="key">8</div>
                                <div className="key">9</div>
                                <div className="key">0</div>
                                <div className="key accent">-</div>
                                <div className="key accent">=</div>
                                <div className="key backspace accent">Backspace</div>
                            </div>
                            <div className="keyboard-row">
                                <div className="key tab accent">Tab</div>
                                <div className="key letter">Q</div>
                                <div className="key letter">W</div>
                                <div className="key letter">E</div>
                                <div className="key letter">R</div>
                                <div className="key letter">T</div>
                                <div className="key letter">Y</div>
                                <div className="key letter">U</div>
                                <div className="key letter">I</div>
                                <div className="key letter">O</div>
                                <div className="key letter">P</div>
                                <div className="key accent">[</div>
                                <div className="key accent">]</div>
                                <div className="key backslash accent">\</div>
                            </div>
                            <div className="keyboard-row">
                                <div className="key caps accent">Caps</div>
                                <div className="key letter">A</div>
                                <div className="key letter">S</div>
                                <div className="key letter">D</div>
                                <div className="key letter">F</div>
                                <div className="key letter">G</div>
                                <div className="key letter">H</div>
                                <div className="key letter">J</div>
                                <div className="key letter">K</div>
                                <div className="key letter">L</div>
                                <div className="key accent">;</div>
                                <div className="key accent">'</div>
                                <div className="key enter accent">Enter</div>
                            </div>
                            <div className="keyboard-row">
                                <div className="key shift-left accent">Shift</div>
                                <div className="key letter">Z</div>
                                <div className="key letter">X</div>
                                <div className="key letter">C</div>
                                <div className="key letter">V</div>
                                <div className="key letter">B</div>
                                <div className="key letter">N</div>
                                <div className="key letter">M</div>
                                <div className="key accent">,</div>
                                <div className="key accent">.</div>
                                <div className="key accent">/</div>
                                <div className="key shift-right accent">Shift</div>
                            </div>
                            <div className="keyboard-row">
                                <div className="key ctrl accent">Ctrl</div>
                                <div className="key win accent">Win</div>
                                <div className="key alt accent">Alt</div>
                                <div className="key space">Space</div>
                                <div className="key alt accent">Alt</div>
                                <div className="key win accent">Win</div>
                                <div className="key menu accent">Menu</div>
                                <div className="key ctrl accent">Ctrl</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="string">
                    <svg width="1500" height="200">
                        <path d="M 10 100 Q 500 100 1490 100" stroke="white" fill="transparent" />
                    </svg>

                </div>
            </div>
        </>
    )
}