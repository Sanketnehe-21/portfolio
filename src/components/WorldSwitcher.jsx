import React from 'react';
import { motion } from 'framer-motion';
import { useWorld, WORLDS } from '../context/WorldContext';

export default function WorldSwitcher() {
  const { world, setWorld } = useWorld();

  return (
    <div
      role="region"
      aria-label="Switch portfolio theme world"
      className="pointer-events-auto flex items-center bg-[var(--kraft)]/90 backdrop-blur-md border-2 border-[var(--border-color)] p-1 rounded-full shadow-lg"
    >
      {Object.values(WORLDS).map((w) => {
        const isActive = world === w.id;
        return (
          <button
            key={w.id}
            onClick={() => setWorld(w.id)}
            aria-pressed={isActive}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full font-pixel text-xs transition-all duration-300 ${
              isActive
                ? 'text-white font-bold shadow-md'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="world-active-bg"
                className="absolute inset-0 rounded-full bg-[var(--wood)] border border-[var(--border-color)] z-0"
                transition={{ type: 'spring', stiffness: 350, damping: 26 }}
              />
            )}
            <span className="relative z-10 text-base">{w.icon}</span>
            <span className="relative z-10 hidden sm:inline-block">{w.name}</span>
          </button>
        );
      })}
    </div>
  );
}
