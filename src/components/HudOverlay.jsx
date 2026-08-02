import React, { useState } from 'react';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function HudContent() {
  const scroll = useScroll();
  const [section, setSection] = useState(0);

  // Form state for Section 4
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useFrame(() => {
    // Assuming 6 pages, 5 intervals (0 to 4)
    // The current scroll logic can divide the offset into 5 sections
    const currentSection = Math.round(scroll.offset * 4.5); // Tune as needed depending on scroll pages
    if (currentSection !== section && currentSection >= 0 && currentSection <= 4) {
      setSection(currentSection);
    }
  });

  const baseStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    color: '#e2dff0',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    overflow: 'hidden'
  };

  const panelStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'auto',
    background: 'rgba(20, 10, 40, 0.65)',
    padding: '2rem 2.5rem',
    border: '1px solid rgba(175, 80, 255, 0.5)',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '550px',
    transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(150, 50, 255, 0.2), inset 0 0 15px rgba(150, 50, 255, 0.1)',
  };

  const glowTitle = {
    margin: '0 0 1rem 0',
    fontSize: '2rem',
    fontWeight: '800',
    color: '#ffffff',
    textShadow: '0 0 10px rgba(200, 100, 255, 0.8)'
  };

  const pillStyle = {
    background: 'rgba(150, 50, 255, 0.2)',
    border: '1px solid rgba(150, 50, 255, 0.4)',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    color: '#d4b3ff'
  };

  const dotContainerStyle = {
    position: 'absolute',
    right: '3%',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    pointerEvents: 'auto',
    zIndex: 50
  };

  return (
    <div style={baseStyle}>
      
      {/* SECTION 0: Sky Island */}
      <div style={{
        ...panelStyle, left: '8%',
        opacity: section === 0 ? 1 : 0,
        transform: `translateY(-50%) scale(${section === 0 ? 1 : 0.95})`,
        pointerEvents: section === 0 ? 'auto' : 'none'
      }}>
        <h1 style={{ ...glowTitle, fontSize: '3rem', letterSpacing: '2px' }}>SANKET NEHE</h1>
        <h3 style={{ margin: '0 0 1.5rem 0', color: '#bca3ff', fontSize: '1.2rem', fontWeight: '500' }}>
          React Native Developer & Mobile Architect
        </h3>
        <p style={{ margin: '0 0 1.5rem 0', opacity: 0.9, lineHeight: '1.5' }}>
          React Native | Expo | Cross-Platform Android & iOS
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
          <span style={pillStyle}>React Native Specialist</span>
          <span style={pillStyle}>Binnys Management Dev</span>
          <span style={pillStyle}>npm Package Creator</span>
          <span style={pillStyle}>Mumbai, India</span>
        </div>
        <p style={{ margin: 0, opacity: 0.7, fontSize: '0.9rem', fontStyle: 'italic' }}>
          &gt; Scroll to explore or click navigation dots.
        </p>
      </div>

      {/* SECTION 1: Knowledge Tower */}
      <div style={{
        ...panelStyle, left: '8%',
        opacity: section === 1 ? 1 : 0,
        transform: `translateY(-50%) scale(${section === 1 ? 1 : 0.95})`,
        pointerEvents: section === 1 ? 'auto' : 'none',
        maxHeight: '70vh',
        overflowY: 'auto'
      }}>
        <h2 style={glowTitle}>Experience & Education</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.3rem 0', color: '#e2dff0' }}>React Native Developer @ Binnys Management</h3>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#bca3ff' }}>(Oct 2025 – Present)</p>
          <ul style={{ margin: '0 0 0 1rem', padding: 0, opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.4' }}>
            <li>Worked on 5 Play Store apps: Create, Vision, Scan, MyBinnyst, Track.</li>
            <li>Optimized UI rendering efficiency & REST API integration.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.3rem 0', color: '#e2dff0' }}>B.E. Computer Engineering</h3>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.85rem', color: '#bca3ff' }}>A. P. Shah Institute of Technology (2021 – 2025)</p>
          <p style={{ margin: 0, opacity: 0.9, fontWeight: 'bold' }}>CGPA: 8.08 / 10.0</p>
        </div>

        <div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#e2dff0' }}>Awards & Certifications</h3>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.4' }}>
            Winner – EXALT 2023–24 (APSIT); Google Ads, Azure DevOps Boards, CISCO IT Essentials, WordPress, C/C++ Certified.
          </p>
        </div>
      </div>

      {/* SECTION 2: Crystal Grid */}
      <div style={{
        ...panelStyle, right: '8%',
        opacity: section === 2 ? 1 : 0,
        transform: `translateY(-50%) scale(${section === 2 ? 1 : 0.95})`,
        pointerEvents: section === 2 ? 'auto' : 'none'
      }}>
        <h2 style={glowTitle}>Technical Skills Matrix</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { cat: 'Mobile', skills: 'React Native, Expo, Native Modules, Cross-Platform Android/iOS' },
            { cat: 'Languages', skills: 'JavaScript, TypeScript, HTML/CSS, Python, Java, PHP, C' },
            { cat: 'Databases', skills: 'Firebase Firestore, MySQL, MongoDB' },
            { cat: 'APIs & Backend', skills: 'REST API Design & Integration, Real-Time Sync, Google Maps API' },
            { cat: 'Cloud & Tools', skills: 'AWS, GCP, Firebase, Git, GitHub, Bitbucket, VS Code, Figma, npm' },
            { cat: 'Ops', skills: 'Log Analysis, Application Troubleshooting, Incident Management' }
          ].map((item, idx) => (
            <div key={idx}>
              <strong style={{ color: '#bca3ff', display: 'block', marginBottom: '0.2rem' }}>{item.cat}</strong>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.skills.split(', ').map(skill => (
                  <span key={skill} style={{ ...pillStyle, fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: Phone Portal */}
      <div style={{
        ...panelStyle, left: '8%',
        opacity: section === 3 ? 1 : 0,
        transform: `translateY(-50%) scale(${section === 3 ? 1 : 0.95})`,
        pointerEvents: section === 3 ? 'auto' : 'none',
        maxHeight: '75vh',
        overflowY: 'auto'
      }}>
        <h2 style={glowTitle}>Featured Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            { title: 'Urban Hive – Smart Urban Services', desc: 'React Native app with Firebase Firestore & Google Maps API. Improved data sync speed by 60%.' },
            { title: 'rn-whiteboard-kit (npm)', desc: 'Expo-compatible whiteboard component (freehand drawing, pinch-zoom, PNG export, hook-based API useWhiteboard()).' },
            { title: 'Brewtech', desc: 'Coffee shop operations management app (inventory, orders, staff tracking).' },
            { title: 'EV Charging Station Finder', desc: 'Google Maps API real-time distance & location-based finder.' },
            { title: 'Agent Live Tracking Platform', desc: 'Cross-platform live tracking & REST API task reporting.' },
            { title: 'Exhibition Tracking System', desc: 'Web & mobile CRUD system for global exhibition records.' },
            { title: 'Arcal', desc: 'Calculator app with third-party Gati REST API rate lookups.' }
          ].map((project, idx) => (
            <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid #bca3ff' }}>
              <h4 style={{ margin: '0 0 0.4rem 0', color: '#fff', fontSize: '1rem' }}>{idx + 1}. {project.title}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.4' }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4: Message Beacon */}
      <div style={{
        ...panelStyle, right: '8%',
        opacity: section === 4 ? 1 : 0,
        transform: `translateY(-50%) scale(${section === 4 ? 1 : 0.95})`,
        pointerEvents: section === 4 ? 'auto' : 'none'
      }}>
        <h2 style={glowTitle}>Contact & Uplink</h2>
        <div style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
          <p style={{ margin: '0' }}>📧 <strong>Email:</strong> <a href="mailto:sanketnehe21@gmail.com" style={{ color: '#bca3ff', textDecoration: 'none' }}>sanketnehe21@gmail.com</a></p>
          <p style={{ margin: '0' }}>📞 <strong>Phone:</strong> +91 93093 67739</p>
          <p style={{ margin: '0' }}>📍 <strong>Location:</strong> Mumbai, India</p>
          <p style={{ margin: '0' }}>🐙 <strong>GitHub:</strong> <a href="https://github.com/Sanketnehe-21" target="_blank" rel="noreferrer" style={{ color: '#bca3ff', textDecoration: 'none' }}>github.com/Sanketnehe-21</a></p>
          <p style={{ margin: '0' }}>🗣️ <strong>Languages:</strong> English, Hindi, Marathi</p>
        </div>

        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Name" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(150, 50, 255, 0.4)', background: 'rgba(0,0,0,0.3)', color: '#fff', outline: 'none' }}
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(150, 50, 255, 0.4)', background: 'rgba(0,0,0,0.3)', color: '#fff', outline: 'none' }}
          />
          <textarea 
            placeholder="Message" 
            rows="3"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(150, 50, 255, 0.4)', background: 'rgba(0,0,0,0.3)', color: '#fff', outline: 'none', resize: 'none' }}
          />
          <button style={{
            padding: '0.8rem', 
            borderRadius: '8px', 
            border: 'none', 
            background: 'linear-gradient(90deg, #6c2bc9, #9d4edd)', 
            color: '#fff', 
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 10px rgba(157, 78, 221, 0.5)',
            transition: 'filter 0.3s'
          }}
          onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.2)'}
          onMouseOut={e => e.currentTarget.style.filter = 'brightness(1)'}
          >
            Send Transmission
          </button>
        </form>
      </div>

      {/* Navigation Dots */}
      <div style={dotContainerStyle}>
        {[0, 1, 2, 3, 4].map(idx => (
          <div 
            key={idx} 
            onClick={() => {
              if (scroll.el) {
                // Approximate smooth scroll to section
                // There are roughly 5 logical stops, so scrollHeight * (idx / 4) or so.
                // Assuming pages={6}, total scrollable height is (6-1)*viewport = 5 pages of scrolling
                scroll.el.scrollTo({ top: (idx / 5) * scroll.el.scrollHeight, behavior: 'smooth' });
              }
            }}
            title={`Go to section ${idx}`}
            style={{ 
              width: '14px', 
              height: '14px', 
              borderRadius: '50%', 
              background: section === idx ? '#bca3ff' : 'rgba(255,255,255,0.1)', 
              border: `2px solid ${section === idx ? '#fff' : 'rgba(150,50,255,0.5)'}`, 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              boxShadow: section === idx ? '0 0 15px rgba(200,100,255,0.8)' : 'none'
            }}
          />
        ))}
      </div>
      
      {/* Scrollbar styling for custom overflow panels */}
      <style>{`
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1); 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(150,50,255,0.5); 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(150,50,255,0.8); 
        }
      `}</style>
    </div>
  );
}

export default function HudOverlay() {
  return (
    <Scroll html style={{ width: '100%', height: '100%' }}>
      <HudContent />
    </Scroll>
  );
}
