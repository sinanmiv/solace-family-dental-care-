export interface ServiceConfig {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  tagline: string;
  isConfirmed: boolean;
  icon: string;
  imageUrl: string;
  summary: string;
  whatIsIt: string;
  whoIsItFor: string;
  whatItInvolves: string[];
  whatToExpect: string;
  typicalDuration: string;
  considerations: string;
  yourConsultation: string;
}

export interface SpecialistConfig {
  id: string;
  name: string;
  specialty: string;
}

export interface DoctorConfig {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  qualifications: string | null;
  registrationNumber: string | null;
  yearsExperience: number | null;
  areasOfPractice: string[];
  philosophy: string;
  biography: string;
  isQualificationsVerified: boolean;
  isRegistrationVerified: boolean;
  isExperienceVerified: boolean;
}

export interface ReviewConfig {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: string;
}

export interface SiteConfig {
  clinicName: string;
  tagline: string;
  positioningStatement: string;
  establishedYear: number;
  address: string;
  cityArea: string;
  pincode: string;
  phone: string;
  phoneRaw: string;
  phoneTelLink: string;
  whatsappUrl: string;
  whatsappMessage: string;
  email: string;
  googleMapsDirectionsUrl: string;
  googleBusinessProfileUrl: string;
  trustRating: {
    score: number;
    reviewCount: number;
    platform: string;
    isLive: boolean;
  };
  openingHours: {
    day: string;
    hours: string;
    isVerified: boolean;
    note?: string;
  }[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    isConfirmed: boolean;
  };
  doctors: DoctorConfig[];
  specialists: SpecialistConfig[];
  services: ServiceConfig[];
  reviews: ReviewConfig[];
  images: {
    hero: string;
    reception: string;
    treatmentSuite: string;
    instruments: string;
    consultation: string;
    exterior: string;
  };
  medicalDisclaimer: string;
}

