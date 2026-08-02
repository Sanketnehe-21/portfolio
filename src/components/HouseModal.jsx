import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mcGuiStyle = {
  background: '#C6C6C6',
  borderStyle: 'solid',
  borderWidth: '4px',
  borderColor: '#FFFFFF #555555 #555555 #FFFFFF',
  padding: '20px',
  fontFamily: '"Courier New", Courier, monospace',
  color: '#000',
  position: 'relative',
  width: '90%',
  maxWidth: '600px',
  maxHeight: '90vh',
  overflowY: 'auto',
  imageRendering: 'pixelated',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
};

const mcTitleStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
  marginBottom: '20px',
  textTransform: 'uppercase',
  textShadow: '2px 2px 0px #888',
  color: '#333'
};

const mcBtnStyle = {
  background: '#8B8B8B',
  borderStyle: 'solid',
  borderWidth: '4px',
  borderColor: '#FFFFFF #373737 #373737 #FFFFFF',
  padding: '10px 15px',
  fontFamily: 'inherit',
  fontWeight: 'bold',
  color: '#000',
  cursor: 'pointer',
  display: 'block',
  margin: '20px auto 0',
  textTransform: 'uppercase'
};

const mcCloseBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#8B8B8B',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '#FFFFFF #373737 #373737 #FFFFFF',
  width: '30px',
  height: '30px',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const mcInputStyle = {
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  background: '#000',
  color: '#FFF',
  border: '2px solid #555',
  fontFamily: 'inherit',
  boxSizing: 'border-box'
};

const ContentWrapper = ({ children }) => (
  <div style={{ fontSize: '16px', lineHeight: '1.5' }}>
    {children}
  </div>
);

const houseData = {
  0: {
    title: "🏠 SPAWN COTTAGE // SANKET NEHE",
    content: (
      <ContentWrapper>
        <p>Welcome to my Minecraft Voxel Portfolio! I am a React Native Developer & Mobile Architect. Walk through the village to unlock my full resume data!</p>
      </ContentWrapper>
    ),
    btnText: "Enter Library 🚪➔",
    nextHouse: 1
  },
  1: {
    title: "📖 WISDOM LIBRARY // ABOUT & EXPERIENCE",
    content: (
      <ContentWrapper>
        <p><strong>Experience</strong>: React Native Developer @ <strong>Binnys Management</strong> (Oct 2025 – Present). Built 5 Play Store apps (<em>Create, Vision, Scan, MyBinnyst, Track</em>).</p>
        <p><strong>Education</strong>: B.E. Computer Engineering @ <strong>A. P. Shah Institute of Technology</strong> (CGPA: <strong>8.08 / 10.0</strong>).</p>
        <p><strong>Awards</strong>: Winner – EXALT 2023–24 (APSIT).</p>
        <p><strong>Certifications</strong>: Google Ads, Azure DevOps Boards, CISCO IT Essentials, WordPress, C/C++.</p>
      </ContentWrapper>
    ),
    btnText: "Unlock Armory Workshop 🚪➔",
    nextHouse: 2
  },
  2: {
    title: "⚔️ ARMORY WORKSHOP // TECHNICAL SKILLS",
    content: (
      <ContentWrapper>
        <p><strong>Mobile</strong>: React Native, Expo, Native Modules, Cross-Platform Android/iOS</p>
        <p><strong>Languages</strong>: JavaScript, TypeScript, HTML/CSS, Python, Java, PHP, C</p>
        <p><strong>Databases</strong>: Firebase Firestore, MySQL, MongoDB</p>
        <p><strong>APIs</strong>: REST API Design & Integration, Google Maps API, Real-Time Sync</p>
        <p><strong>Cloud & Tools</strong>: AWS, GCP, Firebase, Git, GitHub, Bitbucket, VS Code, Figma, npm</p>
      </ContentWrapper>
    ),
    btnText: "Unlock Hall of Builds 🚪➔",
    nextHouse: 3
  },
  3: {
    title: "🏰 HALL OF BUILDS // 7 FEATURED PROJECTS",
    content: (
      <ContentWrapper>
        <ol style={{ paddingLeft: '20px', margin: '10px 0' }}>
          <li><strong>Urban Hive – Smart Urban Services</strong>: React Native app with Firebase Firestore & Google Maps API. Improved data sync speed by 60%.</li>
          <li><strong>rn-whiteboard-kit (npm)</strong>: Expo-compatible whiteboard component with freehand drawing, pinch-zoom, PNG export, <code>useWhiteboard()</code> API.</li>
          <li><strong>Brewtech</strong>: Coffee shop operations app for inventory, orders & staff tracking.</li>
          <li><strong>EV Charging Station Finder</strong>: Google Maps API real-time location & distance finder.</li>
          <li><strong>Agent Live Tracking Platform</strong>: Cross-platform live tracking & REST API task reporting.</li>
          <li><strong>Exhibition Tracking System</strong>: Web & mobile CRUD system for exhibition records.</li>
          <li><strong>Arcal</strong>: Calculator app with Gati REST API live rate lookups.</li>
        </ol>
      </ContentWrapper>
    ),
    btnText: "Unlock Beacon Tower 🚪➔",
    nextHouse: 4
  },
  4: {
    title: "📡 BEACON TOWER // CONTACT UPLINK",
    content: (
      <ContentWrapper>
        <p>📧 Email: <code>sanketnehe21@gmail.com</code></p>
        <p>📞 Phone: <code>+91 93093 67739</code></p>
        <p>📍 Location: <code>Mumbai, India</code></p>
        <p>🐙 GitHub: <code>github.com/Sanketnehe-21</code></p>
        <p>🗣️ Languages: English, Hindi, Marathi</p>
        <div style={{ marginTop: '20px', borderTop: '2px dashed #888', paddingTop: '15px' }}>
          <strong style={{ display: 'block', marginBottom: '10px' }}>Quick Transmission Form</strong>
          <input type="text" placeholder="Name" style={mcInputStyle} />
          <input type="email" placeholder="Email" style={mcInputStyle} />
          <textarea placeholder="Message" style={{...mcInputStyle, height: '60px', resize: 'none'}} />
          <button style={{...mcBtnStyle, margin: '10px 0 0', width: '100%'}}>Send Message ⛏️</button>
        </div>
      </ContentWrapper>
    ),
    btnText: "Revisit Village 🏰",
    nextHouse: 0
  }
};

export default function HouseModal({ isOpen, activeHouse, onClose, onNextHouse }) {
  if (!isOpen || activeHouse === null || activeHouse === undefined) return null;

  const house = houseData[activeHouse] || houseData[0];

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1000,
          pointerEvents: 'auto'
        }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          style={mcGuiStyle}
        >
          <button onClick={onClose} style={mcCloseBtnStyle}>X</button>
          
          <div style={mcTitleStyle}>
            {house.title}
          </div>

          <div style={{ padding: '10px', background: '#e6e6e6', border: '2px solid #888', boxShadow: 'inset 2px 2px 0px #555' }}>
            {house.content}
          </div>

          <button 
            style={mcBtnStyle} 
            onClick={() => onNextHouse(house.nextHouse)}
          >
            {house.btnText}
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
