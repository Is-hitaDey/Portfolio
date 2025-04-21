import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    // Refs for animations
    const skillsContainerRef = useRef(null);
    const skillsHeadingRef = useRef(null);
    const categoriesRef = useRef(null);
    const categoryRefs = useRef([]);
    const langHeadingRefs = useRef([]);
    const langItemsRefs = useRef([]);

    useGSAP(() => {
        // Initial states
        gsap.set(skillsHeadingRef.current, { opacity: 0, y: -30 });
        gsap.set(categoriesRef.current, { opacity: 0 });
        gsap.set(categoryRefs.current, { opacity: 0, y: 50 });
        gsap.set(langHeadingRefs.current, { opacity: 0, x: -20 });
        gsap.set(langItemsRefs.current, { opacity: 0, scale: 0.8, y: 20 });

        // Skills heading animation
        ScrollTrigger.create({
            trigger: skillsHeadingRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(skillsHeadingRef.current, { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power3.out" 
                });
                
                // Check if the line already exists
                let line = skillsHeadingRef.current.querySelector('.heading-line');
                
                // Only create the line if it doesn't exist yet
                if (!line) {
                    line = document.createElement('div');
                    line.className = 'heading-line'; // Add a class to identify it
                    line.style.height = '3px';
                    line.style.background = 'linear-gradient(90deg, transparent, #ff79c6, transparent)';
                    line.style.width = '0%';
                    line.style.margin = '10px auto';
                    skillsHeadingRef.current.appendChild(line);
                }
                
                // Animate the line (whether it's new or existing)
                gsap.to(line, {
                    width: '80%',
                    duration: 1.2,
                    delay: 0.3,
                    ease: "power2.inOut"
                });
            },
            onLeaveBack: () => {
                // When scrolling back up, animate the line back to 0 width
                const line = skillsHeadingRef.current.querySelector('.heading-line');
                if (line) {
                    gsap.to(line, {
                        width: '0%',
                        duration: 0.8,
                        ease: "power2.inOut"
                    });
                }
            }
        });

        // Categories container animation
        ScrollTrigger.create({
            trigger: categoriesRef.current,
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(categoriesRef.current, { 
                    opacity: 1, 
                    duration: 0.6, 
                    ease: "power2.out" 
                });
            }
        });

        // Category boxes staggered animation
        categoryRefs.current.forEach((category, index) => {
            ScrollTrigger.create({
                trigger: category,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    gsap.to(category, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "back.out(1.2)"
                    });
                }
            });
        });

        // Category headings animation
        langHeadingRefs.current.forEach((heading, index) => {
            ScrollTrigger.create({
                trigger: heading,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    gsap.to(heading, {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: 0.2 + index * 0.1,
                        ease: "power2.out"
                    });
                }
            });
        });

        // Language items staggered animation
        langItemsRefs.current.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: "top 90%",
                end: "bottom top",
                toggleActions: "play none none reverse",
                onEnter: () => {
                    // Calculate stagger delay based on row and column
                    const staggerDelay = 0.05 * index;
                    
                    // Animate icon and text
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.5,
                        delay: 0.3 + staggerDelay,
                        ease: "back.out(1.7)"
                    });
                    
                    // Add a short bounce effect
                    gsap.to(item.querySelector('.langPic'), {
                        y: -10,
                        duration: 0.3,
                        delay: 0.3 + staggerDelay,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(item.querySelector('.langPic'), {
                                y: 0,
                                duration: 0.3,
                                ease: "bounce.out"
                            });
                        }
                    });
                }
            });
            
            // Add hover effect for each language item
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    scale: 1.1,
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.518)", // Add box-shadow
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(item.querySelector('.langName'), {
                    color: "#ff79c6",
                    fontWeight: "bold",
                    duration: 0.3
                });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    scale: 1,
                    boxShadow: "none", // Remove box-shadow
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(item.querySelector('.langName'), {
                    color: "",
                    fontWeight: "",
                    duration: 0.3
                });
            });
        });

        // Background color reveal animation
        gsap.set(skillsContainerRef.current, {
            backgroundColor: "rgba(18, 18, 18, 0)"
        });
        
        ScrollTrigger.create({
            trigger: skillsContainerRef.current,
            start: "top 90%",
            end: "center center",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(skillsContainerRef.current, {
                    backgroundColor: "rgba(18, 18, 18, 0.95)",
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            }
        });

    }, []);

    return (
        <>
            <div id="skills" className="page3">
                <div className="skillsContainer" ref={skillsContainerRef}>
                    <div className="skillsHeading" ref={skillsHeadingRef}>Skills</div>
                </div>
                <div className="categories" ref={categoriesRef}>
                    <div className="languages categoryDesign" ref={el => categoryRefs.current[0] = el}>
                        <div className="langHeading" ref={el => langHeadingRefs.current[0] = el}>Core Programming Skills</div>
                        <div className="langContainer">
                            <div className="langItems" ref={el => langItemsRefs.current[0] = el}>
                                <div className="langPic">
                                    <img src="/letter-c.png" alt="C Language" />
                                </div>
                                <div className="langName">C</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[1] = el}>
                                <div className="langPic">
                                    <img src="/c-.png" alt="C++" />
                                </div>
                                <div className="langName">C++</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[2] = el}>
                                <div className="langPic">
                                    <img src="/python.png" alt="Python" />
                                </div>
                                <div className="langName">Python</div>
                            </div>
                        </div>
                    </div>
                    <div className="webDevelopment categoryDesign" ref={el => categoryRefs.current[1] = el}>
                        <div className="langHeading" ref={el => langHeadingRefs.current[1] = el}>Web Development</div>
                        <div className="langContainer">
                            <div className="langItems" ref={el => langItemsRefs.current[3] = el}>
                                <div className="langPic">
                                    <img src="/html.png" alt="html" />
                                </div>
                                <div className="langName">HTML</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[4] = el}>
                                <div className="langPic">
                                    <img src="/css-3.png" alt="css" />
                                </div>
                                <div className="langName">CSS</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[5] = el}>
                                <div className="langPic">
                                    <img src="/js.png" alt="js" />
                                </div>
                                <div className="langName">JavaScript</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[6] = el}>
                                <div className="langPic">
                                    <img src="/Tailwind CSS.png" alt="tailwind css" />
                                </div>
                                <div className="langName">Tailwind CSS</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[7] = el}>
                                <div className="langPic">
                                    <img src="/react.png" alt="react" />
                                </div>
                                <div className="langName">React JS</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[8] = el}>
                                <div className="langPic">
                                    <img src="/gsap.png" alt="gsap" />
                                </div>
                                <div className="langName">GSAP</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[9] = el}>
                                <div className="langPic">
                                    <img src="/node.png" alt="node" />
                                </div>
                                <div className="langName">Node JS</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[10] = el}>
                                <div className="langPic">
                                    <img src="/bootstrap.png" alt="Bootstrap" />
                                </div>
                                <div className="langName">BootStrap</div>
                            </div>
                        </div>
                    </div>

                    <div className="tools categoryDesign" ref={el => categoryRefs.current[2] = el}>
                        <div className="langHeading" ref={el => langHeadingRefs.current[2] = el}>Tools & Deployments</div>
                        <div className="langContainer">
                            <div className="langItems" ref={el => langItemsRefs.current[11] = el}>
                                <div className="langPic">
                                    <img src="/canva.svg" alt="canva" />
                                </div>
                                <div className="langName">Canva</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[12] = el}>
                                <div className="langPic">
                                    <img src="/git.png" alt="git" />
                                </div>
                                <div className="langName">Git</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[13] = el}>
                                <div className="langPic">
                                    <img src="/github.png" alt="github" />
                                </div>
                                <div className="langName">GitHub</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[14] = el}>
                                <div className="langPic">
                                    <img src="/netlify.svg" alt="netlify" />
                                </div>
                                <div className="langName">Netlify</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[15] = el}>
                                <div className="langPic">
                                    <img src="/vercel.svg" alt="vercel" />
                                </div>
                                <div className="langName">Vercel</div>
                            </div>
                            <div className="langItems" ref={el => langItemsRefs.current[16] = el}>
                                <div className="langPic">
                                    <img src="/hostinger.svg" alt="hostinger" />
                                </div>
                                <div className="langName">Hostinger</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}