import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Care', path: '/care' },
    { name: 'About', path: '/about' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Clinic', path: '/clinic' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFCFC]/95 backdrop-blur-md border-b border-[#E1E6E7] py-3 shadow-xs'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-page flex items-center justify-between">
          {/* Logo Mark + Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Solace Family Dental Care Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#F4F6F6] border border-[#2FB8A6]/40 flex items-center justify-center text-[#2FB8A6] group-hover:bg-[#2FB8A6] group-hover:text-[#FFFFFF] transition-colors shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-medium text-2xl md:text-3xl tracking-tight text-[#263238] transition-colors group-hover:text-[#2FB8A6]">
                SOLACE
              </span>
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#6B7780] -mt-1 hidden sm:block">
                Family Dental Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-sans font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#2FB8A6] font-semibold'
                      : 'text-[#263238] hover:text-[#2FB8A6]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2FB8A6] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Prominent Top-Right Phone & Book CTA */}
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneTelLink}
              className="hidden sm:flex items-center gap-2 text-base md:text-lg font-sans font-bold text-[#2FB8A6] hover:text-[#1E8E7F] transition-colors"
              aria-label={`Call ${siteConfig.phone}`}
            >
              <Phone className="w-5 h-5 text-[#2FB8A6] stroke-[2.5]" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              to="/appointment"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded text-[15px] font-sans font-semibold bg-[#2FB8A6] text-[#FFFFFF] hover:bg-[#1E8E7F] transition-colors shadow-xs focus:ring-2 focus:ring-[#2FB8A6]"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#263238] hover:text-[#2FB8A6] focus:outline-none rounded"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#FBFCFC] flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
          aria-modal="true"
          role="dialog"
        >
          <div className="flex items-center justify-between border-b border-[#E1E6E7] pb-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-serif font-medium text-2xl tracking-tight text-[#2FB8A6]">
                SOLACE
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#263238] hover:text-[#2FB8A6] focus:outline-none rounded"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto py-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif text-3xl transition-colors ${
                    isActive ? 'text-[#2FB8A6] font-semibold' : 'text-[#263238] hover:text-[#2FB8A6]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#E1E6E7]">
            <a
              href={siteConfig.phoneTelLink}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded font-sans font-bold text-[#2FB8A6] text-lg bg-[#F4F6F6] text-center border border-[#2FB8A6]/30"
            >
              <Phone className="w-5 h-5 text-[#2FB8A6]" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              to="/appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded font-sans font-semibold bg-[#2FB8A6] text-[#FFFFFF] text-center shadow-xs"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an appointment</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
