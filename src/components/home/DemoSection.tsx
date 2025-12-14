import React from 'react';
import { ExternalLink, Key } from 'lucide-react';

const DemoCard = ({ title, adminId, password, link, imageColor }: { title: string, adminId: string, password: string, link: string, imageColor: string }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_5px_30px_rgba(212,175,55,0.1)] group">
      {/* Mockup Image Area */}
      <div className={`h-48 ${imageColor} flex items-center justify-center relative`}>
        <div className="text-white text-3xl font-bold opacity-80">{title}</div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
      </div>

      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-between">
          {title}
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:scale-110 transition-transform" title="Visit Website">
            <ExternalLink size={20} />
          </a>
        </h3>

        
        <div className="space-y-3 bg-black/50 p-4 rounded-lg border border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-[#D4AF37]">
              <Key size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Admin ID</p>
              <p className="text-sm font-mono text-white">{adminId}</p>
            </div>
          </div>

          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-[#D4AF37]">
              <Key size={16} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">Password</p>
              <p className="text-sm font-mono text-white">{password}</p>
            </div>
          </div>
        </div>

        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-6 py-2 border border-zinc-700 rounded text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm font-bold">
          LOGIN TO DEMO
        </a>
      </div>
    </div>
  );
};

export const DemoSection = () => {
  const demos = [
    { title: "Taj777", adminId: "AWL038", password: "Demo@1234", link: "#", imageColor: "bg-emerald-900" },
    { title: "World777", adminId: "AWL026", password: "Demo@1234", link: "#", imageColor: "bg-blue-900" },
    { title: "D247", adminId: "AWL026", password: "Demo@1234", link: "#", imageColor: "bg-purple-900" },
    { title: "Diamond Exch", adminId: "AWL031", password: "Demo@1234", link: "#", imageColor: "bg-indigo-900" },
    { title: "Ten Exchange", adminId: "AWL08", password: "Demo@1234", link: "#", imageColor: "bg-rose-900" },
    { title: "Lords Exchange", adminId: "AWL027", password: "Demo@1234", link: "#", imageColor: "bg-amber-900" },
  ];

  return (
    <section id="demos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Live Demonstrations</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Explore Our <span className="text-[#D4AF37]">Premium Panels</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the power of our white label solutions firsthand. Use the credentials below to access the admin dashboards of our top performing platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, idx) => (
            <DemoCard key={idx} {...demo} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default DemoSection;
