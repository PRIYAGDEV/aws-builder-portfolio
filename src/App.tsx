import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SuperpowerSimulator } from './components/SuperpowerSimulator';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const simulatorRef = useRef<HTMLDivElement>(null);

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSimulator = () => {
    simulatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-black">
      {/* Sticky Top Navbar */}
      <Navbar onOpenTerminal={scrollToTerminal} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenTerminal={scrollToTerminal}
          onOpenSimulator={scrollToSimulator}
        />

        {/* Flagship Interactive Feature: AWS Architecture & Stress Simulator */}
        <section id="simulator" ref={simulatorRef} className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <SuperpowerSimulator />
        </section>

        {/* Cloud-Shell Terminal Section */}
        <section id="terminal" ref={terminalRef} className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                Interactive Cloud Shell CLI
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Inspect candidate credentials, projects, and secrets via command-line interface.
              </p>
            </div>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              Try typing: <strong className="text-amber-400">superpower</strong> or <strong className="text-emerald-400">sudo hire-me</strong>
            </span>
          </div>
          <InteractiveTerminal />
        </section>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience & Credentials Timeline */}
        <ExperienceSection />

        {/* Contact & Let's Build Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
