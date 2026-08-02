import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Tape({ variant = 'kraft', position = 'top-left' }) {
  const positionClasses = {
    'top-left': '-top-3 -left-3 -rotate-12',
    'top-right': '-top-3 -right-3 rotate-12',
    'bottom-left': '-bottom-3 -left-3 rotate-6',
    'bottom-right': '-bottom-3 -right-3 -rotate-6',
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} w-16 h-6 z-20 pointer-events-none select-none`}
      style={{
        background: variant === 'gold' ? 'rgba(255,215,0,0.45)' : 'rgba(235,225,200,0.65)',
        border: '1px dashed rgba(0,0,0,0.2)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
      }}
    />
  );
}

export function Polaroid() {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: 1 }}
      className="theme-card p-4 pb-6 w-full max-w-[280px] mx-auto"
    >
      <Tape variant="gold" position="top-right" />
      <div className="w-full h-48 bg-black/80 border-2 border-[var(--border-color)] rounded relative overflow-hidden flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)] text-white font-label font-bold flex items-center justify-center text-xl shadow-lg border-2 border-white mb-2">
          SN
        </div>
        <div className="font-heading text-lg font-bold text-white">Sanket Nehe</div>
        <div className="font-label text-xs text-[var(--accent-secondary)] font-semibold">REACT NATIVE ARCHITECT</div>
      </div>
      <div className="mt-3 text-center">
        <div className="font-label text-xs font-bold text-[#FFD700]">BUILDER PORTRAIT</div>
        <div className="font-mono text-[10px] text-[var(--text-secondary)] mt-0.5">LEVEL 24 · MUMBAI, INDIA</div>
      </div>
    </motion.div>
  );
}

export function StickyNote() {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotate: -1 }}
      className="theme-card p-5 w-full relative"
    >
      <Tape variant="kraft" position="top-left" />
      <div className="font-label text-xs text-[#FFD700] uppercase font-bold tracking-wider mb-2 flex items-center justify-between border-b border-dashed border-[var(--border-color)]/60 pb-1.5">
        <span>📌 CURRENT FOCUS</span>
        <span className="pixel-badge emerald">ACTIVE</span>
      </div>
      <h4 className="font-heading font-bold text-lg text-white mb-1">
        Building Mobile Apps
      </h4>
      <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
        Engineering production React Native apps @ Binnys Management with offline-first Firestore sync.
      </p>
    </motion.div>
  );
}

export function NotebookChecklist() {
  const [items, setItems] = useState([
    { text: 'Optimize Firestore sync speed', done: true },
    { text: 'Publish rn-whiteboard-kit v2', done: true },
    { text: 'Build Multi-World Portfolio', done: true },
    { text: 'Explore Native TurboModules', done: false },
  ]);

  const toggleItem = (index) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, done: !item.done } : item))
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="theme-card p-5 w-full relative"
    >
      <Tape variant="gold" position="top-right" />
      <div className="font-label text-xs text-[#FFD700] uppercase font-bold tracking-wider mb-3 border-b border-dashed border-[var(--border-color)]/60 pb-1.5 flex justify-between items-center">
        <span>📋 TODAY'S QUESTS</span>
        <span className="font-mono text-[10px] text-[var(--text-secondary)]">[3 / 4 DONE]</span>
      </div>
      <ul className="space-y-2.5 font-body text-xs">
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={() => toggleItem(idx)}
            className="flex items-center gap-2.5 cursor-pointer text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            <div
              className={`w-4 h-4 rounded border-2 flex items-center justify-center text-[10px] font-bold ${
                item.done
                  ? 'bg-[var(--accent-primary)] border-white text-white'
                  : 'border-[var(--border-color)] bg-black/60'
              }`}
            >
              {item.done ? '✓' : ''}
            </div>
            <span className={item.done ? 'line-through opacity-80' : 'font-semibold'}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function PinnedNote({ title, badge, content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="theme-card p-5 w-full relative"
    >
      <div className="flex justify-between items-center mb-2 border-b border-dashed border-[var(--border-color)]/60 pb-1.5">
        <span className="font-label text-xs font-bold text-[#FFD700] uppercase">{title}</span>
        {badge && <span className="pixel-badge gold">{badge}</span>}
      </div>
      <p className="font-body text-xs text-[var(--text-secondary)] leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
