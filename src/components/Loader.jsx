import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--paper, #181614)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '1.5rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          backgroundColor: 'var(--paper-raised, #221F1C)',
          border: '3px solid var(--border-color, #3D352E)',
          borderRadius: '6px',
          padding: '2rem 2.5rem',
          boxShadow: '6px 6px 0px 0px var(--border-color, #3D352E)',
          textAlign: 'center',
          maxWidth: '380px',
          width: '100%',
        }}
      >
        <div style={{
          width: '48px',
          height: '48px',
          margin: '0 auto 1rem',
          backgroundColor: 'var(--wood, #8B5E3C)',
          border: '2px solid var(--border-color, #3D352E)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Pixelify Sans', monospace",
          fontWeight: 'bold',
          color: '#FAF6EE',
          fontSize: '1.2rem',
          boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.2)',
        }}>
          SN
        </div>

        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--ink, #F5F2EB)',
          marginBottom: '0.25rem',
        }}>
          SANKET NEHE
        </div>

        <div style={{
          fontFamily: "'Pixelify Sans', monospace",
          fontSize: '0.75rem',
          color: 'var(--gold, #E5A93C)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
        }}>
          LEVEL 24 ARCHITECT · SANKET_OS
        </div>

        {/* XP Loading Bar */}
        <div style={{
          height: '14px',
          backgroundColor: 'var(--stone-light, #2D2A26)',
          border: '2px solid var(--border-color, #3D352E)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '0.75rem',
        }}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          />
        </div>

        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.68rem',
          color: 'var(--ink-muted, #787268)',
        }}>
          LOADING WORLD ASSETS... 100%
        </div>
      </motion.div>
    </motion.div>
  );
}
