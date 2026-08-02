import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWorld } from '../context/WorldContext';

export default function CustomCursor() {
  const { world } = useWorld();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const getCursorIcon = () => {
    switch (world) {
      case 'minecraft':
        return '🗡️';
      case 'gta':
        return '🎯';
      case 'tsushima':
      default:
        return '⚔️';
    }
  };

  const getCursorColor = () => {
    switch (world) {
      case 'minecraft':
        return '#4CAF50';
      case 'gta':
        return '#FF007F';
      case 'tsushima':
      default:
        return '#FFD700';
    }
  };

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          borderColor: getCursorColor(),
          boxShadow: `0 0 15px ${getCursorColor()}`,
        }}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isClicking ? 0.7 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />

      {/* Inner World Icon Pointer */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] text-lg select-none hidden md:block"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isClicking ? 1.2 : isHovered ? 1.3 : 1,
          rotate: isHovered ? 15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
      >
        {getCursorIcon()}
      </motion.div>
    </>
  );
}
