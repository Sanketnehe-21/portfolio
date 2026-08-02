import React from 'react';
import { HOUSE_POSITIONS } from '../game/useGameStore';

export default function GameControls({ unlockedHouses = [0], onSelectHouse }) {
  const houseNames = [
    { id: 0, title: '🏠 Spawn Cottage', icon: '🏠' },
    { id: 1, title: '📖 1. About & XP', icon: '📖' },
    { id: 2, title: '⚔️ 2. Skills Matrix', icon: '⚔️' },
    { id: 3, title: '🏰 3. 7 Projects', icon: '🏰' },
    { id: 4, title: '📡 4. Contact Uplink', icon: '📡' },
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 100, fontFamily: "'Press Start 2P', monospace" }}>
      {/* Top Banner */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        border: '3px solid #7BBF66',
        padding: '12px 24px',
        color: '#FCDB05',
        fontSize: '0.75rem',
        textShadow: '2px 2px 0 #000',
        borderRadius: '4px',
        textAlign: 'center',
        pointerEvents: 'auto',
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
      }}>
        <div>MINECRAFT VILLAGE PORTFOLIO // SANKET NEHE</div>
        <div style={{ fontSize: '0.55rem', color: '#7FFF00', marginTop: '6px' }}>
          🎮 WALK WITH WASD / ARROWS OR CLICK GROUND | APPROACH DOORS TO ENTER
        </div>
      </div>

      {/* Quick House Navigation Bar */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        pointerEvents: 'auto',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 16px',
        borderRadius: '8px',
        border: '2px solid #505050'
      }}>
        {houseNames.map((house) => {
          const isUnlocked = unlockedHouses.includes(house.id);
          return (
            <button
              key={house.id}
              onClick={() => onSelectHouse(house.id)}
              title={house.title}
              style={{
                background: isUnlocked ? '#6B6B6B' : '#333333',
                color: isUnlocked ? '#FFFFFF' : '#888888',
                border: '3px solid',
                borderColor: isUnlocked ? '#A0A0A0 #505050 #505050 #A0A0A0' : '#222',
                padding: '8px 12px',
                fontSize: '0.6rem',
                fontFamily: 'inherit',
                cursor: isUnlocked ? 'pointer' : 'not-allowed',
                textShadow: '1px 1px 0 #000',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{house.icon}</span>
              <span>{isUnlocked ? `House ${house.id}` : '🔒'}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
