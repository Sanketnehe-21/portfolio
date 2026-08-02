import React, { useState, useEffect } from 'react';

export default function GtaGpsWidget() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="gta-gps-widget hidden sm:flex flex-col justify-between font-label select-none pointer-events-none">
      <div className="flex justify-between items-center text-[9px] text-[#FF6EC7] font-bold">
        <span>GPS ROUTE</span>
        <span className="text-[#00F0FF]">{Math.round(scrollPercent)}%</span>
      </div>

      {/* Radar Map Circle */}
      <div className="w-16 h-16 mx-auto rounded-full bg-[#130E20] border border-[#FF6EC7]/40 relative flex items-center justify-center overflow-hidden">
        {/* Radar Sweeping Line */}
        <div className="absolute inset-0 border border-[#00F0FF]/30 rounded-full animate-spin" style={{ animationDuration: '4s' }} />

        {/* GPS Route Line */}
        <div
          className="w-full bg-[#FF007F] h-1 transition-all duration-300 shadow-[0_0_8px_#FF007F]"
          style={{ transform: `rotate(${scrollPercent * 3.6}deg)` }}
        />

        {/* Player Location Marker */}
        <div className="w-3 h-3 bg-[#00F0FF] rounded-full border border-white shadow-[0_0_8px_#00F0FF] z-10" />
      </div>

      <div className="text-[8px] text-center text-[#C9B8E8] uppercase tracking-wider">
        LOS SANTOS WAY
      </div>
    </div>
  );
}
