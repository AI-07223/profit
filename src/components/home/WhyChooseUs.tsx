import React from 'react';
import { CheckCircle, Clock, Zap, Headphones, Settings, TrendingUp } from 'lucide-react';

const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          
          <div className="lg:w-1/2">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Profitplus</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Partner with the <br/><span className="text-[#D4AF37]">Industry Leaders</span></h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              We don't just provide software; we provide a partnership for growth.
              Our white label solutions are designed to minimize your time-to-market while maximizing your revenue potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FeatureItem
              We don't just provide software; we provide a partnership for growth. 
              Our white label solutions are designed to minimize your time-to-market while maximizing your revenue potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FeatureItem 
                icon={<Clock size={24} />}
                title="Fast Setup"
                description="Launch your casino in weeks, not months, with our streamlined onboarding process."
              />
              <FeatureItem
              <FeatureItem 
                icon={<Settings size={24} />}
                title="100% Customizable"
                description="Tailor the look and feel of your platform to match your unique brand identity."
              />
              <FeatureItem
              <FeatureItem 
                icon={<Headphones size={24} />}
                title="24/7 Support"
                description="Dedicated account managers and technical support available round the clock."
              />
              <FeatureItem
              <FeatureItem 
                icon={<TrendingUp size={24} />}
                title="Marketing Tools"
                description="Built-in affiliate systems and CRM tools to help you acquire and retain players."
              />
            </div>
          </div>

          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-black border border-zinc-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">100+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">250+</div>
                  <div className="text-sm text-gray-400">Game Providers</div>
                </div>
                <div className="bg-zinc-900 p-6 rounded-xl text-center border border-zinc-800">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
