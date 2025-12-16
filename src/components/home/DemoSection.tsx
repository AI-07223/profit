"use client";
import React, { useState } from 'react';
import { ExternalLink, Key, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import { demoSites, DemoSite } from '../../data/demos';

const FlipCard = ({ demo }: { demo: DemoSite }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip on click
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group relative h-48 w-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div className={`relative h-full w-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front Face */}
        <div className={`absolute inset-0 h-full w-full rounded-lg bg-gradient-to-br ${demo.themeColor} p-4 backface-hidden shadow-lg flex flex-col items-center justify-center border border-zinc-700 group-hover:border-[#D4AF37] transition-colors`}>
           {/* Logo or Styled Text */}
           {demo.logoUrl ? (
             <img src={demo.logoUrl} alt={demo.name} className="h-12 w-auto object-contain mb-3 drop-shadow-md" onError={(e) => {
               // Fallback if image fails
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
             }} />
           ) : null}

           <h3 className={`text-lg sm:text-xl font-bold text-white tracking-wider uppercase drop-shadow-lg text-center leading-tight ${demo.logoUrl ? 'hidden fallback-text' : ''}`}>
             {demo.name}
           </h3>

           <p className="mt-3 text-[10px] font-semibold text-white/80 tracking-widest border border-white/30 px-2 py-0.5 rounded-full uppercase">
             Details
           </p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-lg bg-zinc-900 p-4 text-slate-200 rotate-y-180 backface-hidden border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] flex flex-col justify-between">
          <div className="text-center border-b border-zinc-800 pb-1 mb-1">
            <h3 className="text-sm font-bold text-[#D4AF37] truncate">{demo.name}</h3>
          </div>

          <div className="space-y-2">
             <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                <div className="flex items-center gap-1 text-gray-400">
                  <Key size={12} />
                  <span className="text-[10px] uppercase">ID</span>
                </div>
                <span className="font-mono text-xs text-white truncate max-w-[80px]">{demo.adminId}</span>
             </div>

             <div className="flex items-center justify-between bg-black/40 p-1.5 rounded">
                <div className="flex items-center gap-1 text-gray-400">
                  <Lock size={12} />
                  <span className="text-[10px] uppercase">PW</span>
                </div>
                <span className="font-mono text-xs text-white truncate max-w-[80px]">{demo.password}</span>
             </div>
          </div>

          <a
            href={demo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-1 w-full bg-[#D4AF37] text-black font-bold py-1.5 rounded hover:bg-[#F4C430] transition-colors text-xs"
            onClick={(e) => e.stopPropagation()} // Prevent flipping back when clicking the link
          >
            Login <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const DemoSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 8 initially, or all if expanded
  const visibleDemos = showAll ? demoSites : demoSites.slice(0, 8);

  return (
    <section id="demos" className="py-16 bg-black relative">
       {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-xs mb-2 block">Premium Access</span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Live <span className="text-[#D4AF37]">Demonstrations</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Click on any card to reveal admin credentials.
          </p>
        </div>

        {/* Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {visibleDemos.map((demo, index) => (
            // Logic: If !showAll, items at index 6 and 7 should be hidden on mobile (below lg)
            // But visible on desktop (lg and up)
            // Indices 0-5 are always visible.
            // Indices 6-7 are hidden on < lg if !showAll (Wait, visibleDemos length is 8, so indices go up to 7).
            // So if index >= 6, add "hidden lg:block".
            // If showAll is true, we want them visible everywhere (default block).
            <div key={demo.id} className={!showAll && index >= 6 ? "hidden lg:block" : ""}>
               <FlipCard demo={demo} />
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {demoSites.length > 8 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2 border border-zinc-700 text-gray-300 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 text-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>View All Panels <ChevronDown size={14} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default DemoSection;
