import React from 'react';
import { SEO } from '../components/SEO';
import { AppointmentForm } from '../components/AppointmentForm';

export const Appointment: React.FC = () => {
  return (
    <>
      <SEO
        title="Book an Appointment – Solace Dental"
        description="Request an appointment at Solace Family Dental Care, or call/WhatsApp directly."
        path="/appointment"
      />

      <div className="pt-32 pb-24">
        <div className="container-page">
          <div className="container-reading space-y-10">
            {/* Header */}
            <div className="text-center space-y-4">
              <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
                APPOINTMENT REQUEST
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#263238]">
                Let&apos;s find a time that works.
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#6B7780] leading-relaxed">
                Fill out this short form to request a consultation window, or reach out to us directly over phone or WhatsApp.
              </p>
            </div>

            {/* Form */}
            <AppointmentForm />
          </div>
        </div>
      </div>
    </>
  );
};
