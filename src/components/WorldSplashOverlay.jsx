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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[2000] select-none overflow-hidden bg-black"
        >
          {/* Pure Full-Screen Splash Image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${splashData.splash}")` }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
