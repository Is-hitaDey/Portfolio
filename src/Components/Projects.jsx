import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Projects = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        // Calculate the total width of all projects
        const totalWidth = document.querySelector('.projectContainer').scrollWidth;
        
        // Set height of the container to accommodate the horizontal scroll
        const scrollDistance = totalWidth - window.innerWidth;
        document.querySelector('.projectsWrapper').style.height = `${scrollDistance + window.innerHeight}px`;
        
        gsap.to(".projectContainer", {
            transform: "translateX(-200%)",
            ease: "none",
            scrollTrigger: {
                trigger: ".projectsWrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: 2,
                pin: ".page5",
                anticipatePin: 1, // For smoother pinning
                pinSpacing: true, // Important for maintaining scroll space
            },
        });

        gsap.to(".foodtopia .projectPic .pic2", {
            y: "-=300%", 
            duration: 10, 
            delay: 0.2,
            repeat: -1, 
            ease: "linear", 
        });
    });

    return (
        <>
            <div id="projects" className="projectsWrapper">
                <div className="page5">
                    <div className="projectHeading">Projects</div>
                    <div className="projectContainer">
                        <div className="project spotify">
                            <div className="projectPic">
                                <div className="pic3">
                                    <img src="src/assets/spotify1.png" alt="pic1" />
                                </div>
                                <div className="pic4">
                                    <img src="src/assets/spotify2.png" alt="pic2" />
                                </div>
                            </div>
                            <div className="projectDetails">
                                <div className="projectName">Music Player | Spotify Inspired</div>
                                <div className="projectDesc">
                                    <div className="descText">Developed a web-based music player enabling users to explore and stream a diverse library of songs and albums. Key features include intuitive playback controls, the ability to create and manage personalized playlists, and seamless browsing through albums and individual tracks. Built with JavaScript, HTML, CSS this project showcases my skills in creating rich media experiences.</div>
                                </div>
                            </div>
                        </div>
                        <div className="project foodtopia">
                            <div className="projectPic">
                                <div className="pic2">
                                    <img src="src/assets/foodtopia4.png" alt="page1" />
                                </div>
                                <div className="pic2">
                                    <img src="src/assets/foodtopia3.png" alt="page2" />
                                </div>
                                <div className="pic2">
                                    <img src="src/assets/foodtopia2.png" alt="page3" />
                                </div>
                                <div className="pic2">
                                    <img src="src/assets/foodtopia1.png" alt="page4" />
                                </div>
                            </div>
                            <div className="projectDetails">
                                <div className="projectName">FoodTopia | Restaurant Site</div>
                                <div className="projectDesc">
                                    <div className="descText">Developed "Foodtopia," an engaging web platform for discovering and exploring a diverse world of food. Users can browse through various culinary categories, view comprehensive information about dishes, and potentially find inspiration for their next meal. Built with HTML,CSS,React JS with the help of Vite this project showcases my ability to create visually appealing and information-packed web applications.</div>
                                </div>
                            </div>
                        </div>
                        <div className="project weather">
                            <div className="projectPic">
                                <div className="pic1">
                                    <img src="src/assets/weather1.png" alt="page1" />
                                </div>
                                <div className="pic1">
                                    <img src="src/assets/weather2.png" alt="page2" />
                                </div>
                            </div>
                            <div className="projectDetails">
                                <div className="projectName">ClimaSense | Know the Weather </div>
                                <div className="projectDesc">
                                    <div className="descText">
                                    Built "ClimaSense," a web application that fetches and displays up-to-date weather data based on user-specified locations. The application offers the flexibility to view temperatures in either Celsius or Fahrenheit with a single click. Developed using HTML, CSS, and React, this project demonstrates my ability to work with APIs and create interactive user interfaces with unit conversion capabilities.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}