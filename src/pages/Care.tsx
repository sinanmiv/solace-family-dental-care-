import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ServiceGrid } from '../components/ServiceGrid';
import { ShieldCheck, Calendar, Phone } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export const Care: React.FC = () => {
  return (
    <>
      <SEO
        title="Dental Care Services – Solace, Pattikkad"
        description="Preventive, restorative, and root canal care explained clearly, with consultation-first guidance for every treatment."
        path="/care"
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-16">
          {/* Header */}
          <div className="container-reading text-center space-y-4">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
              DENTAL CARE SERVICES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#263238]">
              Care, explained simply.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7780] leading-relaxed">
              We believe in consultation-first dentistry. Explore our baseline confirmed services below, each explained without jargon or absolute promises.
            </p>
          </div>

          {/* Service Grid */}
          <ServiceGrid />

          {/* Reassurance Note */}
          <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#2FB8A6]" />
              <h2 className="font-serif text-2xl text-[#263238]">
                Our Consultation-First Commitment
              </h2>
            </div>
            <p className="font-sans text-base text-[#263238] leading-relaxed max-w-3xl">
              Every procedure begins with a detailed examination and a calm conversation. We discuss all available options, typical timelines, and considerations before any work starts. You remain in complete control of your care decisions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#FFFFFF]" />
                <span>Book a Consultation</span>
              </Link>
              <a
                href={siteConfig.phoneTelLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-[#E1E6E7] text-[#263238] font-sans font-medium text-sm hover:bg-[#E1E6E7] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#2FB8A6]" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
