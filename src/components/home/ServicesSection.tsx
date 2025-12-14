import React from 'react';
import { Gamepad2, Layers, CreditCard, ShieldCheck, Globe, Database, Smartphone, Trophy, Wallet } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:bg-zinc-900 hover:border-[#D4AF37] transition-all duration-300 group">
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
      icon: <Gamepad2 size={32} />,
      title: "Casino Games Integration",
      description: "Integrate 250+ top game providers under one API. We work with the best to give your customers the ultimate gaming experience."
    },
    {
      icon: <Layers size={32} />,
      title: "Turnkey Casino Software",
      description: "A complete, ready-to-launch casino solution with customizable frontend, powerful backend, and full technical support."
    },
    {
      icon: <Trophy size={32} />,
      title: "Sportsbook Solutions",
      description: "Comprehensive sportsbook software covering 50+ sports, live betting, and competitive odds from major data providers."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Payment Solutions",
      description: "Secure and diverse payment gateway integration supporting cryptocurrencies, e-wallets, and local payment methods."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Licensing & Compliance",
      description: "We assist with obtaining necessary gaming licenses and ensure your platform meets legal and regulatory standards."
    },
    {
      icon: <Database size={32} />,
      title: "Casino Aggregator",
      description: "Access thousands of games from a single integration point. Slots, Live Casino, Poker, and more."
    },
    {
      icon: <Wallet size={32} />,
      title: "Bonus Systems",
      description: "Advanced bonus engines to create custom promotions, loyalty programs, and retention strategies for your players."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile First Design",
      description: "Fully responsive platforms optimized for mobile devices, ensuring a seamless experience for players on the go."
    },
    {
      icon: <Globe size={32} />,
      title: "White Label Casino",
      description: "The fastest way to market. We handle the technical infrastructure, you focus on marketing and brand growth."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive <span className="text-[#D4AF37]">iGaming Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From white label solutions to custom integrations, Profitplus Gaming provides everything you need to succeed in the competitive online gambling market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
