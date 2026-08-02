import React from 'react';
import { EffectComposer, Bloom, Vignette, ToneMapping } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

export function PostProcessing() {
  return (
    <EffectComposer disableNormalPass>
      <Bloom 
        luminanceThreshold={0.6}
        intensity={1.2}
        radius={0.8}
        mipmapBlur
      />
      <Vignette 
        offset={0.3}
        darkness={0.7}
        blendFunction={BlendFunction.NORMAL}
      />
      <ToneMapping />
    </EffectComposer>
  );
}
