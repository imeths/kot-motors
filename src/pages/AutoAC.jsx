import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Package, 
  CheckCircle, 
  Zap, 
  Shield, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './AutoAC.css';

// --- MOCK DATA ---
const products = [
  { id: 1, name: "Sanden 508 Compressor (Universal)", sku: "SD-508-U", type: "Compressor", compatible: "Universal", price: "Call for Quote" },
  { id: 2, name: "Toyota Corolla 2018 Condenser", sku: "TY-COR-18-C", type: "Condenser", compatible: "Toyota", price: "Call for Quote" },
  { id: 3, name: "Denso Type Evaporator Core", sku: "DN-EV-202", type: "Evaporator", compatible: "Honda", price: "Call for Quote" },
  { id: 4, name: "Digital Thermostat Control Unit", sku: "EL-TH-001", type: "Electronics", compatible: "Universal", price: "Call for Quote" },
  { id: 5, name: "R134a High Side Valve", sku: "VL-HS-134", type: "Valves", compatible: "Universal", price: "Call for Quote" },
  { id: 6, name: "Nissan Sunny B14 Compressor", sku: "NS-SUN-B14", type: "Compressor", compatible: "Nissan", price: "Call for Quote" },
];

const AutoAC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Filtering Logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.type === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="auto-ac-page">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <header className="page-header">
        <div className="header-content">
          
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span style={{ color: '#e2e8f0' }}>Auto A/C Parts</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h1>Precision Cooling Systems</h1>
            <p>
              Equip your workshop with OEM-grade compressors, condensers, and climate control units. 
              Engineered for performance, tested for durability.
            </p>

            {/* Trust Badges */}
            <div className="hero-badges">
              <div className="badge-item">
                <Shield size={16} color="#2563eb" />
                <span>Genuine Warranty</span>
              </div>
              <div className="badge-item">
                <Zap size={16} color="#2563eb" />
                <span>OEM Specifications</span>
              </div>
              <div className="badge-item">
                <CheckCircle size={16} color="#2563eb" />
                <span>In Stock & Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="catalog-container">
        
        {/* SIDEBAR FILTERS */}
        <aside className="filters-sidebar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <Filter size={20} color="#2563eb" />
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700' }}>Filters</h2>
          </div>

          <div className="filter-group">
            <h3>Part Type</h3>
            {['All', 'Compressor', 'Condenser', 'Evaporator', 'Electronics', 'Valves'].map((category) => (
              <div 
                key={category} 
                className={`filter-option ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <div className="filter-checkbox">
                  {activeCategory === category && <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '2px' }} />}
                </div>
                {category}
              </div>
            ))}
          </div>

          <div className="filter-group" style={{ marginTop: '2rem' }}>
            <h3>Vehicle Make</h3>
            <div className="filter-option"><div className="filter-checkbox"></div> Toyota</div>
            <div className="filter-option"><div className="filter-checkbox"></div> Nissan</div>
            <div className="filter-option"><div className="filter-checkbox"></div> Honda</div>
            <div className="filter-option"><div className="filter-checkbox"></div> Universal</div>
          </div>
        </aside>

        {/* PRODUCT LIST */}
        <main>
          {/* Search Bar */}
          <div style={{ marginBottom: '2rem', position: 'relative' }}>
            <Search className="search-icon" size={20} color="#94a3b8" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search by Part Name or SKU (e.g. SD-508)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '14px 14px 14px 45px', 
                borderRadius: '12px', 
                border: '1px solid #e2e8f0', 
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563eb'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>

          {/* Product Grid */}
          <motion.div 
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div key={product.id} className="product-card" variants={itemVariants}>
                  
                  {/* Image Placeholder */}
                  <div className="card-image">
                    <Package size={48} color="#cbd5e1" strokeWidth={1.5} />
                  </div>
                  
                  <div className="card-content">
                    <span className="sku-tag">SKU: {product.sku}</span>
                    <h3 className="card-title">{product.name}</h3>
                    <div className="card-meta">
                      <span style={{color: '#64748b'}}>Fit: </span>
                      <span style={{fontWeight: '500', color: '#334155'}}>{product.compatible}</span>
                    </div>
                    
                    <div className="card-actions">
                      <button className="btn-outline">
                        View Details
                      </button>
                    </div>
                  </div>

                </motion.div>
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: '#94a3b8' }}>
                <p>No parts found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </main>

      </div>
    </div>
  );
};

export default AutoAC;