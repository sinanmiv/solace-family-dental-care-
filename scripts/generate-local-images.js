import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const servicesDir = path.join(projectRoot, 'public', 'images', 'services');
const clinicDir = path.join(projectRoot, 'public', 'images', 'clinic');
const imagesDir = path.join(projectRoot, 'public', 'images');

// Ensure directories exist
fs.mkdirSync(servicesDir, { recursive: true });
fs.mkdirSync(clinicDir, { recursive: true });

function createSvgAsset(title, subtitle, category, bgGradStart = '#F4F6F6', bgGradEnd = '#E1E6E7', accentColor = '#2FB8A6', symbolType = 'checkup') {
  let symbolContent = '';

  switch (symbolType) {
    case 'checkup':
      symbolContent = `<circle cx="400" cy="180" r="60" fill="none" stroke="${accentColor}" stroke-width="8"/>
        <path d="M370 180 L390 200 L435 155" stroke="${accentColor}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
      break;
    case 'cleaning':
      symbolContent = `<path d="M360 210 Q400 130 440 210 Z" fill="${accentColor}" opacity="0.8"/>
        <circle cx="370" cy="150" r="12" fill="${accentColor}" opacity="0.6"/>
        <circle cx="430" cy="160" r="16" fill="${accentColor}" opacity="0.4"/>`;
      break;
    case 'fillings':
      symbolContent = `<rect x="350" y="130" width="100" height="100" rx="16" fill="none" stroke="${accentColor}" stroke-width="8"/>
        <path d="M370 180 L430 180 M400 150 L400 210" stroke="${accentColor}" stroke-width="10" stroke-linecap="round"/>`;
      break;
    case 'root-canal':
      symbolContent = `<path d="M380 130 C360 170 370 210 380 230 C390 210 400 170 380 130 Z" fill="${accentColor}" opacity="0.8"/>
        <path d="M420 130 C400 170 410 210 420 230 C430 210 440 170 420 130 Z" fill="${accentColor}" opacity="0.5"/>`;
      break;
    case 'restorative':
      symbolContent = `<path d="M350 140 Q400 110 450 140 L440 220 Q400 240 360 220 Z" fill="none" stroke="${accentColor}" stroke-width="8"/>
        <circle cx="400" cy="175" r="24" fill="${accentColor}" opacity="0.8"/>`;
      break;
    case 'aligners':
      symbolContent = `<path d="M330 180 Q400 130 470 180 Q400 230 330 180 Z" fill="none" stroke="${accentColor}" stroke-width="8" stroke-dasharray="12 6"/>
        <circle cx="400" cy="180" r="16" fill="${accentColor}"/>`;
      break;
    case 'orthodontics':
      symbolContent = `<rect x="340" y="160" width="30" height="30" rx="4" fill="${accentColor}"/>
        <rect x="385" y="160" width="30" height="30" rx="4" fill="${accentColor}"/>
        <rect x="430" y="160" width="30" height="30" rx="4" fill="${accentColor}"/>
        <line x1="320" y1="175" x2="480" y2="175" stroke="${accentColor}" stroke-width="6"/>`;
      break;
    case 'implants':
      symbolContent = `<rect x="385" y="120" width="30" height="40" rx="6" fill="${accentColor}"/>
        <path d="M390 160 L410 160 L400 230 Z" fill="${accentColor}" opacity="0.8"/>
        <line x1="380" y1="180" x2="420" y2="180" stroke="#FFFFFF" stroke-width="4"/>
        <line x1="385" y1="200" x2="415" y2="200" stroke="#FFFFFF" stroke-width="4"/>`;
      break;
    case 'veneers':
      symbolContent = `<path d="M350 130 C390 120 410 120 450 130 C460 170 450 210 400 230 C350 210 340 170 350 130 Z" fill="url(#ven-grad)" stroke="${accentColor}" stroke-width="6"/>
        <defs><linearGradient id="ven-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="${accentColor}" stop-opacity="0.4"/></linearGradient></defs>`;
      break;
    case 'smile':
      symbolContent = `<path d="M330 160 Q400 230 470 160" fill="none" stroke="${accentColor}" stroke-width="12" stroke-linecap="round"/>
        <circle cx="360" cy="140" r="12" fill="${accentColor}"/>
        <circle cx="440" cy="140" r="12" fill="${accentColor}"/>`;
      break;
    default:
      symbolContent = `<circle cx="400" cy="180" r="50" fill="${accentColor}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradStart}"/>
        <stop offset="100%" stop-color="${bgGradEnd}"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#263238" stroke-width="1" stroke-opacity="0.05"/>
      </pattern>
    </defs>
    
    <!-- Background -->
    <rect width="800" height="450" fill="url(#bg)"/>
    <rect width="800" height="450" fill="url(#grid)"/>

    <!-- Decorative Soft Curves -->
    <path d="M0 350 Q 200 300 400 380 T 800 340 L 800 450 L 0 450 Z" fill="${accentColor}" opacity="0.08"/>
    
    <!-- Central Symbol -->
    <g transform="translate(0, 0)">
      ${symbolContent}
    </g>

    <!-- Header Tag -->
    <rect x="50" y="45" width="160" height="28" rx="4" fill="#0F3D3E"/>
    <text x="130" y="63" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#F7FAF9" text-anchor="middle" letter-spacing="1.5">${category}</text>

    <!-- Procedure Title -->
    <text x="50" y="380" font-family="Fraunces, Georgia, serif" font-size="32" font-weight="500" fill="#263238">${title}</text>
    <text x="50" y="410" font-family="Inter, sans-serif" font-size="14" font-weight="400" fill="#6B7780">${subtitle}</text>

    <!-- Solace Brand Mark -->
    <text x="750" y="65" font-family="Fraunces, Georgia, serif" font-size="20" font-weight="500" fill="#0F3D3E" text-anchor="end">SOLACE</text>
  </svg>`;
}

// Generate Service Image Assets
const serviceAssets = [
  { name: 'checkups.svg', title: 'Preventive Care', sub: 'General Checkups & Consultations', cat: 'PREVENTIVE', symbol: 'checkup' },
  { name: 'cleaning.svg', title: 'Dental Cleaning', sub: 'Scaling & Plaque Removal', cat: 'PREVENTIVE', symbol: 'cleaning' },
  { name: 'fillings.svg', title: 'Dental Fillings', sub: 'Tooth-Colored Composite Restorations', cat: 'RESTORATIVE', symbol: 'fillings' },
  { name: 'root-canal.svg', title: 'Root Canal Therapy', sub: 'Pain Relief & Tooth Preservation', cat: 'ENDODONTICS', symbol: 'root-canal' },
  { name: 'restorative.svg', title: 'Restorative Prosthetics', sub: 'Crowns, Bridges & Dentures', cat: 'PROSTHETICS', symbol: 'restorative' },
  { name: 'aligners.svg', title: 'Clear Aligners', sub: 'Discreet Removable Straightening', cat: 'ORTHODONTICS', symbol: 'aligners' },
  { name: 'orthodontics.svg', title: 'Orthodontic Braces', sub: 'Fixed Alignment & Bite Correction', cat: 'ORTHODONTICS', symbol: 'orthodontics' },
  { name: 'implants.svg', title: 'Dental Implants', sub: 'Fixed Titanium Root Replacement', cat: 'IMPLANTOLOGY', symbol: 'implants' },
  { name: 'veneers.svg', title: 'Porcelain Veneers', sub: 'Custom Shells for Tooth Aesthetics', cat: 'COSMETIC', symbol: 'veneers' },
  { name: 'smile-correction.svg', title: 'Smile Correction', sub: 'Personalized Multi-Treatment Plan', cat: 'COSMETIC', symbol: 'smile' },
];

serviceAssets.forEach((asset) => {
  const filePath = path.join(servicesDir, asset.name);
  const svgContent = createSvgAsset(asset.title, asset.sub, asset.cat, '#FBFCFC', '#F4F6F6', '#2FB8A6', asset.symbol);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
});

// Generate Clinic & Hero Assets
const clinicAssets = [
  { name: 'reception.svg', title: 'Reception & Lounge', sub: 'Calm Arrival Environment', cat: 'CLINIC SPACE', symbol: 'checkup' },
  { name: 'treatment.svg', title: 'Treatment Suite', sub: 'Modern Clinical Setup', cat: 'CLINIC SPACE', symbol: 'restorative' },
  { name: 'instruments.svg', title: 'Sterile Precision Tools', sub: 'Strict Sterilization Standards', cat: 'HYGIENE', symbol: 'fillings' },
  { name: 'exterior.svg', title: 'Solace Entrance', sub: 'Pallikuth, Pattikkad 679325', cat: 'LOCATION', symbol: 'smile' },
];

clinicAssets.forEach((asset) => {
  const filePath = path.join(clinicDir, asset.name);
  const svgContent = createSvgAsset(asset.title, asset.sub, asset.cat, '#F4F6F6', '#E1E6E7', '#0F3D3E', asset.symbol);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
});

// Hero Asset
const heroFilePath = path.join(imagesDir, 'hero.svg');
const heroSvg = createSvgAsset('Solace Family Dental Care', 'Pattikkad, Malappuram, Kerala', 'CLINICAL SUITE', '#F4F6F6', '#E1E6E7', '#2FB8A6', 'checkup');
fs.writeFileSync(heroFilePath, heroSvg, 'utf-8');

console.log('Successfully generated local static image assets in public/images/');
