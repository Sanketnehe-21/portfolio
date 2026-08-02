import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

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
    <div className="relative w-full max-w-[460px] mx-auto select-none py-4">
      {/* Background Ambient Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[var(--gold)]/10 via-[var(--emerald)]/10 to-[var(--diamond-blue)]/10 rounded-full blur-2xl opacity-70 pointer-events-none" />

      {/* Main 3D Floating Crafting Table Structure */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-[var(--kraft)] border-4 border-[var(--border-color)] rounded-lg p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-[var(--ink)] overflow-hidden"
      >
        <Tape variant="gold" position="top-left" />
        <Tape variant="forest" position="top-right" />

        {/* Top Bar Header */}
        <div className="flex justify-between items-center border-b-2 border-dashed border-[var(--border-color)] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl animate-pulse">🛠️</span>
            <span className="font-pixel text-xs text-[var(--wood)] uppercase font-bold tracking-wider">
              CRAFTING TABLE v2.4
            </span>
          </div>
          <span className={`pixel-badge ${recipe.rarity}`}>
            LEVEL 24 FORGE
          </span>
        </div>

        {/* Interactive 3x3 Crafting Grid Matrix */}
        <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-4 rounded-md mb-4 relative shadow-inner">
          <div className="font-pixel text-[9px] text-[var(--ink-muted)] uppercase mb-2 flex justify-between">
            <span>INPUT MATERIAL SLOTS</span>
            <span>RESULT OUTPUT →</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            {/* 3 Input Slots */}
            <div className="grid grid-cols-3 gap-2">
              {recipe.inputs.map((input, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  className="inventory-slot w-12 h-12 text-xs font-mono font-bold text-[var(--ink)] text-center cursor-pointer"
                  title={input}
                >
                  <span className="text-sm">{input.split(' ')[0]}</span>
                </motion.div>
              ))}
            </div>

            {/* Equals Arrow */}
            <div className="font-pixel text-lg text-[var(--gold)] font-bold animate-pulse">
              =
            </div>

            {/* Output Slot */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="inventory-slot w-16 h-16 bg-[var(--kraft-dark)] border-3 border-[var(--gold)] flex flex-col items-center justify-center cursor-pointer shadow-md"
            >
              <span className="text-2xl">{recipe.icon}</span>
              <span className="font-pixel text-[8px] text-[var(--gold)] mt-0.5">CRAFTED</span>
            </motion.div>
          </div>
        </div>

        {/* Crafted Result Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-3.5 rounded-md space-y-1.5 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-heading font-bold text-base text-[var(--ink)]">
                {recipe.name}
              </h4>
              <span className="font-mono text-[10px] text-[var(--gold)] font-semibold">
                {recipe.result}
              </span>
            </div>
            <p className="font-body text-xs text-[var(--ink-secondary)] leading-relaxed">
              {recipe.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Recipe Selection Tabs */}
        <div className="mt-4 pt-3 border-t border-dashed border-[var(--border-color)] flex justify-between items-center gap-2">
          <span className="font-pixel text-[9px] text-[var(--ink-muted)] uppercase">
            SELECT RECIPE:
          </span>
          <div className="flex gap-1.5">
            {CRAFTING_RECIPES.map((r, i) => (
              <button
                key={r.id}
                onClick={() => setActiveRecipeIndex(i)}
                className={`font-pixel text-[9px] px-2 py-1 rounded border transition-all ${
                  activeRecipeIndex === i
                    ? 'bg-[var(--wood)] text-[#FAF6EE] border-[#3A2313] scale-105 shadow-xs'
                    : 'bg-[var(--paper)] text-[var(--ink-secondary)] border-[var(--border-color)] hover:bg-[var(--kraft-dark)]'
                }`}
              >
                RECIPE 0{i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Orbiting Floating Badges */}
        <div className="mt-4 flex justify-around items-center pt-2 font-mono text-[10px] text-[var(--ink-muted)]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--grass)] animate-ping" />
            LIVE SYNCS
          </span>
          <span className="flex items-center gap-1">
            <span>⚡</span> 60% FASTER DATA
          </span>
          <span className="flex items-center gap-1">
            <span>⚔️</span> 100% CLEAN UX
          </span>
        </div>
      </motion.div>
    </div>
  );
}
