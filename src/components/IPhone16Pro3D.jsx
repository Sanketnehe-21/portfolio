import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import AboutExperience from './AboutExperience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './IPhone16Pro3D.css';

// Native Resume Document Viewer App
function ResumeApp() {
  return (
    <div className="resume-document-viewer">
      <div className="resume-paper">
        <header className="resume-header">
          <h1 className="resume-name">SANKET NEHE</h1>
          <p className="resume-subtitle">React Native Developer & Mobile Architect</p>
          <div className="resume-contact-meta">
            <span>📍 Mumbai, India</span> • <span>✉️ sanketnehe21@gmail.com</span>
          </div>
        </header>

        <section className="resume-section">
          <h3 className="resume-section-title">EDUCATION</h3>
          <div className="resume-item">
            <div className="item-row">
              <strong className="item-title">B.E. Computer Engineering</strong>
              <span className="item-date">2021 – 2025</span>
            </div>
            <div className="item-sub">A. P. Shah Institute of Technology, Thane (University of Mumbai)</div>
            <div className="item-meta">CGPA: <strong>8.08 / 10.0</strong></div>
          </div>
          <div className="resume-item">
            <div className="item-row">
              <strong className="item-title">Senior Secondary (XII), Science</strong>
              <span className="item-date">86%</span>
            </div>
            <div className="item-sub">N.E.S High School and Junior College, Bhandup</div>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-title">WORK EXPERIENCE</h3>
          <div className="resume-item">
            <div className="item-row">
              <strong className="item-title">React Native Developer @ Binnys Management</strong>
              <span className="item-date">Oct 2025 – Present</span>
            </div>
            <p className="item-desc">
              End-to-end development of 5 cross-platform mobile apps on Google Play Store (*Create, Vision, Scan, MyBinnyst, Track*). Optimized Firestore real-time synchronization, UI frame rates, and REST APIs.
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-title">TECHNICAL SKILLS</h3>
          <div className="resume-skills-list">
            <div><strong>Mobile:</strong> React Native, Expo, Native Modules</div>
            <div><strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3, Python, Java, PHP, C</div>
            <div><strong>Databases:</strong> Firebase Firestore, MySQL, MongoDB</div>
            <div><strong>Cloud & Tools:</strong> AWS, GCP, Git, GitHub, Bitbucket, VS Code, Figma, npm</div>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-title">FEATURED PROJECTS</h3>
          <div className="resume-item">
            <strong className="item-title">rn-whiteboard-kit (Open Source npm Package)</strong>
            <p className="item-desc">Full-featured Expo-compatible whiteboard component for React Native (freehand drawing, pinch-to-zoom, PNG export).</p>
          </div>
          <div className="resume-item">
            <strong className="item-title">Urban Hive – Smart Urban Services</strong>
            <p className="item-desc">React Native app for service discovery & payments. Improved Firestore data update speed by 60%.</p>
          </div>
        </section>

        <section className="resume-section">
          <h3 className="resume-section-title">AWARDS & CERTIFICATIONS</h3>
          <ul className="resume-bullet-list">
            <li>🏆 Winner – EXALT 2023–24 (APSIT)</li>
            <li>📜 Google Ads Certification & Azure DevOps Boards</li>
            <li>📜 CISCO IT Essentials & C/C++ Foundation</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function IPhone16Pro3D() {
  const [stage, setStage] = useState('boot'); // 'boot' | 'launching' | 'docked'
  const [bootState, setBootState] = useState('off'); // 'off' | 'logo' | 'lock' | 'unlocked'
  const [activeApp, setActiveApp] = useState(null); // null or 'about' | 'experience' | 'skills' | 'builds' | 'contact' | 'resume'
  const [currentTime, setCurrentTime] = useState('09:41');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('sanket-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sanket-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (stage === 'boot') return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    setTilt({ x: -dy * 5, y: dx * 5 });
  };

  const handleLaunch = () => {
    if (stage !== 'boot') return;
    setStage('launching');

    setTimeout(() => {
      setStage('docked');
      setTimeout(() => {
        setBootState('logo');
        setTimeout(() => {
          setBootState('lock');
          setTimeout(() => {
            setBootState('unlocked');
          }, 800);
        }, 800);
      }, 300);
    }, 1400);
  };

  const handleOpenApp = (appId) => {
    if (bootState !== 'unlocked') {
      setBootState('unlocked');
    }
    setActiveApp(appId);
  };

  const handleCloseApp = () => {
    setActiveApp(null);
  };

  const handleReplay = () => {
    setStage('boot');
    setBootState('off');
    setActiveApp(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={`iphone-16pro-wrapper stage-${stage}`} onMouseMove={handleMouseMove}>
      <div className="crt-scanlines"></div>

      <div className={`viewport-shake ${stage === 'launching' ? 'shaking' : ''}`}>
        
        {/* STAGE 1: BOOT TERMINAL SCREEN */}
        <AnimatePresence>
          {stage === 'boot' && (
            <motion.div
              className="boot-screen"
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <div className="ghost-phone-silhouette"></div>
              <div className="terminal-container">
                <div className="terminal-log">
                  <span className="log-prompt">&gt; </span>
                  <span className="log-text">INITIALIZING IPHONE 16 PRO 3D...</span>
                </div>

                <div className="boot-content">
                  <p className="boot-subtext">"Back so soon? Sanket welcomes you."</p>
                  <button className="launch-cta-btn btn-primary" onClick={handleLaunch}>
                    <span className="cta-pulse-ring"></span>
                    <span className="cta-text">Launch iPhone 16 Pro →</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 2: AMBER IGNITION FLARE */}
        {stage === 'launching' && (
          <div className="launch-ignition-burst">
            <div className="amber-ignition-flare"></div>
            <div className="ring-shockwave-left"></div>
          </div>
        )}

        {/* STAGE 3: PHOTOREALISTIC 3D IPHONE 16 PRO HARDWARE MOCKUP */}
        {(stage === 'launching' || stage === 'docked') && (
          <motion.div
            className="phone-3d-chassis-wrap"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
            initial={{
              x: -680,
              y: 680,
              scale: 0.2,
              opacity: 0,
              rotateZ: -38
            }}
            animate={{
              x: [ -680, -320, 0 ],
              y: [ 680, -50, 0 ],
              scale: [ 0.2, 0.6, 1 ],
              opacity: [ 0, 1, 1 ],
              rotateZ: [ -38, -15, 0 ]
            }}
            transition={{
              duration: 1.4,
              times: [0, 0.5, 1],
              ease: [0.16, 1, 0.3, 1],
              type: 'keyframes'
            }}
          >
            {/* Real Physical Hardware Frame */}
            <div className="iphone-16pro-titanium-shell">

              {/* Physical Hardware Side Buttons */}
              <div className="hw-button action-btn-hw" title="Action Button"></div>
              <div className="hw-button vol-up-hw" title="Volume Up"></div>
              <div className="hw-button vol-down-hw" title="Volume Down"></div>
              <div className="hw-button power-btn-hw" title="Side Power Button"></div>
              <div className="hw-button camera-control-hw" title="Camera Control"></div>

              {/* Back Camera Bump Silhouette */}
              <div className="hw-camera-bump">
                <div className="lens-ring l1"></div>
                <div className="lens-ring l2"></div>
                <div className="lens-ring l3"></div>
              </div>

              {/* iPhone 16 Pro Display Glass Screen */}
              <div className="iphone-16pro-screen">
                
                {/* 1. SCREEN STATE: OFF */}
                {bootState === 'off' && (
                  <div className="screen-blackout"></div>
                )}

                {/* 2. SCREEN STATE: APPLE BOOT LOGO */}
                {bootState === 'logo' && (
                  <div className="apple-boot-screen">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="apple-logo-icon"
                    >
                      
                    </motion.div>
                  </div>
                )}

                {/* 3. SCREEN STATE: LOCK SCREEN */}
                {bootState === 'lock' && (
                  <motion.div
                    className="iphone-lock-screen"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setBootState('unlocked')}
                  >
                    <div className="lock-clock">{currentTime}</div>
                    <div className="lock-date">Sunday, August 2</div>
                    <div className="swipe-unlock-hint">
                      <span className="lock-icon">🔒</span>
                      <span>Tap to Unlock</span>
                    </div>
                  </motion.div>
                )}

                {/* 4. SCREEN STATE: UNLOCKED INTERACTIVE OLED APP GRID */}
                {bootState === 'unlocked' && (
                  <div className="screen-inner-viewport">
                    {/* Dynamic Island Notch */}
                    <div className="dynamic-island">
                      <div className="camera-lens"></div>
                      <div className="sensor-dot"></div>
                    </div>

                    {/* Status Bar */}
                    <div className="iphone-status-bar">
                      <span className="status-time">{currentTime}</span>
                      <div className="status-icons">
                        <span className="icon-signal">📶</span>
                        <span className="icon-wifi">📡</span>
                        <span className="icon-battery">🔋</span>
                      </div>
                    </div>

                    {/* In-App Theme Toggle */}
                    <button
                      className="in-app-theme-toggle"
                      onClick={toggleTheme}
                      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                    >
                      <span className="theme-toggle-icon sun">☀️</span>
                      <motion.span
                        className="theme-toggle-thumb"
                        animate={{ x: theme === 'dark' ? 0 : 22 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                      <span className="theme-toggle-icon moon">🌙</span>
                    </button>

                    {/* VIEW 1: iOS HOME SCREEN */}
                    <AnimatePresence mode="wait">
                      {activeApp === null ? (
                        <motion.div
                          key="home-screen"
                          className="ios-home-screen"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.25 }}
                        >
                          {/* Profile Widget */}
                          <div className="profile-widget">
                            <div className="widget-avatar">SN</div>
                            <div className="widget-info">
                              <div className="widget-name">Sanket Nehe</div>
                              <div className="widget-tagline">React Native Developer & Mobile Architect.</div>
                            </div>
                          </div>

                          {/* App Icon Grid (4 Columns) */}
                          <div className="app-icon-grid">
                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('about')}>
                              <div className="app-icon-box gold-glow-1"><span className="app-glyph">👤</span></div>
                              <span className="app-label">About</span>
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('experience')}>
                              <div className="app-icon-box gold-glow-2"><span className="app-glyph">💼</span></div>
                              <span className="app-label">Experience</span>
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('skills')}>
                              <div className="app-icon-box gold-glow-3"><span className="app-glyph">⚡</span></div>
                              <span className="app-label">Skills</span>
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('builds')}>
                              <div className="app-icon-box gold-glow-4">
                                <span className="app-badge">7</span>
                                <span className="app-glyph">🚀</span>
                              </div>
                              <span className="app-label">Builds</span>
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('contact')}>
                              <div className="app-icon-box gold-glow-5"><span className="app-glyph">✉️</span></div>
                              <span className="app-label">Contact</span>
                            </motion.button>

                            <motion.button whileTap={{ scale: 0.92 }} className="app-icon-item" onClick={() => handleOpenApp('resume')}>
                              <div className="app-icon-box gold-glow-6"><span className="app-glyph">📄</span></div>
                              <span className="app-label">Resume</span>
                            </motion.button>
                          </div>

                          {/* iOS Bottom Dock */}
                          <div className="ios-dock-bar">
                            <motion.button whileTap={{ scale: 0.9 }} className="dock-icon-item" onClick={() => handleOpenApp('builds')} title="Builds">
                              <div className="dock-icon-box">🚀</div>
                            </motion.button>
                            <motion.button whileTap={{ scale: 0.9 }} className="dock-icon-item" onClick={() => handleOpenApp('contact')} title="Contact">
                              <div className="dock-icon-box">✉️</div>
                            </motion.button>
                            <motion.button whileTap={{ scale: 0.9 }} className="dock-icon-item" onClick={() => handleOpenApp('resume')} title="Resume">
                              <div className="dock-icon-box">📄</div>
                            </motion.button>
                          </div>
                        </motion.div>
                      ) : (
                        /* VIEW 2: OPEN APP SCREEN */
                        <motion.div
                          key="app-screen"
                          className="ios-app-viewport"
                          initial={{ opacity: 0, scale: 0.88 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.88 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                        >
                          <div className="app-nav-header">
                            <button className="back-chevron-btn" onClick={handleCloseApp}>
                              <span className="chevron-icon">‹</span>
                              <span>Home</span>
                            </button>
                            <span className="app-header-title">
                              {activeApp === 'about' && 'About Me'}
                              {activeApp === 'experience' && 'Experience'}
                              {activeApp === 'skills' && 'Skills Matrix'}
                              {activeApp === 'builds' && 'Featured Builds'}
                              {activeApp === 'contact' && 'Get In Touch'}
                              {activeApp === 'resume' && 'Resume.pdf'}
                            </span>
                          </div>

                          <div className="app-body-content">
                            {activeApp === 'about' && <AboutExperience />}
                            {activeApp === 'experience' && <AboutExperience />}
                            {activeApp === 'skills' && <Skills />}
                            {activeApp === 'builds' && <Projects />}
                            {activeApp === 'contact' && <Contact />}
                            {activeApp === 'resume' && <ResumeApp />}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* iOS Home Indicator Bar */}
                    <div
                      className="ios-home-indicator interactive-home-bar"
                      onClick={handleCloseApp}
                      title="Return to Home Screen"
                    ></div>

                    {/* Glass Glare Overlay */}
                    <div className="screen-glare"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Replay Controller */}
            <button className="replay-boot-btn" onClick={handleReplay} title="Reboot System">
              <span>↻ Reboot System</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
