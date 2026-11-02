import React, { useState } from 'react';
import { ExternalLink, Sparkles, Server, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { sounds } from '../utils/sound';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Superpowers' },
    { id: 'aws', label: 'AWS & Serverless' },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedCategory === 'featured') return p.featured;
    if (selectedCategory === 'aws') return p.awsServices.length > 0;
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Server className="w-3.5 h-3.5" />
              Real-World Engineering
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Featured Cloud & AI Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Architected with high availability, serverless primitives, and generative intelligence.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-900 border border-white/10 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(tab.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/50 hover:bg-slate-900 border border-white/10 hover:border-amber-500/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Metrics Pill & Star */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                    {project.metrics}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* AWS Services Stack Tags */}
                <div className="mt-5">
                  <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider block mb-1.5">
                    AWS Services Involved:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.awsServices.map((svc) => (
                      <span
                        key={svc}
                        className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono font-medium"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg bg-white/5 text-slate-300 text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Detail Modal Trigger */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setSelectedProject(project);
                  }}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sounds.playClick()}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sounds.playClick()}
                      className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-colors"
                      title="Live Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Architecture Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-950 border border-white/10 rounded-3xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Architecture Overview
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1.5 rounded-xl bg-white/10 text-xs text-slate-300 hover:text-white"
              >
                Close (ESC)
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedProject.longDescription}</p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-amber-400 font-mono">
                  Cloud Architecture Breakdown:
                </span>
                <ul className="text-xs space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Deployed globally using <strong>AWS Amplify Hosting</strong> CI/CD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Serverless autoscaling logic managed via <strong>AWS Lambda</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Single-digit millisecond state persistence with <strong>Amazon DynamoDB</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Autonomous reasoning engine powered by <strong>Amazon Bedrock</strong></span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-slate-400">Verified Impact:</span>
                <span className="text-emerald-400 font-mono font-bold">
                  {selectedProject.metrics}
                </span>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                Repository
              </a>
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-xs font-bold text-slate-950 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
