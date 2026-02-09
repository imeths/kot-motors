import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="contact-hero">
        <div className="hero-content">
          {/* Breadcrumbs */}
          <div className="breadcrumbs" style={{ justifyContent: 'center', marginBottom: '1.5rem', color: '#94a3b8' }}>
            <Link to="/" style={{color: '#94a3b8', textDecoration: 'none'}}>Home</Link> 
            <span style={{margin: '0 8px'}}>/</span> 
            <span style={{color: '#e2e8f0'}}>Contact Us</span>
          </div>

          <h1>Get in Touch</h1>
          <p>
            Visit our workshop, give us a call, or send an inquiry below. 
            Our technical team is ready to assist with complex cooling requirements.
          </p>
        </div>
      </header>

      {/* --- 2. MAIN GRID (Map Left / Form Right) --- */}
      <div className="contact-container">
        
        {/* LEFT: Google Map with Overlay */}
        <div className="map-card">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5601.871303376797!2d79.8939557349175!3d6.876081070096084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b007c8103f7%3A0x20271e4bdb8ed166!2sKOT%20motors!5e0!3m2!1sen!2slk!4v1770438357191!5m2!1sen!2slk" 
            className="map-frame" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="KOT Motors Location"
          ></iframe>
          
          {/* Floating Info Card */}
          <div className="map-overlay">
            <div className="contact-detail">
              <MapPin size={18} />
              <span>126 Stanley Tilakaratne Mawatha, Nugegoda</span>
            </div>
            <div className="contact-detail">
              <Phone size={18} />
              <span>+94 72 417 7482 / +94 77 700 3052</span>
            </div>
            <div className="contact-detail">
              <Clock size={18} />
              <span>Mon - Sat: 8:30 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="form-card">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p style={{ color: '#64748b' }}>Looking for a specific part? Include the Vehicle Model and Year for a faster quote.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" placeholder="John" />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-input" placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-input" placeholder="077 123 4567" />
            </div>

            <div className="form-group">
              <label className="form-label">Message / Part Request</label>
              <textarea className="form-textarea" rows="5" placeholder="I am looking for a compressor for a Toyota Corolla 2018..."></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;