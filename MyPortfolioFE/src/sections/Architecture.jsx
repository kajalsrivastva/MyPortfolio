import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { multiTenancyArchitecture } from '../data/architecture';
import { Cpu, Server, Database, ShieldCheck, RefreshCw, CheckCircle2, Code2, Copy, Check } from 'lucide-react';

const Architecture = () => {
  const [activeTab, setActiveTab] = useState(multiTenancyArchitecture.pillars[0].id);
  const [copied, setCopied] = useState(false);

  const activePillar =
    multiTenancyArchitecture.pillars.find((p) => p.id === activeTab) ||
    multiTenancyArchitecture.pillars[0];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-24 bg-[#0b0f19] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Special Highlight Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            ENTERPRISE ARCHITECTURE CASE STUDY
          </span>
        </div>

        <SectionHeading
          center
          title={multiTenancyArchitecture.title}
          description={multiTenancyArchitecture.subtitle}
        />

        {/* Overview Box */}
        <div className="bg-[#111726]/90 border border-slate-800 p-6 sm:p-8 rounded-2xl mb-12 shadow-xl">
          <h3 className="text-lg font-bold text-slate-100 mb-2 flex items-center gap-2">
            <Server className="w-5 h-5 text-cyan-400" />
            Architecture Overview & Rationale
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {multiTenancyArchitecture.overview}
          </p>
        </div>

        {/* Interactive Pillars Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {multiTenancyArchitecture.pillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`p-4 rounded-xl text-left transition-all border ${
                activeTab === pillar.id
                  ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#111726]/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="text-xs font-mono text-cyan-400 mb-1">Pillar {pillar.title.charAt(0)}</div>
              <div className="text-sm font-bold truncate">{pillar.title.substring(3)}</div>
            </button>
          ))}
        </div>

        {/* Active Pillar Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Explanation & Key Features (Left Column) */}
          <div className="lg:col-span-5 bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-medium uppercase tracking-wider">
                {activePillar.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-1">
                {activePillar.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activePillar.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Architecture Key Features:
              </h4>
              <ul className="space-y-2">
                {activePillar.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* C# Code Snippet Container (Right Column) */}
          <div className="lg:col-span-7 bg-[#0e1424] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>C# Implementation Snippet</span>
              </div>
              <button
                onClick={() => handleCopy(activePillar.codeSnippet)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                {copied ? 'Copied' : 'Copy C#'}
              </button>
            </div>

            {/* Code Body */}
            <pre className="p-5 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[450px]">
              <code>{activePillar.codeSnippet}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Architecture;
