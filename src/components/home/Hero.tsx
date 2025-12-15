import React from 'react';
import { demoSites } from '../../data/demos';

export const Hero = () => {
  // Take top 9 logos for the grid (3x3 visually looks good, or just a random selection)
  const heroLogos = demoSites.slice(0, 9);

  return (
    <section className="relative min-h-[700px] flex items-center bg-zinc-900 overflow-hidden pt-20 pb-20">
      {/* Background Gradient / Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* Column 1: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-left duration-700">
              Welcome to Profitplus Gaming
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-left duration-700 delay-100">
              All Major Panels Available <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA6C39] via-[#D4AF37] to-[#F4C430]">
                start your own B2B & B2C
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed animate-in fade-in slide-in-from-left duration-700 delay-200">
              All Major Panels Available. Develop your B2B & B2C Master. Be your own boss, leave branch, start your own brand. No Middle Man. Direct From Developing Team. Lowest Sharing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-left duration-700 delay-300">
              <a href="#contact" className="px-8 py-3 bg-[#D4AF37] text-black font-bold text-lg rounded shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#F4C430] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all text-center">
                Start Business
              </a>
              <a href="#demos" className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded hover:bg-[#D4AF37] hover:text-black transition-all text-center">
                View Demos
              </a>
            </div>
          </div>

          {/* Column 2: Logo Grid (Visual only) */}
          <div className="order-1 lg:order-2 flex justify-center">
             <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-sm mx-auto">
               {heroLogos.map((site) => (
                 <div key={site.id} className={`w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${site.themeColor} p-2 flex items-center justify-center shadow-lg border border-white/10 transform hover:scale-105 transition-transform duration-300`}>
                    {site.logoUrl ? (
                      <img src={site.logoUrl} alt={site.name} className="max-w-full max-h-full object-contain drop-shadow-sm" onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.parentElement?.querySelector('.fallback-text-hero')?.classList.remove('hidden');
                      }} />
                    ) : null}
                     <span className={`text-[10px] md:text-xs font-bold text-white text-center leading-tight ${site.logoUrl ? 'hidden fallback-text-hero' : ''}`}>
                       {site.name}
                     </span>
                 </div>
               ))}
             </div>
          </div>

          {/* Column 3: Person Image */}
          <div className="order-3 lg:order-3 hidden lg:block relative h-[500px] flex items-end justify-center">
             {/* Using a stock image of a businessman - similar to reference */}
             <div className="absolute bottom-0 w-full h-full flex items-end justify-center">
               <div className="relative w-full h-full max-w-md">
                 <img
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                   alt="Business Professional"
                   className="w-full h-full object-contain object-bottom drop-shadow-2xl mask-image-gradient"
                   style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                 />
                 {/* Gold accent glow behind */}
                 <div className="absolute -z-10 bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D4AF37] blur-[100px] opacity-20"></div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
