import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import './Hero.css';

// Interactive 3D Smartphone Mesh with Black / Gold Theme
function Smartphone3D() {
  const phoneRef = useRef();

  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      phoneRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={phoneRef} rotation={[0.1, -0.3, 0]}>
        {/* Outer Chassis — Warm Near Black */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 6.2, 0.35]} />
          <meshStandardMaterial color="#161412" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Metallic Gold Edge Light / Bezel */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[3.06, 6.06, 0.35]} />
          <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Front Glass Screen */}
        <mesh position={[0, 0, 0.18]}>
          <planeGeometry args={[2.9, 5.8]} />
          <meshStandardMaterial color="#0A0908" roughness={0.1} metalness={0.5} />
        </mesh>

        {/* App Screen Gold UI Accents */}
        <mesh position={[0, 1.8, 0.19]}>
          <planeGeometry args={[2.5, 0.8]} />
          <meshBasicMaterial color="#D4AF37" />
        </mesh>
        <mesh position={[0, 0.5, 0.19]}>
          <planeGeometry args={[2.5, 1.2]} />
          <meshBasicMaterial color="#1C1916" />
        </mesh>
        <mesh position={[0, -1.0, 0.19]}>
          <planeGeometry args={[2.5, 1.2]} />
          <meshBasicMaterial color="#9C7A26" />
        </mesh>

        {/* Camera Notch */}
        <mesh position={[0, 2.7, 0.19]}>
          <cylinderGeometry args={[0.12, 0.12, 0.05, 16]} rotation={[Math.PI / 2, 0, 0]} />
          <meshBasicMaterial color="#0A0908" />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="top">
      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-gold-dot"></span>
            <span>REACT NATIVE DEVELOPER @ BINNYS MANAGEMENT</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Crafting Next-Gen <span className="text-gradient-gold">Mobile & Cross-Platform</span> Experiences
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Hi, I’m <strong>Sanket Nehe</strong> — Computer Engineering Graduate (<strong>8.08 CGPA</strong>). I engineer cross-platform mobile apps for Google Play Store, publish open-source npm components, and build real-time systems.
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <button onClick={() => scrollToSection('projects')} className="btn-primary">
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Play Store Apps</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">8.08</div>
              <div className="stat-label">B.E. CGPA</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">1</div>
              <div className="stat-label">npm Package</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Smartphone with Gold Rim */}
        <motion.div className="hero-canvas-wrap" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 15, 10]} intensity={1.5} color="#F0CF6C" />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#9C7A26" />
            <Smartphone3D />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
          </Canvas>
          <div className="canvas-hint">Drag to rotate device 📱</div>
        </motion.div>
      </div>
    </section>
  );
}
