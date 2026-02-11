import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  
  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LOGO SECTION */}
        <div className="logo">
          <Link 
            to="/" 
            onClick={closeMenu} 
            style={{
              textDecoration: 'none', 
              color: 'inherit', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px' 
            }}
          >
            {/* Logo Image from public folder */}
            <img 
              src="/vite.svg" 
              alt="KOT Motors Logo" 
              style={{ height: '48px', width: 'auto' }} 
            />
            
            <div>
              <span className="logo-text">KOT</span> Motors
            </div>
          </Link>
        </div>
        
        {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
        <ul className="nav-menu desktop-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about-us" className={isActive('/about-us')}>About Us</Link></li>
          <li><Link to="/products" className={isActive('/products')}>Products</Link></li>          
          <li><Link to="/contact-us" className="nav-button">Contact Us</Link></li>
        </ul>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#0f172a" /> : <Menu size={28} color="#0f172a" />}
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <div className={`mobile-dropdown ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/products" onClick={closeMenu}>Products</Link></li>          
          <li><Link to="/contact-us" onClick={closeMenu} className="mobile-btn">Contact Support</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;