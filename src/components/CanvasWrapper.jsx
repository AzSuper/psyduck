"use client"

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';

function TechSphere(props) {
  const meshRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh 
        ref={meshRef}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        scale={isHovered ? 1.1 : 1}
        {...props}
      >
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={isHovered ? '#10b981' : '#059669'} 
          metalness={0.7} 
          roughness={0.3} 
        />
      </mesh>
    </Float>
  );
}

const CanvasWrapper = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5] }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <TechSphere position={[2, 1, 0]} />
      <TechSphere position={[-2, -1, -1]} />
      <Environment preset="sunset" />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default CanvasWrapper;