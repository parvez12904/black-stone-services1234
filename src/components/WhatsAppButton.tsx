import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/918554901641?text=Hello%20Black%20Stone%20Services,%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 hover:bg-[#20BD5A] transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">WhatsApp Us</span>
    </a>
  );
};
