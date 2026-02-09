import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Logo */}
        <div className="footer-col brand-col">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* Logo Image */}
            <img 
              src="/vite.svg" 
              alt="KOT Motors Logo" 
              style={{ height: '32px', width: 'auto' }} 
            />
            
            <span>
              <span style={{ color: '#2563eb' }}>KOT</span> Motors
            </span>
          </div>
          <p>
            Your trusted partner for OEM automotive cooling solutions and industrial electrical components.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About KOT Motors</Link></li>
            <li><Link to="/products">Our Products</Link></li>
            <li><Link to="/contact-us">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={18} className="icon" />
              <a href="https://maps.app.goo.gl/FFRQ2jU4CxgmEbBQ6" target="_blank" rel="noopener noreferrer">126 Stanley Tilakaratne Mawatha, Nugegoda</a>
            </li>
            <li>
              <Phone size={18} className="icon" />
              <a href="tel:+94724177482">+94 72 417 7482</a> / <a href="tel:+94777003052">+94 77 700 3052</a>
            </li>
            <li>
              <Mail size={18} className="icon" />
              <a href="mailto:Kotmotors94@gmail.com">kotmotors94@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-col">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/61572186687373/" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KOT Motors. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;