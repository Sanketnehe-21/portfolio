import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import AboutExperience from './AboutExperience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './LandingSequence.css';

// Resume Document Viewer Component
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

export default function LandingSequence() {
  const [stage, setStage] = useState('boot');
  const [activeApp, setActiveApp] = useState(null); // null = Home Screen, or 'about' | 'experience' | 'skills' | 'builds' | 'contact' | 'resume'
  const [currentTime, setCurrentTime] = useState('');
  
  // Theme state
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

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [typingStep, setTypingStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText1 = "INITIALIZING SYSTEM...";
  const fullText2 = "WELCOME BACK, SANKET";

  const canvasRef = useRef(null);
  const appScrollRef = useRef(null);

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

  // Stage 1 Typewriter sequence
  useEffect(() => {
    if (stage !== 'boot') return;

    let timeout;
    if (typingStep === 0) {
      timeout = setTimeout(() => setTypingStep(1), 400);
    } else if (typingStep === 1) {
      if (typedText.length < fullText1.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText1.slice(0, typedText.length + 1));
        }, 45);
      } else {
        timeout = setTimeout(() => {
          setTypedText('');
          setTypingStep(2);
        }, 700);
      }
    } else if (typingStep === 2) {
      if (typedText.length < fullText2.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText2.slice(0, typedText.length + 1));
        }, 55);
      } else {
        setTypingStep(3);
      }
    }
    return () => clearTimeout(timeout);
  }, [stage, typingStep, typedText]);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.3 + 0.1,
      vy: -(Math.random() * 0.3 + 0.1),
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y += p.vy;
        if (p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (stage === 'boot' || stage === 'launching') return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    setTilt({ x: -dy * 6, y: dx * 6 });
  };

  const handleLaunch = () => {
    if (stage !== 'boot') return;
    setStage('launching');

    setTimeout(() => {
      setStage('docked');
      setTimeout(() => {
        setStage('in-app');
      }, 400);
    }, 1900);
  };

  const handleOpenApp = (appId) => {
    setActiveApp(appId);
    if (appScrollRef.current) {
      appScrollRef.current.scrollTop = 0;
    }
  };

  const handleCloseApp = () => {
    setActiveApp(null);
  };

  const handleReplay = () => {
    setStage('boot');
    setActiveApp(null);
    setTypingStep(0);
    setTypedText('');
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={`landing-wrapper stage-${stage}`} onMouseMove={handleMouseMove}>
      <div className="crt-scanlines"></div>
      <canvas ref={canvasRef} className="particle-canvas" />

      <div className={`viewport-shake ${stage === 'launching' ? 'shaking' : ''}`}>
        <div className="ambient-radial-glow" style={{
          transform: `translate(${tilt.y * 3}px, ${tilt.x * 3}px)`
        }}></div>

        {/* STAGE 1: BOOT TERMINAL */}
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
                  <span className="log-text">{typedText}</span>
                  <span className="terminal-cursor">_</span>
                </div>

                {typingStep >= 3 && (
                  <motion.div
                    className="boot-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="boot-subtext">"Back so soon? Sanket welcomes you."</p>
                    
                    <button className="launch-cta-btn btn-primary" onClick={handleLaunch}>
                      <span className="cta-pulse-ring"></span>
                      <span className="cta-text">Let's Deep Dive →</span>
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* STAGE 2: BOTTOM-LEFT ROCKET IGNITION FLARE */}
        {stage === 'launching' && (
          <div className="launch-ignition-burst">
            <div className="amber-ignition-flare"></div>
            <div className="ring-shockwave-left"></div>
          </div>
        )}

        {/* STAGE 3 & 4: REAL DEVICE MOCKUP & iOS HOME SCREEN APP GRID */}
        {(stage === 'launching' || stage === 'docked' || stage === 'in-app') && (
          <motion.div
            className="device-container"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
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
            {/* iPhone Hardware Frame */}
            <div className="iphone-frame">
              
              {/* Dynamic Island Notch */}
              <div className="dynamic-island">
                <div className="camera-lens"></div>
                <div className="sensor-dot"></div>
              </div>

              {/* Status Bar */}
              <div className="iphone-status-bar">
                <span className="status-time">{currentTime || '09:41'}</span>
                <div className="status-icons">
                  <span className="icon-signal">📶</span>
                  <span className="icon-wifi">📡</span>
                  <span className="icon-battery">🔋</span>
                </div>
              </div>

              {/* In-App Theme Toggle Switcher */}
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

              {/* VIEW 1: HOME SCREEN (Profile Widget + App Icon Grid + Dock) */}
              <AnimatePresence mode="wait">
                {activeApp === null ? (
                  <motion.div
                    key="home-screen"
                    className="ios-home-screen"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Compact Profile Widget */}
                    <div className="profile-widget">
                      <div className="widget-avatar">SN</div>
                      <div className="widget-info">
                        <div className="widget-name">Sanket Nehe</div>
                        <div className="widget-tagline">React Native Developer, crafting next-gen mobile apps.</div>
                      </div>
                    </div>

                    {/* App Icon Grid (4-Columns) */}
                    <div className="app-icon-grid">
                      {/* App 1: About */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('about')}
                      >
                        <div className="app-icon-box gold-glow-1">
                          <span className="app-glyph">👤</span>
                        </div>
                        <span className="app-label">About</span>
                      </motion.button>

                      {/* App 2: Experience */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('experience')}
                      >
                        <div className="app-icon-box gold-glow-2">
                          <span className="app-glyph">💼</span>
                        </div>
                        <span className="app-label">Experience</span>
                      </motion.button>

                      {/* App 3: Skills */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('skills')}
                      >
                        <div className="app-icon-box gold-glow-3">
                          <span className="app-glyph">⚡</span>
                        </div>
                        <span className="app-label">Skills</span>
                      </motion.button>

                      {/* App 4: Builds (with Notification Badge) */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('builds')}
                      >
                        <div className="app-icon-box gold-glow-4">
                          <span className="app-badge">7</span>
                          <span className="app-glyph">🚀</span>
                        </div>
                        <span className="app-label">Builds</span>
                      </motion.button>

                      {/* App 5: Contact */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('contact')}
                      >
                        <div className="app-icon-box gold-glow-5">
                          <span className="app-glyph">✉️</span>
                        </div>
                        <span className="app-label">Contact</span>
                      </motion.button>

                      {/* App 6: Resume */}
                      <motion.button
                        whileTap={{ scale: 0.92 }}
                        className="app-icon-item"
                        onClick={() => handleOpenApp('resume')}
                      >
                        <div className="app-icon-box gold-glow-6">
                          <span className="app-glyph">📄</span>
                        </div>
                        <span className="app-label">Resume</span>
                      </motion.button>
                    </div>

                    {/* iOS Bottom Dock Bar */}
                    <div className="ios-dock-bar">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="dock-icon-item"
                        onClick={() => handleOpenApp('builds')}
                        title="Builds"
                      >
                        <div className="dock-icon-box">🚀</div>
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="dock-icon-item"
                        onClick={() => handleOpenApp('contact')}
                        title="Contact"
                      >
                        <div className="dock-icon-box">✉️</div>
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="dock-icon-item"
                        onClick={() => handleOpenApp('resume')}
                        title="Resume"
                      >
                        <div className="dock-icon-box">📄</div>
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  /* VIEW 2: OPEN APP SCREEN (Expand-From-Icon Genie Transition) */
                  <motion.div
                    key="app-screen"
                    className="ios-app-viewport"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    ref={appScrollRef}
                  >
                    {/* Top Minimal Back Chevron Header */}
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

                    {/* App Content Slot */}
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

              {/* iOS Bottom Home Indicator Line (Click/Swipe to Return Home) */}
              <div 
                className="ios-home-indicator interactive-home-bar"
                onClick={handleCloseApp}
                title="Return to Home Screen"
              ></div>

              {/* Glass Reflection Glare */}
              <div className="screen-glare"></div>
            </div>

            {/* Replay Boot Controller */}
            <button className="replay-boot-btn" onClick={handleReplay} title="Reboot System">
              <span>↻ Reboot System</span>
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
