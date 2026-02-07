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
            <li><Link to="/products">Auto A/C Catalog</Link></li>
            <li><Link to="/contact-us">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={18} className="icon" />
              <span>123 Panchikawatta Rd, Colombo 10</span>
            </li>
            <li>
              <Phone size={18} className="icon" />
              <span>+94 11 234 5678</span>
            </li>
            <li>
              <Mail size={18} className="icon" />
              <span>sales@kotmotors.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div className="footer-col">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" className="social-link"><Facebook size={20} /></a>
            <a href="#" className="social-link"><Instagram size={20} /></a>
            <a href="#" className="social-link"><Linkedin size={20} /></a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KOT Motors. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;