export const siteConfig: SiteConfig = {
  clinicName: "Solace Family Dental Care",
  tagline: "A calmer way to care for your family's smile.",
  positioningStatement: "Established in 2013, Solace Family Dental Care has been serving the Pattikkad community for over a decade with a calmer, more thoughtful approach to family dentistry.",
  establishedYear: 2013,
  address: "Pallikuth, Chungam, Pattikkad, Kerala 679325, India",
  cityArea: "Pattikkad, Malappuram",
  pincode: "679325",
  phone: "+91 86066 94383",
  phoneRaw: "918606694383",
  phoneTelLink: "tel:+918606694383",
  whatsappUrl: "https://wa.me/918606694383",
  whatsappMessage: "Hello Solace Family Dental Care, I would like to inquire about an appointment.",
  email: "[VERIFY EMAIL — not yet supplied]",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Solace+Family+Dental+Care+Pallikuth+Chungam+Pattikkad+Kerala+679325",
  googleBusinessProfileUrl: "https://maps.google.com/?q=Solace+Family+Dental+Care+Pattikkad",
  trustRating: {
    score: 4.9,
    reviewCount: 15,
    platform: "Google",
    isLive: true,
  },
  openingHours: [
    { day: "Monday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Tuesday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Wednesday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Thursday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Friday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Saturday", hours: "9:30 AM – 8:00 PM", isVerified: true },
    { day: "Sunday", hours: "Closed", isVerified: true },
  ],
  socialLinks: {
    facebook: "https://facebook.com/solacefamilydentalcare",
    instagram: "https://instagram.com/solace_family_dental_care",
    isConfirmed: false,
  },
  images: {
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80",
    reception: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    treatmentSuite: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    instruments: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    consultation: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    exterior: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
  },
  doctors: [
    {
      id: "dr-arshad",
      name: "Dr. Muhammed Arshad NS",
      title: "Lead Dentist",
      imageUrl: "/images/dr-arshad.jpg",
      qualifications: "BDS, Government Dental College, Thiruvananthapuram",
      registrationNumber: "Dental Registration No. 31208",
      yearsExperience: 5,
      areasOfPractice: [
        "General & Preventive Dentistry",
        "Restorative Care & Full Mouth Rehabilitation",
        "Endodontics (Root Canal Treatment)",
        "Clear Aligners & Orthodontic Guidance",
        "Dental Prosthetics & Implants Assessment"
      ],
      philosophy: "Solace was built on a simple idea: a visit to the dentist doesn't have to feel like something to get through. It can feel like something to feel better from.",
      biography: "Dr. Muhammed Arshad NS brings 5+ years of clinical experience to Solace Family Dental Care in Pattikkad, emphasizing open communication, unhurried consultations, and gentle, patient-focused dental treatment.",
      isQualificationsVerified: true,
      isRegistrationVerified: true,
      isExperienceVerified: true,
    }
  ],
  specialists: [
    { id: "dr-dan-thomas", name: "Dr. Dan Thomas", specialty: "Orthodontist" },
    { id: "dr-ajith", name: "Dr. Ajith", specialty: "Periodontist" },
    { id: "dr-mahshook", name: "Dr. Mahshook", specialty: "Periodontist" },
    { id: "dr-sooraj", name: "Dr. Sooraj", specialty: "Oral and Maxillofacial Surgeon" },
    { id: "dr-devidas", name: "Dr. Devidas", specialty: "Prosthodontist" },
    { id: "dr-reshma", name: "Dr. Reshma", specialty: "Pedodontist" }
  ],
  services: [
    // 1. Preventive / Checkups
    {
      id: "general-checkup",
      slug: "general-checkup",
      name: "Preventive / Checkups",
      shortDesc: "Comprehensive dental examinations and consultation-first oral health assessments.",
      tagline: "HEALTHY SMILES START HERE",
      isConfirmed: true,
      icon: "Stethoscope",
      imageUrl: "/images/services/checkups.jpg",
      summary: "Routine checkups designed to catch potential concerns early, explained clearly without jargon or pressure.",
      whatIsIt: "A general dental checkup is a comprehensive evaluation of your teeth, gums, and overall oral health. It serves as the foundation of preventive dental care.",
      whoIsItFor: "Recommended for adults and children for routine oral maintenance, or anyone experiencing mild discomfort or seeking an initial professional opinion.",
      whatItInvolves: [
        "Detailed visual examination of teeth and gums",
        "Assessment of existing dental restorations (fillings, crowns)",
        "Soft tissue screening and oral health evaluation",
        "Clear explanation of findings and discussion of any recommended care"
      ],
      whatToExpect: "A gentle, thorough examination in an unhurried environment. Your dentist will explain what they see using intraoral views or diagrams.",
      typicalDuration: "30–45 minutes typically",
      considerations: "Regular checkups help prevent unexpected dental issues. Frequency is tailored to your individual oral health status.",
      yourConsultation: "You are invited to ask questions about any concerns. No treatment proceeds without your understanding and consent."
    },
    // 2. Cleaning & Scaling
    {
      id: "cleaning-scaling",
      slug: "cleaning-scaling",
      name: "Cleaning & Scaling",
      shortDesc: "Gentle professional cleaning to remove plaque, tartar, and surface stains.",
      tagline: "A CLEANER, BRIGHTER YOU",
      isConfirmed: true,
      icon: "Sparkles",
      imageUrl: "/images/services/cleaning.jpg",
      summary: "Preventive scaling designed to keep your gums healthy and your breath fresh in a gentle setting.",
      whatIsIt: "Dental cleaning and scaling is a routine preventive procedure to remove accumulated plaque and hardened tartar (calculus) that brushing alone cannot reach.",
      whoIsItFor: "Individuals wanting to maintain optimal gum health, prevent gingivitis, or remove surface staining from food and beverages.",
      whatItInvolves: [
        "Removal of plaque and tartar deposits using ultrasonic and manual instruments",
        "Polishing of tooth surfaces to smooth micro-roughness",
        "Gentle gum health evaluation",
        "Personalized oral hygiene advice tailored to your daily routine"
      ],
      whatToExpect: "Mild vibration and rinsing sensations. If you have sensitive teeth, your dentist can adjust the pace or apply desensitizing agents.",
      typicalDuration: "45–60 minutes typically",
      considerations: "Mild sensitivity for a few hours following cleaning is normal in some cases.",
      yourConsultation: "Your dentist will evaluate your gum health and discuss optimal home care practices suited to your schedule."
    },
    // 3. Fillings
    {
      id: "fillings",
      slug: "fillings",
      name: "Fillings",
      shortDesc: "Tooth-colored composite restorations to repair decay or localized tooth damage.",
      tagline: "RESTORE STRENGTH NATURALLY",
      isConfirmed: true,
      icon: "ShieldCheck",
      imageUrl: "/images/services/fillings.jpg",
      summary: "Durable, natural-looking restorations engineered to preserve your natural tooth structure.",
      whatIsIt: "A dental filling repairs a tooth affected by decay, wear, or minor fractures, restoring its natural strength, function, and shape.",
      whoIsItFor: "Patients with localized decay (cavities), chipped enamel, or worn fillings requiring replacement.",
      whatItInvolves: [
        "Gentle removal of compromised tooth tissue",
        "Cleaning and preparation of the tooth cavity",
        "Application of tooth-colored composite material in layers",
        "Shaping, curing, and polishing for a comfortable bite fit"
      ],
      whatToExpect: "Local anesthesia is used when necessary to ensure comfort throughout the procedure. You will be able to bite comfortably immediately afterward.",
      typicalDuration: "30–60 minutes per tooth typically",
      considerations: "Composite fillings blend naturally with adjacent enamel. Avoid hard chewing until numbness completely wears off.",
      yourConsultation: "Your dentist will explain the extent of decay and show you the cavity location before placing the restoration."
    },
    // 4. Root Canal Treatment
    {
      id: "root-canal-treatment",
      slug: "root-canal-treatment",
      name: "Root Canal Treatment",
      shortDesc: "Thoughtful treatment designed to relieve severe tooth pain and save your natural tooth.",
      tagline: "RELIEF FOR A HEALTHIER TOMORROW",
      isConfirmed: true,
      icon: "HeartPulse",
      imageUrl: "/images/services/root-canal.jpg",
      summary: "A procedure focused on clearing internal nerve infection, relieving deep toothache, and saving the natural tooth.",
      whatIsIt: "Root canal therapy removes infected or inflamed nerve tissue (pulp) inside a tooth root, disinfecting the inner canals and sealing them safely.",
      whoIsItFor: "Patients experiencing persistent toothache, sensitivity to heat/cold, pain on biting, or localized deep decay reaching the tooth nerve.",
      whatItInvolves: [
        "Thorough local numbing for pain relief and patient comfort",
        "Creating a small opening to access the infected canal system",
        "Cleaning, shaping, and disinfecting the root canals thoroughly",
        "Sealing the canal space with biocompatible filling material"
      ],
      whatToExpect: "Contrary to common anxiety, modern root canal treatment is focused on relieving pain. Local anesthesia keeps you comfortable.",
      typicalDuration: "1–2 visits of 60–90 minutes typically",
      considerations: "A crown is usually recommended after root canal treatment to protect the tooth from future fracture.",
      yourConsultation: "Your dentist will examine the tooth, view diagnostic X-rays with you, and explain the steps before beginning."
    },
    // 5. Restorative (Crowns/Bridges/Dentures)
    {
      id: "crowns-bridges-dentures",
      slug: "crowns-bridges-dentures",
      name: "Restorative (Crowns/Bridges/Dentures)",
      shortDesc: "Custom prosthetic solutions for damaged or missing teeth.",
      tagline: "REBUILD FUNCTION AND CONFIDENCE",
      isConfirmed: true,
      icon: "Smile",
      imageUrl: "/images/services/restorative.jpg",
      summary: "Custom prosthetic solutions designed to restore chewing efficiency, speech, and dental structural support.",
      whatIsIt: "Restorative prosthetics—including crowns (caps), fixed bridges, and removable dentures—replace lost tooth structure or missing teeth.",
      whoIsItFor: "Individuals with extensively broken teeth, post-root canal teeth needing protection, or missing teeth affecting bite stability.",
      whatItInvolves: [
        "Careful shaping of the target tooth or shade-matching for missing teeth",
        "Precise digital or physical impression taking",
        "Placement of a temporary protective cover when needed",
        "Final custom fitting, adjustment, and permanent cementation or placement"
      ],
      whatToExpect: "Completed over 2 to 3 visits depending on the custom laboratory fabrication requirement.",
      typicalDuration: "2–3 appointments over 1–2 weeks typically",
      considerations: "Material selection (ceramic, zirconia, or metal-reinforced) is discussed based on location, bite forces, and aesthetic preferences.",
      yourConsultation: "Your dentist will review all structural options, shade matching, and maintenance expectations with you in detail."
    },
    // 6. Dental Implants
    {
      id: "implants",
      slug: "implants",
      name: "Dental Implants",
      shortDesc: "A long-term option for replacing missing teeth, designed to look and function like natural teeth.",
      tagline: "A STRONGER, MORE NATURAL SMILE",
      isConfirmed: true,
      icon: "Anchor",
      imageUrl: "/images/services/implants.jpg",
      summary: "Biocompatible prosthetic roots topped with custom crowns for fixed tooth replacement.",
      whatIsIt: "A dental implant is a titanium post placed to act as an artificial tooth root, topped with a custom crown.",
      whoIsItFor: "People missing one or more teeth who are looking for a fixed (non-removable) replacement option.",
      whatItInvolves: [
        "Initial clinical assessment (including bone density imaging)",
        "Gentle implant placement into the jawbone",
        "A healing period allowing biocompatible integration",
        "Custom laboratory fabrication and fitting of the final crown"
      ],
      whatToExpect: "The full process typically spans a few months in total to allow proper healing, confirmed at consultation.",
      typicalDuration: "3–6 months multi-stage typically",
      considerations: "Suitability depends on individual factors like bone health, which your dentist will assess directly.",
      yourConsultation: "Your dentist will evaluate your jawbone structure and explain all single or multi-tooth replacement options."
    },
    // 7. Orthodontic Treatment
    {
      id: "orthodontics",
      slug: "orthodontics",
      name: "Orthodontic Treatment",
      shortDesc: "Traditional braces to correct alignment, bite, and spacing issues over time.",
      tagline: "A STRAIGHTER SMILE FOR A BRIGHTER YOU",
      isConfirmed: true,
      icon: "Grid",
      imageUrl: "/images/services/orthodontics.jpg",
      summary: "Fixed corrective appliances designed to address complex bite alignment and crowding.",
      whatIsIt: "Orthodontic braces utilize fixed brackets and archwires to gradually move teeth into better alignment and functional harmony.",
      whoIsItFor: "Both younger patients and adults with more significant alignment, spacing, or bite concerns.",
      whatItInvolves: [
        "Comprehensive clinical assessment and diagnostic records",
        "Precise placement of brackets and archwire fitting",
        "Regular monthly adjustment visits to guide tooth movement",
        "Post-treatment retention planning to maintain results"
      ],
      whatToExpect: "Treatment duration varies by case — typically ranges from several months to a couple of years, confirmed at consultation.",
      typicalDuration: "12–24 months typically",
      considerations: "Some initial adjustment discomfort is normal after fittings; your dentist will explain aftercare and what to expect.",
      yourConsultation: "Your dentist will evaluate your jaw structure, bite alignment, and present tailored orthodontic guidance."
    },
    // 8. Clear Aligner Treatment
    {
      id: "aligners",
      slug: "aligners",
      name: "Clear Aligner Treatment",
      shortDesc: "A discreet, removable way to gradually straighten teeth, without traditional metal braces.",
      tagline: "STRAIGHTER TEETH, DISCREETLY",
      isConfirmed: true,
      icon: "Sparkles",
      imageUrl: "/images/services/aligners.jpg",
      summary: "Custom transparent aligner trays engineered to align your teeth comfortably and discreetly.",
      whatIsIt: "Clear aligners are custom-fitted, transparent trays worn over the teeth that gradually shift them into a straighter position over time.",
      whoIsItFor: "People looking to correct mild-to-moderate misalignment or crowding without visible braces.",
      whatItInvolves: [
        "Initial clinical assessment and digital/physical impressions",
        "Custom fabrication of a sequential series of clear aligner trays",
        "Wearing trays 20–22 hours daily, removing only for meals and brushing",
        "Periodic progress check-ins at the clinic to evaluate movement"
      ],
      whatToExpect: "A gradual change over months, with each aligner worn for roughly one to two weeks before moving to the next in the series (exact timing confirmed at consultation).",
      typicalDuration: "6–18 months typically depending on complexity",
      considerations: "Not every case is suitable for aligners — your dentist will confirm during consultation whether this or traditional braces is a better fit.",
      yourConsultation: "Your dentist will assess your bite relationship and outline a visual treatment plan."
    },
    // 9. Veneers
    {
      id: "veneers",
      slug: "veneers",
      name: "Veneers",
      shortDesc: "Thin, custom-made shells bonded to the front of teeth to improve their appearance.",
      tagline: "A MORE REFINED SMILE",
      isConfirmed: true,
      icon: "Sparkles",
      imageUrl: "/images/services/veneers.jpg",
      summary: "Custom porcelain or composite shells placed to enhance tooth shape, shade, and alignment aesthetics.",
      whatIsIt: "Veneers are thin, custom-made porcelain or composite shells placed over the visible surface of a tooth to change its shape, color, or alignment appearance.",
      whoIsItFor: "People looking to address chips, discoloration, gaps, or shape concerns on specific teeth.",
      whatItInvolves: [
        "Consultation and precise shade/shape planning",
        "Minimal preparation of the front tooth enamel surface",
        "Custom laboratory fabrication of porcelain or composite shells",
        "Precise adhesive bonding and bite adjustment"
      ],
      whatToExpect: "A visible change to the treated teeth, discussed and agreed with you before any preparation begins.",
      typicalDuration: "2–3 visits over 1–2 weeks typically",
      considerations: "Veneers involve some irreversible preparation of the natural tooth — your dentist will explain this clearly before you decide.",
      yourConsultation: "Your dentist will examine your teeth and shade goals, discussing conservative aesthetic options."
    },
    // 10. Smile Correction
    {
      id: "smile-correction",
      slug: "smile-correction",
      name: "Smile Correction",
      shortDesc: "A tailored combination of treatments to address the specific concerns you have about your smile.",
      tagline: "ENHANCE WHAT MAKES YOU, YOU",
      isConfirmed: true,
      icon: "Smile",
      imageUrl: "/images/services/smile-correction.jpg",
      summary: "A personalized treatment plan addressing multiple aesthetic and functional dental goals.",
      whatIsIt: "Smile correction is not a single procedure, but a personalized plan that may combine treatments such as whitening, alignment, or veneers based on your goals.",
      whoIsItFor: "Anyone with specific aesthetic concerns about their smile who wants a considered, step-by-step plan rather than a single fix.",
      whatItInvolves: [
        "In-depth consultation to understand your personal aesthetic goals",
        "Diagnostic evaluation of tooth proportions, gum line, and bite",
        "Recommended phased combination of conservative dental treatments",
        "Transparent review of timeline, care steps, and expectations"
      ],
      whatToExpect: "This varies entirely by what's recommended — your dentist will walk you through exactly what's involved before anything begins.",
      typicalDuration: "Varies according to individual treatment plan",
      considerations: "Framed around what's realistic and healthy for your teeth, not just aesthetic preference alone.",
      yourConsultation: "Your dentist will listen to your concerns and outline realistic, step-by-step care options."
    },
    // 11. Full Mouth Rehabilitation
    {
      id: "full-mouth-rehabilitation",
      slug: "full-mouth-rehabilitation",
      name: "Full Mouth Rehabilitation",
      shortDesc: "Comprehensive, multi-disciplinary restorative plans to rebuild oral health, function, and smile aesthetics.",
      tagline: "COMPREHENSIVE RESTORATIVE EXCELLENCE",
      isConfirmed: true,
      icon: "ShieldCheck",
      imageUrl: "/images/services/restorative.jpg",
      summary: "Full mouth rehabilitation combines tailored restorative treatments to rebuild damaged or worn teeth, restoring comfortable chewing function and smile aesthetics.",
      whatIsIt: "Full mouth rehabilitation is a comprehensive treatment approach designed to restore the health, function, and appearance of your entire mouth when multiple teeth are compromised, missing, or worn down.",
      whoIsItFor: "Patients with widespread tooth wear, multiple missing teeth, complex bite issues, or extensive decay requiring a coordinated restorative plan.",
      whatItInvolves: [
        "Comprehensive clinical assessment and digital bite alignment mapping",
        "Personalized multi-phase treatment planning tailored to your schedule",
        "Coordinated restorative procedures (crowns, bridges, implants, or fillings)",
        "Careful bite adjustments for long-term comfort and joint stability"
      ],
      whatToExpect: "A phased, comfortable care sequence clearly explained at every step before treatment begins.",
      typicalDuration: "Completed in planned phases over several appointments",
      considerations: "Every treatment step is customized around your comfort, preserving healthy tooth structure wherever possible.",
      yourConsultation: "Your dentist will conduct a thorough examination, explain all restorative options clearly, and answer any questions."
    }
  ],
  reviews: [],
  medicalDisclaimer: "Solace Family Dental Care provides general dental information on this website for informational purposes. It is not a substitute for professional medical advice — please consult your dentist for guidance specific to your personal situation."
};

