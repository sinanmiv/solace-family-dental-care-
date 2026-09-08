import React from 'react';
import { siteConfig } from '../config/site.config';
import { Clock } from 'lucide-react';

interface HoursTableProps {
  compact?: boolean;
}

export const HoursTable: React.FC<HoursTableProps> = ({ compact = false }) => {
  const unverifiedDayExists = siteConfig.openingHours.some(h => !h.isVerified);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-[#0F3D3E]" />
        <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#5B6B6D]">
          Clinic Hours
        </h3>
      </div>

      <div className={`bg-[#EDF3F1] rounded border border-[#D6E0DE] overflow-hidden font-sans ${compact ? 'text-xs' : 'text-xs sm:text-sm'}`}>
        {siteConfig.openingHours.map((item, idx) => (
          <div
            key={item.day}
            className={`flex items-center justify-between px-3.5 py-2.5 ${
              idx !== siteConfig.openingHours.length - 1 ? 'border-b border-[#D6E0DE]' : ''
            } ${!item.isVerified ? 'bg-[#E3ECE9]/60' : ''}`}
          >
            <span className="font-medium text-[#16232B]">{item.day}</span>
            <span className="text-[#5B6B6D] flex items-center gap-1 font-mono">
              {item.hours}
              {!item.isVerified && (
                <span className="text-[#B8975A] font-bold text-xs" title="Hours subject to confirmation">
                  *
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      {unverifiedDayExists && (
        <p className="text-[11px] font-sans italic text-[#5B6B6D] mt-2 flex items-center gap-1">
          <span className="text-[#B8975A] font-bold">*</span>
          <span>Hours subject to confirmation</span>
        </p>
      )}
    </div>
  );
};
