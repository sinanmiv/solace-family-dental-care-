import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site.config';
import { AsymmetricGallery } from '../components/AsymmetricGallery';
import { Calendar, Phone, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Solace Family Dental Care"
        description="Why Solace exists, our approach to patient care, and what to expect from a visit."
        path="/about"
      />

      <div className="pt-32 pb-24">
        <div className="container-page space-y-20">
          {/* Header & Pull-Quote */}
          <div className="container-reading text-center space-y-6">
            <span className="text-xs uppercase font-sans font-semibold tracking-widest text-[#2FB8A6]">
              ABOUT SOLACE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#263238] leading-tight">
              &ldquo;Solace was built on a simple idea: a visit to the dentist doesn&apos;t have to feel like something to get through. It can feel like something to feel better from.&rdquo;
            </h1>
          </div>

          {/* Brand Story with Large Supporting Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 font-sans text-base text-[#263238] leading-relaxed">
              <h2 className="font-serif text-3xl text-[#263238]">Why Solace exists</h2>
              <p>
                Established in 2013, Solace Family Dental Care has been serving the Pattikkad community in Malappuram for over a decade. We set out to create a dental practice that reverses the traditional rush and noise—combining clinical responsibility with an environment designed to make you feel calm, respected, and understood.
              </p>
              <p>
                Led by Dr. Muhammed Arshad NS (5+ years of clinical experience), our practice provides comprehensive dental care for individuals and families across Pattikkad, Perinthalmanna, and the surrounding Malappuram district in Kerala. We believe that true quality care begins by listening to your concerns and explaining every option clearly.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-solace overflow-hidden border border-[#E1E6E7] bg-[#F4F6F6] shadow-md group">
                <img
                  src={siteConfig.images.consultation}
                  alt="Unhurried dental consultation environment at Solace"
                  loading="lazy"
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-4 bg-[#F4F6F6] text-xs font-sans text-[#6B7780] border-t border-[#E1E6E7]">
                  <span className="font-semibold text-[#263238]">Unhurried consultations &bull;</span> Patient-centered care
                </div>
              </div>
            </div>
          </div>

          {/* Approach to Patient Care */}
          <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-solace p-8 md:p-12 space-y-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
                OUR CLINICAL PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl text-[#263238]">
                Thoughtful, unhurried patient care
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm text-[#263238]">
              <div className="space-y-3 bg-[#FBFCFC] p-6 rounded border border-[#E1E6E7]">
                <div className="w-10 h-10 rounded bg-[#F4F6F6] flex items-center justify-center text-[#2FB8A6]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#263238]">Listening Before Assuming</h3>
                <p className="text-[#6B7780] leading-relaxed">
                  We take the time to hear your concerns, past experiences, and goals. You will never feel rushed out of the chair.
                </p>
              </div>

              <div className="space-y-3 bg-[#FBFCFC] p-6 rounded border border-[#E1E6E7]">
                <div className="w-10 h-10 rounded bg-[#F4F6F6] flex items-center justify-center text-[#2FB8A6]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-[#263238]">No Surprises, Ever</h3>
                <p className="text-[#6B7780] leading-relaxed">
                  Every recommendation is explained in plain terms. You will understand what we see, why we recommend a step, and what it involves.
                </p>
              </div>
            </div>
          </div>

          {/* Team Note */}
          <div className="container-reading space-y-4 font-sans">
            <h2 className="font-serif text-3xl text-[#263238]">Meet the Team</h2>
            <p className="text-base text-[#6B7780] leading-relaxed">
              Dr. Muhammed Arshad NS leads a dedicated team focused on maintaining high standards of clinical safety, patient comfort, and continuous oral health education.
            </p>
            <div className="pt-2">
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2FB8A6] hover:underline"
              >
                <span>Read Dr. Muhammed Arshad NS&apos;s full doctor profile &rarr;</span>
              </Link>
            </div>
          </div>

          {/* Environment Teaser */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#2FB8A6]">
                  OUR SPACE
                </span>
                <h2 className="font-serif text-3xl text-[#263238]">The Clinic Environment</h2>
              </div>
              <Link
                to="/clinic"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2FB8A6] hover:underline"
              >
                <span>View clinic gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <AsymmetricGallery />
          </div>

          {/* CTA Band */}
          <div className="bg-[#2FB8A6] text-[#FFFFFF] p-10 md:p-14 rounded-solace text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFFFFF]">
              Experience a calmer approach to dental care.
            </h2>
            <p className="text-base text-[#FBFCFC] max-w-xl mx-auto">
              We look forward to welcoming you and your family to Solace in Pattikkad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#FFFFFF] text-[#263238] font-sans font-semibold text-sm hover:bg-[#F4F6F6] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#2FB8A6]" />
                <span>Book an Appointment</span>
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
