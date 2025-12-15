import React from 'react';
import {
  FileImage,
  Megaphone,
  Send,
  Palette,
  Layout,
  Briefcase,
  Headphones,
  Crosshair
} from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:bg-zinc-900 hover:border-[#D4AF37] transition-all duration-300 group min-w-[300px] w-[350px] mx-4 flex-shrink-0">
      <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center text-[#D4AF37] mb-6 border border-zinc-800 group-hover:border-[#D4AF37] transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: <FileImage size={32} />,
      title: "Daily Match Posters",
      description: "High-quality, engaging match posters created daily to keep your audience excited."
    },
    {
      icon: <Megaphone size={32} />,
      title: "Google/Meta Ads",
      description: "Targeted advertising campaigns on Google and Meta platforms to maximize reach."
    },
    {
      icon: <Send size={32} />,
      title: "Telegram Ads",
      description: "Strategic Telegram marketing to tap into highly active communities."
    },
    {
      icon: <Palette size={32} />,
      title: "Logo Design",
      description: "Professional logo design services to establish a strong brand identity."
    },
    {
      icon: <Layout size={32} />,
      title: "Landing Page",
      description: "High-converting landing pages tailored to your specific campaign goals."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Branding Solution",
      description: "A complete, end-to-end branding solution to differentiate you in the market."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Backup Team",
      description: "Reliable support team available around the clock to assist you."
    },
    {
      icon: <Crosshair size={32} />,
      title: "Expert Team",
      description: "Achieve your business targets with guidance from our experienced industry experts."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive <span className="text-[#D4AF37]">iGaming Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From white label solutions to custom integrations, Profitplus Gaming provides everything you need to succeed in the competitive online gambling market.
          </p>
        </div>

        {/* Infinite Horizontal Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of cards */}
            {services.map((service, idx) => (
              <ServiceCard key={`s1-${idx}`} {...service} />
            ))}
            {/* Second set of cards for seamless loop */}
            {services.map((service, idx) => (
              <ServiceCard key={`s2-${idx}`} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
