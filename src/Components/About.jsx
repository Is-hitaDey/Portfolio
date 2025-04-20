import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const workFrames = useRef([]);
    const aboutContainerRef = useRef(null);
    const headingRef = useRef(null);
    const stripRef = useRef(null);
    const aboutMeRef = useRef(null);
    const worksRef = useRef(null);
    const workTitlesRef = useRef([]);
    const workPicsRef = useRef([]);
    const workDescsRef = useRef([]);

    useGSAP(() => {
        // Hover animation for work frames
        workFrames.current.forEach((frame) => {
            gsap.set(frame, { boxShadow: 'none' });
            frame.addEventListener('mouseenter', () => {
                gsap.to(frame, { boxShadow: '2px 5px 20px rgb(77, 76, 76)', duration: 0.5 });
            });
            frame.addEventListener('mouseleave', () => {
                gsap.to(frame, { boxShadow: 'none', duration: 0.5 });
            });
        });

        // Reset initial states for all elements
        gsap.set(headingRef.current, { opacity: 0, y: 30 });
        gsap.set(stripRef.current, { opacity: 0, scaleX: 0.8 });
        gsap.set(aboutMeRef.current, { opacity: 0 });
        gsap.set(worksRef.current, { opacity: 0, y: 50 });
        gsap.set(workFrames.current, { opacity: 0, y: 30 });
        gsap.set(workTitlesRef.current, { opacity: 0, x: -20 });
        gsap.set(workPicsRef.current, { opacity: 0, scale: 0.8, rotation: -5 });
        gsap.set(workDescsRef.current, { opacity: 0, y: 20 });

        // Heading animation
        ScrollTrigger.create({
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse", // play on enter, reverse on leave
            onEnter: () => {
                gsap.to(headingRef.current, { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: "power3.out" 
                });
                
                // Animate the "me" span separately for extra effect
                gsap.to(".me", { 
                    color: "#ff79c6", 
                    duration: 0.5, 
                    delay: 0.7,
                    ease: "power2.inOut" 
                });
            },
            onLeave: () => {
                gsap.to(".me", { 
                    color: "", 
                    duration: 0.5
                });
            }
        });

        // About strip animation
        ScrollTrigger.create({
            trigger: stripRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(stripRef.current, { 
                    opacity: 1, 
                    scaleX: 1, 
                    duration: 0.8, 
                    ease: "power3.out",
                    delay: 0.3
                });
            }
        });

        // About me text animation with character reveal
        // Try this simplified approach for the about me text animation
ScrollTrigger.create({
    trigger: aboutMeRef.current,
    start: "top 85%", // Adjust to trigger earlier
    end: "bottom top",
    toggleActions: "play none none reset",
    onEnter: () => {
        // Simple fade-in animation for the whole text
        gsap.to(aboutMeRef.current, { 
            opacity: 1, 
            duration: 0.8,
            delay: 0.4,
            ease: "power2.out"
        });
    }
});

        // Works section animation - main container
        ScrollTrigger.create({
            trigger: worksRef.current,
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(worksRef.current, { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    ease: "power2.out",
                    delay: 0.2
                });
            }
        });
        
        // Work frames animation
        ScrollTrigger.create({
            trigger: worksRef.current,
            start: "top 75%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(workFrames.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    delay: 0.4,
                    ease: "back.out(1.4)"
                });
            }
        });
        
        // Work titles animation
        ScrollTrigger.create({
            trigger: worksRef.current,
            start: "top 70%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(workTitlesRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.3,
                    delay: 0.6,
                    ease: "power2.out"
                });
            }
        });
        
        // Work images animation
        ScrollTrigger.create({
            trigger: worksRef.current,
            start: "top 65%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(workPicsRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.8,
                    stagger: 0.3,
                    delay: 0.8,
                    ease: "back.out(1.7)"
                });
            }
        });
        
        // Work descriptions animation
        ScrollTrigger.create({
            trigger: worksRef.current,
            start: "top 60%",
            end: "bottom top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(workDescsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.3,
                    delay: 1.0,
                    ease: "power3.out"
                });
            }
        });
        
        // Optional: Add a reveal animation to the entire container
        gsap.set(aboutContainerRef.current, { 
            backgroundColor: "transparent"
        });
        
        ScrollTrigger.create({
            trigger: aboutContainerRef.current,
            start: "top 90%",
            end: "center top",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(aboutContainerRef.current, { 
                    backgroundColor: "rgba(33, 33, 33, 0.95)", 
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            }
        });
        
    }, []);

    return (
        <>
            <div className="page2">
                <div className="aboutContainer" ref={aboutContainerRef}>
                    <div className="aboutHeading" ref={headingRef}>Who<span className='me'>&nbsp;Am I &nbsp;</span> ?</div>
                    <div className="aboutStrip" ref={stripRef}>
                        <div className="aboutMe" ref={aboutMeRef}>I am a Creative Web Developer passionate about building engaging and user-friendly digital experiences. Proficient in modern front-end technologies and experienced in deploying web applications. Also equipped with a strong foundation in programming and design principles.</div>
                    </div>
                    <div className="works" ref={worksRef}>
                        <div className="design workFrame" ref={(el) => workFrames.current[0] = el}>
                            <div className="workTitle" ref={(el) => workTitlesRef.current[0] = el}>UI/UX Design</div>
                            <div className="workInfo">
                                <div className="workPic" ref={(el) => workPicsRef.current[0] = el}>
                                    <img src="src/assets/web-design.png" alt="UI/UX" />
                                </div>
                                <div className="workDesc" ref={(el) => workDescsRef.current[0] = el}>Focused on creating intuitive and engaging digital experiences. I blend user understanding with visual design to craft seamless interfaces that solve problems and achieve goals.</div>
                            </div>
                        </div>
                        <div className="dev workFrame" ref={(el) => workFrames.current[1] = el}>
                            <div className="workTitle" ref={(el) => workTitlesRef.current[1] = el}>Web Development</div>
                            <div className="workInfo">
                                <div className="workPic" ref={(el) => workPicsRef.current[1] = el}>
                                    <img src="src/assets/coding.png" alt="code" />
                                </div>
                                <div className="workDesc" ref={(el) => workDescsRef.current[1] = el}>Focused on crafting engaging and user-friendly digital experiences. I specialize in building visually appealing and interactive interfaces using modern web technologies.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}