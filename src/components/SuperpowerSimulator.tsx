import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  Zap, 
  ShieldAlert, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Activity, 
  Gauge, 
  Server, 
  Flame, 
  Award,
  Globe,
  Database,
  Cpu,
  BrainCircuit
} from 'lucide-react';
import { sounds } from '../utils/sound';

interface ArchitectureNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const NODES: ArchitectureNode[] = [
  { id: 'clients', name: 'Global Traffic', category: 'Origin', x: 80, y: 160, icon: Globe, color: 'text-sky-400', description: 'Clients worldwide sending HTTPS requests' },
  { id: 'amplify', name: 'Amplify Hosting', category: 'Edge CDN', x: 260, y: 80, icon: Server, color: 'text-amber-400', description: 'AWS Amplify Global Edge hosting static assets' },
  { id: 'apigw', name: 'API Gateway', category: 'Routing', x: 260, y: 240, icon: Zap, color: 'text-purple-400', description: 'Amazon API Gateway with throttling & auth' },
  { id: 'lambda', name: 'AWS Lambda', category: 'Compute', x: 440, y: 160, icon: Cpu, color: 'text-orange-400', description: 'Autoscaling microservices (0 to 1000s of instances)' },
  { id: 'dynamo', name: 'Amazon DynamoDB', category: 'Database', x: 620, y: 90, icon: Database, color: 'text-blue-400', description: 'Single-digit millisecond latency NoSQL persistence' },
  { id: 'bedrock', name: 'Amazon Bedrock', category: 'AI Engine', x: 620, y: 230, icon: BrainCircuit, color: 'text-emerald-400', description: 'Foundation models & autonomous agent intelligence' },
];

const CONNECTIONS = [
  { from: 'clients', to: 'amplify' },
  { from: 'clients', to: 'apigw' },
  { from: 'apigw', to: 'lambda' },
  { from: 'lambda', to: 'dynamo' },
  { from: 'lambda', to: 'bedrock' },
];

