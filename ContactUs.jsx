import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for contacting us, {formData.name}!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
