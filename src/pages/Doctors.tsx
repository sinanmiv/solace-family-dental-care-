import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { DoctorProfile } from '../components/DoctorProfile';
import { SpecialistTeam } from '../components/SpecialistTeam';
import { siteConfig } from '../config/site.config';
import { Calendar, Phone } from 'lucide-react';

export const Doctors: React.FC = () => {
  return (
    <>
      <SEO
        title="Dr. Muhammed Arshad NS & Specialist Team – Solace Family Dental Care"
        description="Meet Dr. Muhammed Arshad NS and the visiting specialist dental team at Solace Family Dental Care in Pattikkad."
        path="/doctors"
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-16">
          {/* Header */}
          <div className="container-reading text-center space-y-4">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
              OUR DENTAL TEAM
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#263238]">
              The people behind your care.
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7780] leading-relaxed">
              Meet Dr. Muhammed Arshad NS and the visiting specialist team at Solace Family Dental Care in Pattikkad.
            </p>
          </div>

          {/* Dr. Arshad Full Profile */}
          <DoctorProfile doctor={siteConfig.doctors[0]} />

          {/* Specialist Team Section */}
          <SpecialistTeam />

          {/* CTA Band */}
          <div className="bg-[#2FB8A6] text-[#FFFFFF] p-10 md:p-14 rounded-solace text-center space-y-6">
            <h2 className="font-serif text-3xl text-[#FFFFFF]">
              Schedule a consultation with Dr. Muhammed Arshad NS
            </h2>
            <p className="text-sm text-[#FBFCFC] max-w-lg mx-auto">
              Discuss your oral health concerns directly in an unhurried consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#FFFFFF] text-[#263238] font-sans font-semibold text-sm hover:bg-[#F4F6F6] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#2FB8A6]" />
                <span>Book Consultation</span>
              </Link>
              <a
                href={siteConfig.phoneTelLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded border border-[#FFFFFF] text-[#FFFFFF] font-sans font-bold text-sm hover:bg-[#FFFFFF]/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFFFFF]" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
