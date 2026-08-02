import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tape, StickyNote, Polaroid, NotebookChecklist, PinnedNote } from './ScrapbookComponents';
import HeroCraftingStructure from './HeroCraftingStructure';
import Projects from './Projects';
import TechStackSection from './TechStackSection';
import GamesSection from './GamesSection';
import AnimeSection from './AnimeSection';
import AboutExperience from './AboutExperience';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
  const [theme, setTheme] = useState(() => localStorage.getItem('sanket-theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sanket-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
      {/* TOP NAVIGATION — FULL SCREEN EDGE TO EDGE         */}
      {/* -------------------------------------------------- */}
      <header className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8 w-full flex items-center justify-between pointer-events-none">
        {/* Left Aside: Brand Name Logo */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[var(--paper-raised)] border-2 border-[var(--border-color)] px-3 py-1.5 rounded shadow-md">
          <div className="w-7 h-7 rounded bg-[var(--wood)] text-[#FAF6EE] font-pixel font-bold flex items-center justify-center border border-[#3A2313] text-xs">
            SN
          </div>
          <span className="font-heading font-bold text-sm text-[var(--ink)] tracking-tight">
            SANKET<span className="text-[var(--gold)]">.</span>NEHE
          </span>
        </div>

        {/* Center: Handcrafted Torn Paper Strip (Contains ONLY the 7 Nav Items) */}
        <div className="pointer-events-auto torn-paper-nav px-6 sm:px-10 py-2.5 relative flex items-center justify-center">
          {/* Red Ribbon Bookmark Hanging Off Right Edge */}
          <div className="ribbon-bookmark">
            <div className="ribbon-pin" />
          </div>

          <nav className="flex items-center gap-2 sm:gap-6 font-pixel text-xs sm:text-sm text-[#2C261F] overflow-x-auto scrollbar-none">
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

        {/* Right Aside: Theme Toggle & CTA */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded border-2 border-[var(--border-color)] bg-[var(--kraft)] text-base hover:bg-[var(--kraft-dark)] shadow-md transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:inline-flex btn-wood text-xs py-2 px-3 shadow-md"
          >
            QUEST ✉️
          </button>
        </div>
      </header>

      {/* -------------------------------------------------- */}
      {/* HERO SECTION — FULL SCREEN 100% FLUID RESPONSIVE   */}
      {/* -------------------------------------------------- */}
      <section className="w-full min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 md:px-12 lg:px-20 flex items-center relative overflow-hidden" id="hero">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="pixel-badge emerald">LEVEL 24 ARCHITECT</span>
              <span className="font-pixel text-xs text-[var(--ink-muted)]">AVAILABLE FOR ROLES</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--ink)] leading-[1.08]">
              Crafting <span className="text-[var(--gold)] italic">Next-Gen</span> Experiences
            </h1>

            <p className="font-pixel text-sm sm:text-base text-[var(--grass)] uppercase tracking-wide">
              React Native Developer · Gamer · Anime Enthusiast
            </p>

            <p className="font-body text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed max-w-2xl">
              Building high-performance cross-platform mobile apps, open-source npm kits, and real-time backend systems. Driven by clean architecture and playful, tactical UX.
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
      {/* 1. ABOUT SECTION — FULL SCREEN FLUID               */}
      {/* -------------------------------------------------- */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative bg-[var(--kraft)]/20 border-t-2 border-[var(--border-color)]" id="about">
        <div className="w-full">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
              <span>📓</span> ABOUT THE BUILDER
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
              Creative Desk & Notes
            </h2>
            <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
              A peek into my technical background, current quests, and engineering philosophy.
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
      <Projects />

      {/* -------------------------------------------------- */}
      {/* 3. EXPERIENCE SECTION                              */}
      {/* -------------------------------------------------- */}
      <AboutExperience />

      {/* -------------------------------------------------- */}
      {/* 4. SKILLS SECTION (Collectible Pixel Badges)      */}
      {/* -------------------------------------------------- */}
      <TechStackSection />

      {/* -------------------------------------------------- */}
      {/* 5. GAMES SECTION                                   */}
      {/* -------------------------------------------------- */}
      <GamesSection />

      {/* -------------------------------------------------- */}
      {/* 6. ANIME SECTION                                   */}
      {/* -------------------------------------------------- */}
      <AnimeSection />

      {/* -------------------------------------------------- */}
      {/* 7. CONTACT SECTION                                 */}
      {/* -------------------------------------------------- */}
      <Contact />

      {/* -------------------------------------------------- */}
      {/* FOOTER                                             */}
      {/* -------------------------------------------------- */}
      <Footer />
    </div>
  );
}
