import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

import MessageBeacon from '../world/MessageBeacon';
// Note: Assuming these components are created elsewhere.
import SkyIsland from '../world/SkyIsland';
import KnowledgeTower from '../world/KnowledgeTower';
import CrystalGrid from '../world/CrystalGrid';
import PhonePortal from '../world/PhonePortal';
import CameraRig from './CameraRig';
import HudOverlay from './HudOverlay';

export default function VoxelWorld() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050510' }}>
      <Canvas 
        camera={{ position: [0, 8, 22], fov: 45 }}
        gl={{ antialias: false }} // Optimized for post-processing
      >
        <color attach="background" args={['#050510']} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />

        <Suspense fallback={null}>
          <Environment preset="night" />
          
          <ScrollControls pages={6} damping={0.2}>
            {/* Camera Animation */}
            {CameraRig && <CameraRig />}

            {/* World Sections */}
            {SkyIsland && <SkyIsland />}
            {KnowledgeTower && <KnowledgeTower />}
            {CrystalGrid && <CrystalGrid />}
            {PhonePortal && <PhonePortal />}
            <MessageBeacon />

            {/* 2D HUD layer */}
            <HudOverlay />
          </ScrollControls>

          {/* Post Processing for glows and atmosphere */}
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.5} 
              luminanceSmoothing={0.9} 
              intensity={1.5} 
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
