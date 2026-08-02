import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CRAFTING_RECIPES = [
  {
    id: 'mobile-apps',
    name: 'Production Mobile Apps',
    inputs: ['📱 React Native', '⚡ Expo', '🔥 Firebase'],
    result: 'Urban Hive & 4 Live Apps',
    desc: 'Crafted 5 Play Store apps with real-time offline sync.',
    rarity: 'emerald',
    icon: '📱',
  },
  {
    id: 'npm-kit',
    name: 'Whiteboard npm Kit',
    inputs: ['📦 npm', '🎨 Canvas', '⚡ Expo'],
    result: 'rn-whiteboard-kit',
    desc: 'Published open-source React Native drawing canvas library.',
    rarity: 'gold',
    icon: '📦',
  },
  {
    id: 'logistics',
    name: 'Live Agent Logistics',
    inputs: ['🗺️ Maps API', '⚡ REST API', '🌐 Web/Mobile'],
    result: 'Agent Tracking Platform',
    desc: 'Real-time task dispatch & agent location clustering.',
    rarity: 'diamond',
    icon: '🗺️',
  },
];

export default function HeroCraftingStructure() {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);
  const recipe = CRAFTING_RECIPES[activeRecipeIndex];

  return (
    <div className="relative w-full max-w-[460px] mx-auto select-none py-2 px-1">
      {/* Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-[var(--border-color)]/20 rounded-full blur-2xl opacity-80 pointer-events-none" />

      {/* Main 3D Floating Crafting Table Structure */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-[var(--card-surface)] border-2 border-[var(--border-color)] rounded-xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white backdrop-blur-md w-full"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-dashed border-[var(--border-color)]/60 pb-3 mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl animate-pulse">🛠️</span>
            <span className="font-label text-xs sm:text-sm text-[#FFD700] uppercase font-bold tracking-wider">
              CRAFTING TABLE v2.4
            </span>
          </div>
          <span className={`pixel-badge ${recipe.rarity}`}>
            LEVEL 24 FORGE
          </span>
        </div>

        {/* 3x3 Crafting Grid Matrix */}
        <div className="bg-black/60 border border-[var(--border-color)]/80 p-3 sm:p-4 rounded-lg mb-4 shadow-inner">
          <div className="font-label text-[10px] sm:text-xs text-[#FFD700] uppercase mb-3 flex justify-between font-semibold">
            <span>INPUT MATERIAL SLOTS</span>
            <span>RESULT OUTPUT →</span>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-3">
            {/* 3 Input Slots */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
              {recipe.inputs.map((input, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08 }}
                  className="inventory-slot w-10 h-10 sm:w-13 sm:h-13 text-center cursor-pointer border-2 border-[var(--border-color)] bg-black/80 flex items-center justify-center rounded shadow-sm"
                  title={input}
                >
                  <span className="text-sm sm:text-base">{input.split(' ')[0]}</span>
                </motion.div>
              ))}
            </div>

            {/* Equals Symbol */}
            <div className="font-label text-lg sm:text-xl text-[#FFD700] font-bold animate-pulse px-0.5 sm:px-1">
              =
            </div>

            {/* Output Slot */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inventory-slot w-13 h-13 sm:w-16 sm:h-16 bg-black/90 border-2 border-[#FFD700] flex flex-col items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.4)] rounded-lg flex-shrink-0"
            >
              <span className="text-xl sm:text-2xl">{recipe.icon}</span>
              <span className="font-label text-[8px] sm:text-[9px] text-[#FFD700] font-bold mt-0.5">CRAFTED</span>
            </motion.div>
          </div>
        </div>

        {/* Recipe Output Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-black/70 border border-[var(--border-color)]/80 p-3 sm:p-4 rounded-lg space-y-1.5 shadow-md"
          >
            <div className="flex justify-between items-center flex-wrap gap-1">
              <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                {recipe.name}
              </h4>
              <span className="font-label text-xs text-[#FFD700] font-bold">
                {recipe.result}
              </span>
            </div>
            <p className="font-body text-xs text-slate-200 leading-relaxed">
              {recipe.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Recipe Buttons */}
        <div className="mt-4 pt-3 border-t border-dashed border-[var(--border-color)]/60 flex justify-between items-center gap-2 flex-wrap">
          <span className="font-label text-[10px] sm:text-xs text-[#FFD700] font-semibold uppercase">
            SELECT RECIPE:
          </span>
          <div className="flex gap-1.5 sm:gap-2">
            {CRAFTING_RECIPES.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActiveRecipeIndex(i)}
                className={`font-label text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md border font-bold transition-all ${
                  activeRecipeIndex === i
                    ? 'bg-[var(--accent-primary)] text-white border-white scale-105 shadow-md'
                    : 'bg-black/60 text-slate-300 border-[var(--border-color)]/60 hover:bg-black/90'
                }`}
              >
                RECIPE 0{i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Status Indicators */}
        <div className="mt-4 flex justify-between sm:justify-around items-center pt-2 font-mono text-[10px] sm:text-xs text-slate-200 flex-wrap gap-1">
          <span className="flex items-center gap-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#6FD66F] animate-ping" />
            LIVE SYNCS
          </span>
          <span className="flex items-center gap-1 font-semibold text-[#FFD700]">
            ⚡ 60% FASTER DATA
          </span>
          <span className="flex items-center gap-1 font-semibold">
            ⚔️ 100% CLEAN UX
          </span>
        </div>
      </motion.div>
    </div>
  );
}
