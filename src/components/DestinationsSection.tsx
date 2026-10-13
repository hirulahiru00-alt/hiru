import React, { useState } from 'react';
import { SRI_LANKA_DESTINATIONS, SriLankaDestination } from '../data/mockData';
import { ArrowRight, MapPin, X, Check, Compass, Mountain, Landmark, Trees, Shield, Sparkles } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
}) => {
  const [activeModalDest, setActiveModalDest] = useState<SriLankaDestination | null>(null);

  const getDestinationIcon = (iconType: SriLankaDestination['iconType']) => {
    switch (iconType) {
      case 'train':
        return <Mountain className="w-8 h-8 text-[#e5c76b]" />;
      case 'temple':
        return <Landmark className="w-8 h-8 text-[#e5c76b]" />;
      case 'citadel':
        return <Shield className="w-8 h-8 text-[#e5c76b]" />;
      case 'tea':
        return <Trees className="w-8 h-8 text-[#e5c76b]" />;
      case 'fort':
        return <Compass className="w-8 h-8 text-[#e5c76b]" />;
      case 'safari':
        return <Sparkles className="w-8 h-8 text-[#e5c76b]" />;
      default:
        return <MapPin className="w-8 h-8 text-[#e5c76b]" />;
    }
  };

  return (
    <section id="destinations" className="py-24 bg-[#050505] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
              ISLAND HIGHLIGHTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2">
              SRI LANKA DESTINATIONS
            </h2>
          </div>
          <p className="text-sm text-[#9e9e9e] max-w-md font-light leading-relaxed">
            From the misty tea mountains of Ella and Nuwara Eliya to the sacred temples of Kandy, ancient Sigiriya citadel, wildlife of Yala, and coastal ramparts of Galle.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SRI_LANKA_DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              className="bg-[#0e0e0e] border border-[#c9a84c]/20 hover:border-[#e5c76b]/60 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Graphic Cartographic Header (No Photos) */}
              <div className="relative w-full p-8 border-b border-[#c9a84c]/20 bg-gradient-to-br from-[#141414] via-[#0d0d0d] to-[#080808] overflow-hidden flex flex-col justify-between min-h-[170px]">
                {/* Decorative Subtle Background Compass Grid */}
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-36 h-36 rounded-full border border-[#c9a84c] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border border-dashed border-[#e5c76b]" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="p-3 bg-[#050505] border border-[#c9a84c]/40 rounded-none">
                    {getDestinationIcon(dest.iconType)}
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono tracking-widest text-[#e5c76b] uppercase">
                      {dest.province}
                    </span>
                    <span className="text-[11px] font-mono text-[#9e9e9e]">
                      {dest.elevation}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 pt-4 flex items-center justify-between border-t border-[#c9a84c]/10 text-[10px] font-mono text-[#c9a84c]/80 tracking-widest">
                  <span>{dest.coordinates}</span>
                  <span className="text-[#e5c76b]">EXPEDITION ZONE</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f5f5f5] group-hover:text-[#e5c76b] transition-colors mb-2">
                    {dest.name}
                  </h3>
                  
                  <p className="text-xs uppercase tracking-wider text-[#c9a84c] font-semibold mb-3">
                    {dest.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#d0c5b2] font-light leading-relaxed mb-6">
                    {dest.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#c9a84c]/15">
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#9e9e9e]">
                        <span className="text-[#c9a84c] mt-0.5">✦</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-[#c9a84c]/20 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalDest(dest)}
                    className="text-xs uppercase tracking-wider text-[#9e9e9e] hover:text-[#f5f5f5] transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectDestination(dest.name)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-colors cursor-pointer"
                  >
                    <span>Add to Trip</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal (No Photos) */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0c0c0c] border border-[#c9a84c]/40 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModalDest(null)}
              className="absolute top-4 right-4 text-[#9e9e9e] hover:text-[#f5f5f5] p-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="label-caps text-[#c9a84c] block mb-1">
              SRI LANKA SANCTUARY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f5f5] mb-2">
              {activeModalDest.name}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#e5c76b] mb-6 font-semibold">
              {activeModalDest.tagline}
            </p>

            {/* Graphic Overview Box (No Photos) */}
            <div className="p-6 mb-6 border border-[#c9a84c]/30 bg-gradient-to-br from-[#161616] to-[#0c0c0c]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-[#050505]/60 border border-[#c9a84c]/20">
                  <span className="block text-[10px] font-mono uppercase text-[#9e9e9e] mb-1">Elevation</span>
                  <span className="text-xs font-mono text-[#e5c76b] font-semibold">{activeModalDest.elevation}</span>
                </div>
                <div className="p-3 bg-[#050505]/60 border border-[#c9a84c]/20">
                  <span className="block text-[10px] font-mono uppercase text-[#9e9e9e] mb-1">Province</span>
                  <span className="text-xs font-mono text-[#e5c76b] font-semibold">{activeModalDest.province}</span>
                </div>
                <div className="p-3 bg-[#050505]/60 border border-[#c9a84c]/20">
                  <span className="block text-[10px] font-mono uppercase text-[#9e9e9e] mb-1">Coordinates</span>
                  <span className="text-[10px] font-mono text-[#e5c76b] font-semibold truncate block">{activeModalDest.coordinates}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#d0c5b2] font-light leading-relaxed mb-6">
              {activeModalDest.description}
            </p>

            <div className="p-4 bg-[#171717] border border-[#c9a84c]/20 mb-8 space-y-2">
              <span className="label-caps text-[#c9a84c] block mb-2">Key Experiences:</span>
              {activeModalDest.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#f5f5f5]">
                  <Check className="w-3.5 h-3.5 text-[#e5c76b]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setActiveModalDest(null)}
                className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#9e9e9e] hover:text-[#f5f5f5] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSelectDestination(activeModalDest.name);
                  setActiveModalDest(null);
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-colors cursor-pointer"
              >
                Plan For {activeModalDest.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
