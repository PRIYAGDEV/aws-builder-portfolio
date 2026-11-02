import React, { useState } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, Cloud } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/sound';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundOn(newState);
    if (newState) sounds.playClick();
  };

  const navLinks = [
    { label: 'Superpower', href: '#superpowers' },
    { label: 'Simulator', href: '#simulator' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Milestones', href: '#milestones' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#" 
          onClick={() => sounds.playClick()}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
            <Cloud className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1">
              {PORTFOLIO_DATA.personal.name}
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                AWS
              </span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              Student Builder
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 border border-white/10 p-1 px-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sounds.playClick()}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          {/* Audio Feedback Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenTerminal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>CLI Shell</span>
          </button>

          {/* AWS Amplify Live Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Amplify Gen2
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-3 px-2 border-t border-white/10 mt-3 space-y-1 bg-slate-950">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-lg mt-2"
          >
            <Terminal className="w-4 h-4" />
            Launch Terminal CLI
          </button>
        </div>
      )}
    </nav>
  );
};
