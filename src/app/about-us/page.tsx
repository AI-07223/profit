import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Shield, Users, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Profitplus Gaming',
  description: 'Learn about Profitplus Gaming, the award-winning white label casino software provider.',
};

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Profitplus Gaming</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We are an award-winning and rapidly-growing online casino and sports betting software provider.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Profitplus Gaming was founded with a singular mission: to democratize the iGaming industry by providing high-quality, accessible, and scalable software solutions to operators worldwide.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We develop quality solutions to ensure your business runs smoothly, successfully, and hassle-free. Our focus is on your growth and thriving, while we handle the complex technical infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a team of industry veterans, we understand the challenges of starting a casino or sportsbook. That's why we've built our White Label and Turnkey solutions to be as "plug-and-play" as possible, without sacrificing power or flexibility.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-6 rounded-lg text-center border border-zinc-800">
                <div className="text-[#D4AF37] text-4xl font-bold mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center border border-zinc-800">
                <div className="text-[#D4AF37] text-4xl font-bold mb-2">250+</div>
                <div className="text-gray-400 text-sm">Game Providers</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center border border-zinc-800">
                <div className="text-[#D4AF37] text-4xl font-bold mb-2">50k+</div>
                <div className="text-gray-400 text-sm">Monthly Matches</div>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg text-center border border-zinc-800">
                <div className="text-[#D4AF37] text-4xl font-bold mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Dedicated Support</div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-zinc-900 rounded border border-zinc-800">
              <Target className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-400 text-sm">Constantly pushing the boundaries of what's possible in iGaming tech.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded border border-zinc-800">
              <Shield className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Security</h3>
              <p className="text-gray-400 text-sm">Bank-grade security protocols to protect your data and your players.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded border border-zinc-800">
              <Users className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Partnership</h3>
              <p className="text-gray-400 text-sm">We don't just sell software; we partner with you for long-term success.</p>
            </div>
            <div className="p-6 bg-zinc-900 rounded border border-zinc-800">
              <Trophy className="text-[#D4AF37] mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-gray-400 text-sm">Award-winning support and reliable uptime you can count on.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-[#D4AF37] text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Join the Profitplus Gaming Family</h2>
        <Link 
          href="/contact-us" 
          className="bg-black text-white px-8 py-4 rounded font-bold hover:bg-zinc-800 transition-colors inline-block"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
