import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // We will create this next

const Navbar = () => {
  const location = useLocation(); // To highlight the active link

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">KOT</span> Motors
        </div>
        
        <ul className="nav-menu">
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/auto-ac-parts" className={isActive('/auto-ac-parts')}>Auto A/C</Link></li>
          <li><Link to="/ac-refrigeration" className={isActive('/ac-refrigeration')}>Industrial</Link></li>
          <li><Link to="/refrigeration-gases" className={isActive('/refrigeration-gases')}>Gases</Link></li>
          <li><Link to="/contact-us" className="nav-button">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;