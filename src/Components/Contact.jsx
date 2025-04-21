import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

export const Contact = () => {
  const entriesRef = useRef([])
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (entriesRef.current[0]) {
      const icon = document.querySelector(".insta img");
      const originalIcon = icon.src
      const hoverIcon = "src/assets/insta-h.png"

      icon.addEventListener("mouseover", () => {
        icon.src = hoverIcon
      })

      icon.addEventListener("mouseout", () => {
        icon.src = originalIcon
      })
    }

    if (entriesRef.current[1]) {
      const icon = document.querySelector(".linked img");
      const originalIcon = icon.src
      const hoverIcon = "src/assets/linkedin-hover.png"

      icon.addEventListener("mouseover", () => {
        icon.src = hoverIcon
      })

      icon.addEventListener("mouseout", () => {
        icon.src = originalIcon
      })
    }

    if (entriesRef.current[2]) {
      const icon = document.querySelector(".git img");
      const originalIcon = icon.src
      const hoverIcon = "src/assets/git-hover.png"

      icon.addEventListener("mouseover", () => {
        icon.src = hoverIcon
      })

      icon.addEventListener("mouseout", () => {
        icon.src = originalIcon
      })
    }

    if (entriesRef.current[3]) {
      const icon = document.querySelector(".twitter img");
      const originalIcon = icon.src
      const hoverIcon = "src/assets/twitter-hover.png"

      icon.addEventListener("mouseover", () => {
        icon.src = hoverIcon
      })

      icon.addEventListener("mouseout", () => {
        icon.src = originalIcon
      })
    }
  }, [])

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      
      
      // Option 2: Store data in localStorage (for demonstration purposes)
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      
      // Option 3: Simple console log (as in your original code)
      console.log('Form submitted:', formData);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        username: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
                  <a href="https://www.instagram.com/_corevibes/?hl=en">
                    <img src="src/assets/instagram.png" alt="insta" />
                  </a>
                </div>
                <div className="linked media" ref={addToRefs}>
                  <a href="https://www.linkedin.com/in/deyishita">
                    <img src="src/assets/linkedin.png" alt="linkedin" />
                  </a>
                </div>
                <div className="git media" ref={addToRefs}>
                  <a href="https://github.com/Is-hitaDey">
                    <img src="src/assets/git-icon.png" alt="github" />
                  </a>
                </div>
                <div className="twitter media" ref={addToRefs}>
                  <a href="https://x.com/222Ishitadey">
                    <img src="src/assets/twitter.png" alt="twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rightContainer">
            <div className="form">
              {isSubmitted && (
                <div className="success-message" style={{color: 'green', marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '4px'}}>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {error && (
                <div className="error-message" style={{color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px'}}>
                  {error}
                </div>
              )}
              
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

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              
              {/* Optional: Display the submitted data */}
              {false && localStorage.getItem('contactFormData') && (
                <div className="submitted-data" style={{marginTop: '20px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px'}}>
                  <h4>Last Submitted Data:</h4>
                  <pre>{localStorage.getItem('contactFormData')}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}