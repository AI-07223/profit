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
      className="group relative h-64 w-full cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div className={`relative h-full w-full transition-all duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

        {/* Front Face */}
        <div className={`absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br ${demo.themeColor} p-6 backface-hidden shadow-xl flex flex-col items-center justify-center border border-zinc-700 group-hover:border-[#D4AF37] transition-colors`}>
           {/* Logo or Styled Text */}
           {demo.logoUrl ? (
             <img src={demo.logoUrl} alt={demo.name} className="h-16 w-auto object-contain mb-4 drop-shadow-md" onError={(e) => {
               // Fallback if image fails
               e.currentTarget.style.display = 'none';
               e.currentTarget.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
             }} />
           ) : null}

           <h3 className={`text-2xl font-bold text-white tracking-wider uppercase drop-shadow-lg ${demo.logoUrl ? 'hidden fallback-text' : ''}`}>
             {demo.name}
           </h3>

           <p className="mt-4 text-xs font-semibold text-white/80 tracking-widest border border-white/30 px-3 py-1 rounded-full uppercase">
             Click for details
           </p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-zinc-900 p-6 text-slate-200 rotate-y-180 backface-hidden border border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] flex flex-col justify-between">
          <div className="text-center border-b border-zinc-800 pb-2 mb-2">
            <h3 className="text-lg font-bold text-[#D4AF37]">{demo.name}</h3>
          </div>

          <div className="space-y-3">
             <div className="flex items-center justify-between bg-black/40 p-2 rounded">
                <div className="flex items-center gap-2 text-gray-400">
                  <Key size={14} />
                  <span className="text-xs uppercase">ID</span>
                </div>
                <span className="font-mono text-sm text-white">{demo.adminId}</span>
             </div>

             <div className="flex items-center justify-between bg-black/40 p-2 rounded">
                <div className="flex items-center gap-2 text-gray-400">
                  <Lock size={14} />
                  <span className="text-xs uppercase">Pass</span>
                </div>
                <span className="font-mono text-sm text-white">{demo.password}</span>
             </div>
          </div>

          <a
            href={demo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 w-full bg-[#D4AF37] text-black font-bold py-2 rounded hover:bg-[#F4C430] transition-colors text-sm"
            onClick={(e) => e.stopPropagation()} // Prevent flipping back when clicking the link
          >
            Visit Panel <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const DemoSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 4 initially, or all if expanded
  const visibleDemos = showAll ? demoSites : demoSites.slice(0, 4);

  return (
    <section id="demos" className="py-20 bg-black relative">
       {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Premium Access</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Live <span className="text-[#D4AF37]">Demonstrations</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Click on any card to reveal admin credentials. Explore our premium white label solutions directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {visibleDemos.map((demo) => (
            <FlipCard key={demo.id} demo={demo} />
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {demoSites.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-zinc-700 text-gray-300 rounded hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>View All Panels <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default DemoSection;
