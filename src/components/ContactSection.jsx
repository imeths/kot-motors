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
                <p>+94 11 234 5678</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>Email Us</h4>
                <p>sales@kotmotors.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <h4>Visit Workshop</h4>
                <p>123 Panchikawatta Rd, Colombo 10</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: The Form --- */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Priyantha Perera" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="priyantha@example.com" required />
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