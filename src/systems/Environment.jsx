import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DustParticles({ count = 300 }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 80,
          Math.random() * 40 - 10,
          (Math.random() - 0.5) * 80
        ],
        velocity: Math.random() * 0.02 + 0.01,
        wobbleSpeed: Math.random() * 1.5 + 0.5,
        wobbleOffset: Math.random() * Math.PI * 2,
        scale: Math.random() * 0.8 + 0.4,
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        rotationSpeed: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02]
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    particles.forEach((p, i) => {
      p.position[1] += p.velocity;
      if (p.position[1] > 30) {
        p.position[1] = -10;
      }
      
      const xOffset = Math.sin(time * p.wobbleSpeed + p.wobbleOffset) * 0.5;
      const zOffset = Math.cos(time * p.wobbleSpeed + p.wobbleOffset) * 0.5;

      dummy.position.set(p.position[0] + xOffset, p.position[1], p.position[2] + zOffset);
      dummy.scale.setScalar(p.scale);
      
      p.rotation[0] += p.rotationSpeed[0];
      p.rotation[1] += p.rotationSpeed[1];
      p.rotation[2] += p.rotationSpeed[2];
      
      dummy.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2]);
      dummy.updateMatrix();
      
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[0.15, 0.15, 0.15]} />
      <meshStandardMaterial 
        color="#ffb74d" 
        emissive="#ff7043" 
        emissiveIntensity={2} 
        transparent 
        opacity={0.8}
        roughness={0.2}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

export default function Environment() {
  return (
    <>
      <color attach="background" args={['#121026']} />
      <fog attach="fog" args={['#181534', 15, 75]} />
      
      <ambientLight intensity={0.6} color="#312e81" />
      
      <directionalLight
        castShadow
        position={[20, 30, 20]}
        intensity={2.2}
        color="#ffd9a6"
      />
      
      <directionalLight
        position={[-20, 20, -20]}
        intensity={0.8}
        color="#5b21b6"
      />
      
      <DustParticles count={300} />
    </>
  );
}
