import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function ParallaxGlassCard({ children, className = '' }) {
  const { world } = useWorld();
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // 10deg max tilt
    const rotateY = ((x - centerX) / centerX) * 10;

    setRot({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.3,
    });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="w-full h-full" style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rot.x,
          rotateY: rot.y,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`theme-card ${className} relative overflow-hidden`}
      >
        {/* GTA Specular Glare Sheen Layer */}
        {world === 'gta' && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.3) 0%, rgba(0, 240, 255, 0.15) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Inner Content Wrapper */}
        <div className="w-full h-full flex flex-col justify-between relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
