import React from 'react';
import Link from 'next/link';
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

const ServiceCard = ({
  icon,
  title,
  description,
  slug,
  index
}: {
  icon: React.ReactNode,
  title: string,
  description: string,
  slug: string,
  index: number
}) => {
  return (
    <Link
      href={`/services/${slug}`}
      className="block h-full animate-in fade-in slide-in-from-bottom duration-700 fill-mode-forwards"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl h-full hover:bg-zinc-900 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300 group">
        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center text-[#D4AF37] mb-6 border border-zinc-800 group-hover:border-[#D4AF37] transition-colors duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      icon: <FileImage size={32} />,
      title: "Daily Match Posters",
      description: "High-quality, engaging match posters created daily to keep your audience excited.",
      slug: "daily-match-posters"
    },
    {
      icon: <Megaphone size={32} />,
      title: "Google/Meta Ads",
      description: "Targeted advertising campaigns on Google and Meta platforms to maximize reach.",
      slug: "google-meta-ads"
    },
    {
      icon: <Send size={32} />,
      title: "Telegram Ads",
      description: "Strategic Telegram marketing to tap into highly active communities.",
      slug: "telegram-ads"
    },
    {
      icon: <Palette size={32} />,
      title: "Logo Design",
      description: "Professional logo design services to establish a strong brand identity.",
      slug: "logo-design"
    },
    {
      icon: <Layout size={32} />,
      title: "Landing Page",
      description: "High-converting landing pages tailored to your specific campaign goals.",
      slug: "landing-page"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Branding Solution",
      description: "A complete, end-to-end branding solution to differentiate you in the market.",
      slug: "branding-solution"
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Backup Team",
      description: "Reliable support team available around the clock to assist you.",
      slug: "backup-team"
    },
    {
      icon: <Crosshair size={32} />,
      title: "Expert Team",
      description: "Achieve your business targets with guidance from our experienced industry experts.",
      slug: "expert-team"
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in zoom-in duration-700">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive <span className="text-[#D4AF37]">iGaming Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From white label solutions to custom integrations, Profitplus Gaming provides everything you need to succeed in the competitive online gambling market.
          </p>
        </div>

        {/* Flex Layout for Centered Last Row */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            // Width calculation:
            // Mobile (1 col): w-full
            // Tablet (2 cols): w-[calc(50%-12px)] (gap-6 is 24px, 24/2 = 12)
            // Desktop (3 cols): w-[calc(33.333%-16px)] (gap-6 is 24px, 24*2/3 = 16)
            <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ServiceCard {...service} index={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
