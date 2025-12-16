import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-zinc-900 overflow-hidden">
      {/* Background Gradient / Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-90"></div>
        {/* We could add a background image here if provided */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" style={{ opacity: 0.15 }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative py-20">
        <div className="max-w-3xl">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-left duration-700 fill-mode-forwards">
            Welcome to Profitplus Gaming
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-left duration-700 delay-100 fill-mode-forwards">
            All Major Panels Available <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AA6C39] via-[#D4AF37] to-[#F4C430]">
              start your own B2B & B2C
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-left duration-700 delay-200 fill-mode-forwards">
            All Major Panels Available. Develop your B2B & B2C Master. Be your own boss, leave branch, start your own brand. No Middle Man. Direct From Developing Team. Lowest Sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-700 delay-300 fill-mode-forwards">
            <a href="#contact" className="px-8 py-4 bg-[#D4AF37] text-black font-bold text-lg rounded shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:bg-[#F4C430] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all text-center transform hover:scale-105 active:scale-95 duration-200">
              Start Your Business
            </a>
            <a href="#demos" className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded hover:bg-[#D4AF37] hover:text-black transition-all text-center transform hover:scale-105 active:scale-95 duration-200">
              View Live Demos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
