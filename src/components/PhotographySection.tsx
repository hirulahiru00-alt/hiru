import React from 'react';
import { Camera, Video, Film, CheckCircle2, Crosshair, Aperture, Eye } from 'lucide-react';
import { UnknownStudioLogo } from './BrandLogos';

interface PhotographySectionProps {
  onPlanTripWithPhoto: () => void;
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({
  onPlanTripWithPhoto,
}) => {
  return (
    <section id="photography" className="py-24 bg-[#050505] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Cine HUD Showcase (No Photos) */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/5] border border-[#c9a84c]/30 relative bg-[#0b0b0b] p-8 flex flex-col justify-between overflow-hidden">
              
              {/* Cine Viewfinder Framing Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#c9a84c]/60 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#c9a84c]/60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#c9a84c]/60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#c9a84c]/60 pointer-events-none" />
              
              {/* Subtle Viewfinder Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,168,76,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,168,76,0.04)_1px,transparent_1px)] bg-[size:33.33%_33.33%] pointer-events-none" />

              {/* Viewfinder Header Status */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#e5c76b]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>REC 4K DCI • 24 FPS</span>
                </div>
                <span>RAW 12-BIT LOG</span>
              </div>

              {/* Central Optical Lens / Studio Emblem Graphic */}
              <div className="relative z-10 my-auto flex flex-col items-center text-center">
                <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                  {/* Concentric Gold Aperture Rings */}
                  <div className="absolute inset-0 rounded-full border border-[#c9a84c]/30" />
                  <div className="absolute inset-3 rounded-full border border-dashed border-[#e5c76b]/40" />
                  <div className="absolute inset-8 rounded-full border border-[#c9a84c]/20" />
                  <Crosshair className="absolute w-8 h-8 text-[#e5c76b]/50" />
                  <UnknownStudioLogo size={80} className="relative z-10 drop-shadow-[0_8px_30px_rgba(201,168,76,0.3)]" />
                </div>

                <h4 className="font-serif text-lg font-semibold text-[#f5f5f5] tracking-wide">
                  UNKNOWN STUDIO
                </h4>
                <p className="text-xs text-[#c9a84c] font-mono tracking-widest uppercase mt-1">
                  Cinematography & Drone Unit
                </p>
                <p className="text-[11px] text-[#9e9e9e] mt-2 max-w-xs font-light">
                  Cinema-grade optics, color grading, and licensed aerial flight across Sri Lanka
                </p>
              </div>

              {/* Viewfinder Footer Specs */}
              <div className="relative z-10 pt-4 border-t border-[#c9a84c]/20 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-[#e5c76b]">
                <div>
                  <span className="text-[#9e9e9e] block text-[9px]">SHUTTER</span>
                  <span>1/48 SEC</span>
                </div>
                <div>
                  <span className="text-[#9e9e9e] block text-[9px]">APERTURE</span>
                  <span>f/1.4 PRIME</span>
                </div>
                <div>
                  <span className="text-[#9e9e9e] block text-[9px]">ELEVATION</span>
                  <span>DRONE 120M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Services (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
                TRAVEL • TOURS • PHOTOGRAPHY • CINEMATOGRAPHY • DRONE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2 leading-tight">
                Capture Your Sri Lanka Journey In Cinematic 4K & Drone
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#d0c5b2] font-light leading-relaxed">
              Do not leave your precious travel memories to blurry phone snapshots. Travel with our dedicated professional cinematographer or photographer to capture your journey across Ella&apos;s train viaduct, Sigiriya dawn climbs, and secluded southern beaches.
            </p>

            {/* Bullet features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Video className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">4K Cinematic Highlight Reel</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  A professionally edited 3–5 minute cinematic short film of your private vacation.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Film className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Licensed Aerial Drone Footage</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  Sweeping aerial mountain and coastal views captured by certified pilots.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <Camera className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Couples & Family Portraits</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  Golden hour photo sessions at iconic Sri Lankan landmarks and secluded beaches.
                </p>
              </div>

              <div className="p-4 bg-[#0e0e0e] border border-[#c9a84c]/20 space-y-1.5">
                <div className="flex items-center gap-2 text-[#e5c76b]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-serif text-sm text-[#f5f5f5]">Fast Digital Delivery</span>
                </div>
                <p className="text-xs text-[#9e9e9e]">
                  High-resolution photo gallery and color-graded video delivered within 7 business days.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onPlanTripWithPhoto}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all duration-200 gold-glow cursor-pointer"
              >
                Inquire For Photography Add-On
              </button>

              <a
                href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%2C%20I%20would%20like%20to%20inquire%20about%20Drone%20and%20Photography%20services%20for%20my%20Sri%20Lanka%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
              >
                Chat On WhatsApp (+94 77 808 4913)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
