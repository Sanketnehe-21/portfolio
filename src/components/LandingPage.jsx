import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorldProvider, useWorld, WORLDS } from '../context/WorldContext';
import WorldParticles from './WorldParticles';
import WorldSwitcher from './WorldSwitcher';
import WorldSplashOverlay from './WorldSplashOverlay';
import CustomCursor from './CustomCursor';
import WorldInteractionsLayer from './WorldInteractionsLayer';
import TsushimaAtmospheric3D from './TsushimaAtmospheric3D';
import MinecraftHotbar from './MinecraftHotbar';
import GtaGpsWidget from './GtaGpsWidget';
import MinecraftAchievementToast from './MinecraftAchievementToast';
import { Tape, StickyNote, Polaroid, NotebookChecklist, PinnedNote } from './ScrapbookComponents';
import HeroCraftingStructure from './HeroCraftingStructure';
import Projects from './Projects';
import TechStackSection from './TechStackSection';
import AboutExperience from './AboutExperience';
import Contact from './Contact';
import Footer from './Footer';

function PortfolioMain() {
  const { world, activeWorldConfig } = useWorld();
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'projects', label: 'Projects', icon: '🗡️' },
    { id: 'experience', label: 'Experience', icon: '⚖️' },
    { id: 'skills', label: 'SkiLLs', icon: '🧪' },
    { id: 'contact', label: 'Contact', icon: '✉️' },
  ];

  const isMinecraft = world === 'minecraft';
  const isGta = world === 'gta';
  const isTsushima = world === 'tsushima';

  return (
    <div className="w-full min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] font-body relative selection:bg-[var(--accent-primary)] selection:text-white overflow-x-hidden">
      {/* CUSTOM WORLD GAME MOUSE CURSOR */}
      <CustomCursor />

      {/* GAME WORLD INTERACTIVE MECHANICS LAYER */}
      <WorldInteractionsLayer />

      {/* TSUSHIMA 3D ATMOSPHERIC FOG & LEAVES */}
      <TsushimaAtmospheric3D />

      {/* FULL SCREEN CINEMATIC GAME THEME SPLASH OVERLAY */}
      <WorldSplashOverlay />

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

      {/* Minecraft Achievement Toast */}
      {isMinecraft && <MinecraftAchievementToast sectionName={activeSection} />}

      {/* GTA Minimap GPS Tracker */}
      {isGta && <GtaGpsWidget />}

      {/* -------------------------------------------------- */}
      {/* TOP NAVIGATION — MULTI-WORLD HEADER               */}
      {/* -------------------------------------------------- */}
      <header className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8 w-full flex items-center justify-between pointer-events-none">
        {/* Left Brand Badge */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[var(--card-surface)]/90 backdrop-blur-md border-2 border-[var(--card-border)] px-3.5 py-1.5 rounded-full shadow-lg">
          <div className="w-7 h-7 rounded-full bg-[var(--accent-primary)] text-white font-label font-bold flex items-center justify-center text-xs">
            {activeWorldConfig.symbol}
          </div>
          <span className="font-heading font-bold text-sm text-[var(--text-primary)] tracking-tight">
            SANKET<span className="text-[var(--accent-primary)]">.</span>NEHE
          </span>
        </div>

        {/* Center: Top Nav Items (Hidden in Minecraft mode since Minecraft uses bottom hotbar) */}
        {!isMinecraft && (
          <div className="pointer-events-auto torn-paper-nav px-6 sm:px-8 py-2 relative flex items-center justify-center">
            {isTsushima && (
              <div className="ribbon-bookmark">
                <div className="ribbon-pin" />
              </div>
            )}

            <nav className="flex items-center gap-2 sm:gap-5 font-label text-xs sm:text-sm text-[#2C261F] dark:text-[var(--text-primary)] overflow-x-auto scrollbar-none">
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
        )}

        {/* Right: World Switcher Control (ONLY THEME CONTROL) */}
        <WorldSwitcher />
      </header>

      {/* Minecraft Bottom 9-Slot Hotbar Navigation */}
      {isMinecraft && (
        <MinecraftHotbar onNavigate={scrollToSection} activeSection={activeSection} />
      )}

      {/* -------------------------------------------------- */}
      {/* HERO SECTION — FULL SCREEN 100% FLUID RESPONSIVE   */}
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
              <span className="font-label text-xs text-[var(--text-muted)]">LEVEL 24 ARCHITECT</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-[1.08]">
              Crafting <span className="text-[var(--accent-primary)] italic">Next-Gen</span> Experiences
            </h1>

            <p className="font-label text-sm sm:text-base text-[var(--accent-primary)] uppercase tracking-wide">
              React Native Developer & Mobile Architect
            </p>

            {/* Tsushima Haiku Banner */}
            {isTsushima && (
              <div className="p-3 bg-[var(--card-surface)] border border-[var(--card-border)] rounded italic text-xs text-[var(--text-secondary)] font-heading">
                "Wind through red maples, / Code crafted with silent strength, / Build for eternity."
              </div>
            )}

            <p className="font-body text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
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
            <div className="pt-8 border-t-2 border-dashed border-[var(--card-border)] grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-2xl">
              {[
                { value: '10+', label: 'Projects Built' },
                { value: '5+', label: 'Live Apps' },
                { value: '50k+', label: 'Downloads' },
                { value: '100%', label: 'Open Source' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-label text-2xl sm:text-3xl font-bold text-[var(--accent-primary)]">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-[var(--text-muted)] mt-1">
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
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative z-20 bg-[var(--bg-secondary)]/40 backdrop-blur-xs border-t-2 border-[var(--card-border)]" id="about">
        <div className="w-full">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <div className="font-label text-xs text-[var(--accent-primary)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2 font-bold">
              <span>📓</span> ABOUT THE BUILDER
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--text-primary)]">
              Creative Desk & Quests
            </h2>
            <p className="font-body text-base text-[var(--text-secondary)] mt-2">
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
      {/* 5. CONTACT SECTION                                 */}
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
