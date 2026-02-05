import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Snowflake, Wrench, Wind, ShieldCheck, Truck, Headphones } from 'lucide-react'; 
import Hero3D from '../canvas/Hero3D';
import './Home.css';
import AboutSection from '../components/AboutSection';  
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* --- HERO SECTION --- */}
      <section className="hero-container">
        <div className="hero-text">
          {/* "Eyebrow" Text for that premium feel */}
          <span style={{ 
            color: '#2563eb', 
            fontWeight: '700', 
            letterSpacing: '2px', 
            fontSize: '0.8rem', 
            textTransform: 'uppercase', 
            display: 'block', 
            marginBottom: '1.5rem' 
          }}>
            Premium Automotive Parts
          </span>

          <h1>Engineering <br /> Cool Solutions.</h1>
          
          <p>
            KOT Motors is your trusted partner for high-performance A/C parts, 
            electrical components, and industrial refrigeration. We keep your 
            vehicles running cold and your business running smooth.
          </p>

          <div className="hero-buttons">
            <Link to="/contact-us" className="btn-primary">
              Get a Quote
            </Link>
            <Link to="/auto-ac-parts" className="btn-secondary">
              View Catalog
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          {/* 3D Canvas Container */}
          <Hero3D />
        </div>
      </section>


      {/* --- CATEGORY GRID --- */}
      <section className="category-section">
        <div className="section-header">
          <h2>Our Expertise</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Select a category to browse parts</p>
        </div>
        
        <div className="grid-container">
          
          {/* Card 1: Auto A/C */}
          <div className="category-card">
            <div style={{ background: '#eff6ff', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <Snowflake size={32} color="#2563eb" />
            </div>
            <h3>Auto A/C Parts</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Compressors, condensers, evaporators, and control valves for all major vehicle makes.
            </p>
            <Link to="/auto-ac-parts" className="card-link">
              View Catalog <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
            </Link>
          </div>

          {/* Card 2: A/C & Refrigeration */}
          <div className="category-card">
            <div style={{ background: '#eff6ff', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <Wrench size={32} color="#2563eb" />
            </div>
            <h3>Industrial A/C</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Heavy-duty cooling solutions, electrical components, and repair kits for commercial units.
            </p>
            <Link to="/ac-refrigeration" className="card-link">
              View Solutions <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
            </Link>
          </div>

          {/* Card 3: Refrigeration Gases */}
          <div className="category-card">
            <div style={{ background: '#eff6ff', width: 'fit-content', padding: '12px', borderRadius: '12px', marginBottom: '1.5rem' }}>
              <Wind size={32} color="#2563eb" />
            </div>
            <h3>Refrigeration Gases</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Certified high-purity refrigerants (R134a, R404a) and specialized gases for any system.
            </p>
            <Link to="/refrigeration-gases" className="card-link">
              Check Availability <ArrowRight size={16} style={{ marginLeft: '8px' }}/>
            </Link>
          </div>

        </div>
      </section>

      {/* --- NEW CORPORATE IDENTITY SECTION --- */}
      <AboutSection />

      {/* --- TRUST BANNER (Dark Section) --- */}
      <section style={{ background: '#0f172a', color: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Why Industry Leaders Choose Us</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>We don't just sell parts; we provide solutions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            
            {/* Trust Item 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <ShieldCheck size={48} color="#2563eb" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Genuine Quality</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Sourced directly from top OEMs to ensure longevity and performance.</p>
            </div>

            {/* Trust Item 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Headphones size={48} color="#2563eb" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Expert Support</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Direct access to technical experts for complex electrical diagnostics.</p>
            </div>

            {/* Trust Item 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Truck size={48} color="#2563eb" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Island-wide Delivery</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>Fast, reliable dispatch to your workshop or industrial site.</p>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />

    </div>
  );
};

export default Home;