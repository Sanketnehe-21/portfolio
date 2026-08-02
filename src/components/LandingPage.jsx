import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorldProvider, useWorld, WORLDS } from '../context/WorldContext';
import WorldParticles from './WorldParticles';
import WorldSwitcher from './WorldSwitcher';
import { Tape, StickyNote, Polaroid, NotebookChecklist, PinnedNote } from './ScrapbookComponents';
import HeroCraftingStructure from './HeroCraftingStructure';
import Projects from './Projects';
import TechStackSection from './TechStackSection';
import GamesSection from './GamesSection';
import AnimeSection from './AnimeSection';
import AboutExperience from './AboutExperience';
import Contact from './Contact';
import Footer from './Footer';

function PortfolioMain() {
  const { world, activeWorldConfig } = useWorld();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NAV_ITEMS = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '🗡️' },
    { id: 'experience', label: 'Experience', icon: '⚖️' },
    { id: 'skills', label: 'SkiLLs', icon: '🧪' },
    { id: 'games', label: 'Games', icon: '🎮' },
    { id: 'anime', label: 'Anime', icon: '⛩️' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  return (
    <div className="w-full min-h-screen bg-[var(--paper)] text-[var(--ink)] font-body relative selection:bg-[var(--gold)] selection:text-black overflow-x-hidden">
      {/* -------------------------------------------------- */}
      {/* WORLD WALLPAPER BACKGROUND & OVERLAY              */}
      {/* -------------------------------------------------- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={world}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="world-bg-wallpaper"
          style={{ backgroundImage: `url("${activeWorldConfig.bg}")` }}
        />
      </AnimatePresence>
      <div className="world-overlay" />

      {/* Ambient Particle Layer */}
      <WorldParticles />

      {/* -------------------------------------------------- */}
      {/* TOP NAVIGATION — MULTI-WORLD HEADER               */}
      {/* -------------------------------------------------- */}
      <header className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8 w-full flex items-center justify-between pointer-events-none">
        {/* Left Brand Badge */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[var(--kraft)]/90 backdrop-blur-md border-2 border-[var(--border-color)] px-3.5 py-1.5 rounded-full shadow-lg">
          <div className="w-7 h-7 rounded-full bg-[var(--wood)] text-[#FAF6EE] font-pixel font-bold flex items-center justify-center border border-[var(--border-color)] text-xs">
            {activeWorldConfig.symbol}
          </div>
          <span className="font-heading font-bold text-sm text-[var(--ink)] tracking-tight">
            SANKET<span className="text-[var(--gold)]">.</span>NEHE
          </span>
        </div>

        {/* Center: Handcrafted Torn Paper Strip Nav */}
        <div className="pointer-events-auto torn-paper-nav px-6 sm:px-8 py-2 relative flex items-center justify-center">
          <div className="ribbon-bookmark">
            <div className="ribbon-pin" />
          </div>

          <nav className="flex items-center gap-2 sm:gap-5 font-pixel text-xs sm:text-sm text-[#2C261F] overflow-x-auto scrollbar-none">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-black/10 transition-all whitespace-nowrap font-bold hover:scale-105"
              >
                <span className="text-base sm:text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right: World Switcher Control */}
        <WorldSwitcher />
      </header>

      {/* -------------------------------------------------- */}
      {/* HERO SECTION                                      */}
      {/* -------------------------------------------------- */}
      <section className="w-full min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 md:px-12 lg:px-20 flex items-center relative z-20 overflow-hidden" id="hero">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="pixel-badge emerald">{activeWorldConfig.name.toUpperCase()} WORLD</span>
              <span className="font-pixel text-xs text-[var(--ink-muted)]">LEVEL 24 ARCHITECT</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--ink)] leading-[1.08]">
              Crafting <span className="text-[var(--gold)] italic">Next-Gen</span> Experiences
            </h1>

            <p className="font-pixel text-sm sm:text-base text-[var(--grass)] uppercase tracking-wide">
              React Native Developer · Gamer · Anime Enthusiast
            </p>

            <p className="font-body text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-2xl">
              Building high-performance cross-platform mobile apps, open-source npm kits, and real-time backend systems. Driven by clean architecture and tactical UX in {activeWorldConfig.tagline}.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollToSection('projects')} className="btn-wood text-sm py-3.5 px-6">
                VIEW PROJECTS 🚀
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-kraft text-sm py-3.5 px-6">
                LET'S TALK ✉️
              </button>
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t-2 border-dashed border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl">
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Live Apps' },
                { value: '50k+', label: 'Downloads' },
                { value: '100%', label: 'Open Source' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-pixel text-2xl sm:text-3xl font-bold text-[var(--gold)]">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-[var(--ink-muted)] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Interactive Moving Crafting Matrix Structure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <HeroCraftingStructure />
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 1. ABOUT SECTION                                   */}
      {/* -------------------------------------------------- */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-20 bg-[var(--kraft)]/30 backdrop-blur-xs border-t-2 border-[var(--border-color)]" id="about">
        <div className="w-full">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <span>📓</span> ABOUT THE BUILDER
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
              Creative Desk & Quests
            </h2>
            <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
              A peek into my technical background, active quests, and engineering philosophy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start w-full">
            <Polaroid />
            <StickyNote />
            <NotebookChecklist />
            <div className="space-y-6 w-full">
              <PinnedNote
                title="STATUS UPDATE"
                badge="OPEN TO WORK"
                content="Currently building mobile apps at Binnys Management. Open for React Native, Mobile Architecture, and Full Stack opportunities."
              />
              <PinnedNote
                title="OPEN SOURCE"
                badge="NPM KIT"
                content="Author of 'rn-whiteboard-kit', an open-source React Native drawing canvas library for cross-platform apps."
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* 2. PROJECTS SECTION                                */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><Projects /></div>

      {/* -------------------------------------------------- */}
      {/* 3. EXPERIENCE SECTION                              */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><AboutExperience /></div>

      {/* -------------------------------------------------- */}
      {/* 4. SKILLS SECTION                                  */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><TechStackSection /></div>

      {/* -------------------------------------------------- */}
      {/* 5. GAMES SECTION                                   */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><GamesSection /></div>

      {/* -------------------------------------------------- */}
      {/* 6. ANIME SECTION                                   */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><AnimeSection /></div>

      {/* -------------------------------------------------- */}
      {/* 7. CONTACT SECTION                                 */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><Contact /></div>

      {/* -------------------------------------------------- */}
      {/* FOOTER                                             */}
      {/* -------------------------------------------------- */}
      <div className="relative z-20"><Footer /></div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <WorldProvider>
      <PortfolioMain />
    </WorldProvider>
  );
}
