import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Zap, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/sound';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenSimulator }) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Zap,
    BrainCircuit,
    Layers,
    ShieldCheck,
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        {/* Challenge Flag / Status Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6 shadow-inner animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>AWS Student Builder Challenge • Tech Superpower 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Architecting <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 bg-clip-text text-transparent">Serverless Clouds</span> & Autonomous AI at Scale.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Hi, I'm <strong className="text-white font-bold">{PORTFOLIO_DATA.personal.name}</strong>. My tech superpower is building resilient, event-driven distributed systems that scale from zero to millions on AWS with bulletproof stability.
        </p>

        {/* CTA Button Group */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenSimulator();
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/30 transition-all hover:scale-105 active:scale-95"
          >
            <Cpu className="w-4 h-4 text-slate-950" />
            <span>Launch Cloud Simulator</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95 font-mono"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>cloud-shell ~$</span>
          </button>

          <a
            href="#projects"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-transparent hover:bg-white/5 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-colors"
          >
            <span>View Projects</span>
          </a>
        </div>

        {/* Live Pill Status Indicator */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{PORTFOLIO_DATA.personal.status}</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>AWS Amplify Edge Deployed</span>
          </div>
        </div>

        {/* Superpowers Grid Preview */}
        <div id="superpowers" className="mt-20 pt-10 text-left">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              My 4 Core Tech Superpowers
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Engineering capabilities honed through hands-on cloud builds, open source, and hackathons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.superpowers.map((sp) => {
              const Icon = iconMap[sp.iconName] || Zap;
              return (
                <div
                  key={sp.id}
                  className="relative group p-6 rounded-3xl bg-slate-900/60 hover:bg-slate-900 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
                  style={{ boxShadow: `0 0 40px ${sp.bgGlow}` }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {sp.title}
                    </h3>
                    <p className="text-xs text-amber-500/90 font-mono mt-1 font-semibold">
                      {sp.tagline}
                    </p>
                    <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                      {sp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">{sp.statLabel}:</span>
                    <span className="font-bold text-emerald-400 font-mono">{sp.statValue}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
