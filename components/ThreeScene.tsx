
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Extend JSX.IntrinsicElements to include React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      planeGeometry: any;
      sphereGeometry: any;
      meshPhysicalMaterial: any;
      icosahedronGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      cylinderGeometry: any;
    }
  }
}

// Error Boundary Component
class ErrorBoundary extends React.Component<{children: React.ReactNode, fallback: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  // @ts-ignore
  props: {children: React.ReactNode, fallback: React.ReactNode};

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
    this.props = props;
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn("3D Scene failed to load:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ComposterMesh = (props: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const binRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating/rotation for the whole machine to show off 3D
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05 + 0.3;
    }
    if (binRef.current) {
        // Subtle bin vibration/movement to suggest operation or readiness
        binRef.current.position.y = -0.6 + Math.sin(state.clock.getElapsedTime() * 2) * 0.01;
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
      {/* --- MAIN MACHINE BODY --- */}
      {/* Main Grey Chassis (Right side mainly) */}
      <mesh position={[0.8, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 2.2, 1.4]} />
        <meshStandardMaterial color="#4b5563" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Left Section (Green Panel Area) */}
      <mesh position={[-1.0, 0, 0]} castShadow receiveShadow>
         <boxGeometry args={[0.8, 2.2, 1.4]} />
         <meshStandardMaterial color="#374151" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* The Prominent Green Panel on the Left Section */}
      <mesh position={[-1.0, 0, 0.71]}>
        <planeGeometry args={[0.7, 1.5]} />
        <meshStandardMaterial color="#22c55e" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Touch Screen Interface */}
      <group position={[-1.0, 0.4, 0.72]}>
          <mesh>
             <planeGeometry args={[0.4, 0.3]} />
             <meshStandardMaterial color="#000" />
          </mesh>
          <mesh position={[0, 0, 0.01]}>
             <planeGeometry args={[0.35, 0.25]} />
             <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={1.5} />
          </mesh>
          {/* UI Text Lines (Simulated) */}
          <mesh position={[-0.1, 0.05, 0.02]}>
             <planeGeometry args={[0.1, 0.02]} />
             <meshStandardMaterial color="#fff" emissive="#fff" />
          </mesh>
          <mesh position={[-0.1, 0.0, 0.02]}>
             <planeGeometry args={[0.1, 0.02]} />
             <meshStandardMaterial color="#fff" emissive="#fff" />
          </mesh>
      </group>

      {/* Emergency Stop Button */}
      <mesh position={[-0.75, 0.4, 0.72]} rotation={[1.57, 0, 0]}>
         <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
         <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Right Side Inspection Hatches */}
      <group position={[0.8, 0, 0.71]}>
         {/* Top Hatch */}
         <mesh position={[0.5, 0.4, 0]}>
            <planeGeometry args={[0.8, 0.6]} />
            <meshStandardMaterial color="#6b7280" roughness={0.5} metalness={0.5} />
         </mesh>
         <mesh position={[0.8, 0.4, 0.02]}>
            <boxGeometry args={[0.05, 0.15, 0.04]} />
            <meshStandardMaterial color="#e5e7eb" metalness={0.8} roughness={0.1} />
         </mesh>
         
         {/* Bottom Hatch/Chute */}
         <mesh position={[0.5, -0.5, 0]}>
            <planeGeometry args={[0.8, 0.6]} />
            <meshStandardMaterial color="#6b7280" roughness={0.5} metalness={0.5} />
         </mesh>
          <mesh position={[0.5, -0.7, 0.1]} rotation={[-0.5, 0, 0]}>
            <boxGeometry args={[0.6, 0.05, 0.3]} />
            <meshStandardMaterial color="#9ca3af" metalness={0.6} />
         </mesh>
      </group>

      {/* --- YELLOW LIFTING MECHANISM --- */}
      <group position={[-1.7, 0, 0.2]}>
          {/* Main Vertical Rails */}
          <mesh position={[0, 0, 0]} castShadow>
             <boxGeometry args={[0.15, 2.5, 0.15]} />
             <meshStandardMaterial color="#facc15" roughness={0.2} metalness={0.6} />
          </mesh>
           {/* Support Structure connecting to main body */}
          <mesh position={[0.3, 0.5, 0]}>
             <boxGeometry args={[0.6, 0.1, 0.1]} />
             <meshStandardMaterial color="#1f2937" />
          </mesh>
           <mesh position={[0.3, -0.5, 0]}>
             <boxGeometry args={[0.6, 0.1, 0.1]} />
             <meshStandardMaterial color="#1f2937" />
          </mesh>
          
          {/* Hydraulic/Chain Cover at top */}
          <mesh position={[0.2, 1.25, 0]}>
              <boxGeometry args={[0.6, 0.3, 0.4]} />
              <meshStandardMaterial color="#374151" />
          </mesh>
      </group>

      {/* --- GREEN TRASH BIN --- */}
      <group ref={binRef} position={[-1.8, -0.6, 0.6]} rotation={[0, 0.3, 0]}>
          {/* Bin Body */}
          <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
              <boxGeometry args={[0.7, 1.0, 0.7]} />
              <meshStandardMaterial color="#16a34a" roughness={0.4} />
          </mesh>
          
          {/* Bin Rim/Lip */}
          <mesh position={[0, 1.0, 0]}>
              <boxGeometry args={[0.8, 0.05, 0.8]} />
              <meshStandardMaterial color="#15803d" />
          </mesh>

          {/* Lid (Open) */}
          <group position={[0, 1.0, -0.35]} rotation={[-0.5, 0, 0]}>
               <mesh position={[0, 0.02, 0.35]}>
                  <boxGeometry args={[0.75, 0.05, 0.75]} />
                  <meshStandardMaterial color="#15803d" />
               </mesh>
          </group>
          
          {/* Wheels */}
           <mesh position={[-0.3, 0, 0.2]} rotation={[0, 0, 1.57]}>
             <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
             <meshStandardMaterial color="#111" />
           </mesh>
            <mesh position={[0.3, 0, 0.2]} rotation={[0, 0, 1.57]}>
             <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
             <meshStandardMaterial color="#111" />
           </mesh>
      </group>
      
      {/* Top Hopper Unit on Main Body */}
       <mesh position={[-0.6, 1.3, 0.2]}>
          <boxGeometry args={[1.2, 0.5, 1.0]} />
          <meshStandardMaterial color="#374151" roughness={0.5} />
       </mesh>
       {/* Intake Chute on Hopper */}
       <mesh position={[-0.8, 1.4, 0.2]} rotation={[0, 0, 0.5]}>
           <boxGeometry args={[0.1, 0.4, 0.8]} />
            <meshStandardMaterial color="#1f2937" />
       </mesh>

       {/* Feet */}
       <mesh position={[0.5, -1.05, 0.5]}>
         <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
         <meshStandardMaterial color="#111" />
       </mesh>
       <mesh position={[2.0, -1.05, 0.5]}>
         <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
         <meshStandardMaterial color="#111" />
       </mesh>
       <mesh position={[0.5, -1.05, -0.5]}>
         <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
         <meshStandardMaterial color="#111" />
       </mesh>
        <mesh position={[2.0, -1.05, -0.5]}>
         <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
         <meshStandardMaterial color="#111" />
       </mesh>

    </group>
  );
};

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
      <ErrorBoundary fallback={
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100/50 text-moss/50 space-y-2">
           <div className="w-12 h-12 rounded-full border-2 border-moss/20 flex items-center justify-center">
             <span className="text-xl font-serif font-bold">3D</span>
           </div>
           <span className="text-xs font-mono uppercase tracking-widest">Visual Preview Unavailable</span>
        </div>
      }>
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
      </ErrorBoundary>
      
      <div className="absolute bottom-6 right-6 pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <span className="text-[10px] uppercase tracking-widest text-charcoal/60 font-bold">Interactive 3D</span>
          </div>
      </div>
    </div>
  );
};

export default ProductScene;
