import React from 'react';
import { motion } from 'framer-motion';
import { Tape } from './ScrapbookComponents';

export const projects = [
  {
    id: 'urban-hive',
    title: 'Urban Hive – Smart Urban Services',
    subtitle: 'Real-Time Service Discovery & Requests',
    description: 'React Native (Expo) app for real-time service discovery, request management & secure payments via Firebase & Google Maps API. Resolved Firestore synchronization bottlenecks, improving data update speed by 60%.',
    tech: ['React Native', 'Expo', 'Firebase', 'Google Maps API'],
    highlights: ['60% faster data sync', 'Real-time maps', 'Secure payments'],
    category: 'MOBILE APP',
    badgeColor: 'emerald',
    icon: '📱',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  },
  {
    id: 'rn-whiteboard-kit',
    title: 'rn-whiteboard-kit',
    subtitle: 'Open-Source Expo-Compatible npm Package',
    description: 'Full-featured Expo-compatible whiteboard component for React Native apps. Supports freehand drawing, pinch-to-zoom, pan, undo/redo, eraser, and PNG export with no native linking required. Built-in useWhiteboard() hook API.',
    tech: ['React Native', 'Expo', 'npm Package', 'Canvas'],
    highlights: ['Published npm package', 'Zero native linking', 'Cross-Platform'],
    category: 'NPM PACKAGE',
    badgeColor: 'gold',
    icon: '📦',
    github: 'https://github.com/Sanketnehe-21',
    demo: 'https://www.npmjs.com/package/rn-whiteboard-kit'
  },
  {
    id: 'brewtech',
    title: 'Brewtech',
    subtitle: 'Coffee Shop Operations & Workflow',
    description: 'React Native (Expo) management app tailored for coffee shop operations: inventory tracking, real-time order processing, and staff workflow management.',
    tech: ['React Native', 'Expo', 'State Management'],
    highlights: ['Inventory Tracking', 'Staff Workflow', 'Order Pipeline'],
    category: 'MOBILE APP',
    badgeColor: 'diamond',
    icon: '☕',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  },
  {
    id: 'ev-finder',
    title: 'EV Charging Station Finder',
    subtitle: 'Google Maps Location-Based EV Discovery',
    description: 'Real-time location-based discovery app for EV charging stations using Google Maps API, marker clustering, real-time distance, and turn-by-turn directions.',
    tech: ['React Native', 'Expo', 'Google Maps API', 'Geolocation'],
    highlights: ['Real-Time Distance', 'Marker Clustering', 'Directions'],
    category: 'MOBILE APP',
    badgeColor: 'emerald',
    icon: '⚡',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  },
  {
    id: 'agent-tracker',
    title: 'Agent Live Tracking Platform',
    subtitle: 'Cross-Platform Delivery Logistics',
    description: 'Cross-platform system (Web + Mobile) for live delivery/agent tracking with task assignment, real-time map updates, and REST API completion reporting.',
    tech: ['React Native', 'Web', 'REST API', 'Maps'],
    highlights: ['Live Delivery Tracking', 'Task Assignment', 'REST API'],
    category: 'FULL STACK',
    badgeColor: 'gold',
    icon: '🗺️',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  },
  {
    id: 'exhibition-system',
    title: 'Exhibition Tracking System',
    subtitle: 'Global Event Record Management',
    description: 'Full CRUD web & mobile application for tracking worldwide exhibitions, managing event schedules, and maintaining company historical records via REST API.',
    tech: ['React Native', 'Web', 'REST API', 'CRUD'],
    highlights: ['Global Record System', 'Full CRUD', 'Event Schedule'],
    category: 'FULL STACK',
    badgeColor: 'diamond',
    icon: '🏛️',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  },
  {
    id: 'arcal',
    title: 'Arcal Calculator',
    subtitle: 'REST API Rate Lookup Calculator',
    description: 'Calculator app (Web + React Native) integrated with third-party Gati REST APIs for live freight/rate lookups and dynamic calculation routines.',
    tech: ['React Native', 'Web', 'Gati REST API'],
    highlights: ['Gati API Rate Lookup', 'Dynamic Calculator', 'Cross-Platform'],
    category: 'UTILITY APP',
    badgeColor: 'emerald',
    icon: '🧮',
    github: 'https://github.com/Sanketnehe-21',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden" id="projects">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="font-pixel text-xs text-[var(--gold)] uppercase tracking-wider mb-2 flex items-center justify-center gap-2">
            <span>🛠️</span> CRAFTING TABLE BUILDS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--ink)]">
            Production Apps & Open Source
          </h2>
          <p className="font-body text-base text-[var(--ink-secondary)] mt-2">
            Production React Native applications, published npm packages, and full-stack systems built for performance and native user experience.
          </p>
        </div>

        {/* Projects Grid — Edge-to-Edge Fluid Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="bg-[var(--paper-raised)] border-2 border-[var(--border-color)] rounded-md p-6 shadow-md relative flex flex-col justify-between w-full"
            >
              <Tape variant={idx % 2 === 0 ? 'kraft' : 'gold'} position="top-right" />

              <div>
                {/* Item Frame Thumbnail Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="inventory-slot">
                    <span className="text-2xl">{project.icon}</span>
                  </div>
                  <span className={`pixel-badge ${project.badgeColor}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--ink)] mb-1">
                  {project.title}
                </h3>
                <div className="font-pixel text-[10px] text-[var(--gold)] mb-3">
                  {project.subtitle}
                </div>

                <p className="font-body text-xs text-[var(--ink-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="font-mono text-[10px] px-2 py-0.5 bg-[var(--kraft)] text-[var(--ink)] rounded border border-[var(--border-color)]">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-dashed border-[var(--border-color)]">
                  {project.tech.map((t, i) => (
                    <span key={i} className="pixel-badge font-normal text-[9px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-kraft flex-1 text-center text-xs py-2"
                  >
                    GitHub
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-wood flex-1 text-center text-xs py-2"
                    >
                      Live / npm
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
