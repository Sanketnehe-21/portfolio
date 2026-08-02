import React from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

const TECH_STACK = [
  { name: 'React Native', cat: 'MOBILE', exp: 'LVL 95', icon: '📱', rarity: 'diamond' },
  { name: 'Expo', cat: 'MOBILE', exp: 'LVL 90', icon: '🚀', rarity: 'emerald' },
  { name: 'TypeScript', cat: 'LANG', exp: 'LVL 88', icon: '🟦', rarity: 'emerald' },
  { name: 'Node.js', cat: 'BACKEND', exp: 'LVL 85', icon: '🟢', rarity: 'gold' },
  { name: 'Firebase', cat: 'CLOUD', exp: 'LVL 92', icon: '🔥', rarity: 'diamond' },
  { name: 'MongoDB', cat: 'DATABASE', exp: 'LVL 80', icon: '🍃', rarity: 'gold' },
  { name: 'AWS', cat: 'CLOUD', exp: 'LVL 78', icon: '☁️', rarity: 'gold' },
  { name: 'Tailwind CSS', cat: 'STYLING', exp: 'LVL 94', icon: '🎨', rarity: 'diamond' },
  { name: 'Git', cat: 'OPS', exp: 'LVL 90', icon: '🌿', rarity: 'emerald' },
  { name: 'Docker', cat: 'OPS', exp: 'LVL 75', icon: '🐳', rarity: 'gold' },
  { name: 'Framer Motion', cat: 'ANIMATION', exp: 'LVL 88', icon: '✨', rarity: 'emerald' },
  { name: 'GSAP', cat: 'ANIMATION', exp: 'LVL 82', icon: '⚡', rarity: 'gold' },
];

export default function TechStackSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="skills">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span>🎒</span> INVENTORY & TECH STACK
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
            Collectible Skill Badges
          </h2>
          <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
            Production tools and frameworks mastered across mobile, backend, and frontend engineering.
          </p>
        </div>

        {/* Inventory Table Frame (Minecraft Crafting / Inventory Style) */}
        <div className="bg-[var(--kraft)] border-4 border-[var(--border-color)] p-6 sm:p-8 rounded-md shadow-lg relative w-full">
          <Tape variant="cream" position="top-left" />
          <Tape variant="forest" position="top-right" />

          <div className="font-pixel text-xs sm:text-sm text-[var(--wood)] uppercase tracking-wider mb-6 border-b-2 border-dashed border-[var(--border-color)] pb-3 flex justify-between items-center">
            <span>INVENTORY SLOTS [12 / 12]</span>
            <span className="text-[10px] text-[var(--ink-muted)]">HOVER TO INSPECT BADGE</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -6, rotate: -1, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-4 rounded shadow-sm flex flex-col justify-between cursor-pointer group w-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="w-9 h-9 rounded bg-[var(--kraft)] border border-[var(--border-color)] flex items-center justify-center text-lg">
                    {tech.icon}
                  </div>
                  <span className={`pixel-badge ${tech.rarity}`}>{tech.exp}</span>
                </div>

                <div>
                  <div className="font-pixel text-[9px] text-[var(--ink-muted)] uppercase mb-0.5">
                    {tech.cat}
                  </div>
                  <h4 className="font-body font-bold text-xs sm:text-sm text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
