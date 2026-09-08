import React from 'react';
import { siteConfig } from '../config/site.config';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  altText: string;
}

export const AsymmetricGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'reception',
      title: 'Reception & Arrival Lounge',
      category: 'Arrival Space',
      imageUrl: siteConfig.images.reception,
      altText: 'Modern dental clinic reception lounge with comfortable seating and ambient lighting',
    },
    {
      id: 'treatment-suite',
      title: 'Consultation & Treatment Suite',
      category: 'Clinical Environment',
      imageUrl: siteConfig.images.treatmentSuite,
      altText: 'Modern dental consultation chair and sterile treatment equipment',
    },
    {
      id: 'instruments',
      title: 'Sterile Care & Precision Tools',
      category: 'Hygiene & Safety',
      imageUrl: siteConfig.images.instruments,
      altText: 'Sterilized stainless steel dental instruments prepared for clinical procedure',
    },
    {
      id: 'exterior',
      title: 'Clinic Location & Access',
      category: 'Pallikuth, Pattikkad',
      imageUrl: siteConfig.images.exterior,
      altText: 'Modern clinic entrance in Pattikkad',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Item 1: Wide Establish Block */}
        <div className="md:col-span-8 bg-[#EDF3F1] border border-[#D6E0DE] rounded-solace overflow-hidden flex flex-col justify-between min-h-[340px] relative group">
          <div className="relative h-64 md:h-72 w-full overflow-hidden">
            <img
              src={galleryItems[0].imageUrl}
              alt={galleryItems[0].altText}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16232B]/80 via-[#16232B]/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#F7FAF9] bg-[#0F3D3E]/90 px-3 py-1 rounded backdrop-blur-sm border border-[#B8975A]/30">
                {galleryItems[0].category}
              </span>
            </div>

            <div className="absolute bottom-4 left-6 right-6 text-[#F7FAF9]">
              <h3 className="font-serif text-2xl font-medium mb-1 drop-shadow-sm">
                {galleryItems[0].title}
              </h3>
              <p className="text-xs font-sans text-[#E3ECE9]">
                Designed with warm natural light and calm spaces to put you at ease before your visit.
              </p>
            </div>
          </div>
        </div>

        {/* Item 2: Tall Clinical Suite Block */}
        <div className="md:col-span-4 bg-[#EDF3F1] border border-[#D6E0DE] rounded-solace overflow-hidden flex flex-col justify-between min-h-[340px] relative group">
          <div className="relative h-64 md:h-72 w-full overflow-hidden">
            <img
              src={galleryItems[1].imageUrl}
              alt={galleryItems[1].altText}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16232B]/80 via-[#16232B]/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#F7FAF9] bg-[#0F3D3E]/90 px-3 py-1 rounded backdrop-blur-sm border border-[#B8975A]/30">
                {galleryItems[1].category}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-[#F7FAF9]">
              <h3 className="font-serif text-xl font-medium mb-1 drop-shadow-sm">
                {galleryItems[1].title}
              </h3>
              <p className="text-xs font-sans text-[#E3ECE9]">
                Private room tailored for clear explanations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Item 3 */}
        <div className="bg-[#EDF3F1] border border-[#D6E0DE] rounded-solace overflow-hidden relative group">
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={galleryItems[2].imageUrl}
              alt={galleryItems[2].altText}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16232B]/80 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#F7FAF9] bg-[#0F3D3E]/90 px-2.5 py-1 rounded">
                {galleryItems[2].category}
              </span>
            </div>

            <div className="absolute bottom-3 left-4 right-4 text-[#F7FAF9]">
              <h3 className="font-serif text-lg font-medium">
                {galleryItems[2].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="bg-[#EDF3F1] border border-[#D6E0DE] rounded-solace overflow-hidden relative group">
          <div className="relative h-56 w-full overflow-hidden">
            <img
              src={galleryItems[3].imageUrl}
              alt={galleryItems[3].altText}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16232B]/80 via-transparent to-transparent" />
            
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#F7FAF9] bg-[#0F3D3E]/90 px-2.5 py-1 rounded">
                {galleryItems[3].category}
              </span>
            </div>

            <div className="absolute bottom-3 left-4 right-4 text-[#F7FAF9]">
              <h3 className="font-serif text-lg font-medium">
                {galleryItems[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
