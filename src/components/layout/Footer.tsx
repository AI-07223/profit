import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { Instagram, Facebook, Send, Phone, Mail, MapPin } from 'lucide-react';

const toSlug = (text: string) => text.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const footerLinks = {
  casino: [
    { name: "Online Casino Software", url: "/casino/online-casino-software" },
    { name: "Live Casino Software", url: "/casino/live-casino-software" },
    { name: "Casino Games", url: "/casino/casino-games" },
    { name: "Lottery & Bingo", url: "/casino/lottery-bingo" },
    { name: "Casino Tournament", url: "/casino/casino-tournament" },
    { name: "Streaming Platform", url: "/casino/streaming-platform" }
  ],
  solutions: [
    { name: "White Label Casino", url: "/white-label/white-label-casino" },
    { name: "Turnkey Casino Software", url: "/solutions/turnkey-casino-software" },
    { name: "Self-Service Casino", url: "/solutions/self-service-casino" },
    { name: "Sportsbook API", url: "/services/sportsbook-solutions-integration-api" },
    { name: "Payment Solutions", url: "/services/online-casino-payment-solutions" },
    { name: "Licensing", url: "/services/licensing" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/">
               <Logo className="h-14" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Profitplus Gaming is an award-winning and rapidly-growing online casino and sports betting software provider Company. 
              We develop quality solutions to ensure your business runs smoothly, successfully, and hassle-free.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Casino Column */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-6 uppercase tracking-wider">Casino</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.casino.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-6 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <div className="flex flex-col">
                  <span>+91 914-8856-886</span>
                  <span>+1 (581) 283-7422</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <span>contact@profitplusgaming.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
                <span>Global Headquarters</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Profitplus Gaming. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
