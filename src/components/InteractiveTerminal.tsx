import React, { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sounds } from '../utils/sound';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-amber-400 font-bold">
            AWS Superpower Shell v2.4.0 (us-east-1)
          </p>
          <p>
            Type <span className="text-sky-400 font-semibold">'help'</span> to see available commands or <span className="text-emerald-400 font-semibold">'sudo hire-me'</span> for recruiter mode.
          </p>
        </div>
      ),
      timestamp: '12:00:00',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    sounds.playClick();
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const now = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
            <div><span className="text-amber-400 font-mono font-bold">superpower</span> - Inspect tech superpower specs</div>
            <div><span className="text-amber-400 font-mono font-bold">motto</span> - Priyag's engineering motto</div>
            <div><span className="text-amber-400 font-mono font-bold">facts</span> - 3 unique builder fun facts</div>
            <div><span className="text-amber-400 font-mono font-bold">skills</span> - List technical proficiencies</div>
            <div><span className="text-amber-400 font-mono font-bold">projects</span> - View all showcase projects</div>
            <div><span className="text-amber-400 font-mono font-bold">certifications</span> - AWS certification roadmap</div>
            <div><span className="text-amber-400 font-mono font-bold">whoami</span> - Developer bio & background</div>
            <div><span className="text-amber-400 font-mono font-bold">contact</span> - Reach out directly</div>
            <div><span className="text-amber-400 font-mono font-bold">clear</span> - Clear terminal session</div>
            <div><span className="text-emerald-400 font-mono font-bold">sudo hire-me</span> - Recruiter fast-track</div>
          </div>
        );
        break;

      case 'motto':
        output = (
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
            <span className="text-amber-400 font-bold block">💡 Priyag's Personal Motto:</span>
            <p className="italic text-slate-200 text-sm">"If it doesn't autoscale to zero and survive an unannounced traffic spike, it's not production-ready."</p>
          </div>
        );
        break;

      case 'facts':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold">Behind the Code (3 Fun Facts):</p>
            <p>☕ <strong className="text-white">Midnight Engineering:</strong> Best code flows between 11 PM and 3 AM with dark mode and lo-fi beats.</p>
            <p>⚡ <strong className="text-white">Favorite AWS Duo:</strong> AWS Lambda + DynamoDB for lightning-fast pay-as-you-go execution.</p>
            <p>🧠 <strong className="text-white">Next Frontier:</strong> Building autonomous self-healing cloud agents with Amazon Bedrock.</p>
          </div>
        );
        break;

      case 'superpower':
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-amber-400 font-bold text-sm">
              ⚡ Superpower: {PORTFOLIO_DATA.personal.superpowerTitle}
            </p>
            <p className="text-slate-300">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10 text-[11px]">
              {PORTFOLIO_DATA.superpowers.map((sp) => (
                <div key={sp.id} className="p-2 rounded bg-white/5 border border-white/5">
                  <span className="text-sky-400 font-bold">{sp.title}</span>: {sp.statValue}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs">
            {PORTFOLIO_DATA.skillCategories.map((cat) => (
              <div key={cat.category}>
                <span className="text-amber-400 font-bold">{cat.category}: </span>
                <span className="text-slate-300">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-white/5 border border-white/10">
                <div className="flex justify-between items-baseline">
                  <span className="text-amber-400 font-bold">{p.title}</span>
                  <span className="text-[10px] text-emerald-400">{p.metrics}</span>
                </div>
                <p className="text-slate-400 mt-1">{p.description}</p>
                <div className="text-[10px] text-sky-400 mt-1">
                  AWS: {p.awsServices.join(', ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certifications':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-amber-400 font-bold">AWS Builder Credentials & Roadmap:</p>
            <p>🏅 <strong className="text-white">AWS Certified Cloud Practitioner</strong> (Foundational) - Target: Nov 2026</p>
            <p>🚀 <strong className="text-white">AWS Certified Solutions Architect Associate</strong> - Target: Q1 2027</p>
            <p>⭐ <strong className="text-white">AWS Student Builder Challenge 2026 Finalist</strong></p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p><strong className="text-white">{PORTFOLIO_DATA.personal.name}</strong> — {PORTFOLIO_DATA.personal.title}</p>
            <p>{PORTFOLIO_DATA.personal.bio}</p>
            <p className="text-emerald-400 font-semibold">Status: {PORTFOLIO_DATA.personal.status}</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p>📧 Email: <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-sky-400 underline">{PORTFOLIO_DATA.personal.email}</a></p>
            <p>🐙 GitHub: <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noreferrer" className="text-sky-400 underline">{PORTFOLIO_DATA.personal.githubUrl}</a></p>
            <p>💼 LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noreferrer" className="text-sky-400 underline">{PORTFOLIO_DATA.personal.linkedinUrl}</a></p>
          </div>
        );
        break;

      case 'sudo hire-me':
      case 'hire-me':
        sounds.playSuccess();
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.7 },
        });
        output = (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1.5 animate-fadeIn">
            <p className="text-emerald-400 font-bold text-sm">🎉 Recruiter Access Granted!</p>
            <p className="text-slate-200">
              I am actively looking for internships & new graduate engineering roles! I bring hands-on cloud architecture expertise, rapid shipping speed, and extreme curiosity.
            </p>
            <p className="text-amber-400 font-semibold pt-1">
              Let's connect: {PORTFOLIO_DATA.personal.email}
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        sounds.playBuzzer();
        output = (
          <p className="text-rose-400 text-xs">
            Command not recognized: '{rawCmd}'. Type <span className="underline font-bold text-white">help</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: rawCmd,
        output,
        timestamp: now,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-slate-950 font-mono shadow-2xl transition-all duration-300 flex flex-col ${
        isExpanded ? 'h-[500px]' : 'h-[360px]'
      }`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-white/10 rounded-t-2xl select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold ml-2">
            <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>cloud-shell@aws-amplify:~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors"
            title={isExpanded ? 'Minimize' : 'Maximize'}
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 overflow-y-auto space-y-3 text-xs cursor-text font-mono"
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">builder@amplify:~$</span>
              <span className="text-white font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <div className="p-3 bg-slate-900/60 border-t border-white/10 rounded-b-2xl flex items-center gap-2">
        <span className="text-emerald-400 font-bold text-xs select-none">builder@amplify:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type 'help', 'skills', 'superpower', or 'sudo hire-me'..."
          className="flex-1 bg-transparent text-xs text-white focus:outline-none placeholder:text-slate-600 font-mono"
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
