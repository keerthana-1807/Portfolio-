import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function StarField(props) {
  const ref = useRef();
  // Generate random positions inside a sphere
  const sphere = random.inSphere(new Float32Array(3000), { radius: 2.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#818cf8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function FloatingShapes() {
  const shapeRef1 = useRef();
  const shapeRef2 = useRef();
  const shapeRef3 = useRef();

  useFrame((state, delta) => {
    if (shapeRef1.current) shapeRef1.current.rotation.x += delta * 0.2;
    if (shapeRef2.current) shapeRef2.current.rotation.y += delta * 0.3;
    if (shapeRef3.current) shapeRef3.current.rotation.z += delta * 0.15;
  });

  return (
    <group>
      {/* 3D Icosahedron */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={shapeRef1} position={[-2.8, 1.2, -1]}>
          <icosahedronGeometry args={[0.7, 1]} />
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            emissive="#4338ca"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* 3D Octahedron */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
        <mesh ref={shapeRef2} position={[2.9, -1.0, -0.5]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            emissive="#0891b2"
            emissiveIntensity={0.6}
            transparent
            opacity={0.65}
          />
        </mesh>
      </Float>

      {/* 3D Glowing Distorted Sphere */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh ref={shapeRef3} position={[2.2, 1.8, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.2}
            emissive="#059669"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
        <StarField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
