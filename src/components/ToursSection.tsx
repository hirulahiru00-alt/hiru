import React from 'react';
import { SRI_LANKA_TOURS, SriLankaTour } from '../data/mockData';
import { Calendar, MapPin, ArrowRight, Check, Compass, Route } from 'lucide-react';

interface ToursSectionProps {
  onSelectTour: (tourTitle: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({ onSelectTour }) => {
  return (
    <section id="tours" className="py-24 bg-[#0a0a0a] border-b border-[#c9a84c]/20">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-caps text-[#c9a84c] tracking-[0.25em]">
              CURATED ITINERARIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f5f5f5] mt-2">
              FEATURED SRI LANKA TOURS
            </h2>
          </div>
          <p className="text-sm text-[#9e9e9e] max-w-md font-light leading-relaxed">
            Thoughtfully planned travel packages across Sri Lanka. Every tour is fully private and can be customized to match your schedule, group, and preferences.
          </p>
        </div>

        {/* 4 Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SRI_LANKA_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#121212] border border-[#c9a84c]/25 hover:border-[#e5c76b]/60 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual Route Schematic Header (No Photos) */}
                <div className="p-6 sm:p-8 bg-gradient-to-br from-[#181818] via-[#101010] to-[#0a0a0a] border-b border-[#c9a84c]/20 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#050505] px-3 py-1 font-mono text-[#e5c76b] text-xs border border-[#c9a84c]/30">
                      {tour.duration}
                    </span>
                    <span className="bg-[#050505] px-3 py-1 text-[#f5f5f5] border border-[#c9a84c]/30 text-[10px] uppercase font-mono tracking-widest">
                      {tour.type}
                    </span>
                  </div>

                  {/* Visual Route Nodes */}
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-3 text-[11px] font-mono text-[#c9a84c] uppercase tracking-wider">
                      <Route className="w-3.5 h-3.5" />
                      <span>{tour.pace}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[#f5f5f5]">
                      {tour.routeStops.map((stop, i) => (
                        <React.Fragment key={i}>
                          <span className="px-2 py-0.5 bg-[#050505]/80 border border-[#c9a84c]/20 text-[#e5c76b]">
                            {stop}
                          </span>
                          {i < tour.routeStops.length - 1 && (
                            <span className="text-[#c9a84c]/50">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl text-[#f5f5f5] group-hover:text-[#e5c76b] transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-[#c9a84c] font-medium flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{tour.destinations}</span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#d0c5b2] font-light leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-3 border-t border-[#c9a84c]/15 space-y-2">
                    {tour.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#9e9e9e]">
                        <Check className="w-3.5 h-3.5 text-[#e5c76b] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-6 sm:px-8 pt-0 pb-6 flex items-center justify-between border-t border-[#c9a84c]/15">
                <span className="text-xs font-mono text-[#c9a84c]">
                  Private Chauffeured Vehicle
                </span>

                <button
                  onClick={() => onSelectTour(tour.title)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#c9a84c] hover:bg-[#e5c76b] transition-colors cursor-pointer"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
