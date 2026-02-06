import React from 'react';
import { motion } from 'framer-motion';

const BlueprintSvg = () => {
  // Animation configuration
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.2, type: "spring", duration: 3, bounce: 0 },
        opacity: { delay: i * 0.2, duration: 0.01 }
      }
    })
  };

  // Common style for all lines
  const lineStyle = {
    strokeWidth: 2,
    strokeLinecap: "round",
    fill: "none"
  };

  return (
    <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '600px', filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }} // Subtle blue glow
      >
        {/* --- THE BLUEPRINT LINES --- */}
        
        {/* Main Outer Gear */}
        <motion.circle
          cx="300" cy="300" r="150"
          stroke="#3b82f6" // Bright Blue
          variants={draw}
          custom={1}
          style={lineStyle}
          strokeDasharray="10 10" // Makes it look like a schematic dotted line
        />
        
        {/* Inner Mechanism Circle */}
        <motion.circle
          cx="300" cy="300" r="80"
          stroke="#60a5fa" // Lighter Blue
          variants={draw}
          custom={2}
          style={lineStyle}
        />

        {/* Central Hub */}
        <motion.circle
          cx="300" cy="300" r="30"
          stroke="#93c5fd" // Very Light Blue
          variants={draw}
          custom={3}
          style={lineStyle}
        />

        {/* Crosshairs / Axles */}
        <motion.path
          d="M 100 300 L 500 300"
          stroke="#3b82f6"
          variants={draw}
          custom={4}
          style={lineStyle}
        />
         <motion.path
          d="M 300 100 L 300 500"
          stroke="#3b82f6"
          variants={draw}
          custom={4.5}
          style={lineStyle}
        />

        {/* Piston-like structures (Abstract) */}
        <motion.path
          d="M 180 250 L 180 350 L 220 350 L 220 250 Z"
          stroke="#60a5fa"
          variants={draw}
          custom={5}
          style={lineStyle}
        />
         <motion.path
          d="M 380 250 L 380 350 L 420 350 L 420 250 Z"
          stroke="#60a5fa"
          variants={draw}
          custom={5.5}
          style={lineStyle}
        />

        {/* Connecting lines/wires */}
        <motion.path
          d="M 220 300 C 250 300, 250 200, 300 200"
          stroke="#93c5fd"
          variants={draw}
          custom={6}
          style={lineStyle}
        />
         <motion.path
          d="M 380 300 C 350 300, 350 400, 300 400"
          stroke="#93c5fd"
          variants={draw}
          custom={6.5}
          style={lineStyle}
        />

        {/* Pulsing Core (Subtle effect) */}
        <motion.circle
          cx="300" cy="300" r="10"
          fill="#3b82f6"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

      </motion.svg>
    </div>
  );
};

export default BlueprintSvg;