import React from 'react';
import { Link } from 'react-router-dom';
import type { ServiceConfig } from '../config/site.config';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceConfig;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={`/care/${service.slug}`}
      className="group flex flex-row items-center p-3 sm:p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E1E6E7] hover:border-[#2FB8A6] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2FB8A6] shadow-xs hover:shadow-md"
    >
      {/* Left Side: Photo (45–48% width, full height, rounded corners) */}
      <div className="w-[45%] md:w-[48%] h-36 sm:h-44 md:h-48 rounded-xl overflow-hidden bg-[#E1E6E7] flex-shrink-0 relative">
        {service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt={service.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-[#F4F6F6] flex items-center justify-center text-xs font-mono text-[#6B7780]">
            [Photo]
          </div>
        )}
      </div>

      {/* Right Side: Text Content & Circular Arrow Link */}
      <div className="flex-1 flex flex-col justify-between h-36 sm:h-44 md:h-48 pl-4 sm:pl-5 pr-2 py-1">
        <div className="space-y-1.5">
          {/* Service Name Heading */}
          <h3 className="font-serif font-medium text-base sm:text-lg lg:text-xl text-[#263238] leading-snug group-hover:text-[#2FB8A6] transition-colors line-clamp-2">
            {service.name}
          </h3>

          {/* Uppercase Tagline */}
          <p className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B7780] leading-tight">
            {service.tagline}
          </p>
        </div>

        {/* Bottom-Right Circular Outline Arrow Button */}
        <div className="pt-2 flex justify-start">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#2FB8A6]/60 flex items-center justify-center text-[#2FB8A6] group-hover:bg-[#2FB8A6] group-hover:text-[#FFFFFF] group-hover:border-[#2FB8A6] transition-all duration-300 shadow-xs">
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </div>
        </div>
      </div>
    </Link>
  );
};
