import React from 'react';
import { motion } from 'framer-motion';
import { useWorld, WORLDS } from '../context/WorldContext';

export default function WorldSwitcher() {
  const { world, setWorld } = useWorld();

  return (
    <div
      role="region"
      aria-label="Switch portfolio theme world"
      className="pointer-events-auto flex items-center bg-[var(--card-surface)]/90 backdrop-blur-md border border-[var(--card-border)] p-1 rounded-full shadow-lg transition-colors duration-400 max-w-full"
    >
      {Object.values(WORLDS).map((w) => {
        const isActive = world === w.id;
        return (
          <button
            key={w.id}
            onClick={() => setWorld(w.id)}
            aria-pressed={isActive}
            className={`relative flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-label text-[11px] sm:text-xs transition-all duration-300 ${
              isActive
                ? 'text-white font-bold shadow-md'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="world-active-bg"
                className="absolute inset-0 rounded-full bg-[var(--accent-primary)] border border-white/40 z-0 shadow-md"
                transition={{ type: 'spring', stiffness: 350, damping: 26 }}
              />
            )}
            <span className="relative z-10 text-sm sm:text-base">{w.icon}</span>
            <span className="relative z-10 hidden md:inline-block">{w.name}</span>
          </button>
        );
      })}
    </div>
  );
}
