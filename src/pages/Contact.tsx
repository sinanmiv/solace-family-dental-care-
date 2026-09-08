import React from 'react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site.config';
import { HoursTable } from '../components/HoursTable';
import { AppointmentForm } from '../components/AppointmentForm';
import { VerifyPlaceholder } from '../components/VerifyPlaceholder';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact & Directions – Solace, Pattikkad"
        description="Address, phone, WhatsApp, hours, and directions to Solace Family Dental Care in Pattikkad."
        path="/contact"
        injectSchema={true}
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-16">
          {/* Header */}
          <div className="container-reading text-center space-y-4">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#263238]">
              Contact &amp; Location
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7780] leading-relaxed">
              We welcome your questions and appointment requests. Reach out directly or visit us in Pattikkad.
            </p>
          </div>

          {/* 2-Column Desktop / Stacked Mobile Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards & Hours */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Information Card */}
              <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-6 space-y-5">
                <h2 className="font-serif text-2xl text-[#263238]">
                  Contact Information
                </h2>

                <div className="space-y-4 font-sans text-sm text-[#263238]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2FB8A6] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block">Clinic Address</span>
                      <span className="text-[#6B7780] leading-relaxed block">{siteConfig.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2FB8A6] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block">Phone (Tap to Call)</span>
                      <a href={siteConfig.phoneTelLink} className="text-[#2FB8A6] hover:underline font-bold text-base">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#2FB8A6] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block">WhatsApp</span>
                      <a
                        href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2FB8A6] hover:underline font-mono"
                      >
                        {siteConfig.phone} (Chat on WhatsApp)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2FB8A6] flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold block">Email</span>
                      {siteConfig.email.includes('[VERIFY') ? (
                        <VerifyPlaceholder label="Clinic Email" compact />
                      ) : (
                        <a href={`mailto:${siteConfig.email}`} className="text-[#2FB8A6] hover:underline">
                          {siteConfig.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Hours Table */}
              <HoursTable />
            </div>

            {/* Right Column: Google Maps Location Preview & Enquiry Form */}
            <div className="lg:col-span-7 space-y-10">
              {/* Map Preview */}
              <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl text-[#263238]">Map &amp; Directions</h2>
                  <span className="text-xs font-mono text-[#6B7780]">Pattikkad 679325</span>
                </div>
                <p className="font-sans text-sm text-[#6B7780]">
                  Solace Family Dental Care is located in Pallikuth, Chungam, Pattikkad, Kerala—a short drive from Perinthalmanna.
                </p>

                <div className="pt-2">
                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#FFFFFF]" />
                    <span>Open Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-[#263238]">Send an Enquiry</h2>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
