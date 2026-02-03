import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';

const CylinderModel = () => {
  const meshRef = useRef();

  // Rotate the object slightly every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Slow rotation speed
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Args: [topRadius, bottomRadius, height, segments] */}
      <cylinderGeometry args={[1, 1, 2.5, 32]} /> 
      {/* Shiny metallic material in "Industrial Blue" */}
      <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

const Hero3D = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Stage handles lighting and shadows automatically */}
        <Stage environment="city" intensity={0.6}>
          <CylinderModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D;