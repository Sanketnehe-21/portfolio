import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const categories = ['All', 'Mobile', 'Languages', 'Databases', 'APIs & Backend', 'Cloud & Tools', 'Ops'];

const skillsData = [
  // Mobile
  { name: 'React Native', category: 'Mobile', icon: '📱', proficiency: 92 },
  { name: 'Expo', category: 'Mobile', icon: '🚀', proficiency: 90 },
  { name: 'Native Modules', category: 'Mobile', icon: '🧩', proficiency: 85 },
  { name: 'Cross-Platform Android/iOS', category: 'Mobile', icon: '⚡', proficiency: 88 },
  
  // Languages
  { name: 'JavaScript', category: 'Languages', icon: '🟨', proficiency: 95 },
  { name: 'TypeScript', category: 'Languages', icon: '🟦', proficiency: 90 },
  { name: 'HTML5', category: 'Languages', icon: '🌐', proficiency: 95 },
  { name: 'CSS3', category: 'Languages', icon: '🎨', proficiency: 92 },
  { name: 'Python', category: 'Languages', icon: '🐍', proficiency: 85 },
  { name: 'Java', category: 'Languages', icon: '☕', proficiency: 82 },
  { name: 'PHP', category: 'Languages', icon: '🐘', proficiency: 80 },
  { name: 'C', category: 'Languages', icon: '©️', proficiency: 75 },

  // Databases
  { name: 'Firebase Firestore', category: 'Databases', icon: '🔥', proficiency: 92 },
  { name: 'MySQL', category: 'Databases', icon: '🐬', proficiency: 88 },
  { name: 'MongoDB', category: 'Databases', icon: '🍃', proficiency: 85 },

  // APIs & Backend
  { name: 'REST API Integration', category: 'APIs & Backend', icon: '🔗', proficiency: 95 },
  { name: 'Google Maps API', category: 'APIs & Backend', icon: '🗺️', proficiency: 90 },
  { name: 'Real-Time Sync', category: 'APIs & Backend', icon: '🔄', proficiency: 88 },

  // Cloud & Tools
  { name: 'AWS', category: 'Cloud & Tools', icon: '☁️', proficiency: 85 },
  { name: 'GCP', category: 'Cloud & Tools', icon: '🌥️', proficiency: 82 },
  { name: 'Git', category: 'Cloud & Tools', icon: '🌿', proficiency: 95 },
  { name: 'GitHub', category: 'Cloud & Tools', icon: '🐙', proficiency: 92 },
  { name: 'Bitbucket', category: 'Cloud & Tools', icon: '🪣', proficiency: 85 },
  { name: 'VS Code', category: 'Cloud & Tools', icon: '💻', proficiency: 98 },
  { name: 'Figma', category: 'Cloud & Tools', icon: '🖌️', proficiency: 88 },
  { name: 'npm', category: 'Cloud & Tools', icon: '📦', proficiency: 95 },

  // Ops
  { name: 'Application Troubleshooting', category: 'Ops', icon: '🔧', proficiency: 90 },
  { name: 'Log Analysis', category: 'Ops', icon: '📊', proficiency: 88 },
  { name: 'Incident Management', category: 'Ops', icon: '🚨', proficiency: 85 }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">// TECHNICAL STACK</span>
          <h2 className="section-title">Tools, Languages & Architecture</h2>
        </motion.div>
      </div>

      <div className="filter-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-tab ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="skill-card"
            >
              <div className="skill-category-tag">{skill.category}</div>
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-proficiency">
                <div className="proficiency-bar-container">
                  <motion.div 
                    className="proficiency-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
                <div className="proficiency-text">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
