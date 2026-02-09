import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! This is a demo form. (Connect to Formspree or EmailJS to make it real)");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* --- Left Column: Info --- */}
        <div className="contact-info">
          <span className="eyebrow-text">Get In Touch</span>
          <h2>Ready to Upgrade Your Cooling System?</h2>
          <p>
            Whether you need a bulk order quote or technical advice for a complex install, 
            our team is here to help.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:+94724177482">+94 72 417 7482</a> / <a href="tel:+94777003052">+94 77 700 3052</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:Kotmotors94@gmail.com">kotmotors94@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <h4>Visit Workshop</h4>
                <a href="https://maps.app.goo.gl/FFRQ2jU4CxgmEbBQ6" target="_blank" rel="noopener noreferrer">126 Stanley Tilakaratne Mawatha, Nugegoda</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: The Form --- */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. John Doe" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john.doe@example.com" required />
            </div>

            <div className="form-group">
              <label>Message / Part Request</label>
              <textarea placeholder="I am looking for a compressor for a Toyota Corolla..." rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;