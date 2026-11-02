import React from 'react';
import { Cloud, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 px-4 md:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold">
            <Cloud className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white">
              {PORTFOLIO_DATA.personal.name} — Tech Superpower Portfolio
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              AWS Student Builder Challenge 2026 Submission
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span>Deployed on</span>
          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold">
            AWS Amplify Hosting
          </span>
          <span>•</span>
          <span>Region {PORTFOLIO_DATA.personal.awsRegion}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
