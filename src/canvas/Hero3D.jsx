import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, ContactShadows, Float, Environment, Sparkles } from '@react-three/drei';

const CompressorModel = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Complex floating animation
      groupRef.current.rotation.y = t * 0.2;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05; // Slight tilt
      groupRef.current.position.y = Math.sin(t * 1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Main Housing (UPGRADED to Physical Material for Clearcoat) */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.8, 0.8, 2.2, 32]} />
        <meshPhysicalMaterial 
          color="#2563eb" 
          metalness={0.6}
          roughness={0.2}
          clearcoat={1}       // <--- THE "WET PAINT" LOOK
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Branding */}
      <Text position={[0, 0, 0.82]} fontSize={0.5} color="white" anchorX="center" anchorY="middle" fontWeight="bold">
        KOT
      </Text>
      <Text position={[0, -0.3, 0.82]} fontSize={0.15} color="#e2e8f0" anchorX="center" anchorY="middle" letterSpacing={0.1}>
        MOTORS
      </Text>

      {/* Pulley (Matte Black) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[1.15, 0, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.4, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Bolt (Chrome) */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[1.36, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
      </mesh>

      {/* Rear Cap */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[-1.15, 0, 0]}>
        <cylinderGeometry args={[0.75, 0.8, 0.3, 32]} />
        <meshPhysicalMaterial color="#cbd5e1" metalness={0.5} roughness={0.2} clearcoat={0.5} />
      </mesh>

      {/* Top Block */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1, 0.3, 0.6]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Gold Ports */}
      <mesh position={[-0.25, 1.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
        <meshPhysicalMaterial color="#fbbf24" metalness={0.8} roughness={0.2} clearcoat={0.8} />
      </mesh>
      <mesh position={[0.25, 1.1, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.4, 16]} />
        <meshPhysicalMaterial color="#fbbf24" metalness={0.8} roughness={0.2} clearcoat={0.8} />
      </mesh>

      {/* Tech Ring (Rotating opposite direction) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas camera={{ position: [2, 2, 5], fov: 45 }} dpr={[1, 2]}> {/* High DPI for sharpness */}
        
        <Environment preset="city" />

        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={3} color="white" />
        <directionalLight position={[-5, 5, 5]} intensity={2} color="#bfdbfe" />
        <spotLight position={[0, 5, -5]} intensity={10} color="#f97316" angle={0.5} penumbra={1} />

        {/* --- NEW: COLD AIR PARTICLES --- */}
        {/* Floating ice crystals/dust around the model */}
        <Sparkles 
          count={100} 
          scale={6} 
          size={4} 
          speed={0.4} 
          opacity={0.5} 
          color="#bfdbfe" // Light Ice Blue
        />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <CompressorModel />
        </Float>

        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
        
        {/* Controls - Limited angles so they can't see "under" or "over" too much */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true}       // Subtle auto-rotation
          autoRotateSpeed={0.5} 
          minPolarAngle={Math.PI / 3} // Restrict view angle (vertical)
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;