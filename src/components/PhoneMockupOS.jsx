import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './Projects';

export default function PhoneMockupOS({ onNavigate }) {
  const [activeApp, setActiveApp] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x: Math.max(-5, Math.min(5, y)), y: Math.max(-5, Math.min(5, x)) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const APPS = [
    { id: 'about', icon: '👤', label: 'About', badge: 'LVL 24' },
    { id: 'projects', icon: '🚀', label: 'Projects', badge: `${projects.length}` },
    { id: 'skills', icon: '⚡', label: 'Skills', badge: '12' },
    { id: 'games', icon: '🎮', label: 'Games', badge: '6' },
    { id: 'anime', icon: '⛩️', label: 'Anime', badge: '6' },
    { id: 'contact', icon: '✉️', label: 'Contact', badge: 'OPEN' },
  ];

  const INVENTORY_SHORTCUTS = [
    { id: 'projects', icon: '🚀' },
    { id: 'skills', icon: '⚡' },
    { id: 'games', icon: '🎮' },
    { id: 'contact', icon: '✉️' },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[340px] h-[680px] sm:w-[360px] sm:h-[700px] mx-auto select-none"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Outer Titanium Phone Shell */}
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full h-full bg-gradient-to-b from-[#3D3730] via-[#25211D] to-[#181614] rounded-[48px] p-3 border-4 border-[#524B42] shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative flex flex-col"
      >
        {/* Hardware side buttons */}
        <div className="absolute -left-[9px] top-[110px] w-[5px] h-[32px] bg-[#423C35] rounded-l border-l border-[#6B6156]" />
        <div className="absolute -left-[9px] top-[155px] w-[5px] h-[48px] bg-[#423C35] rounded-l border-l border-[#6B6156]" />
        <div className="absolute -left-[9px] top-[215px] w-[5px] h-[48px] bg-[#423C35] rounded-l border-l border-[#6B6156]" />
        <div className="absolute -right-[9px] top-[170px] w-[5px] h-[64px] bg-[#423C35] rounded-r border-r border-[#6B6156]" />

        {/* OLED Screen Screen Area */}
        <div className="w-full h-full bg-[var(--paper)] dark:bg-[#151311] rounded-[38px] overflow-hidden relative flex flex-col border border-[var(--border-color)]">
          {/* Dynamic Island Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[28px] bg-black rounded-full z-50 flex items-center justify-between px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#222]" />
          </div>

          {/* Status Bar */}
          <div className="pt-2 px-6 pb-1 flex justify-between items-center text-[10px] font-pixel text-[var(--ink-secondary)] z-40">
            <span>09:41</span>
            <div className="flex gap-1.5">
              <span>📶</span>
              <span>🔋 98%</span>
            </div>
          </div>

          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none z-30" />

          {/* Screen Content View */}
          <AnimatePresence mode="wait">
            {!activeApp ? (
              <motion.div
                key="home-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="flex-1 p-4 pt-8 overflow-y-auto space-y-4 font-body scrollbar-none"
              >
                {/* Header Banner */}
                <div className="bg-[var(--kraft)] p-3 rounded-md border-2 border-[var(--border-color)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[var(--forest)] text-white font-pixel flex items-center justify-center font-bold text-sm border border-[var(--border-color)]">
                    OS
                  </div>
                  <div>
                    <div className="font-pixel text-[11px] text-[var(--ink)]">SANKET_OS v2.4</div>
                    <div className="font-mono text-[9px] text-[var(--ink-secondary)]">React Native & Full Stack</div>
                  </div>
                </div>

                {/* Developer Status Widget (XP Bar & Streak) */}
                <div className="bg-[var(--paper-raised)] p-3 rounded-md border-2 border-[var(--border-color)] shadow-xs space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-pixel text-[10px] text-[var(--gold)]">LEVEL 24 ARCHITECT</span>
                    <span className="font-pixel text-[9px] text-[var(--emerald)]">42 DAY STREAK 🔥</span>
                  </div>
                  <div className="xp-bar-container">
                    <div className="xp-bar-fill" style={{ width: '82%' }} />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-[var(--ink-muted)]">
                    <span>XP: 8,420 / 10,000</span>
                    <span>MISSION: Cross-Platform Systems</span>
                  </div>
                </div>

                {/* App Grid */}
                <div>
                  <div className="font-pixel text-[9px] text-[var(--ink-muted)] uppercase tracking-wider mb-2 px-1">
                    INVENTORY APPS
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {APPS.map((app) => (
                      <motion.button
                        key={app.id}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setActiveApp(app.id);
                          if (onNavigate) onNavigate(app.id);
                        }}
                        className="bg-[var(--kraft)] hover:bg-[var(--kraft-dark)] border-2 border-[var(--border-color)] rounded p-2 flex flex-col items-center justify-center gap-1 transition-colors relative group"
                      >
                        {app.badge && (
                          <span className="absolute -top-1 -right-1 font-pixel text-[8px] px-1 bg-[var(--gold)] text-black font-bold rounded-xs border border-[var(--border-color)]">
                            {app.badge}
                          </span>
                        )}
                        <span className="text-xl">{app.icon}</span>
                        <span className="font-pixel text-[9px] text-[var(--ink)]">{app.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Latest Build Widget */}
                <div className="bg-[var(--paper-raised)] p-3 rounded-md border-2 border-[var(--border-color)] space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-pixel text-[9px] text-[var(--grass)] flex items-center gap-1">
                      <span>🚀</span> LATEST BUILD
                    </span>
                    <span className="pixel-badge emerald">LIVE</span>
                  </div>
                  <div className="font-heading font-bold text-sm text-[var(--ink)]">FRAP v2.3</div>
                  <p className="font-mono text-[10px] text-[var(--ink-secondary)]">
                    Real-time distance tracking & location clustering system.
                  </p>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate('projects');
                    }}
                    className="font-pixel text-[9px] text-[var(--gold)] hover:underline block text-right mt-1"
                  >
                    View Project →
                  </button>
                </div>

                {/* Pinned Shortcut Inventory Dock */}
                <div className="pt-2">
                  <div className="font-pixel text-[8px] text-[var(--ink-muted)] uppercase tracking-wider mb-1.5 text-center">
                    HOTBAR SHORTCUTS
                  </div>
                  <div className="bg-[var(--kraft)] border-2 border-[var(--border-color)] rounded-md p-1.5 flex justify-around items-center">
                    {INVENTORY_SHORTCUTS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveApp(item.id);
                          if (onNavigate) onNavigate(item.id);
                        }}
                        className="inventory-slot hover:scale-105 transition-transform"
                      >
                        <span className="text-lg">{item.icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Active App Sub-Screen */
              <motion.div
                key="active-app-view"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex-1 flex flex-col bg-[var(--paper-raised)]"
              >
                <div className="bg-[var(--kraft)] p-3 border-b-2 border-[var(--border-color)] flex justify-between items-center">
                  <button
                    onClick={() => setActiveApp(null)}
                    className="font-pixel text-xs text-[var(--wood)] font-bold hover:underline"
                  >
                    ‹ HOME
                  </button>
                  <span className="font-pixel text-xs text-[var(--ink)] uppercase">
                    {activeApp}
                  </span>
                  <div className="w-6" />
                </div>
                <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
                  <div className="p-3 bg-[var(--paper)] border border-[var(--border-color)] rounded">
                    <span className="font-pixel text-[10px] text-[var(--gold)] block mb-1">
                      SECTION: {activeApp.toUpperCase()}
                    </span>
                    <p className="text-[var(--ink-secondary)] text-[11px]">
                      Navigated to the {activeApp} section of Sanket's Portfolio!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      if (onNavigate) onNavigate(activeApp);
                    }}
                    className="btn-wood w-full text-center text-xs py-2"
                  >
                    EXPLORE FULL SECTION ↓
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Home Indicator Bar */}
          <div className="py-1.5 flex justify-center bg-[var(--paper)] dark:bg-[#151311] border-t border-[var(--border-color)]">
            <button
              onClick={() => setActiveApp(null)}
              className="w-24 h-1 bg-[var(--ink-muted)] rounded-full hover:bg-[var(--gold)] transition-colors"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
