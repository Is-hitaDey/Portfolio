import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

export const Contact = () => {
  const entriesRef = useRef([])
  
  useEffect(()=>{

    if (entriesRef.current[0]){
      const icon=document.querySelector(".insta img");
      const originalIcon=icon.src
      const hoverIcon= "src/assets/insta-h.png"

      icon.addEventListener("mouseover",()=>{
        icon.src=hoverIcon
      })

      icon.addEventListener("mouseout",()=>{
        icon.src=originalIcon
      })
    }

    if (entriesRef.current[1]){
      const icon=document.querySelector(".linked img");
      const originalIcon=icon.src
      const hoverIcon= "src/assets/linkedin-hover.png"

      icon.addEventListener("mouseover",()=>{
        icon.src=hoverIcon
      })

      icon.addEventListener("mouseout",()=>{
        icon.src=originalIcon
      })
    }

    if (entriesRef.current[2]){
      const icon=document.querySelector(".git img");
      const originalIcon=icon.src
      const hoverIcon= "src/assets/git-hover.png"

      icon.addEventListener("mouseover",()=>{
        icon.src=hoverIcon
      })

      icon.addEventListener("mouseout",()=>{
        icon.src=originalIcon
      })
    }

    if (entriesRef.current[3]){
      const icon=document.querySelector(".twitter img");
      const originalIcon=icon.src
      const hoverIcon= "src/assets/twitter-hover.png"

      icon.addEventListener("mouseover",()=>{
        icon.src=hoverIcon
      })

      icon.addEventListener("mouseout",()=>{
        icon.src=originalIcon
      })
    }

  })

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const addToRefs = (el) => {
    if (el && !entriesRef.current.includes(el)) {
        entriesRef.current.push(el)
    }
}

  return (
    <>
      <div id="contact" className="page6">
        <div className="contactHeading">Let's Connect!</div>
        <div className="contactContainer">
          <div className="leftContainer">
            <div className="picContainer">
              <div className="myPic">
                  <img src="src/assets/mypic.jpg" alt="mypic" />
              </div>
            </div>
            <div className="contactInfo">
              <div className="phone contact">
                <div className="icon"></div>
                <div className="number info">9093903076</div>
              </div>
              <div className="email contact">
                <div className="icon"></div>
                <div className="email info">ishitadey.222@gmail.com</div>
              </div>
              <div className="social">
                <div className="insta media" ref={addToRefs}>
                  <img src="src/assets/instagram.png" alt="insta" />
                </div>
                <div className="linked media" ref={addToRefs}>
                  <img src="src/assets/linkedin.png" alt="linkedin" />
                </div>
                <div className="git media" ref={addToRefs}>
                  <img src="src/assets/git-icon.png" alt="github" />
                </div>
                <div className="twitter media" ref={addToRefs}>
                  <img src="src/assets/twitter.png" alt="twitter" />
                </div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Name</label>
                  <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}