import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, Text } from '@react-three/drei';

const CompressorModel = () => {
  const groupRef = useRef();

  // Rotate the whole group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005; 
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Main Housing (Metallic Brand Blue) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />
        <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* --- BRANDING (The Logo) --- */}
      {/* We position it slightly "above" the cylinder surface (z=0.82) so it doesn't clip */}
      <Text
        position={[0, 0, 0.82]} // Sits on the front face
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        rotation={[0, 0, 0]} // No rotation needed relative to camera initially
        fontWeight="bold"
      >
        KOT
      </Text>
      
      {/* Smaller text below */}
      <Text
        position={[0, -0.3, 0.82]} 
        fontSize={0.15}
        color="#e2e8f0"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        MOTORS
      </Text>


      {/* 2. The Pulley / Clutch (Matte Black) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[1.15, 0, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.4, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* 3. Center Bolt (Shiny Silver) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[1.36, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#f8fafc" metalness={1} roughness={0.1} />
      </mesh>

      {/* 4. Rear Head (Silver) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-1.15, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* 5. Suction/Discharge Ports (Silver Block) */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1, 0.3, 0.6]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 6. Port Nozzles (Brass/Gold) */}
      <mesh position={[-0.25, 1.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
        <meshStandardMaterial color="#d97706" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.25, 1.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
        <meshStandardMaterial color="#d97706" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <Stage environment="city" intensity={0.7} adjustCamera={false}>
          <CompressorModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
};

export default Hero3D;