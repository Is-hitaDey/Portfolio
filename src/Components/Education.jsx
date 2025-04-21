import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Education = () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    // Create refs for animation targets
    const pageRef = useRef(null)
    const headingRef = useRef(null)
    const entriesRef = useRef([])
    
    useEffect(() => {
        // Main heading animation
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1.2, 
                scrollTrigger: {
                    trigger: pageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                } 
            }
        )
        
        // Animation for first qualification - falling from top
        if (entriesRef.current[0]) {
            gsap.fromTo(
                entriesRef.current[0],
                { 
                    opacity: 0, 
                    y: -100 
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: entriesRef.current[0],
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }
        
        // Animation for second qualification - falling from the position of first qualification
        if (entriesRef.current[1]) {
            // Create a scroll trigger that activates after the first animation
            ScrollTrigger.create({
                trigger: entriesRef.current[0],
                start: "top 60%",
                onEnter: () => {
                    // Delay the second animation to create sequential effect
                    gsap.fromTo(
                        entriesRef.current[1],
                        { 
                            opacity: 0, 
                            y: entriesRef.current[0].offsetTop - entriesRef.current[1].offsetTop + 100 // Position above the first qualification
                        },
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 1.5,
                            ease: "bounce.out", // Add a bounce effect for a more natural fall
                            delay: 0.3 // Small delay after first animation
                        }
                    )
                },
                once: false
            })
        }

        // Add hover effects to qualifications
        entriesRef.current.forEach((entry) => {
            if (entry) {
                const hoverAnimation = gsap.to(entry, {
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    duration: 0.3,
                    paused: true,
                });

                entry.addEventListener("mouseenter", () => hoverAnimation.play());
                entry.addEventListener("mouseleave", () => hoverAnimation.reverse());
            }
        });
        
        // Clean up ScrollTrigger instances when component unmounts
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
    
    // Function to add elements to refs array
    const addToRefs = (el) => {
        if (el && !entriesRef.current.includes(el)) {
            entriesRef.current.push(el)
        }
    }
    
    return (
        <>
            <div id="education" className="page4">
                <div className="educationContainer">
                    <div className="educationHeading" ref={headingRef}>Education</div>
                    <div className="qualifications">
                        <div className="passed" ref={addToRefs}>
                            <div className="qualificationPic">
                                <img src="/NSEC.jpg" alt="NSEC" />
                            </div>
                            <div className="division">
                                <div className="circle"></div>
                            </div>
                            <div className="qualificationDetails">
                                <div className="qualificationName">Netaji Subhash Engineering College, Kolkata</div>
                                <div className="qualificationDesc">
                                    <div className="degree">B.Tech Computer Science and Engineering</div>
                                    <div className="degreeYear">2023-2027</div>
                                </div>
                            </div>
                        </div>
                        <div className="passed" ref={addToRefs}>
                            <div className="qualificationPic">
                                <img src="/DAV.jpg" alt="DAV" />
                            </div>
                            <div className="division">
                                <div className="circle"></div>
                            </div>
                            <div className="qualificationDetails">
                                <div className="qualificationName">DAV, Asansol</div>
                                <div className="qualificationDesc">
                                    <div className="degree">Higher Secondary</div>
                                    <div className="degreeYear">2023</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}