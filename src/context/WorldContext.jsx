import React, { createContext, useContext, useState, useEffect } from 'react';

import minecraftBg from '../assets/wallpaper/minecraft.png';
import gtaBg from '../assets/wallpaper/gta.png';
import tsushimaBg from '../assets/wallpaper/ghost of tushima.png';

import minecraftSplash from '../assets/splash/minecraft.png';
import gtaSplash from '../assets/splash/gta.jpg';
import tsushimaSplash from '../assets/splash/ghostoftushima.jpg';

const WorldContext = createContext();

export const WORLDS = {
  tsushima: {
    id: 'tsushima',
    name: 'Tsushima',
    tagline: 'Ghost of Tsushima',
    icon: '🍁',
    symbol: '⛩️',
    bg: tsushimaBg,
    splash: tsushimaSplash,
    accent: '#B23A2E',
    primary: '#C9A227',
    particle: 'leaves',
  },
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft',
    tagline: 'Voxel Deepslate World',
    icon: '🟩',
    symbol: '🧱',
    bg: minecraftBg,
    splash: minecraftSplash,
    accent: '#4CAF50',
    primary: '#38B6FF',
    particle: 'pixels',
  },
  gta: {
    id: 'gta',
    name: 'Los Santos',
    tagline: 'GTA V Sunset Neon',
    icon: '🌆',
    symbol: '🏎️',
    bg: gtaBg,
    splash: gtaSplash,
    accent: '#FF007F',
    primary: '#00F0FF',
    particle: 'bokeh',
  },
};

export function WorldProvider({ children }) {
  const [world, setWorldState] = useState(() => {
    const saved = localStorage.getItem('sanket-world');
    return saved && WORLDS[saved] ? saved : 'tsushima';
  });

  const setWorld = (worldId) => {
    if (WORLDS[worldId]) {
      setWorldState(worldId);
      localStorage.setItem('sanket-world', worldId);
      document.documentElement.setAttribute('data-world', worldId);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-world', world);
  }, [world]);

  const activeWorldConfig = WORLDS[world];

  return (
    <WorldContext.Provider value={{ world, setWorld, activeWorldConfig, WORLDS }}>
      {children}
    </WorldContext.Provider>
  );
}

export function useWorld() {
  return useContext(WorldContext);
}
