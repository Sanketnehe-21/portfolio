import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MinecraftAchievementToast({ sectionName }) {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (sectionName && sectionName !== 'hero') {
      setTitle(sectionName.toUpperCase());
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(t);
    }
  }, [sectionName]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="mc-achievement-toast"
        >
          <div className="w-8 h-8 rounded bg-[#5FBF4A] border border-[#5C4B2A] flex items-center justify-center text-lg text-white font-pixel">
            🏆
          </div>
          <div>
            <div className="text-[10px] text-[#E8A33D] uppercase tracking-wider font-bold">
              ACHIEVEMENT UNLOCKED!
            </div>
            <div className="text-sm font-bold text-[#F5E6C8]">
              Discovered {title} Section
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
