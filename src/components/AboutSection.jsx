import React, { useEffect, useRef } from 'react';
import { Target, Eye } from 'lucide-react';
import { animate, useInView } from 'framer-motion';
import './AboutSection.css';

// --- Helper Component: The Counter ---
const Counter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" }); // Starts when 100px into view

  useEffect(() => {
    const node = nodeRef.current;
    
    // Only start animating if the element is in view
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          // Update the text directly for better performance
          node.textContent = Math.floor(value); 
        }
      });

      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef} />;
};

// --- Main Component ---
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* --- Left Column: The Story --- */}
        <div className="about-content">
          <span className="eyebrow-text">About KOT Motors</span>
          <h2>Driven by Precision. <br/>Powered by Trust.</h2>
          <p className="lead-text">
            For over a decade, KOT Motors has been the silent engine behind Sri Lanka's leading automotive workshops.
          </p>
          <p className="body-text">
            We don't just supply parts; we supply confidence. Specializing in complex A/C systems and electrical components, 
            we bridge the gap between global OEM manufacturers and local technical needs. 
            When a vehicle enters your bay, we ensure it leaves with parts that last.
          </p>
          
          <div className="stat-row">
            {/* Stat 1: Years Experience */}
            <div className="stat-item">
              <span className="stat-number">
                <Counter from={0} to={15} duration={2} />+
              </span>
              <span className="stat-label">Years Experience</span>
            </div>

            {/* Stat 2: Parts Cataloged */}
            <div className="stat-item">
              <span className="stat-number">
                <Counter from={0} to={5000} duration={2.5} />+
              </span>
              <span className="stat-label">Parts Cataloged</span>
            </div>
          </div>
        </div>

        {/* --- Right Column: Mission & Vision Cards --- */}
        <div className="cards-column">
          
          {/* Mission Card */}
          <div className="identity-card mission">
            <div className="icon-wrapper">
              <Target size={24} color="white" />
            </div>
            <div>
              <h3>Our Mission</h3>
              <p>To empower automotive professionals with OEM-grade cooling and electrical solutions that eliminate returns and maximize performance.</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="identity-card vision">
            <div className="icon-wrapper">
              <Eye size={24} color="white" />
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>To become the island's definitive authority in automotive climate control, setting the standard for quality and technical support.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;