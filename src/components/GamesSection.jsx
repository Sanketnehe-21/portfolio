import React from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

const GAMES = [
  {
    id: 'minecraft',
    title: 'Minecraft',
    subtitle: 'Sandbox & Automation',
    stat: '1,200+ Hours · Redstone Architect',
    desc: 'Building automated farms, redstone contraptions, and custom survival worlds since 2017.',
    gradient: 'from-[#2E7D32] to-[#1B5E20]',
    emblem: '🧱',
    badge: 'FAVORITE',
    badgeColor: 'emerald',
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    subtitle: 'Action RPG / Souls-like',
    stat: '280 Hours · Platinum Trophy',
    desc: 'Conquered the Lands Between. Melee/Dodge build master & Tarnished lore enthusiast.',
    gradient: 'from-[#B8860B] to-[#5C3A21]',
    emblem: '⚔️',
    badge: '100% CLEAR',
    badgeColor: 'gold',
  },
  {
    id: 'valorant',
    title: 'Valorant',
    subtitle: 'Tactical First-Person Shooter',
    stat: 'Diamond II · Controller Main',
    desc: 'Omen & Astra main. Tactical smoke plays, clutch execution, and team utility coordination.',
    gradient: 'from-[#FF4655] to-[#8B0000]',
    emblem: '🎯',
    badge: 'COMPETITIVE',
    badgeColor: 'diamond',
  },
  {
    id: 'god-of-war',
    title: 'God of War Ragnarök',
    subtitle: 'Action-Adventure',
    stat: 'Give Me No Mercy Completed',
    desc: 'Mastered Leviathan Axe parries and Nornir rune puzzles across all Nine Realms.',
    gradient: 'from-[#1976D2] to-[#0D47A1]',
    emblem: '🪓',
    badge: 'STORY GOAT',
    badgeColor: 'gold',
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    subtitle: 'Open-World Samurai Epic',
    stat: 'Lethal+ Difficulty Clear',
    desc: 'Perfect parry swordplay, bamboo strikes, and minimalist photo-mode cinematography.',
    gradient: 'from-[#E65100] to-[#4E342E]',
    emblem: '🍃',
    badge: 'MASTERPIECE',
    badgeColor: 'emerald',
  },
  {
    id: 'gta-v',
    title: 'GTA V / Online',
    subtitle: 'Open-World Action',
    stat: 'Heist Leader · Level 180+',
    desc: 'Organizing 4-player heist runs and high-speed stunt driving around Los Santos.',
    gradient: 'from-[#388E3C] to-[#1A237E]',
    emblem: '🏎️',
    badge: 'CLASSIC',
    badgeColor: 'diamond',
  },
];

export default function GamesSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="games">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span>🎮</span> GAMING CORNER
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
              Favorite Games & Quests
            </h2>
            <p className="font-body text-base text-[var(--ink-secondary)] mt-2 max-w-xl">
              When I'm not writing React Native code, you'll find me exploring open worlds, optimizing redstone circuitry, or clutching rounds.
            </p>
          </div>
          <div className="font-pixel text-xs text-[var(--ink-muted)] flex items-center gap-2">
            <span>← SCROLL SLIDER →</span>
          </div>
        </div>

        {/* Horizontal Card Slider — Full Width */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 scrollbar-none snap-x w-full">
          {GAMES.map((game, idx) => (
            <motion.div
              key={game.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] bg-[var(--paper-raised)] border-2 border-[var(--border-color)] rounded-md p-6 shadow-md relative flex flex-col justify-between"
            >
              <Tape variant={idx % 2 === 0 ? 'kraft' : 'forest'} position="top-right" />

              <div>
                {/* Emblem Header Graphic */}
                <div
                  className={`w-14 h-14 rounded-md bg-gradient-to-br ${game.gradient} border-2 border-[var(--border-color)] flex items-center justify-center text-2xl shadow-inner mb-4`}
                >
                  {game.emblem}
                </div>

                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-heading text-xl font-bold text-[var(--ink)]">{game.title}</h3>
                  <span className={`pixel-badge ${game.badgeColor}`}>{game.badge}</span>
                </div>

                <div className="font-pixel text-[10px] text-[var(--gold)] mb-3">{game.subtitle}</div>

                <p className="font-body text-xs text-[var(--ink-secondary)] leading-relaxed mb-4">
                  {game.desc}
                </p>
              </div>

              {/* Footer Stat Bar */}
              <div className="pt-3 border-t border-dashed border-[var(--border-color)] font-mono text-[10px] text-[var(--ink-muted)] flex items-center gap-1.5">
                <span>⚔️</span>
                <span>{game.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
