import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';
  
  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={closeMenu} style={{textDecoration: 'none', color: 'inherit'}}>
            <span className="logo-text">KOT</span> Motors
          </Link>
        </div>
        
        {/* --- Desktop Menu (Hidden on Mobile) --- */}
        <ul className="nav-menu desktop-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/auto-ac-parts" className={isActive('/auto-ac-parts')}>Auto A/C</Link></li>
          <li><Link to="/ac-refrigeration" className={isActive('/ac-refrigeration')}>Industrial</Link></li>
          <li><Link to="/refrigeration-gases" className={isActive('/refrigeration-gases')}>Gases</Link></li>
          <li><Link to="/contact-us" className="nav-button">Contact Us</Link></li>
        </ul>

        {/* --- Mobile Menu Toggle Button (Visible on Mobile) --- */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#0f172a" /> : <Menu size={28} color="#0f172a" />}
        </div>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      <div className={`mobile-dropdown ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/auto-ac-parts" onClick={closeMenu}>Auto A/C Parts</Link></li>
          <li><Link to="/ac-refrigeration" onClick={closeMenu}>Industrial Solutions</Link></li>
          <li><Link to="/refrigeration-gases" onClick={closeMenu}>Refrigeration Gases</Link></li>
          <li><Link to="/contact-us" onClick={closeMenu} className="mobile-btn">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;