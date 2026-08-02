import React from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

export default function AboutExperience() {
  return (
    <section id="experience" className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span>📜</span> EXPERIENCE & EDUCATION METERS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
            Level Progression & Quests
          </h2>
          <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
            Real-world professional milestones, degree benchmarks, and technical achievements.
          </p>
        </div>

        {/* Timeline Layout — Fluid 2 Column Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
          {/* Column 1: Work Experience */}
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-2 font-pixel text-sm text-[var(--wood)] border-b-2 border-dashed border-[var(--border-color)] pb-2">
              <span>💼</span> WORK EXPERIENCE [ACTIVE QUEST]
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-6 rounded-md shadow-md relative w-full"
            >
              <Tape variant="forest" position="top-right" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[var(--ink)]">
                    React Native Developer
                  </h3>
                  <span className="font-mono text-xs text-[var(--gold)] font-semibold">
                    @ Binnys Management
                  </span>
                </div>
                <span className="pixel-badge emerald">ACTIVE</span>
              </div>

              <div className="font-mono text-[10px] text-[var(--ink-muted)] mb-4">
                OCT 2025 – PRESENT · FULL TIME
              </div>

              <p className="font-body text-sm text-[var(--ink-secondary)] leading-relaxed mb-4">
                Owned feature development end-to-end for 5 cross-platform apps published on Google Play Store (<em>Create, Vision, Scan, MyBinnyst, Track</em>). Optimized Firestore sync efficiency by 60%.
              </p>

              {/* XP Meter */}
              <div className="space-y-1.5 pt-4 border-t border-dashed border-[var(--border-color)]">
                <div className="flex justify-between font-pixel text-[11px]">
                  <span className="text-[var(--grass)]">REACT NATIVE XP LEVEL</span>
                  <span className="text-[var(--gold)]">LVL 95 / 100</span>
                </div>
                <div className="xp-bar-container">
                  <div className="xp-bar-fill" style={{ width: '95%' }} />
                </div>
              </div>
            </motion.div>

            {/* Achievement Callout */}
            <div className="bg-[var(--kraft)] border-2 border-[var(--border-color)] p-5 rounded-md shadow-sm w-full">
              <div className="font-pixel text-xs text-[var(--wood)] font-bold mb-2 flex items-center gap-1.5">
                <span>🏆</span> KEY MILESTONE
              </div>
              <p className="font-body text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Single-handedly developed & deployed 5 production apps to Play Store with zero downtime and real-time offline sync.
              </p>
            </div>
          </div>

          {/* Column 2: Education & Awards */}
          <div className="space-y-6 w-full">
            <div className="flex items-center gap-2 font-pixel text-sm text-[var(--wood)] border-b-2 border-dashed border-[var(--border-color)] pb-2">
              <span>🎓</span> ACADEMICS & AWARDS
            </div>

            {/* B.E. Degree */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-6 rounded-md shadow-md relative w-full"
            >
              <Tape variant="gold" position="top-left" />
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-heading font-bold text-lg text-[var(--ink)]">
                  B.E. Computer Engineering
                </h3>
                <span className="pixel-badge gold">CGPA 8.08</span>
              </div>
              <div className="font-mono text-xs text-[var(--gold)] mb-1">
                APSIT · Mumbai University
              </div>
              <div className="font-mono text-[10px] text-[var(--ink-muted)] mb-4">
                JULY 2021 – JUNE 2025
              </div>

              {/* XP Meter */}
              <div className="space-y-1.5 pt-3 border-t border-dashed border-[var(--border-color)]">
                <div className="flex justify-between font-pixel text-[11px]">
                  <span className="text-[var(--grass)]">DEGREE COMPLETION</span>
                  <span className="text-[var(--gold)]">100%</span>
                </div>
                <div className="xp-bar-container">
                  <div className="xp-bar-fill" style={{ width: '100%' }} />
                </div>
              </div>
            </motion.div>

            {/* Awards & Certifications Card */}
            <div className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] p-6 rounded-md shadow-md w-full">
              <h3 className="font-heading font-bold text-lg text-[var(--ink)] mb-4">
                Awards & Certifications
              </h3>
              <ul className="space-y-2.5 font-mono text-xs sm:text-sm text-[var(--ink-secondary)]">
                <li className="flex items-center justify-between border-b border-dashed border-[var(--border-color)] pb-2">
                  <span>🏆 Winner – EXALT 2023–24</span>
                  <span className="pixel-badge emerald">1ST PLACE</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-[var(--border-color)] pb-2">
                  <span>📜 Google Ads Certification</span>
                  <span className="pixel-badge gold">CERTIFIED</span>
                </li>
                <li className="flex items-center justify-between border-b border-dashed border-[var(--border-color)] pb-2">
                  <span>📜 Azure DevOps Boards</span>
                  <span className="pixel-badge diamond">MICROSOFT</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>📜 CISCO IT Essentials</span>
                  <span className="pixel-badge emerald">CISCO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
