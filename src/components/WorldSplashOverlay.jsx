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
    }, 1200);
    return () => clearTimeout(timer);
  }, [world]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key={`splash-${world}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[2000] flex flex-col items-center justify-center select-none overflow-hidden bg-black text-white"
        >
          {/* Full Screen Background Wallpaper */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat filter brightness-75 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url("${splashData.bg}")` }}
          />

          {/* Dark Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/90" />

          {/* Content Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg"
          >
            {/* World Symbol Icon */}
            <div className="w-20 h-20 rounded-full bg-[var(--accent-primary)]/80 border-4 border-white/80 shadow-[0_0_40px_rgba(255,255,255,0.4)] flex items-center justify-center text-4xl mb-4 animate-bounce">
              {splashData.icon}
            </div>

            {/* World Title */}
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-wider text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] mb-1">
              {splashData.name} <span className="text-[var(--accent-secondary)]">WORLD</span>
            </h2>

            {/* Subtitle / Tagline */}
            <p className="font-pixel text-base sm:text-lg text-[var(--accent-secondary)] tracking-widest uppercase mb-6 drop-shadow-md">
              LOADING {splashData.tagline.toUpperCase()}...
            </p>

            {/* Cinematic Progress Bar */}
            <div className="w-64 h-2.5 bg-black/80 border-2 border-white/60 rounded-full overflow-hidden shadow-lg relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-white shadow-[0_0_12px_white]"
              />
            </div>

            <div className="font-mono text-[10px] text-white/70 mt-3 tracking-widest">
              INITIALIZING GAME THEME & ASSETS
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
