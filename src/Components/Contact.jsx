import React, { useState } from 'react'

export const Contact = () => {
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

  return (
    <>
    <div className="page6">
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
              <div className="insta media"></div>
              <div className="linked media"></div>
              <div className="git media"></div>
              <div className="twitter media"></div>
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