export const SuperpowerSimulator: React.FC = () => {
  const [trafficRps, setTrafficRps] = useState<number>(1200);
  const [isDdosActive, setIsDdosActive] = useState<boolean>(false);
  const [isAiSurgeActive, setIsAiSurgeActive] = useState<boolean>(false);
  const [hasUnlockedSuperpower, setHasUnlockedSuperpower] = useState<boolean>(false);
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(null);

  // Derived metrics
  const effectiveRps = isDdosActive ? trafficRps + 85000 : trafficRps;
  const lambdaConcurrency = Math.min(1000, Math.ceil(effectiveRps / 120));
  const latencyMs = isDdosActive 
    ? Math.floor(18 + Math.random() * 8) 
    : isAiSurgeActive 
      ? Math.floor(35 + (trafficRps / 5000) * 10) 
      : Math.floor(12 + (trafficRps / 10000) * 6);
  const cacheHitRatio = isDdosActive ? 99.4 : Math.min(99.8, 94 + (trafficRps / 2000));
  const monthlyCostEst = ((effectiveRps * 0.0000002 + lambdaConcurrency * 0.000016) * 3600 * 24 * 30).toFixed(2);
  const healthStatus = isDdosActive 
    ? 'WAF Shield Activated (0% Drop)' 
    : effectiveRps > 50000 
      ? 'Hyperscale Autoscaling' 
      : 'Optimal Performance';

  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9900', '#22c55e', '#38bdf8', '#a855f7'],
    });
  }, []);

  useEffect(() => {
    if (effectiveRps >= 70000 && !hasUnlockedSuperpower) {
      setHasUnlockedSuperpower(true);
      sounds.playSuccess();
      triggerConfetti();
    }
  }, [effectiveRps, hasUnlockedSuperpower, triggerConfetti]);

  const toggleDdos = () => {
    sounds.playClick();
    setIsDdosActive(!isDdosActive);
  };

  const toggleAiSurge = () => {
    sounds.playClick();
    setIsAiSurgeActive(!isAiSurgeActive);
  };

  const resetSimulator = () => {
    sounds.playClick();
    setTrafficRps(1200);
    setIsDdosActive(false);
    setIsAiSurgeActive(false);
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Signature Interactive Superpower
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Live AWS Cloud Architecture & Stress Simulator
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Test my cloud architecture in real time. Ramp up requests per second, trigger simulated surges, and observe how serverless AWS services scale and maintain zero-drop resilience.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetSimulator}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors"
            title="Reset Simulator"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            us-east-1 Live
          </div>
        </div>
      </div>

      {/* Architecture Canvas View */}
      <div className="relative z-10 my-6 bg-slate-950/80 rounded-2xl border border-white/5 p-4 md:p-6 overflow-x-auto">
        <div className="min-w-[700px] h-[320px] relative select-none">
          {/* SVG Connection Lines & Animated Flowing Packets */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {CONNECTIONS.map((conn) => {
              const start = NODES.find((n) => n.id === conn.from)!;
              const end = NODES.find((n) => n.id === conn.to)!;
              const isBusy = effectiveRps > 20000;
              const animSpeed = isBusy ? '1s' : '2.5s';

              return (
                <g key={`${conn.from}-${conn.to}`}>
                  <line
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke="url(#lineGrad)"
                    strokeWidth={isBusy ? 3 : 2}
                    strokeDasharray={isBusy ? '4 4' : '6 6'}
                    className="opacity-70"
                  />
                  {/* Animated particle circle traveling along line */}
                  <circle r={isBusy ? 4 : 3} fill="#fbbf24">
                    <animateMotion
                      path={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                      dur={animSpeed}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Interactive Architecture Nodes */}
          {NODES.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNode?.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveNode(isSelected ? null : node);
                }}
                style={{ left: `${node.x - 55}px`, top: `${node.y - 45}px` }}
                className={`absolute w-28 p-2.5 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'border-amber-400 bg-amber-500/20 shadow-lg shadow-amber-500/20 scale-105 z-20'
                    : 'border-white/10 bg-slate-900/90 hover:border-white/30 hover:bg-slate-800/90 z-10'
                }`}
              >
                <div className={`p-2 rounded-xl bg-white/5 ${node.color} mb-1.5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white text-center leading-tight">
                  {node.name}
                </span>
                <span className="text-[9px] text-slate-400 font-mono tracking-tight mt-0.5">
                  {node.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Node Detail Drawer / Info tooltip */}
        {activeNode && (
          <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-amber-400">{activeNode.name}:</span>
              <span className="text-slate-300">{activeNode.description}</span>
            </div>
            <button
              onClick={() => setActiveNode(null)}
              className="text-slate-400 hover:text-white px-2 py-0.5 rounded text-[10px]"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Simulator Controls & Live Dashboard */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Sliders and Toggles (7 cols) */}
        <div className="lg:col-span-7 space-y-5 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-400" />
                Simulated Traffic Load:
              </span>
              <span className="font-mono text-amber-400 text-sm">
                {effectiveRps.toLocaleString()} req / sec
              </span>
            </div>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={trafficRps}
              onChange={(e) => {
                setTrafficRps(Number(e.target.value));
              }}
              className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>500 RPS (Baseline)</span>
              <span>25K (Medium)</span>
              <span>50K (High)</span>
              <span>100K (Extreme)</span>
            </div>
          </div>

          {/* Action Surges */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={toggleDdos}
              className={`flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                isDdosActive
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-lg shadow-rose-500/20'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              {isDdosActive ? 'Stop DDoS Attack' : 'Simulate 85K DDoS Spike'}
            </button>

            <button
              onClick={toggleAiSurge}
              className={`flex-1 min-w-[150px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                isAiSurgeActive
                  ? 'bg-purple-500/20 border-purple-500 text-purple-300 shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              {isAiSurgeActive ? 'Bedrock AI Surge: Active' : 'Trigger Bedrock AI Surge'}
            </button>
          </div>
        </div>

        {/* Live Telemetry Cards (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-3 font-mono">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10">
            <span className="text-[10px] uppercase text-slate-400 tracking-wider block mb-1">
              P99 Latency
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-emerald-400">{latencyMs}</span>
              <span className="text-xs text-slate-400">ms</span>
            </div>
            <span className="text-[10px] text-emerald-500/90 font-sans mt-0.5 block">
              Global CloudFront Edge
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10">
            <span className="text-[10px] uppercase text-slate-400 tracking-wider block mb-1">
              Lambda Workers
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-orange-400">{lambdaConcurrency}</span>
              <span className="text-xs text-slate-400">instances</span>
            </div>
            <span className="text-[10px] text-orange-400/90 font-sans mt-0.5 block">
              Autoscaled Serverless
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10">
            <span className="text-[10px] uppercase text-slate-400 tracking-wider block mb-1">
              Edge Cache Hit
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-sky-400">{cacheHitRatio.toFixed(1)}</span>
              <span className="text-xs text-slate-400">%</span>
            </div>
            <span className="text-[10px] text-sky-400/90 font-sans mt-0.5 block">
              Amplify CDN Shield
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/10">
            <span className="text-[10px] uppercase text-slate-400 tracking-wider block mb-1">
              Est. Monthly Cost
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-amber-400">${monthlyCostEst}</span>
            </div>
            <span className="text-[10px] text-amber-400/90 font-sans mt-0.5 block">
              Pay-as-you-go Value
            </span>
          </div>
        </div>
      </div>

      {/* Superpower Achievement Banner */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Gauge className="w-4 h-4 text-amber-400" />
          <span>System Status:</span>
          <span className="font-semibold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {healthStatus}
          </span>
        </div>

        {hasUnlockedSuperpower ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 font-bold animate-pulse">
            <Award className="w-4 h-4 text-amber-400" />
            Superpower Verified: Cloud Scalability Master!
          </div>
        ) : (
          <div className="text-slate-400 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500" />
            Slide traffic to 70K+ RPS to unlock the verified superpower achievement!
          </div>
        )}
      </div>
    </div>
  );
};
