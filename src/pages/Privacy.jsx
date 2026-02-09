import React from 'react';
import './Legal.css'; // We will create this shared CSS file next

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you request a quote or contact KOT Motors, we collect personal information such as your name, 
            email address, phone number, and vehicle details. We do not sell this data to third parties.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <p>We use your information solely for:</p>
          <ul>
            <li>Processing orders and generating invoices.</li>
            <li>Communicating with you regarding technical specifications.</li>
            <li>Improving our inventory based on search trends.</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies 
            through your browser settings, though this may affect site functionality.
          </p>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p>
            If you have questions about this policy, please contact us at <strong>sales@kotmotors.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;