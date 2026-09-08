import React, { useState } from 'react';
import { siteConfig } from '../config/site.config';
import type { ServiceConfig } from '../config/site.config';
import { ServiceCard } from './ServiceCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceGridProps {
  services?: ServiceConfig[];
  limit?: number;
  enableExpandToggle?: boolean;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ 
  services = siteConfig.services, 
  limit,
  enableExpandToggle = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const confirmedServices = services.filter(s => s.isConfirmed);
  
  const initialLimit = limit || 6;
  const displayServices = (limit || (!isExpanded && enableExpandToggle && confirmedServices.length > initialLimit))
    ? confirmedServices.slice(0, initialLimit) 
    : confirmedServices;

  const hasMore = confirmedServices.length > initialLimit && !limit && enableExpandToggle;

  return (
    <div className="space-y-10">
      {/* 2-Column Desktop Grid / 1-Column Mobile Grid matching Reference */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {displayServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {hasMore && (
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F4F6F6] border border-[#2FB8A6]/40 text-[#2FB8A6] font-sans font-semibold text-sm hover:bg-[#2FB8A6] hover:text-[#FFFFFF] transition-all duration-300 shadow-xs"
          >
            <span>{isExpanded ? 'Show initial services' : `Explore all ${confirmedServices.length} care services`}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      )}
    </div>
  );
};
