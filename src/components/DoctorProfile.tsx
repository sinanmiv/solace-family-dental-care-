import React from 'react';
import type { DoctorConfig } from '../config/site.config';
import { siteConfig } from '../config/site.config';
import { VerifyPlaceholder } from './VerifyPlaceholder';
import { Award, FileText, CheckCircle2, Quote, Calendar, Phone, Clock } from 'lucide-react';

interface DoctorProfileProps {
  doctor: DoctorConfig;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor }) => {
  return (
    <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-6 md:p-10 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Circular Portrait & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-5">
            {/* Doctor Portrait Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#2FB8A6] flex-shrink-0 shadow-md">
              <img
                src={doctor.imageUrl || "/images/dr-arshad.jpg"}
                alt={`${doctor.name} - ${doctor.title}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl text-[#263238] font-medium mb-1">
                {doctor.name}
              </h2>
              <p className="text-sm font-sans font-semibold text-[#2FB8A6]">
                {doctor.title} &middot; Solace Family Dental Care
              </p>
              {doctor.qualifications && (
                <p className="text-xs font-sans text-[#6B7780] mt-1">
                  {doctor.qualifications}
                </p>
              )}
              {doctor.registrationNumber && (
                <p className="text-xs font-mono text-[#6B7780] mt-0.5">
                  {doctor.registrationNumber}
                </p>
              )}
            </div>
          </div>

          {/* Philosophy Quote */}
          <div className="p-5 rounded bg-[#FBFCFC] border-l-4 border-[#2FB8A6] relative">
            <Quote className="w-8 h-8 text-[#2FB8A6]/20 absolute top-3 right-3" />
            <p className="font-serif italic text-base md:text-lg text-[#263238] leading-relaxed">
              &ldquo;{doctor.philosophy}&rdquo;
            </p>
          </div>

          {/* Bio Narrative */}
          <p className="font-sans text-base text-[#263238] leading-relaxed">
            {doctor.biography}
          </p>

          {/* Qualifications & Registration Section */}
          <div className="space-y-4 pt-4 border-t border-[#E1E6E7]">
            <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#6B7780]">
              Credentials &amp; Clinical Verification
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-medium text-[#6B7780] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#2FB8A6]" />
                  <span>Qualifications:</span>
                </span>
                {doctor.isQualificationsVerified && doctor.qualifications ? (
                  <span className="text-xs font-semibold text-[#263238] block">{doctor.qualifications}</span>
                ) : (
                  <VerifyPlaceholder label="Doctor Qualifications" compact />
                )}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-medium text-[#6B7780] flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#2FB8A6]" />
                  <span>State Registration:</span>
                </span>
                {doctor.isRegistrationVerified && doctor.registrationNumber ? (
                  <span className="text-xs font-semibold text-[#263238] block">{doctor.registrationNumber}</span>
                ) : (
                  <VerifyPlaceholder label="Registration Number" compact />
                )}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-medium text-[#6B7780] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2FB8A6]" />
                  <span>Clinical Experience:</span>
                </span>
                <span className="text-xs font-semibold text-[#263238] block">5+ years of clinical experience</span>
              </div>
            </div>
          </div>

          {/* Areas of Practice */}
          <div className="pt-4 border-t border-[#E1E6E7] space-y-3">
            <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#6B7780]">
              Primary Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.areasOfPractice.map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#263238]">
                  <CheckCircle2 className="w-4 h-4 text-[#2FB8A6] flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Slate Blue-Grey Sidebar Info Card (--color-surface-slate #7C8B99) */}
        <div className="lg:col-span-5 bg-[#7C8B99] text-[#FFFFFF] rounded-solace p-8 flex flex-col justify-between space-y-6 shadow-md">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-sans font-semibold tracking-wider bg-[#2FB8A6] text-[#FFFFFF] px-3 py-1 rounded">
              <Calendar className="w-3.5 h-3.5" />
              <span>Appointments by Request</span>
            </div>

            <h3 className="font-serif text-2xl text-[#FFFFFF] font-medium leading-tight">
              Schedule your visit with Dr. Arshad
            </h3>

            <p className="text-xs text-[#E1E6E7] leading-relaxed">
              We ensure unhurried consultations for individuals and families in Pattikkad. Call or request online.
            </p>
          </div>

          {/* Opening Hours Summary */}
          <div className="border-t border-[#FFFFFF]/20 pt-4 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-[#FFFFFF] uppercase tracking-wider text-[11px]">
              <Clock className="w-4 h-4 text-[#2FB8A6]" />
              <span>Standard Hours</span>
            </div>
            <p className="text-[#E1E6E7] font-mono">Mon – Sat: 9:30 AM – 7:30/8:00 PM</p>
            <p className="text-[#E1E6E7] font-mono">Sun: Closed</p>
          </div>

          {/* Prominent Phone Call Section */}
          <div className="border-t border-[#FFFFFF]/20 pt-4 space-y-3">
            <span className="text-xs text-[#E1E6E7] block font-medium">Direct Clinic Contact:</span>
            <a
              href={siteConfig.phoneTelLink}
              className="flex items-center gap-2 text-2xl font-sans font-bold text-[#FFFFFF] hover:text-[#2FB8A6] transition-colors"
            >
              <Phone className="w-6 h-6 text-[#2FB8A6]" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
