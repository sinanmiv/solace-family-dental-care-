import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site.config';
import { Calendar, Phone, ArrowLeft, Clock, HelpCircle, Shield, AlertTriangle } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service || !service.isConfirmed) {
    return <Navigate to="/care" replace />;
  }

  return (
    <>
      <SEO
        title={`${service.name} – Solace Family Dental Care`}
        description={service.shortDesc}
        path={`/care/${service.slug}`}
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-12">
          {/* Back link */}
          <Link
            to="/care"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#6B7780] hover:text-[#2FB8A6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#2FB8A6]" />
            <span>Back to All Dental Care Services</span>
          </Link>

          {/* Header with Procedure-Specific Image Banner */}
          <div className="container-reading space-y-6 border-b border-[#E1E6E7] pb-8">
            <div className="space-y-2">
              <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
                SOLACE CARE DETAIL
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#263238] leading-tight">
                {service.name}
              </h1>
            </div>

            {service.imageUrl && (
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-solace border border-[#E1E6E7] bg-[#F4F6F6]">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#263238]/60 via-transparent to-transparent" />
              </div>
            )}

            <p className="font-sans text-lg text-[#6B7780] leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Core Content Layout */}
          <div className="container-reading space-y-12 font-sans text-[#263238]">
            {/* Section 2: What is it? */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl text-[#263238] flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#2FB8A6]" />
                <span>What is it?</span>
              </h2>
              <p className="text-base text-[#6B7780] leading-relaxed">
                {service.whatIsIt}
              </p>
            </div>

            {/* Section 3: Who is it for? */}
            <div className="space-y-3 bg-[#F4F6F6] p-6 rounded-solace border border-[#E1E6E7]">
              <h2 className="font-serif text-2xl text-[#263238] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2FB8A6]" />
                <span>Who is it for?</span>
              </h2>
              <p className="text-base text-[#263238] leading-relaxed">
                {service.whoIsItFor}
              </p>
            </div>

            {/* Section 4: What does it involve? */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-[#263238]">
                What does it typically involve?
              </h2>
              <div className="space-y-3">
                {service.whatItInvolves.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded bg-[#FBFCFC] border border-[#E1E6E7]">
                    <span className="w-6 h-6 rounded-full bg-[#2FB8A6] text-[#FFFFFF] text-xs font-mono font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-[#263238] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: What to expect */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl text-[#263238]">
                What to expect during your visit
              </h2>
              <p className="text-base text-[#6B7780] leading-relaxed">
                {service.whatToExpect}
              </p>
            </div>

            {/* Section 6: Typical Duration */}
            <div className="space-y-3 flex items-start gap-4 p-5 rounded bg-[#F4F6F6] border border-[#E1E6E7]">
              <Clock className="w-6 h-6 text-[#2FB8A6] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#263238]">How long does it typically take?</h3>
                <p className="text-sm text-[#6B7780] font-mono mt-1">{service.typicalDuration}</p>
              </div>
            </div>

            {/* Section 7: Considerations */}
            <div className="space-y-3">
              <h2 className="font-serif text-2xl text-[#263238] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#2FB8A6]" />
                <span>Important Considerations</span>
              </h2>
              <p className="text-base text-[#6B7780] leading-relaxed">
                {service.considerations}
              </p>
            </div>

            {/* Section 8: Your Consultation */}
            <div className="p-6 rounded bg-[#FBFCFC] border-l-4 border-[#2FB8A6] space-y-2 border border-[#E1E6E7]">
              <h3 className="font-serif text-xl text-[#263238]">Your Consultation at Solace</h3>
              <p className="text-sm text-[#6B7780] leading-relaxed">
                {service.yourConsultation} Your dentist will explain your specific situation and answer any questions before proceeding.
              </p>
            </div>

            {/* Section 9: Contact & Booking CTA */}
            <div className="bg-[#2FB8A6] text-[#FFFFFF] p-8 md:p-10 rounded-solace text-center space-y-6">
              <h3 className="font-serif text-3xl text-[#FFFFFF]">
                Have questions about {service.name}?
              </h3>
              <p className="text-sm text-[#FBFCFC] max-w-lg mx-auto">
                Schedule a consultation to discuss your specific oral health needs in a calm, unhurried environment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#FFFFFF] text-[#263238] font-sans font-semibold text-sm hover:bg-[#F4F6F6] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#2FB8A6]" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={siteConfig.phoneTelLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#FFFFFF] text-[#FFFFFF] font-sans font-bold text-sm hover:bg-[#FFFFFF]/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFFFFF]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
