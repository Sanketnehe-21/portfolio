import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export default function VillageCamera({ playerPos = [0, 0.75, 10] }) {
  const cameraRef = useRef();
  const currentLookAt = useRef(new THREE.Vector3(0, 1, 10));

  useFrame((state, delta) => {
    if (!cameraRef.current) return;

    const px = Array.isArray(playerPos) ? playerPos[0] : playerPos.x || 0;
    const py = Array.isArray(playerPos) ? playerPos[1] : playerPos.y || 0;
    const pz = Array.isArray(playerPos) ? playerPos[2] : playerPos.z || 0;

    // Target position for the camera: playerPos + [0, 14, 16]
    const targetPos = new THREE.Vector3(px, py + 14, pz + 16);

    // Target lookAt point: playerPos + [0, 1, 0]
    const targetLook = new THREE.Vector3(px, py + 1, pz);

    // Smoothly lerp camera position
    cameraRef.current.position.lerp(targetPos, 5 * delta);
    
    // Smoothly lerp lookAt target
    currentLookAt.current.lerp(targetLook, 5 * delta);
    
    // Apply the lookAt
    cameraRef.current.lookAt(currentLookAt.current);
  });

  return (
    <PerspectiveCamera 
      ref={cameraRef} 
      makeDefault 
      position={[0, 14, 26]} 
      fov={45} 
    />
  );
}
