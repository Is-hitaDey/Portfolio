import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };
    
    const handleHoverEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "rgba(255, 121, 198, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(255, 121, 198, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
  
    window.addEventListener('mousemove', moveCursor);
    
    // Store references to elements to clean up event listeners later
    const hoverElements = new Set();
    
    const addHoverEvents = () => {
      const keyboardEl = document.querySelector(".keyboard");
      if (keyboardEl && !hoverElements.has(keyboardEl)) {
        keyboardEl.addEventListener('mouseenter', handleHoverEnter);
        keyboardEl.addEventListener('mouseleave', handleHoverLeave);
        hoverElements.add(keyboardEl);
      }
      
      const workFrames = document.querySelectorAll(".workFrame");
      workFrames.forEach(frame => {
        if (!hoverElements.has(frame)) {
          frame.addEventListener('mouseenter', handleHoverEnter);
          frame.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(frame);
        }
      });
      
      const categoryDesigns = document.querySelectorAll(".categoryDesign");
      categoryDesigns.forEach(category => {
        if (!hoverElements.has(category)) {
          category.addEventListener('mouseenter', handleHoverEnter);
          category.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(category);
        }
      });

      const qualifications = document.querySelectorAll(".passed");
      qualifications.forEach(qualification => {
        if (!hoverElements.has(qualification)) {
          qualification.addEventListener('mouseenter', handleHoverEnter);
          qualification.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(qualification);
        }
      });

      const projectContainer = document.querySelectorAll(".projectContainer");
      projectContainer.forEach(project => {
        if (!hoverElements.has(project)) {
          project.addEventListener('mouseenter', handleHoverEnter);
          project.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(project);
        }
      });

      const leftContainer = document.querySelectorAll(".leftContainer");
      leftContainer.forEach(info => {
        if (!hoverElements.has(info)) {
          info.addEventListener('mouseenter', handleHoverEnter);
          info.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(info);
        }
      });
    };

    
    
    addHoverEvents();
    
    // Create a mutation observer to watch for DOM changes
    const observer = new MutationObserver(() => {
      addHoverEvents();
    });
    
    // Start observing the entire document for added nodes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      

      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleHoverEnter);
        element.removeEventListener('mouseleave', handleHoverLeave);
      });
      
      // Disconnect the observer
      observer.disconnect();
    };
  }, []);
  
  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        pointerEvents: 'none',
        backgroundColor: 'rgba(255, 121, 198, 0.2)',
        mixBlendMode: 'difference',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out',
        boxShadow: '0 0 15px rgba(255, 121, 198, 0.3)'
      }}
    />
  );
};