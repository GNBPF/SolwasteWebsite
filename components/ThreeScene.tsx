import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing JSX types in the current environment
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      group: any;
      sphereGeometry: any;
      meshPhysicalMaterial: any;
      icosahedronGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      planeGeometry: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      group: any;
      sphereGeometry: any;
      meshPhysicalMaterial: any;
      icosahedronGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      planeGeometry: any;
    }
  }
}

// Realistic Mesh for "The Composter" based on industrial design
// Grey body, Green panel, Yellow lift/hopper, Green Bin
const ComposterMesh = (props: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1 + 0.5;
      // Floating
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() / 2) * 0.1;
    }
  });

  return (
    <group 
      {...props} 
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Main Chassis - Grey */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 1.5]} />
        <meshStandardMaterial color="#4A5568" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Front Service Panel - Green */}
      <mesh position={[-0.8, 0, 0.76]}>
        <boxGeometry args={[1.2, 1.8, 0.05]} />
        <meshStandardMaterial color="#22c55e" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Control Screen */}
      <mesh position={[-0.8, 0.4, 0.79]}>
        <planeGeometry args={[0.4, 0.3]} />
        <meshStandardMaterial color="#000" emissive="#4ade80" emissiveIntensity={0.5} />
      </mesh>

      {/* Right Service Door - Grey */}
      <mesh position={[0.8, 0.4, 0.76]}>
        <boxGeometry args={[1, 0.8, 0.05]} />
        <meshStandardMaterial color="#2D3748" roughness={0.5} />
      </mesh>
      <mesh position={[0.8, -0.5, 0.76]}>
        <boxGeometry args={[1, 0.6, 0.05]} />
        <meshStandardMaterial color="#2D3748" roughness={0.5} />
      </mesh>

      {/* Hopper / Lift Mechanism - Yellow */}
      <group position={[-2, 0, 0]}>
         {/* Vertical Rails */}
         <mesh position={[0.2, 0, 0.5]}>
            <boxGeometry args={[0.2, 2.5, 0.2]} />
            <meshStandardMaterial color="#EAB308" roughness={0.2} metalness={0.6} />
         </mesh>
         <mesh position={[0.2, 0, -0.5]}>
            <boxGeometry args={[0.2, 2.5, 0.2]} />
            <meshStandardMaterial color="#EAB308" roughness={0.2} metalness={0.6} />
         </mesh>
      </group>

      {/* Waste Bin - Green */}
      <mesh position={[-1.8, -0.6, 0.8]} rotation={[0, -0.2, 0]}>
         <boxGeometry args={[0.6, 0.8, 0.6]} />
         <meshStandardMaterial color="#166534" roughness={0.4} />
      </mesh>
      <mesh position={[-1.8, -0.1, 0.8]} rotation={[0.4, -0.2, 0]}>
         <boxGeometry args={[0.65, 0.1, 0.65]} />
         <meshStandardMaterial color="#14532d" roughness={0.4} />
      </mesh>

    </group>
  );
};

// Procedural Mesh for "Biogas Plant" (Abstract Sphere/Glass aesthetic)
const BiogasMesh = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && innerRef.current) {
       const t = state.clock.getElapsedTime();
       meshRef.current.rotation.x = Math.sin(t / 3) * 0.1;
       meshRef.current.rotation.z = Math.cos(t / 3) * 0.1;
       
       innerRef.current.rotation.y -= 0.01;
       innerRef.current.scale.setScalar(0.7 + Math.sin(t) * 0.05);
    }
  });

  return (
    <group {...props}>
        {/* Outer Glass Shell */}
        <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
            color="#2C3E2C"
            transmission={0.95}
            opacity={1}
            metalness={0.1}
            roughness={0}
            ior={1.7}
            thickness={2.0}
            envMapIntensity={2}
        />
        </mesh>
        
        {/* Inner Core (The Energy) */}
        <mesh ref={innerRef}>
             <icosahedronGeometry args={[1, 1]} />
             <meshStandardMaterial 
                color="#E07A5F" 
                emissive="#E07A5F" 
                emissiveIntensity={2} 
                wireframe={true}
             />
        </mesh>
    </group>
  );
};

const ProductScene = ({ type }: { type: 'composter' | 'biogas' }) => {
  return (
    <div className="w-full h-full min-h-[500px] cursor-move bg-gradient-to-b from-transparent to-black/5 rounded-xl overflow-hidden relative">
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }} dpr={[1, 2]}>
        <Environment preset="city" />
        
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1.5} castShadow />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color="#D4AF37" />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            {type === 'composter' ? <ComposterMesh /> : <BiogasMesh />}
        </Float>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={12} blur={2.5} far={4} color="#000000" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={1} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
      </Canvas>
      
      <div className="absolute bottom-6 right-6 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold">Interactive 3D</span>
          </div>
      </div>
    </div>
  );
};

export default ProductScene;