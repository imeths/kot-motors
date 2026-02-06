import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Globe, Award } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      
      {/* --- HERO SECTION --- */}
      <header className="about-hero">
        <div className="hero-content">
          <h1>More Than Just Parts</h1>
          <p>
            We are the technical backbone for Sri Lanka's leading automotive workshops. 
            Since 2010, KOT Motors has stood for one thing: <strong>Uncompromising Quality.</strong>
          </p>
        </div>
      </header>

      {/* --- THE STORY & LEADERSHIP --- */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-text">
            <span className="section-tag">Our Story</span>
            <h2>From a Spare Parts Counter to an Industry Leader.</h2>
            <p>
              KOT Motors began with a simple observation: mechanics were frustrated. They were tired of "compatible" parts that failed after a month and suppliers who couldn't answer technical questions.
            </p>
            <p>
              We decided to be different. We focused exclusively on <strong>OEM-grade cooling and electrical systems</strong>. We didn't just sell the box; we understood what was inside it.
            </p>
            <p>
              Today, under the leadership of <strong>Mr. John Doe</strong>, we serve over 500+ workshops across the island, providing the reliability that professional mechanics demand.
            </p>
          </div>
          
          {/* Founder/Image Placeholder Card */}
          <div className="story-image-card">
            <div className="image-placeholder">
              <Users size={64} color="#94a3b8" />
              <span>Founder & Team</span>
            </div>
            <div className="card-caption">
              <strong>15+ Years</strong> of Automotive Excellence
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES GRID --- */}
      <section className="values-section">
        <div className="values-container">
          <div className="values-header">
            <h2>Why Professionals Choose Us</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <Shield className="value-icon" size={32} />
              <h3>Genuine Warranty</h3>
              <p>We stand behind every compressor and sensor we sell. If it's a defect, we replace it. No excuses.</p>
            </div>
            
            <div className="value-card">
              <Globe className="value-icon" size={32} />
              <h3>Global Sourcing</h3>
              <p>We import directly from manufacturers in Japan, Thailand, and Europe to ensure authenticity.</p>
            </div>

            <div className="value-card">
              <Award className="value-icon" size={32} />
              <h3>Technical Mastery</h3>
              <p>Our team understands the difference between a scroll and a piston compressor. We speak your language.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="about-cta">
        <h2>Ready to work with a partner, not just a supplier?</h2>
        <Link to="/contact-us" className="cta-button">
          Get in Touch
        </Link>
      </section>

    </div>
  );
};

export default About;