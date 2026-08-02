import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'About', id: '#about' },
  { name: 'Experience', id: '#experience' },
  { name: 'Skills', id: '#skills' },
  { name: 'Projects', id: '#projects' },
  { name: 'Contact', id: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.id.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) {
          current = '';
      }

      setActiveSection(`#${current}`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if(targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.div 
        className="navbar-wrapper"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          <a href="#" className="navbar-logo" onClick={(e) => handleSmoothScroll(e, '#')}>
            SANKET<span className="logo-dot">.</span>NEHE
          </a>

          <div className="navbar-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button className="action-cta">
              Resume
            </button>

            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
