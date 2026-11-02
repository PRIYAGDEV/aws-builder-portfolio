import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="milestones" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            Milestones & Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Journey & Builder Milestones
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Tracking ongoing learning, competitive hackathons, and certifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 md:pl-8 border-l border-white/10 space-y-10">
          {PORTFOLIO_DATA.milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-3xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/10 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold">
                    {m.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{m.year}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  {m.title}
                </h3>
                <span className="text-xs text-slate-400 font-medium block mt-0.5">
                  {m.organization}
                </span>

                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
