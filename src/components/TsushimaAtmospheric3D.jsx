import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function TsushimaAtmospheric3D() {
  const { world } = useWorld();

  const leaves3D = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      depthZ: Math.random() * 600 - 300, // Z depth -300px to +300px
      size: Math.random() * 14 + 10,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      blur: Math.random() > 0.5 ? Math.random() * 4 : 0,
    }));
  }, []);

  if (world !== 'tsushima') return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[15] overflow-hidden select-none"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Volumetric Mist & Fog Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* 3D Z-Depth Falling Maple Leaves */}
      {leaves3D.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-[#B23A2E] animate-leafFall font-heading"
          style={{
            left: leaf.left,
            top: '-5%',
            fontSize: `${leaf.size}px`,
            filter: `drop-shadow(0 0 6px rgba(212,175,55,0.4)) blur(${leaf.blur}px)`,
            transform: `translateZ(${leaf.depthZ}px)`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          🍁
        </motion.div>
      ))}
    </div>
  );
}
