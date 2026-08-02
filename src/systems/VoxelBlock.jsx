import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();

export function InstancedVoxelCluster({ positions, colors, scale = 1, emissive = false }) {
  const meshRef = useRef();

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    positions.forEach((pos, i) => {
      tempObject.position.set(pos[0], pos[1], pos[2]);
      tempObject.scale.setScalar(scale);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      if (colors && colors[i]) {
        tempColor.set(colors[i]);
        meshRef.current.setColorAt(i, tempColor);
      } else {
        tempColor.set('#ffffff');
        meshRef.current.setColorAt(i, tempColor);
      }
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (colors) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [positions, colors, scale]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    // Gentle floating animation
    meshRef.current.position.y = Math.sin(t) * 0.5;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, positions.length]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        toneMapped={!emissive}
        emissive={emissive ? '#ffffff' : '#000000'}
        emissiveIntensity={emissive ? 1.5 : 0}
        color={emissive ? '#ffffff' : '#aaaaaa'}
        roughness={0.2}
        metalness={0.8}
      />
    </instancedMesh>
  );
}

export function generateIslandVoxels(count, radius) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const r = radius * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const x = r * Math.cos(theta);
    const z = r * Math.sin(theta);
    const y = (Math.random() - 1.0) * (radius - r) * 0.5;

    positions.push([
      Math.round(x),
      Math.round(y),
      Math.round(z)
    ]);
  }

  // Deduplicate overlapping voxels
  const unique = Array.from(new Set(positions.map(p => p.join(',')))).map(s => s.split(',').map(Number));
  return unique;
}

export function generateTowerVoxels(height, radius) {
  const positions = [];
  for (let y = 0; y < height; y++) {
    const r = radius * (1 - y / (height * 1.5));
    const theta = y * 0.5;
    const x = r * Math.cos(theta);
    const z = r * Math.sin(theta);

    positions.push([
      Math.round(x),
      Math.round(y),
      Math.round(z)
    ]);
  }

  const unique = Array.from(new Set(positions.map(p => p.join(',')))).map(s => s.split(',').map(Number));
  return unique;
}
