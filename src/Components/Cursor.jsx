import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Cursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Basic cursor movement
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };
    
    // Function for hover effects
    const handleHoverEnter = () => {
      gsap.to(cursor, {
        scale: 2,
        backgroundColor: "rgba(255, 121, 198, 0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    // Function for hover end
    const handleHoverLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "rgba(255, 121, 198, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    // Add the mousemove event listener
    window.addEventListener('mousemove', moveCursor);
    
    // Store references to elements to clean up event listeners later
    const hoverElements = new Set();
    
    // Function to add hover events to elements
    const addHoverEvents = () => {
      // For Hero keyboard
      const keyboardEl = document.querySelector(".keyboard");
      if (keyboardEl && !hoverElements.has(keyboardEl)) {
        keyboardEl.addEventListener('mouseenter', handleHoverEnter);
        keyboardEl.addEventListener('mouseleave', handleHoverLeave);
        hoverElements.add(keyboardEl);
      }
      
      // For About workFrames
      const workFrames = document.querySelectorAll(".workFrame");
      workFrames.forEach(frame => {
        if (!hoverElements.has(frame)) {
          frame.addEventListener('mouseenter', handleHoverEnter);
          frame.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(frame);
        }
      });
      
      // For Skills categoryDesign
      const categoryDesigns = document.querySelectorAll(".categoryDesign");
      categoryDesigns.forEach(category => {
        if (!hoverElements.has(category)) {
          category.addEventListener('mouseenter', handleHoverEnter);
          category.addEventListener('mouseleave', handleHoverLeave);
          hoverElements.add(category);
        }
      });
    };
    
    // Initially try to add events
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
    
    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      
      // Remove event listeners from all tracked elements
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