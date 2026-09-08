import React from 'react';
import { siteConfig } from '../config/site.config';
import { Award, ShieldCheck } from 'lucide-react';

export const SpecialistTeam: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FBFCFC]">
      <div className="container-page space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4F6F6] border border-[#E1E6E7] text-[11px] font-sans font-semibold uppercase tracking-widest text-[#2FB8A6]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VISITING CLINICAL SPECIALISTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#263238] font-medium tracking-tight">
            Specialist care, under one roof
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B7780] leading-relaxed">
            When your treatment requires focused expertise, Solace connects you with visiting specialists across major dental disciplines.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-6 flex items-start gap-4 transition-all duration-300 hover:border-[#2FB8A6] hover:bg-[#FBFCFC] hover:shadow-xs group"
            >
              {/* Subtle Clinical Badge Icon */}
              <div className="w-10 h-10 rounded-full bg-[#FBFCFC] border border-[#E1E6E7] flex items-center justify-center text-[#2FB8A6] group-hover:bg-[#2FB8A6] group-hover:text-[#FFFFFF] transition-colors flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>

              {/* Name & Specialty Crawlable Typography */}
              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#263238] font-medium group-hover:text-[#2FB8A6] transition-colors">
                  {specialist.name}
                </h3>
                <p className="text-xs font-sans font-semibold uppercase tracking-wider text-[#6B7780]">
                  {specialist.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
