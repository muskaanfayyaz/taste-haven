"use client";

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reservationRequest: '',
    orderNumber: '',
    orderDetails: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes for all fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email address
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the email field
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    // Clear the error message if email is valid
    setError('');

    try {
      // Send the data to the server
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setError('');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          phone: '',
          reservationRequest: '',
          orderNumber: '',
          orderDetails: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to send message.');
      setSuccess('');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="sectionTitle">Contact Us</h1>
      <p>We are here to assist you. Feel free to reach out to us for reservations, order inquiries, or any feedback.</p>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {success && <p className="success-message" style={{ color: 'green' }}>{success}</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="reservationRequest">Reservation Request</label>
            <input
              type="text"
              id="reservationRequest"
              name="reservationRequest"
              placeholder="Reservation Details (Optional)"
              value={formData.reservationRequest}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="orderNumber">Order Number</label>
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              placeholder="Your Order Number (Optional)"
              value={formData.orderNumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="orderDetails">Order Details</label>
            <textarea
              id="orderDetails"
              name="orderDetails"
              placeholder="Order Details or Special Instructions"
              value={formData.orderDetails}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section">
        <h2>Follow Us on Social Media</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF size={40} color="#3b5998" /> {/* Facebook icon */}
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={40} color="#C13584" /> {/* Instagram icon */}
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter size={40} color="#1DA1F2" /> {/* Twitter icon */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
