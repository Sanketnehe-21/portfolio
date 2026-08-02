import React from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

const ANIME = [
  {
    id: 'one-piece',
    title: 'One Piece',
    favoriteChar: 'Roronoa Zoro',
    rating: 5,
    gradient: 'from-[#FF6D00] to-[#D50000]',
    symbol: '🏴‍☠️',
    note: 'Incredible world-building, high stakes, and peak emotional storytelling about ambition and loyalty.',
    badge: 'ALL TIME #1',
    badgeColor: 'gold',
  },
  {
    id: 'naruto',
    title: 'Naruto Shippuden',
    favoriteChar: 'Itachi Uchiha',
    rating: 5,
    gradient: 'from-[#FF9100] to-[#E65100]',
    symbol: '🍃',
    note: 'Unmatched rivalry, tactical shinobi battles, and one of the best tragic character arcs in anime history.',
    badge: 'CLASSIC GOAT',
    badgeColor: 'emerald',
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    favoriteChar: 'Kyojuro Rengoku',
    rating: 5,
    gradient: 'from-[#00C853] to-[#1B5E20]',
    symbol: '⚔️',
    note: 'Breathtaking visual animation quality, exhilarating sword combat, and pure heart in every fight.',
    badge: 'PEAK ANIMATION',
    badgeColor: 'diamond',
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    favoriteChar: 'Satoru Gojo',
    rating: 5,
    gradient: 'from-[#6200EA] to-[#311B92]',
    symbol: '👁️',
    note: 'Dynamic battle choreography, domain expansion mechanics, and dark fantasy world concepts.',
    badge: 'HYPE ARCH',
    badgeColor: 'gold',
  },
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    favoriteChar: 'Erwin Smith',
    rating: 5,
    gradient: 'from-[#4E342E] to-[#212121]',
    symbol: '🗡️',
    note: 'Masterclass plot twists, political tension, and high-velocity ODM gear action sequence design.',
    badge: 'MASTERPIECE',
    badgeColor: 'emerald',
  },
  {
    id: 'solo-leveling',
    title: 'Solo Leveling',
    favoriteChar: 'Sung Jinwoo',
    rating: 5,
    gradient: 'from-[#0288D1] to-[#01579B]',
    symbol: '👑',
    note: 'Satisfying power progression, shadow army mechanics, and electric dungeon raid sequences.',
    badge: 'NEW ERA',
    badgeColor: 'diamond',
  },
];

export default function AnimeSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="anime">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span>⛩️</span> ANIME FAN CORNER
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
            Favorite Anime & Character Badges
          </h2>
          <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
            Stories that inspire creativity, persistence, and world-building design.
          </p>
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {ANIME.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] rounded-md p-6 shadow-md relative flex flex-col justify-between w-full"
            >
              <Tape variant={idx % 3 === 0 ? 'cream' : idx % 3 === 1 ? 'gold' : 'forest'} position="top-right" />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`w-12 h-12 rounded bg-gradient-to-br ${item.gradient} border-2 border-[var(--border-color)] flex items-center justify-center text-xl shadow-inner`}
                  >
                    {item.symbol}
                  </div>
                  <span className={`pixel-badge ${item.badgeColor}`}>{item.badge}</span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--ink)] mb-1">{item.title}</h3>

                {/* Rating Hearts */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="heart-icon">♥</span>
                  ))}
                  <span className="font-mono text-[10px] text-[var(--ink-muted)] ml-1">5.0 / 5.0</span>
                </div>

                {/* Favorite Character Callout */}
                <div className="bg-[var(--kraft)] p-2.5 rounded border border-[var(--border-color)] mb-3">
                  <span className="font-pixel text-[9px] text-[var(--wood)] block uppercase">
                    FAVORITE CHARACTER
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--ink)]">
                    {item.favoriteChar}
                  </span>
                </div>

                <p className="font-body text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {item.note}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[var(--border-color)] flex justify-between items-center text-[10px] font-mono text-[var(--ink-muted)]">
                <span>COLLECTIBLE BADGE</span>
                <span className="font-pixel text-[9px] text-[var(--gold)]">#ANIME-FAV</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
