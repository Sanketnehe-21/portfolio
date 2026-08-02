import React, { useMemo } from 'react';
import { useWorld } from '../context/WorldContext';

export default function WorldParticles() {
  const { activeWorldConfig } = useWorld();
  const type = activeWorldConfig.particle;

  const particles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {type === 'leaves' && (
        <>
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute text-red-500/60 animate-leafFall"
              style={{
                left: p.left,
                top: '-5%',
                fontSize: `${p.size + 4}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              🍁
            </div>
          ))}
        </>
      )}

      {type === 'pixels' && (
        <>
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-[var(--grass)]/40 border border-[var(--border-color)] animate-pixelFloat"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </>
      )}

      {type === 'bokeh' && (
        <>
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-gradient-to-r from-pink-500/20 via-cyan-400/20 to-yellow-400/20 blur-sm animate-bokehDrift"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size * 3}px`,
                height: `${p.size * 3}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
