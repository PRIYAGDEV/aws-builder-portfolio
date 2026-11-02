import React, { useState } from 'react';
import { Cpu, Cloud, Code2, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Cloud,
    Code2,
    Terminal,
    Cpu,
  };

  const currentCategory = PORTFOLIO_DATA.skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Skills & Superpowers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Skills & Tech Superpowers
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Technologies, frameworks, and AWS services I've built real projects with.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cloud;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategoryIndex(idx);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Display */}
        <div className="max-w-4xl mx-auto bg-slate-900/40 rounded-3xl border border-white/10 p-6 md:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    {skill.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                    {skill.name}
                  </span>
                  <span className="font-mono text-amber-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Superpower Toolchain Highlight */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Verified with AWS CLI & Agent Toolkit</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-amber-400">
              <span>Cloud Native First</span>
              <span>•</span>
              <span>TypeScript Strict</span>
              <span>•</span>
              <span>Zero-Downtime CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
