import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function CameraRig() {
  const scroll = useScroll();

  const { cameraPath, lookAtPath } = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 8, 22),
      new THREE.Vector3(12, 18, 5),
      new THREE.Vector3(0, 5, -25),
      new THREE.Vector3(-15, 2, -65),
      new THREE.Vector3(0, 25, -110),
    ];
    const lookAts = [
      new THREE.Vector3(0, 2, 0),
      new THREE.Vector3(15, 20, -5),
      new THREE.Vector3(0, 5, -35),
      new THREE.Vector3(-15, 0, -75),
      new THREE.Vector3(0, 30, -125),
    ];
    return {
      cameraPath: new THREE.CatmullRomCurve3(points),
      lookAtPath: new THREE.CatmullRomCurve3(lookAts)
    };
  }, []);

  const dummyTarget = useMemo(() => new THREE.Vector3(), []);
  const dummyLookAt = useMemo(() => new THREE.Vector3(), []);
  const currentLookAt = useMemo(() => new THREE.Vector3(0, 2, 0), []);

  useFrame((state, delta) => {
    if (!scroll) return;
    
    // Clamp offset safely between 0 and 0.99999 for CatmullRomCurve3 getPoint
    const offset = THREE.MathUtils.clamp(scroll.offset || 0, 0, 0.99999);
    
    // Get target positions along the curves
    cameraPath.getPoint(offset, dummyTarget);
    lookAtPath.getPoint(offset, dummyLookAt);

    // Frame-rate independent lerp damp factor
    const alpha = 1 - Math.exp(-8 * delta);

    // Smoothly interpolate the camera position
    state.camera.position.lerp(dummyTarget, alpha);
    
    // Smoothly interpolate the lookAt target, then apply to camera
    currentLookAt.lerp(dummyLookAt, alpha);
    state.camera.lookAt(currentLookAt);
  });

  return null;
}
