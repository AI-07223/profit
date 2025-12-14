import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/home/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Profitplus Gaming',
  description: 'Get in touch with Profitplus Gaming for your white label casino needs.',
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-zinc-900 border-b border-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your iGaming business? Our team is here to answer your questions.
          </p>
        </div>
      </section>

      <ContactForm />

      <section className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">Or reach us directly via:</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <a href="mailto:contact@profitplusgaming.com" className="hover:text-[#D4AF37] transition-colors">
              contact@profitplusgaming.com
            </a>
            <span className="hidden md:inline">|</span>
            <a href="tel:+15812837422" className="hover:text-[#D4AF37] transition-colors">
              +1 (581) 283-7422
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
