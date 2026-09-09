import React, { useState } from 'react';
import { siteConfig } from '../config/site.config';
import { Phone, CheckCircle, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const AppointmentForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [reason, setReason] = useState<string>('General checkup & consultation');
  const [preferredWindow, setPreferredWindow] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');

  // Error State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const reasonsList = [
    'General checkup & consultation',
    'Tooth pain or discomfort',
    'Dental cleaning & scaling',
    'Root canal inquiry',
    'Crowns, bridges or dentures',
    'Clear Aligners & Orthodontic guidance',
    'Other / General inquiry'
  ];

  const buildWhatsAppMessage = () => {
    let msg = `Hello Solace Family Dental Care, I would like to book an appointment:\n\n`;
    if (fullName) msg += `• *Name:* ${fullName}\n`;
    if (phoneNumber) msg += `• *Phone:* ${phoneNumber}\n`;
    if (reason) msg += `• *Reason:* ${reason}\n`;
    if (preferredWindow) msg += `• *Preferred Time:* ${preferredWindow}\n`;
    if (emailAddress) msg += `• *Email:* ${emailAddress}\n`;
    return msg;
  };

  const getWhatsAppUrl = () => {
    return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }
    if (!phoneNumber.trim() || phoneNumber.length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number for confirmation.';
    }
    return newErrors;
  };

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};
    if (step === 2 && !preferredWindow.trim()) {
      newErrors.preferredWindow = 'Please specify your preferred day or time window.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    window.open(getWhatsAppUrl(), '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#FBFCFC] border border-[#E1E6E7] rounded-xl p-8 md:p-12 text-center space-y-6 animate-in fade-in duration-300 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-[#2FB8A6]/10 text-[#2FB8A6] flex items-center justify-center mx-auto border border-[#2FB8A6]/30">
          <CheckCircle className="w-10 h-10 text-[#2FB8A6]" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h2 className="font-serif text-3xl text-[#263238]">
            Thank you, {fullName || 'Patient'}
          </h2>
          <p className="font-sans text-base text-[#6B7780] leading-relaxed">
            Your appointment request has been recorded. Our team will contact you at <strong className="font-semibold text-[#263238]">{phoneNumber}</strong> to confirm your slot.
          </p>
        </div>

        {/* WhatsApp Direct Action Box */}
        <div className="p-6 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 max-w-md mx-auto space-y-3 text-center">
          <p className="font-sans font-semibold text-sm text-[#263238]">
            Want instant confirmation over WhatsApp?
          </p>
          <p className="text-xs text-[#6B7780]">
            Click below to send your pre-filled booking request directly to our clinic WhatsApp line.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-[#25D366] text-[#FFFFFF] text-sm font-sans font-bold hover:bg-[#1EBE5B] transition-all shadow-sm w-full sm:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Send Details via WhatsApp</span>
          </a>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
              setReason('General checkup & consultation');
              setPreferredWindow('');
              setFullName('');
              setPhoneNumber('');
              setEmailAddress('');
            }}
            className="text-xs font-sans font-semibold text-[#2FB8A6] underline hover:text-[#1E8E7F]"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Quick Direct WhatsApp Banner */}
      <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#25D366] text-[#FFFFFF] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-sans font-semibold text-[#263238]">
              Want instant appointment confirmation?
            </p>
            <p className="text-xs text-[#6B7780]">
              Chat directly with Dr. Muhammed Arshad NS &amp; team on WhatsApp
            </p>
          </div>
        </div>
        <a
          href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-[#25D366] text-[#FFFFFF] text-xs font-sans font-bold hover:bg-[#1EBE5B] transition-colors whitespace-nowrap"
        >
          Book on WhatsApp &rarr;
        </a>
      </div>

      {/* Interactive Step Progress Indicator */}
      <div className="flex items-center justify-between border-b border-[#E1E6E7] pb-4 font-sans text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
              step >= 1 ? 'bg-[#2FB8A6] text-[#FFFFFF]' : 'bg-[#F4F6F6] text-[#6B7780]'
            }`}
          >
            1
          </span>
          <span className={step === 1 ? 'font-semibold text-[#263238]' : 'text-[#6B7780]'}>
            Reason
          </span>
        </div>

        <div className="h-px bg-[#E1E6E7] flex-1 mx-3" />

        <div className="flex items-center gap-2">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
              step >= 2 ? 'bg-[#2FB8A6] text-[#FFFFFF]' : 'bg-[#F4F6F6] text-[#6B7780]'
            }`}
          >
            2
          </span>
          <span className={step === 2 ? 'font-semibold text-[#263238]' : 'text-[#6B7780]'}>
            Preferred Window
          </span>
        </div>

        <div className="h-px bg-[#E1E6E7] flex-1 mx-3" />

        <div className="flex items-center gap-2">
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs ${
              step >= 3 ? 'bg-[#2FB8A6] text-[#FFFFFF]' : 'bg-[#F4F6F6] text-[#6B7780]'
            }`}
          >
            3
          </span>
          <span className={step === 3 ? 'font-semibold text-[#263238]' : 'text-[#6B7780]'}>
            Your Info
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#FBFCFC] border border-[#E1E6E7] rounded-xl p-6 md:p-8 space-y-6 shadow-xs">
        {/* Step 1: Reason for Visit */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-2xl text-[#263238] mb-1">
                What brings you to Solace?
              </h3>
              <p className="text-xs font-sans text-[#6B7780]">
                Select the primary reason for your visit so we can prepare for your consultation.
              </p>
            </div>

            <div className="space-y-2.5">
              {reasonsList.map((item) => (
                <label
                  key={item}
                  className={`flex items-center justify-between p-3.5 rounded-lg cursor-pointer border transition-colors ${
                    reason === item
                      ? 'bg-[#F4F6F6] border-[#2FB8A6] text-[#263238] font-medium'
                      : 'bg-[#FBFCFC] border-[#E1E6E7] text-[#6B7780] hover:bg-[#F4F6F6]'
                  }`}
                >
                  <span className="text-sm font-sans">{item}</span>
                  <input
                    type="radio"
                    name="reason"
                    value={item}
                    checked={reason === item}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-4 h-4 text-[#2FB8A6] focus:ring-[#2FB8A6]"
                  />
                </label>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferred Window */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-2xl text-[#263238] mb-1">
                When would you like to visit?
              </h3>
              <p className="text-xs font-sans text-[#6B7780]">
                Tell us your preferred day or time window (e.g. &ldquo;This Thursday morning&rdquo; or &ldquo;Next Monday around 4 PM&rdquo;).
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="preferredWindow" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#263238]">
                Preferred Day &amp; Time Window <span className="text-[#D9534F]">*</span>
              </label>
              <input
                id="preferredWindow"
                type="text"
                value={preferredWindow}
                onChange={(e) => setPreferredWindow(e.target.value)}
                placeholder="e.g., Saturday morning or any weekday after 4 PM"
                className={`w-full px-4 py-3 rounded-lg bg-[#FBFCFC] border ${
                  errors.preferredWindow ? 'border-[#D9534F]' : 'border-[#E1E6E7]'
                } text-sm text-[#263238] focus:outline-none focus:border-[#2FB8A6]`}
              />
              {errors.preferredWindow && (
                <p className="text-xs text-[#D9534F] flex items-center gap-1 mt-1 font-sans">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.preferredWindow}</span>
                </p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-sm font-sans font-medium text-[#6B7780] hover:text-[#263238]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 text-[#FFFFFF]" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="font-serif text-2xl text-[#263238] mb-1">
                Your Contact Information
              </h3>
              <p className="text-xs font-sans text-[#6B7780]">
                Enter your details to finalize your appointment request.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#263238]">
                  Full Name <span className="text-[#D9534F]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Anjali Nair"
                  className={`w-full px-4 py-3 rounded-lg bg-[#FBFCFC] border ${
                    errors.fullName ? 'border-[#D9534F]' : 'border-[#E1E6E7]'
                  } text-sm text-[#263238] focus:outline-none focus:border-[#2FB8A6]`}
                />
                {errors.fullName && (
                  <p className="text-xs text-[#D9534F] flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phoneNumber" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#263238]">
                  Phone / WhatsApp Number <span className="text-[#D9534F]">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g., +91 98765 43210"
                  className={`w-full px-4 py-3 rounded-lg bg-[#FBFCFC] border ${
                    errors.phoneNumber ? 'border-[#D9534F]' : 'border-[#E1E6E7]'
                  } text-sm text-[#263238] focus:outline-none focus:border-[#2FB8A6]`}
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-[#D9534F] flex items-center gap-1 font-sans">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="emailAddress" className="block text-xs font-sans font-semibold uppercase tracking-wider text-[#263238]">
                  Email Address <span className="text-[#6B7780] font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#FBFCFC] border border-[#E1E6E7] text-sm text-[#263238] focus:outline-none focus:border-[#2FB8A6]"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1 text-sm font-sans font-medium text-[#6B7780] hover:text-[#263238] self-start sm:self-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] text-[#FFFFFF] font-sans font-bold text-sm hover:bg-[#1EBE5B] transition-colors shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2FB8A6] text-[#FFFFFF] font-sans font-semibold text-sm hover:bg-[#1E8E7F] transition-colors shadow-xs"
                >
                  <span>Submit Web Form</span>
                  <CheckCircle className="w-4 h-4 text-[#FFFFFF]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* Direct Contact Options */}
      <div className="bg-[#F4F6F6] border border-[#E1E6E7] rounded-xl p-6 text-center space-y-4">
        <h4 className="font-serif text-lg text-[#263238]">
          Prefer to talk to us directly right now?
        </h4>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
          <a
            href={siteConfig.phoneTelLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FBFCFC] border border-[#E1E6E7] text-sm font-sans font-semibold text-[#263238] hover:bg-[#E1E6E7]"
          >
            <Phone className="w-4 h-4 text-[#2FB8A6]" />
            <span>Call {siteConfig.phone}</span>
          </a>

          <a
            href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-[#FFFFFF] text-sm font-sans font-bold hover:bg-[#1EBE5B]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp Clinic Directly</span>
          </a>
        </div>
      </div>
    </div>
  );
};
