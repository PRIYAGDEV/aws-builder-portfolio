import React from 'react';
import { User, Sparkles, Terminal, Rocket, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <User className="w-3.5 h-3.5" />
            My Story
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Driven by curiosity, cloud architecture, and the art of scalable serverless engineering.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Story Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm">
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Hello! I'm {PORTFOLIO_DATA.personal.name}</span>
                <span className="text-amber-400 text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
                  Cloud Builder
                </span>
              </h3>
              
              <p>
                I am a computer science student with a deep passion for <strong>cloud computing, distributed systems, and modern AI engineering</strong>. What excites me most about technology is the ability to turn abstract architectural concepts into highly available, resilient software that serves users worldwide.
              </p>

              <p>
                My cloud journey accelerated through hands-on exploration with <strong>AWS serverless primitives</strong>. Rather than simply reading documentation, I believe in building: provisioning real infrastructure, testing throughput limits, and engineering self-healing systems. 
              </p>

              <p>
                In the <strong>AWS Student Builder Challenge</strong>, my goal was to break away from static, cookie-cutter portfolios. I engineered an interactive <strong>Live AWS Architecture Simulator</strong> and an in-browser <strong>Cloud Shell CLI</strong> to demonstrate real-world cloud engineering chops directly in the browser.
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Rocket className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Scale-to-Zero</h4>
                <p className="text-[11px] text-slate-400 mt-1">High throughput with zero idle resource waste.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Sparkles className="w-5 h-5 text-sky-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Autonomous AI</h4>
                <p className="text-[11px] text-slate-400 mt-1">Context-aware agents backed by Amazon Bedrock.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Terminal className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Clean Engineering</h4>
                <p className="text-[11px] text-slate-400 mt-1">Type-safe TypeScript, automated CI/CD, and IaC.</p>
              </div>
            </div>
          </div>

          {/* Right: Fast Facts & Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <h4 className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider mb-6">
                Quick Facts & Status
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-400 font-mono">Role Target:</span>
                  <span className="font-semibold text-white">Cloud / AI Software Engineer</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-400 font-mono">Current Status:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open for 2026/2027 Roles
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-400 font-mono">Primary Cloud:</span>
                  <span className="font-bold text-amber-400">AWS (us-east-1)</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-400 font-mono">Next Milestone:</span>
                  <span className="font-semibold text-white">AWS Cloud Practitioner</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-slate-400 font-mono">Challenge:</span>
                  <span className="font-semibold text-amber-300">AWS Student Builder 2026</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Student Builder Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
