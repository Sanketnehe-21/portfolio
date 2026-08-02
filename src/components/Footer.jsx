import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[var(--card-surface)] border-t-2 border-[var(--border-color)] py-16 px-6 md:px-12 lg:px-20 relative font-body text-xs z-20">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 pb-10 border-b border-dashed border-[var(--border-color)] w-full">
          {/* Left Logo Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[var(--accent-primary)] text-white font-label font-bold flex items-center justify-center text-xs">
                SN
              </div>
              <span className="font-heading font-bold text-lg text-[var(--text-primary)]">
                SANKET<span className="text-[var(--accent-primary)]">.</span>NEHE
              </span>
            </div>
            <p className="font-body text-xs text-[var(--text-secondary)] max-w-lg leading-relaxed">
              React Native Developer & Mobile Architect crafting cross-platform experiences, npm libraries, and real-time systems. Inspired by tactical UI & creative design.
            </p>
          </div>

          {/* Center Navigation */}
          <div className="md:col-span-3 space-y-2 font-mono">
            <div className="font-label text-[10px] text-[var(--accent-primary)] uppercase tracking-wider mb-2">
              QUICK NAVIGATION
            </div>
            <div className="flex flex-col gap-2 text-[11px] text-[var(--text-secondary)]">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left hover:text-[var(--accent-primary)] transition-colors capitalize"
                >
                  › {id}
                </button>
              ))}
            </div>
          </div>

          {/* Right Connect */}
          <div className="md:col-span-3 space-y-2 font-mono">
            <div className="font-label text-[10px] text-[var(--accent-primary)] uppercase tracking-wider mb-2">
              CONNECT & SOCIALS
            </div>
            <div className="flex flex-col gap-2 text-[11px] text-[var(--text-secondary)]">
              <a
                href="https://github.com/Sanketnehe-21"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent-primary)] transition-colors"
              >
                › GitHub Repository
              </a>
              <a href="mailto:sanketnehe21@gmail.com" className="hover:text-[var(--accent-primary)] transition-colors">
                › Direct Email
              </a>
              <a href="tel:+919309367739" className="hover:text-[var(--accent-primary)] transition-colors">
                › WhatsApp / Phone
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[var(--text-muted)] w-full">
          <div>
            © 2026 Sanket Nehe. Built with React Native, React, Tailwind CSS & Framer Motion.
          </div>
          <button
            onClick={scrollToTop}
            className="btn-kraft py-2 px-4 text-[10px] flex items-center gap-2"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
