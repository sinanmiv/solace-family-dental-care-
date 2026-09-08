import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site.config';
import { AsymmetricGallery } from '../components/AsymmetricGallery';
import { DoctorProfile } from '../components/DoctorProfile';
import { SpecialistTeam } from '../components/SpecialistTeam';
import { HoursTable } from '../components/HoursTable';
import { Star, HeartPulse, Sparkles, ArrowRight, Phone, Navigation, Calendar, Stethoscope, ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const confirmedServices = siteConfig.services.filter(s => s.isConfirmed);

  return (
    <>
      <SEO injectSchema={true} />

      {/* Section 1: Redesigned Hero with Numbered Label Overlay & Service Mega-List */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden relative">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left/Main Hero Image & Overlay */}
            <div className="lg:col-span-8 relative rounded-solace overflow-hidden border border-[#E1E6E7] bg-[#F4F6F6] min-h-[420px] sm:min-h-[480px] shadow-md group">
              <img
                src={siteConfig.images.hero}
                alt="Modern dental suite at Solace Family Dental Care"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#263238]/90 via-[#263238]/40 to-transparent" />

              {/* Numbered Overlay Label Inspired by Reference (Top-Left) */}
              <div className="absolute top-6 left-6 z-10">
                <div className="inline-flex items-center gap-3 bg-[#FBFCFC]/90 backdrop-blur-md px-4 py-2 rounded border border-[#2FB8A6] shadow-sm">
                  <span className="font-mono font-bold text-lg text-[#2FB8A6]">01</span>
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#263238]">
                    Family dental care in Pattikkad
                  </span>
                </div>
              </div>

              {/* Hero Main Copy Overlay (Bottom-Left) */}
              <div className="absolute bottom-8 left-6 right-6 z-10 text-[#FFFFFF] space-y-4 max-w-xl">
                <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-[#FFFFFF] drop-shadow-sm">
                  A calmer, more thoughtful way to care for your teeth.
                </h1>
                <p className="font-sans text-sm sm:text-base text-[#E1E6E7] leading-relaxed">
                  Unhurried consultations and clear explanations for families in Pattikkad and Perinthalmanna.
                </p>

                {/* Dr. Arshad Lead Doctor Clinical Hierarchy Block */}
                <div className="flex items-center gap-3.5 p-2.5 bg-[#263238]/60 backdrop-blur-md rounded-lg border border-[#2FB8A6]/40 max-w-lg shadow-sm">
                  <img
                    src="/images/dr-arshad.jpg"
                    alt="Dr. Arshad - Lead Dentist at Solace Family Dental Care"
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-center border-2 border-[#2FB8A6] flex-shrink-0 shadow-xs"
                  />
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <p className="font-serif text-base sm:text-lg text-[#FFFFFF] font-medium tracking-tight">
                        Dr. Arshad
                      </p>
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider bg-[#2FB8A6]/30 text-[#2FB8A6] px-2 py-0.5 rounded border border-[#2FB8A6]/40">
                        Lead Dentist
                      </span>
                    </div>
                    <p className="text-xs font-sans text-[#E1E6E7]">
                      BDS, Government Dental College, Thiruvananthapuram
                    </p>
                    <p className="text-[11px] font-mono text-[#2FB8A6] font-medium tracking-wide">
                      Dental Registration No. 31208
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-[#FFFFFF]" />
                    <span>Book an appointment</span>
                  </Link>

                  <a
                    href={siteConfig.phoneTelLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#FBFCFC]/90 backdrop-blur-sm border border-[#E1E6E7] text-[#263238] font-sans font-bold text-sm hover:bg-[#FFFFFF] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#2FB8A6]" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Service Categories Panel */}
            <div className="lg:col-span-4 bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-[#E1E6E7] pb-3 mb-4">
                  <h3 className="font-serif text-xl text-[#263238] font-medium">Dental Care Services</h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#2FB8A6] font-semibold">Select Category</span>
                </div>

                <div className="space-y-2">
                  {confirmedServices.map((service, idx) => (
                    <Link
                      key={service.id}
                      to={`/care/${service.slug}`}
                      onMouseEnter={() => setActiveCategory(idx)}
                      className={`flex items-center justify-between p-3 rounded text-xs font-sans transition-all duration-200 ${
                        activeCategory === idx
                          ? 'bg-[#2FB8A6] text-[#FFFFFF] font-semibold shadow-xs'
                          : 'bg-[#FBFCFC] border border-[#E1E6E7] text-[#263238] hover:border-[#2FB8A6]'
                      }`}
                    >
                      <span className="truncate">{service.name}</span>
                      <ChevronRight className={`w-4 h-4 ${activeCategory === idx ? 'text-[#FFFFFF]' : 'text-[#2FB8A6]'}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E1E6E7]">
                <Link
                  to="/care"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded font-sans font-semibold text-xs border border-[#2FB8A6] text-[#2FB8A6] hover:bg-[#2FB8A6] hover:text-[#FFFFFF] transition-colors text-center"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-[#F4F6F6] border-y border-[#E1E6E7] py-4">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm font-sans text-[#263238]">
          <div className="flex items-center gap-2">
            <div className="flex text-[#2FB8A6]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#263238]">
              {siteConfig.trustRating.score} / 5.0 Rating
            </span>
            <span className="text-[#6B7780]">
              ({siteConfig.trustRating.reviewCount} verified Google reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#6B7780]">
            <span className="text-[#2FB8A6] font-bold">&bull;</span>
            <span>Serving Pattikkad &amp; Perinthalmanna</span>
            <span className="text-[#2FB8A6] font-bold">&bull;</span>
            <span>Unrushed Consultations</span>
          </div>
        </div>
      </section>

      {/* Section 2: Three-Column Service Highlights */}
      <section className="py-20">
        <div className="container-page space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
              CONFIRMED SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#263238]">
              Thoughtful care for your oral health
            </h2>
            <p className="font-sans text-sm text-[#6B7780]">
              Each procedure is explained clearly before any work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1: Preventive Care */}
            <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace overflow-hidden flex flex-col justify-between group hover:border-[#2FB8A6] transition-colors shadow-xs">
              <div className="relative h-48 w-full overflow-hidden bg-[#E1E6E7]">
                <img
                  src={confirmedServices[0]?.imageUrl}
                  alt={confirmedServices[0]?.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#FBFCFC]/90 p-2.5 backdrop-blur-sm border border-[#2FB8A6]/40">
                  <Stethoscope className="w-5 h-5 text-[#2FB8A6]" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#263238] font-medium mb-2 group-hover:text-[#2FB8A6] transition-colors">
                    {confirmedServices[0]?.name}
                  </h3>
                  <p className="text-sm font-sans text-[#6B6559] leading-relaxed">
                    {confirmedServices[0]?.shortDesc}
                  </p>
                </div>
                <Link
                  to={`/care/${confirmedServices[0]?.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#2FB8A6] hover:underline"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Highlight 2: Root Canal Treatment */}
            <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace overflow-hidden flex flex-col justify-between group hover:border-[#2FB8A6] transition-colors shadow-xs">
              <div className="relative h-48 w-full overflow-hidden bg-[#E1E6E7]">
                <img
                  src={confirmedServices[3]?.imageUrl}
                  alt={confirmedServices[3]?.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#FBFCFC]/90 p-2.5 backdrop-blur-sm border border-[#2FB8A6]/40">
                  <HeartPulse className="w-5 h-5 text-[#2FB8A6]" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#263238] font-medium mb-2 group-hover:text-[#2FB8A6] transition-colors">
                    {confirmedServices[3]?.name}
                  </h3>
                  <p className="text-sm font-sans text-[#6B6559] leading-relaxed">
                    {confirmedServices[3]?.shortDesc}
                  </p>
                </div>
                <Link
                  to={`/care/${confirmedServices[3]?.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#2FB8A6] hover:underline"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Highlight 3: Cleaning & Scaling */}
            <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace overflow-hidden flex flex-col justify-between group hover:border-[#2FB8A6] transition-colors shadow-xs">
              <div className="relative h-48 w-full overflow-hidden bg-[#E1E6E7]">
                <img
                  src={confirmedServices[1]?.imageUrl}
                  alt={confirmedServices[1]?.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#FBFCFC]/90 p-2.5 backdrop-blur-sm border border-[#2FB8A6]/40">
                  <Sparkles className="w-5 h-5 text-[#2FB8A6]" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl text-[#263238] font-medium mb-2 group-hover:text-[#2FB8A6] transition-colors">
                    {confirmedServices[1]?.name}
                  </h3>
                  <p className="text-sm font-sans text-[#6B6559] leading-relaxed">
                    {confirmedServices[1]?.shortDesc}
                  </p>
                </div>
                <Link
                  to={`/care/${confirmedServices[1]?.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#2FB8A6] hover:underline"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Team / Doctor Section */}
      <section className="py-20 bg-[#F4F6F6] border-y border-[#E1E6E7]">
        <div className="container-page space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
              LEAD DENTIST &amp; TEAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#263238]">
              Care led by people you can trust
            </h2>
          </div>

          <DoctorProfile doctor={siteConfig.doctors[0]} />
        </div>
      </section>

      {/* Specialist Team Section */}
      <SpecialistTeam />

      {/* Section 4: Clinic Environment Teaser */}
      <section className="py-20">
        <div className="container-page space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
                OUR ENVIRONMENT
              </span>
              <h2 className="font-serif text-3xl text-[#263238]">
                Inside Solace Family Dental Care
              </h2>
            </div>
            <Link
              to="/clinic"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#2FB8A6] hover:underline"
            >
              <span>Explore full clinic gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AsymmetricGallery />
        </div>
      </section>

      {/* Section 5: Location & Hours */}
      <section className="py-20 bg-[#F4F6F6] border-t border-[#E1E6E7]">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Hours & Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
                  VISIT US
                </span>
                <h2 className="font-serif text-3xl text-[#263238]">
                  Location &amp; Clinic Hours
                </h2>
                <p className="font-sans text-sm text-[#6B7780]">
                  Conveniently situated in Pallikuth, Chungam, Pattikkad.
                </p>
              </div>

              <div className="p-5 rounded bg-[#FBFCFC] border border-[#E1E6E7] space-y-3 font-sans text-sm text-[#263238]">
                <p className="font-semibold text-[#2FB8A6]">{siteConfig.clinicName}</p>
                <p className="text-[#6B7780]">{siteConfig.address}</p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={siteConfig.phoneTelLink}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2FB8A6] hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{siteConfig.phone}</span>
                  </a>

                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2FB8A6] hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              <HoursTable />
            </div>

            {/* Static Map Preview Block linking to Google Maps */}
            <div className="lg:col-span-7 bg-[#FBFCFC] border border-[#E1E6E7] rounded-solace p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-2 z-10">
                <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6] bg-[#F4F6F6] px-3 py-1 rounded border border-[#E1E6E7]">
                  GOOGLE MAPS LOCATION
                </span>
                <h3 className="font-serif text-2xl text-[#263238] pt-2">
                  Pallikuth, Chungam, Pattikkad
                </h3>
                <p className="text-xs font-sans text-[#6B7780]">
                  Near Perinthalmanna, Malappuram District, Kerala 679325.
                </p>
              </div>

              <div className="my-8 p-6 rounded bg-[#F4F6F6] border border-[#E1E6E7] text-center space-y-3 z-10">
                <Navigation className="w-8 h-8 text-[#2FB8A6] mx-auto" />
                <p className="text-sm font-sans text-[#263238]">
                  Click below to open exact location pin and directions on Google Maps.
                </p>
                <a
                  href={siteConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-xs hover:bg-[#1E8E7F] transition-colors"
                >
                  <span>Open Directions on Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-[11px] font-mono text-[#6B7780] italic z-10">
                Source of truth NAP verified from Google Business Profile
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Final Call to Action */}
      <section className="py-20 bg-[#2FB8A6] text-[#FFFFFF]">
        <div className="container-page text-center max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-4xl text-[#FFFFFF]">
            Ready when you are.
          </h2>
          <p className="font-sans text-base text-[#FBFCFC] leading-relaxed">
            Take the first step toward unhurried, comfortable dental care for you and your family in Pattikkad.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#FFFFFF] text-[#263238] font-sans font-semibold text-base hover:bg-[#F4F6F6] transition-colors shadow-sm"
            >
              <Calendar className="w-5 h-5 text-[#2FB8A6]" />
              <span>Book an appointment</span>
            </Link>

            <a
              href={siteConfig.phoneTelLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded border border-[#FFFFFF] text-[#FFFFFF] font-sans font-bold text-base hover:bg-[#FFFFFF]/10 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FFFFFF]" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
