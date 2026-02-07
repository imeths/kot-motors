import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- IMPORT YOUR PAGES HERE ---
import Home from './pages/Home';
import AutoAC from './pages/AutoAC'; // <--- MAKE SURE THIS IS UNCOMMENTED
import Contact from './pages/Contact';
import About from './pages/About';

// Keep these commented until you make the files, or the app will crash
// import ACRefrigeration from './pages/ACRefrigeration';
// import Gases from './pages/Gases';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <Routes>
          {/* This connects the URL "/" to Home.jsx */}
          <Route path="/" element={<Home />} />
          
          {/* This connects the URL "/auto-ac-parts" to AutoAC.jsx */}
          <Route path="/products" element={<AutoAC />} /> 
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />

          
          {/* <Route path="/ac-refrigeration" element={<ACRefrigeration />} />
          <Route path="/refrigeration-gases" element={<Gases />} />
          
          */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;