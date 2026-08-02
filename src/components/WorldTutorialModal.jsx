import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function WorldTutorialModal() {
  const { world, activeWorldConfig } = useWorld();
  const [isOpen, setIsOpen] = useState(false);

  const getTutorialContent = () => {
    switch (world) {
      case 'minecraft':
        return {
          title: 'MINECRAFT WORLD TUTORIAL',
          icon: '⛏️',
          badge: 'VOXEL & 3D PHYSICS',
          steps: [
            {
              icon: '💥',
              label: '3D Block Mining & Shatter Physics',
              desc: 'Click and HOLD any project card or inventory slot for 1.2s to mine it. Watch the block shatter into 3D tumbling voxel cubes before respawning!',
            },
            {
              icon: '🛠️',
              label: '3D Hero Crafting Matrix',
              desc: 'Click Recipe 01, 02, or 03 in the Hero Crafting Table to synthesize React Native materials into crafted production apps.',
            },
            {
              icon: '🎒',
              label: '9-Slot Inventory Hotbar',
              desc: 'Navigate the site using the 9-slot Minecraft hotbar anchored at the bottom of your screen.',
            },
          ],
        };

      case 'gta':
        return {
          title: 'LOS SANTOS (GTA V) TUTORIAL',
          icon: '🏎️',
          badge: 'LUXURY GLASS & NEON',
          steps: [
            {
              icon: '🎯',
              label: '3D Glass Parallax & Specular Glare',
              desc: 'Move your cursor over project cards to trigger real-time 3D tilt perspective and dynamic specular glare reflections.',
            },
            {
              icon: '🔫',
              label: 'Interactive Shooting Mechanic',
              desc: 'Click anywhere on the screen or cards to fire gunshots, leaving glowing neon bullet holes and muzzle sparks.',
            },
            {
              icon: '📍',
              label: 'Live GPS Minimap Radar',
              desc: 'Track your exact scroll progress down the page using the animated GPS radar in the bottom-left corner.',
            },
          ],
        };

      case 'tsushima':
      default:
        return {
          title: 'GHOST OF TSUSHIMA TUTORIAL',
          icon: '⚔️',
          badge: 'PARCHMENT & KATANA',
          steps: [
            {
              icon: '🗡️',
              label: 'Katana Blade Slicing Trail',
              desc: 'Click and drag your mouse across the screen to slice glowing crimson Katana blade streaks through the air.',
            },
            {
              icon: '🍁',
              label: '3D Z-Depth Volumetric Leaves',
              desc: 'Watch red maple leaves drift along real 3D depth space with parallax focus and atmospheric mist fog.',
            },
            {
              icon: '📜',
              label: 'Guiding Wind & Parchment Scrolls',
              desc: 'Explore handcrafted parchment cards, crimson samurai stamps, and traditional calligraphy haiku banners.',
            },
          ],
        };
    }
  };

  const content = getTutorialContent();

  return (
    <>
      {/* Floating Tutorial Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="pointer-events-auto fixed bottom-5 right-5 z-[100] flex items-center gap-2 bg-[var(--card-surface)] border-2 border-[var(--card-border)] px-3.5 py-2 rounded-full shadow-[0_0_20px_var(--card-glow)] font-label text-xs font-bold text-white hover:scale-105 transition-transform"
        aria-label="Open Game World Tutorial Guide"
      >
        <span className="text-base animate-pulse">❓</span>
        <span className="hidden sm:inline-block">HOW TO PLAY</span>
      </button>

      {/* Onboarding Tutorial Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="theme-card max-w-lg w-full p-6 sm:p-8 relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-300 hover:text-white font-bold text-lg p-1"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-dashed border-[var(--card-border)] pb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)] border-2 border-white flex items-center justify-center text-2xl shadow-lg">
                  {content.icon}
                </div>
                <div>
                  <div className="font-label text-[10px] text-[#FFD700] uppercase font-bold tracking-wider">
                    {content.badge}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                    {content.title}
                  </h3>
                </div>
              </div>

              {/* Step Items */}
              <div className="space-y-4 mb-6">
                {content.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3.5 p-3.5 bg-black/60 border border-[var(--card-border)]/60 rounded-lg shadow-sm"
                  >
                    <span className="text-2xl flex-shrink-0">{step.icon}</span>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#FFD700] mb-0.5">
                        {step.label}
                      </h4>
                      <p className="font-body text-xs text-slate-200 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dismiss CTA */}
              <button
                onClick={() => setIsOpen(false)}
                className="btn-wood w-full py-3 text-center text-sm font-bold"
              >
                LET'S PLAY 🚀
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
