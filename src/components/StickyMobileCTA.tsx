import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBFCFC] border-t border-[#E1E6E7] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lg">
      <div className="grid grid-cols-3 gap-2 items-center text-center">
        {/* Action 1: Call */}
        <a
          href={siteConfig.phoneTelLink}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-[#F4F6F6] hover:bg-[#E1E6E7] text-[#263238] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2FB8A6]"
          aria-label="Call clinic directly"
        >
          <Phone className="w-5 h-5 text-[#2FB8A6] mb-0.5" />
          <span className="text-[11px] font-sans font-medium text-[#263238]">Call</span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-[#F4F6F6] hover:bg-[#E1E6E7] text-[#263238] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2FB8A6]"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#2FB8A6] mb-0.5" />
          <span className="text-[11px] font-sans font-medium text-[#263238]">WhatsApp</span>
        </a>

        {/* Action 3: Book */}
        <Link
          to="/appointment"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded bg-[#2FB8A6] text-[#FFFFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2FB8A6]"
          aria-label="Book an appointment"
        >
          <Calendar className="w-5 h-5 text-[#FFFFFF] mb-0.5" />
          <span className="text-[11px] font-sans font-semibold text-[#FFFFFF]">Book</span>
        </Link>
      </div>
    </div>
  );
};