export function getDentistSchemaJSONLD(config: SiteConfig = siteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": config.clinicName,
    "image": "https://solacedental.in/favicon.svg",
    "@id": "https://solacedental.in/#clinic",
    "url": "https://solacedental.in",
    "telephone": config.phone,
    "foundingDate": "2013",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pallikuth, Chungam",
      "addressLocality": "Pattikkad",
      "addressRegion": "Kerala",
      "postalCode": "679325",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0185",
      "longitude": "76.1741"
    },
    "openingHoursSpecification": config.openingHours
      .filter(h => h.isVerified && h.hours !== "Closed")
      .map(h => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": h.day,
        "opens": h.hours.split("–")[0]?.trim() || "09:30",
        "closes": h.hours.split("–")[1]?.trim() || "20:00"
      })),
    "priceRange": "₹₹",
    "medicalSpecialty": "Dentistry",
    "founder": {
      "@type": "Person",
      "name": "Dr. Muhammed Arshad NS",
      "jobTitle": "Lead Dentist",
      "alumniOf": "Government Dental College, Thiruvananthapuram",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "BDS",
        "identifier": "31208"
      }
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Muhammed Arshad NS",
        "jobTitle": "Lead Dentist",
        "alumniOf": "Government Dental College, Thiruvananthapuram",
        "description": "5+ years of clinical experience",
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "BDS",
          "identifier": "31208"
        }
      },
      ...config.specialists.map(s => ({
        "@type": "Person",
        "name": s.name,
        "jobTitle": s.specialty
      }))
    ]
  };
}
