import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function WorldInteractionsLayer() {
  const { world } = useWorld();
  const [bulletHoles, setBulletHoles] = useState([]);
  const [slashes, setSlashes] = useState([]);
  const [breakProgress, setBreakProgress] = useState(0);
  const [breakingTarget, setBreakingTarget] = useState(null);
  const [voxelCubes, setVoxelCubes] = useState([]);
  
  const holdTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const lastMousePosRef = useRef({ x: 0, y: 0 });

  // --------------------------------------------------------
  // GTA V: GUNSHOT BULLET HOLE & MUZZLE FLASH ON CLICK
  // --------------------------------------------------------
  const handleGtaClick = (e) => {
    const newHole = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 8 + 14,
    };
    setBulletHoles((prev) => [...prev.slice(-12), newHole]);
    setTimeout(() => {
      setBulletHoles((prev) => prev.filter((h) => h.id !== newHole.id));
    }, 4000);
  };

  // --------------------------------------------------------
  // TSUSHIMA: KATANA SLASH TRAIL ON MOUSE DRAG / SLICE
  // --------------------------------------------------------
  const handleTsushimaMouseMove = (e) => {
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 25) {
      const newSlash = {
        id: Date.now(),
        x1: lastMousePosRef.current.x,
        y1: lastMousePosRef.current.y,
        x2: e.clientX,
        y2: e.clientY,
      };
      setSlashes((prev) => [...prev.slice(-8), newSlash]);
      setTimeout(() => {
        setSlashes((prev) => prev.filter((s) => s.id !== newSlash.id));
      }, 300);
    }
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  // --------------------------------------------------------
  // MINECRAFT: 3D VOXEL SHATTER PHYSICS ON 1.2s HOLD
  // --------------------------------------------------------
  const handleMinecraftMouseDown = (e) => {
    const card = e.target.closest('.theme-card') || e.target.closest('.inventory-slot');
    if (card) {
      setBreakingTarget(card);
      setBreakProgress(0);

      let step = 0;
      progressIntervalRef.current = setInterval(() => {
        step += 10;
        setBreakProgress(step);
        if (step >= 100) {
          clearInterval(progressIntervalRef.current);
        }
      }, 100);

      holdTimerRef.current = setTimeout(() => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Spawn 18 3D Voxel Cubes scattering outward
        const cubes = Array.from({ length: 18 }).map((_, i) => ({
          id: Date.now() + i,
          x: centerX,
          y: centerY,
          targetX: (Math.random() - 0.5) * 350,
          targetY: (Math.random() - 0.5) * 350 + 100,
          rotX: Math.random() * 720 - 360,
          rotY: Math.random() * 720 - 360,
          scale: Math.random() * 0.8 + 0.6,
        }));
        setVoxelCubes(cubes);

        // Hide mined target temporarily
        card.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
        card.style.transform = 'scale(0) rotate(15deg)';
        card.style.opacity = '0';

        setTimeout(() => {
          card.style.transform = 'scale(1) rotate(0deg)';
          card.style.opacity = '1';
          setVoxelCubes([]);
        }, 2000);

        setBreakProgress(0);
        setBreakingTarget(null);
      }, 1100);
    }
  };

  const cancelMinecraftHold = () => {
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setBreakProgress(0);
    setBreakingTarget(null);
  };

  useEffect(() => {
    const handleGlobalMouseDown = (e) => {
      if (world === 'gta') handleGtaClick(e);
      if (world === 'minecraft') handleMinecraftMouseDown(e);
    };

    const handleGlobalMouseUp = () => {
      if (world === 'minecraft') cancelMinecraftHold();
    };

    const handleGlobalMouseMove = (e) => {
      if (world === 'tsushima') handleTsushimaMouseMove(e);
    };

    window.addEventListener('mousedown', handleGlobalMouseDown);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleGlobalMouseDown);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [world]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden select-none" style={{ perspective: '1000px' }}>
      {/* ---------------------------------------------------- */}
      {/* MINECRAFT: 3D VOXEL CUBE SHATTER PARTICLES           */}
      {/* ---------------------------------------------------- */}
      {world === 'minecraft' &&
        voxelCubes.map((cube) => (
          <motion.div
            key={cube.id}
            initial={{
              x: cube.x,
              y: cube.y,
              rotateX: 0,
              rotateY: 0,
              scale: cube.scale,
              opacity: 1,
            }}
            animate={{
              x: cube.x + cube.targetX,
              y: cube.y + cube.targetY,
              rotateX: cube.rotX,
              rotateY: cube.rotY,
              opacity: 0,
            }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-6 h-6 bg-[#3B2A1A] border-2 border-[#5C4B2A] rounded-xs shadow-[0_4px_10px_rgba(0,0,0,0.8)] font-pixel text-[10px] text-[#4CAF50] flex items-center justify-center font-bold"
            style={{ transformStyle: 'preserve-3d' }}
          >
            🧱
          </motion.div>
        ))}

      {/* ---------------------------------------------------- */}
      {/* GTA V: BULLET HOLE IMPACTS & MUZZLE FLASHES         */}
      {/* ---------------------------------------------------- */}
      {world === 'gta' &&
        bulletHoles.map((hole) => (
          <motion.div
            key={hole.id}
            initial={{ scale: 2, opacity: 1 }}
            animate={{ scale: 1, opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full bg-black border-2 border-[#FF007F] shadow-[0_0_12px_#FF007F]"
            style={{
              left: hole.x - hole.size / 2,
              top: hole.y - hole.size / 2,
              width: hole.size,
              height: hole.size,
            }}
          >
            <div className="absolute inset-0 bg-[#00F0FF] rounded-full animate-ping opacity-75" />
          </motion.div>
        ))}

      {/* ---------------------------------------------------- */}
      {/* TSUSHIMA: KATANA SLASH BLADE STREAKS                */}
      {/* ---------------------------------------------------- */}
      {world === 'tsushima' && (
        <svg className="w-full h-full absolute inset-0 pointer-events-none">
          {slashes.map((s) => (
            <motion.line
              key={s.id}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke="#B23A2E"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ opacity: 1, strokeDashoffset: 0 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ filter: 'drop-shadow(0 0 8px #FFD700)' }}
            />
          ))}
        </svg>
      )}

      {/* ---------------------------------------------------- */}
      {/* MINECRAFT: BLOCK CRACK BREAKING OVERLAY            */}
      {/* ---------------------------------------------------- */}
      {world === 'minecraft' && breakingTarget && breakProgress > 0 && (
        <div
          className="fixed z-[9999] pointer-events-none border-4 border-[#FFC107] bg-black/50 flex items-center justify-center font-pixel text-lg text-[#FFC107] font-bold rounded shadow-2xl"
          style={{
            left: breakingTarget.getBoundingClientRect().left,
            top: breakingTarget.getBoundingClientRect().top,
            width: breakingTarget.getBoundingClientRect().width,
            height: breakingTarget.getBoundingClientRect().height,
          }}
        >
          <div className="w-3/4 h-3.5 bg-black border border-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] transition-all duration-100"
              style={{ width: `${breakProgress}%` }}
            />
          </div>
          <span className="absolute bottom-2 text-xs">MINING BLOCK... {breakProgress}%</span>
        </div>
      )}
    </div>
  );
}
