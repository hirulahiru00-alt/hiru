import React from 'react';
import { UnknownTravelsLogo } from './BrandLogos';
import { Compass, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onExploreTours: () => void;
  onPlanTrip: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTours,
  onPlanTrip,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#c9a84c]/20 bg-[#050505]">
      
      {/* Intricate Geometric Cartographic Background (No Photos) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep ambient radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#c9a84c]/6 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e5c76b]/4 rounded-full blur-[90px]" />

        {/* Concentric Astrolabe and Bearing Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[#c9a84c]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[960px] rounded-full border border-[#c9a84c]/8 border-dashed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1240px] h-[1240px] rounded-full border border-[#c9a84c]/5" />

        {/* Diagonal Cartographic Hairlines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem]" />

        {/* Coordinate Markings */}
        <div className="absolute top-8 left-8 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#c9a84c]/40">
          <MapPin className="w-3 h-3" />
          <span>LAT 7.8731° N • LON 80.7718° E</span>
        </div>
        <div className="absolute top-8 right-8 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-[#c9a84c]/40">
          <Compass className="w-3 h-3" />
          <span>CEYLON ARCHIPELAGO • INDIAN OCEAN</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-20 w-full flex flex-col items-center text-center">
        
        {/* Circular Emblem */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
          <UnknownTravelsLogo size={152} className="drop-shadow-[0_12px_45px_rgba(201,168,76,0.35)]" />
        </div>

        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-[#c9a84c]/40 bg-[#0b0b0b]/80 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#e5c76b]" />
          <span className="label-caps text-[#e5c76b] tracking-[0.3em]">
            EXPLORE SRI LANKA
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#f5f5f5] max-w-5xl tracking-tight leading-[1.08] mb-6">
          UNKNOWN TRAVELS & TOURS
        </h1>

        {/* Short Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#d0c5b2] font-light leading-relaxed mb-10 text-balance">
          Discover beautiful places, unique experiences and unforgettable journeys in Sri Lanka.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onExploreTours}
            className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-all duration-200 gold-glow whitespace-nowrap cursor-pointer"
          >
            EXPLORE TOURS
          </button>
          
          <button
            onClick={onPlanTrip}
            className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5] bg-transparent border border-[#c9a84c]/60 hover:bg-[#c9a84c]/10 hover:border-[#e5c76b] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            PLAN YOUR TRIP
          </button>
        </div>

        {/* Small Text */}
        <div className="pt-6 border-t border-[#c9a84c]/20 max-w-xl w-full">
          <p className="text-xs sm:text-sm font-medium tracking-[0.22em] text-[#c9a84c] uppercase">
            Travel • Tours • Photography • Cinematography • Drone
          </p>
        </div>
      </div>
    </section>
  );
};
