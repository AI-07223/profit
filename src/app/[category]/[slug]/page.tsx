import React from "react";
import { notFound } from "next/navigation";
import { siteContent } from "@/data/siteContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export default function DynamicPage({ params }: Props) {
  const { category, slug } = params;

  
  const categoryData = siteContent[category];

  if (!categoryData) {
    notFound();
  }

  const pageData = categoryData[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-6">
              {category.replace("-", " ").toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              {pageData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
              {pageData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 border-t border-zinc-900 bg-zinc-950/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Description & Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <div className="prose prose-invert prose-lg text-gray-400 mb-12">
                <p className="mb-6">{pageData.description}</p>
                <p>{pageData.content}</p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact-us"
              
              <div className="flex gap-4">
                <Link 
                  href="/contact-us" 
                  className="bg-[#D4AF37] text-black font-bold py-3 px-8 rounded-full hover:bg-[#F4C430] transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact-us"
                <Link 
                  href="/contact-us" 
                  className="border border-zinc-700 text-white font-bold py-3 px-8 rounded-full hover:bg-white/5 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Right Column: Features */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-[#D4AF37] rounded-full"></span>
                Key Features
              </h3>
              <ul className="space-y-6">
                {pageData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#D4AF37] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to Launch?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join the hundreds of successful operators using Profitplus Gaming solutions.
          </p>
          <Link
            href="/contact-us"
          <Link 
            href="/contact-us" 
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-[#F4C430] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            Request a Demo <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
