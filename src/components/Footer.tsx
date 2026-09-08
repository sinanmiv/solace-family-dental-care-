import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Navigation, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { HoursTable } from './HoursTable';
import { VerifyPlaceholder } from './VerifyPlaceholder';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FBFCFC] text-[#263238] border-t border-[#E1E6E7] pt-16 pb-24 md:pb-16 font-sans">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#E1E6E7]">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F4F6F6] border border-[#2FB8A6]/40 flex items-center justify-center text-[#2FB8A6]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif font-medium text-2xl tracking-tight text-[#263238]">
                  SOLACE
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#6B7780]">
                  Family Dental Care
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#6B7780] leading-relaxed">
              {siteConfig.positioningStatement}
            </p>
            <div className="pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#2FB8A6] text-[#FFFFFF] text-xs font-semibold hover:bg-[#1E8E7F] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an appointment</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Contact & Address */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#6B7780]">
              Contact &amp; Location
            </h3>
            
            <div className="space-y-3 text-sm text-[#263238]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2FB8A6] flex-shrink-0 mt-1" />
                <span>{siteConfig.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2FB8A6] flex-shrink-0" />
                <a
                  href={siteConfig.phoneTelLink}
                  className="hover:text-[#2FB8A6] font-bold text-[#2FB8A6]"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2FB8A6] flex-shrink-0" />
                {siteConfig.email.includes('[VERIFY') ? (
                  <VerifyPlaceholder label="Clinic Email" compact />
                ) : (
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#2FB8A6]">
                    {siteConfig.email}
                  </a>
                )}
              </div>
            </div>

            <div className="pt-1">
              <a
                href={siteConfig.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2FB8A6] hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get directions on Google Maps &rarr;</span>
              </a>
            </div>
          </div>

          {/* Column 3: Clinic Hours */}
          <div>
            <HoursTable compact />
          </div>

          {/* Column 4: Quick Navigation & Legal */}
          <div className="space-y-4">
            <h3 className="font-sans font-semibold text-xs uppercase tracking-wider text-[#6B7780]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#263238]">
              <li>
                <Link to="/" className="hover:text-[#2FB8A6] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-[#2FB8A6] transition-colors">Dental Care Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#2FB8A6] transition-colors">About Solace</Link>
              </li>
              <li>
                <Link to="/doctors" className="hover:text-[#2FB8A6] transition-colors">Meet Dr. Arshad</Link>
              </li>
              <li>
                <Link to="/clinic" className="hover:text-[#2FB8A6] transition-colors">Inside Our Clinic</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2FB8A6] transition-colors">Contact &amp; Location</Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-[#2FB8A6] transition-colors">Book Consultation</Link>
              </li>
            </ul>

            {/* Social Links conditional rendering */}
            {siteConfig.socialLinks.isConfirmed && (
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-[#6B7780] uppercase tracking-wider mb-2">
                  Follow Us
                </h4>
                <div className="flex gap-3 text-xs text-[#2FB8A6]">
                  {siteConfig.socialLinks.facebook && (
                    <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:underline">
                      Facebook
                    </a>
                  )}
                  {siteConfig.socialLinks.instagram && (
                    <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Copyright & Creator Credit */}
        <div className="pt-8 text-xs text-[#6B7780] leading-relaxed">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#E1E6E7]">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.clinicName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span>
                Created by{' '}
                <a
                  href="https://vandr-space.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#2FB8A6] hover:underline"
                >
                  vandr.space
                </a>
              </span>
              <span>&middot;</span>
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span>&middot;</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
