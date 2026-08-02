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
    }, 1400);
    return () => clearTimeout(timer);
  }, [world]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key={`splash-${world}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center select-none overflow-hidden bg-black text-white"
        >
          {/* User's Exact Custom Game Splash Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{ backgroundImage: `url("${splashData.splash}")` }}
          />

          {/* Dark Overlay Tint for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/85" />

          {/* Splash Content Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg"
          >
            {/* World Symbol Icon */}
            <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/90 border-2 border-white/80 shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center text-3xl mb-4 animate-pulse">
              {splashData.icon}
            </div>

            {/* World Title */}
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-1">
              {splashData.name} <span className="text-[var(--accent-secondary)]">WORLD</span>
            </h2>

            {/* Subtitle */}
            <p className="font-pixel text-sm sm:text-base text-[var(--accent-secondary)] tracking-widest uppercase mb-5 drop-shadow-md">
              LOADING {splashData.tagline.toUpperCase()}...
            </p>

            {/* Loading Progress Bar */}
            <div className="w-60 h-2 bg-black/80 border border-white/60 rounded-full overflow-hidden shadow-lg relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-white shadow-[0_0_12px_white]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
