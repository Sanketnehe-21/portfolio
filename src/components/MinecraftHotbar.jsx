import React from 'react';
import { motion } from 'framer-motion';

export default function MinecraftHotbar({ onNavigate, activeSection }) {
  const SLOTS = [
    { id: 'hero', icon: '🏰', label: 'Spawn' },
    { id: 'about', icon: '👤', label: 'About' },
    { id: 'projects', icon: '🗡️', label: 'Projects' },
    { id: 'experience', icon: '⚖️', label: 'Quests' },
    { id: 'skills', icon: '🧪', label: 'XP' },
    { id: 'games', icon: '🎮', label: 'Games' },
    { id: 'anime', label: 'Anime', icon: '⛩️' },
    { id: 'contact', icon: '✉️', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      exit={{ y: 80 }}
      className="mc-hotbar"
      role="navigation"
      aria-label="Minecraft 9-slot navigation hotbar"
    >
      {SLOTS.map((slot) => {
        const isActive = activeSection === slot.id;
        return (
          <button
            key={slot.id}
            onClick={() => onNavigate(slot.id)}
            className={`mc-slot ${isActive ? 'active' : ''}`}
            title={slot.label}
          >
            <span className="text-xl">{slot.icon}</span>
            {isActive && (
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#5FBF4A] shadow-[0_0_8px_#5FBF4A]" />
            )}
          </button>
        );
      })}
    </motion.div>
  );
}
