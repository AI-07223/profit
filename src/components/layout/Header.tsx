'use client';
import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Helper to convert title to slug
const toSlug = (text: string) => text.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// Explicit slug mapping for complex cases that don't match simple transformation
const slugMap: Record<string, string> = {
  "Sportsbook Solutions & API": "sportsbook-solutions-integration-api",
  "Bank Accounts & Licensing": "bank-accounts", // Should ideally be two separate links, but mapping to one for now or split in UI
  "Live Casino & Slots Bundles": "live-casino-bundle" // Primary mapping
};

const getHref = (category: string, item: string) => {
  if (category === "root") return toSlug(item);
  const slug = slugMap[item] || toSlug(item);
  return `/${category}/${slug}`;
};

const NavLink = ({ href, children, dropdownItems, category }: { href: string; children: React.ReactNode; dropdownItems?: string[]; category?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (dropdownItems && category) {
    return (
      <div 
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors py-2 font-medium">
          {children}
          <ChevronDown size={14} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 w-72 bg-zinc-900 border border-[#D4AF37] shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {dropdownItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={getHref(category, item)}
                className="block px-4 py-3 hover:bg-[#D4AF37] hover:text-black transition-colors text-sm border-b border-zinc-800 last:border-0"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link href={href} className="hover:text-[#D4AF37] transition-colors font-medium py-2">
      {children}
    </Link>
  );
};

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-40 border-b border-zinc-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          
          <NavLink href="#" category="solutions" dropdownItems={[
            "White Label Online Casino Software", 
            "Turnkey Casino Software", 
            "Self-Service Casino"
          ]}>
            Solutions
          </NavLink>
          
          <NavLink href="#" category="services" dropdownItems={[
            "Casino Games Integration", 
            "Casino Games Aggregator", 
            "Online Casino Payment Solutions",
            "Bonus System Standalone",
            "Sportsbook Solutions & API",
            "Bank Accounts",
            "Licensing",
            "Live Casino Bundle",
            "Slots Bundle"
          ]}>
            Services
          </NavLink>
          
          <NavLink href="#" category="casino" dropdownItems={[
            "Online Casino Software", 
            "Live Casino Software", 
            "Casino Games",
            "Lottery & Bingo",
            "Casino Tournament",
            "Streaming Platform"
          ]}>
            Casino
          </NavLink>
          
          <NavLink href="#" category="white-label" dropdownItems={[
            "White Label Betting Platform", 
            "White Label Casino"
          ]}>
            White Label
          </NavLink>

          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact-us" className="bg-[#D4AF37] text-black px-6 py-2 rounded font-bold hover:bg-[#F4C430] transition-colors">
            Create Panel
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 absolute top-full left-0 w-full border-b border-[#D4AF37] shadow-xl overflow-y-auto max-h-[90vh]">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" className="border-b border-zinc-800 pb-2">Home</Link>
            
            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[#D4AF37] font-bold block mb-2">Solutions</span>
              <div className="pl-4 flex flex-col gap-2 text-sm text-gray-300">
                <Link href={getHref("solutions", "White Label Online Casino Software")}>White Label Online Casino Software</Link>
                <Link href={getHref("solutions", "Turnkey Casino Software")}>Turnkey Casino Software</Link>
                <Link href={getHref("solutions", "Self-Service Casino")}>Self-Service Casino</Link>
              </div>
            </div>

            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[#D4AF37] font-bold block mb-2">Services</span>
              <div className="pl-4 flex flex-col gap-2 text-sm text-gray-300">
                <Link href={getHref("services", "Casino Games Integration")}>Casino Games Integration</Link>
                <Link href={getHref("services", "Casino Games Aggregator")}>Casino Games Aggregator</Link>
                <Link href={getHref("services", "Online Casino Payment Solutions")}>Online Casino Payment Solutions</Link>
                <Link href={getHref("services", "Bonus System Standalone")}>Bonus System Standalone</Link>
                <Link href={getHref("services", "Sportsbook Solutions & API")}>Sportsbook Solutions & API</Link>
                <Link href={getHref("services", "Bank Accounts")}>Bank Accounts</Link>
                <Link href={getHref("services", "Licensing")}>Licensing</Link>
                <Link href={getHref("services", "Live Casino Bundle")}>Live Casino Bundle</Link>
                <Link href={getHref("services", "Slots Bundle")}>Slots Bundle</Link>
              </div>
            </div>

            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[#D4AF37] font-bold block mb-2">Casino</span>
              <div className="pl-4 flex flex-col gap-2 text-sm text-gray-300">
                <Link href={getHref("casino", "Online Casino Software")}>Online Casino Software</Link>
                <Link href={getHref("casino", "Live Casino Software")}>Live Casino Software</Link>
                <Link href={getHref("casino", "Casino Games")}>Casino Games</Link>
                <Link href={getHref("casino", "Lottery & Bingo")}>Lottery & Bingo</Link>
                <Link href={getHref("casino", "Casino Tournament")}>Casino Tournament</Link>
                <Link href={getHref("casino", "Streaming Platform")}>Streaming Platform</Link>
              </div>
            </div>

            <div className="border-b border-zinc-800 pb-2">
              <span className="text-[#D4AF37] font-bold block mb-2">White Label</span>
              <div className="pl-4 flex flex-col gap-2 text-sm text-gray-300">
                <Link href={getHref("white-label", "White Label Betting Platform")}>White Label Betting Platform</Link>
                <Link href={getHref("white-label", "White Label Casino")}>White Label Casino</Link>
              </div>
            </div>

            <Link href="/about-us" className="border-b border-zinc-800 pb-2">About Us</Link>
            <Link href="/contact-us" className="border-b border-zinc-800 pb-2">Contact Us</Link>
            
            <Link href="/contact-us" className="bg-[#D4AF37] text-black text-center py-3 font-bold rounded mt-4">
              Create Panel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
