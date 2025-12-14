import React from 'react';
import { Instagram, Facebook, Send, Phone } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-zinc-900 text-white text-xs py-2 px-4 border-b border-zinc-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center text-center md:text-left animate-pulse">
          <span className="mr-2 text-yellow-500 text-lg">⚠️</span>
          <p>
            <span className="font-bold text-yellow-500">Beware of fake sites!</span> Profitplus Gaming is the only genuine platform.
            We won’t be responsible if you deal with others claiming to be us. Stay safe.
          </p>
        </div>

            <span className="font-bold text-yellow-500">Beware of fake sites!</span> Profitplus Gaming is the only genuine platform. 
            We won’t be responsible if you deal with others claiming to be us. Stay safe.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Facebook"><Facebook size={16} /></a>
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Telegram"><Send size={16} /></a>
          <a href="#" className="hover:text-yellow-500 transition-colors" aria-label="Skype"><Phone size={16} /></a>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
