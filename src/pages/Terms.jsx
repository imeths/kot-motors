import React from 'react';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing the KOT Motors website, you agree to be bound by these Terms of Service. 
            If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Product Information</h2>
          <p>
            While we strive for accuracy, KOT Motors does not warrant that product descriptions or other content 
            is error-free. <strong>All parts should be installed by a certified professional.</strong> 
            We are not liable for damage caused by improper installation.
          </p>
        </section>

        <section>
          <h2>3. Returns & Warranty</h2>
          <p>
            OEM parts carry a manufacturer's warranty where applicable. Electrical components (such as sensors 
            and control valves) are generally non-refundable once installed unless proven defective under warranty terms.
          </p>
        </section>

        <section>
          <h2>4. Limitation of Liability</h2>
          <p>
            KOT Motors shall not be liable for any indirect, incidental, or consequential damages arising 
            from the use of our products.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;