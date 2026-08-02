import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function WorldSplashOverlay() {
  const { world, activeWorldConfig } = useWorld();
  const [showSplash, setShowSplash] = useState(false);
  const [splashData, setSplashData] = useState(activeWorldConfig);

  useEffect(() => {
    setSplashData(activeWorldConfig);
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, [world]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key={`splash-${world}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[2000] select-none overflow-hidden bg-black"
        >
          {/* Animated Full-Screen Splash Image */}
          <motion.div
            initial={{ scale: 1.15, filter: 'blur(12px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            exit={{ scale: 0.95, filter: 'blur(8px)', opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: `url("${splashData.splash}")` }}
          />

          {/* Subtle Flash Lens Flare Shimmer Effect */}
          <motion.div
            initial={{ x: '-100%', opacity: 0.6 }}
            animate={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
