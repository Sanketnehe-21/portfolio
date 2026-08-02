import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* =========================================================
   1. WASHI TAPE COMPONENT
   ========================================================= */
export function Tape({ variant = 'kraft', position = 'top-left', className = '' }) {
  const styles = {
    kraft: { background: 'rgba(232, 216, 195, 0.82)', border: '1px dashed rgba(139, 94, 60, 0.4)' },
    cream: { background: 'rgba(250, 246, 238, 0.85)', border: '1px dashed rgba(140, 133, 123, 0.4)' },
    forest: { background: 'rgba(76, 175, 80, 0.35)', border: '1px dashed rgba(46, 125, 50, 0.5)' },
    gold: { background: 'rgba(229, 169, 60, 0.4)', border: '1px dashed rgba(184, 134, 11, 0.5)' },
  };

  const posClasses = {
    'top-left': 'top-[-10px] left-[16px] -rotate-6',
    'top-right': 'top-[-10px] right-[16px] rotate-6',
    'top-center': 'top-[-12px] left-[40%] -rotate-2',
    'bottom-left': 'bottom-[-10px] left-[16px] rotate-3',
    'bottom-right': 'bottom-[-10px] right-[16px] -rotate-3',
  };

  return (
    <div
      className={`absolute h-[24px] w-[86px] z-20 pointer-events-none ${posClasses[position] || ''} ${className}`}
      style={styles[variant] || styles.kraft}
      aria-hidden="true"
    />
  );
}

/* =========================================================
   2. STICKY NOTE COMPONENT ("Currently Working On")
   ========================================================= */
export function StickyNote() {
  const tasks = [
    { title: 'Portfolio OS v2.0', status: 'In Progress 🚀' },
    { title: 'React Native Architecture', status: 'Active 📱' },
    { title: 'AI Agent Workflows', status: 'Learning 🧠' },
    { title: 'Elden Ring DLC Run', status: 'Side Quest ⚔️' },
  ];

  return (
    <motion.div
      whileHover={{ rotate: 1, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative bg-[#FFF9C4] dark:bg-[#33301C] text-[#332F1A] dark:text-[#FFF5C0] p-5 rounded-sm border-2 border-[#D4C857] dark:border-[#595325] shadow-md max-w-xs rotate-[-2deg]"
    >
      <Tape variant="cream" position="top-center" />
      <div className="font-pixel text-xs text-[#8A7B10] dark:text-[#E2D563] uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <span>📌</span> CURRENTLY WORKING ON
      </div>
      <ul className="space-y-2 text-xs font-mono">
        {tasks.map((t, idx) => (
          <li key={idx} className="flex items-center justify-between border-b border-dashed border-[#E5DB76] dark:border-[#544E20] pb-1.5">
            <span className="font-medium">{t.title}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FFF494] dark:bg-[#4A441B] font-pixel">
              {t.status}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* =========================================================
   3. POLAROID PHOTO COMPONENT
   ========================================================= */
export function Polaroid() {
  return (
    <motion.div
      whileHover={{ rotate: -2, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className="relative bg-[#FAFAF7] dark:bg-[#24211D] p-3 pb-5 rounded-sm border-2 border-[#E2DDD5] dark:border-[#3D3730] shadow-lg max-w-[240px] rotate-[3deg]"
    >
      <Tape variant="gold" position="top-right" />
      <div className="w-full h-[200px] bg-[#1E1B18] rounded-xs overflow-hidden relative border border-[#3A352F] flex flex-col items-center justify-center text-center p-4">
        {/* Stylized Pixel Avatar / Graphic */}
        <div className="w-20 h-20 rounded-full border-2 border-[#E5A93C] bg-gradient-to-br from-[#8B5E3C] to-[#2E7D32] flex items-center justify-center text-2xl font-pixel text-[#FAF6EE] shadow-inner mb-3">
          SN
        </div>
        <div className="font-pixel text-[11px] text-[#E5A93C]">LEVEL 24 ARCHITECT</div>
        <div className="font-mono text-[10px] text-[#A79C89] mt-1">React Native & Full Stack</div>
      </div>
      <div className="mt-3 text-center">
        <p className="font-heading italic text-sm text-[#2C2824] dark:text-[#E8E2D8]">
          "Building ideas into high-performance products."
        </p>
        <span className="font-pixel text-[9px] text-[#888278] uppercase tracking-widest block mt-1">
          EST. 2024 · MUMBAI, IN
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   4. NOTEBOOK CHECKLIST ("Today's Quest")
   ========================================================= */
export function NotebookChecklist() {
  const [items, setItems] = useState([
    { id: 1, text: 'Ship Production React Native Build', done: true },
    { id: 2, text: 'Optimize Firestore Real-time Sync', done: true },
    { id: 3, text: 'Craft Crafting-Table UI Components', done: true },
    { id: 4, text: 'Drink 2 Cups of Fresh Coffee ☕', done: false },
  ]);

  const toggle = (id) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it))
    );
  };

  return (
    <div className="relative bg-[var(--paper-raised)] p-5 rounded border-2 border-[var(--border-color)] shadow-md max-w-sm">
      <Tape variant="forest" position="top-left" />
      <div className="flex items-center justify-between border-b-2 border-dashed border-[var(--border-color)] pb-2 mb-3">
        <span className="font-pixel text-xs text-[var(--grass)] uppercase flex items-center gap-1.5">
          <span>⚔️</span> TODAY'S QUEST
        </span>
        <span className="font-mono text-[10px] text-[var(--ink-muted)]">
          {items.filter((i) => i.done).length} / {items.length} COMPLETE
        </span>
      </div>

      <div className="space-y-2.5 font-body text-xs">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div
              className={`w-4 h-4 rounded-xs border-2 flex items-center justify-center font-pixel text-[10px] transition-colors ${
                item.done
                  ? 'bg-[var(--forest)] border-[var(--forest)] text-white'
                  : 'border-[var(--border-color)] group-hover:border-[var(--gold)]'
              }`}
            >
              {item.done ? '✓' : ''}
            </div>
            <span
              className={`${
                item.done ? 'line-through text-[var(--ink-muted)]' : 'text-[var(--ink)]'
              } transition-colors`}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   5. PINNED NOTE COMPONENT
   ========================================================= */
export function PinnedNote({ title, content, badge }) {
  return (
    <div className="relative bg-[var(--kraft)] text-[var(--ink)] p-4 rounded border-2 border-[var(--border-color)] shadow-md">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-2 border-red-900 shadow-sm z-20" />
      <div className="flex items-center justify-between mb-1">
        <span className="font-pixel text-[10px] uppercase text-[var(--wood)] font-bold">{title}</span>
        {badge && <span className="pixel-badge emerald">{badge}</span>}
      </div>
      <p className="font-body text-xs text-[var(--ink-secondary)] leading-relaxed">{content}</p>
    </div>
  );
}
