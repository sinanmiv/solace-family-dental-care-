import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { AsymmetricGallery } from '../components/AsymmetricGallery';
import { siteConfig } from '../config/site.config';
import { Navigation, Calendar } from 'lucide-react';

export const Clinic: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Clinic – Solace Family Dental Care"
        description="A look inside the Solace clinic in Pattikkad — reception, treatment rooms, and care environment."
        path="/clinic"
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-16">
          {/* Header */}
          <div className="container-reading text-center space-y-4">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
              CLINIC ENVIRONMENT
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#263238]">
              A space designed to feel calm, not clinical.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7780] leading-relaxed">
              Take a visual look inside Solace Family Dental Care in Pallikuth, Pattikkad.
            </p>
          </div>

          {/* Gallery Presentation */}
          <AsymmetricGallery />

          {/* Location & Directions Card */}
          <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-[#263238]">
                Visiting Us in Pattikkad
              </h2>
              <p className="font-sans text-sm text-[#6B7780]">
                Located at {siteConfig.address}.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#FFFFFF]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#E1E6E7] bg-[#FBFCFC] text-[#263238] font-sans font-medium text-sm hover:bg-[#F4F6F6] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#2FB8A6]" />
                <span>Book an Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
