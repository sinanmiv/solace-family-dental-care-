import React from 'react';
import { AlertCircle } from 'lucide-react';

interface VerifyPlaceholderProps {
  label: string;
  className?: string;
  compact?: boolean;
}

export const VerifyPlaceholder: React.FC<VerifyPlaceholderProps> = ({ 
  label, 
  className = '', 
  compact = false 
}) => {
  if (compact) {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EDF3F1] border border-dashed border-[#D6E0DE] text-xs font-sans italic text-[#5B6B6D] ${className}`}>
        <AlertCircle className="w-3.5 h-3.5 text-[#B8975A] flex-shrink-0" />
        <span>{label}</span>
        <span className="text-[10px] uppercase font-semibold tracking-wider text-[#B8975A] ml-1">[Verify with clinic]</span>
      </span>
    );
  }

  return (
    <div className={`p-4 rounded border border-dashed border-[#D6E0DE] bg-[#EDF3F1]/80 text-[#5B6B6D] text-sm font-sans flex items-start gap-3 my-2 ${className}`}>
      <AlertCircle className="w-4 h-4 text-[#B8975A] flex-shrink-0 mt-0.5" />
      <div>
        <div className="font-medium text-[#16232B] flex items-center gap-2">
          <span>{label}</span>
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#E3ECE9] text-[#B8975A] border border-[#B8975A]/20">
            Pending Verification
          </span>
        </div>
        <p className="text-xs italic text-[#5B6B6D] mt-1">
          This detail is pending client verification and will be updated once confirmed by Dr. Arshad.
        </p>
      </div>
    </div>
  );
};
