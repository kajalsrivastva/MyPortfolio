import React from 'react';
import { Server, Database, ShieldCheck, Cpu, Plug, Layout, Wrench, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Plug,
  Layout,
  Wrench
};

const SkillCard = ({ category }) => {
  const IconComponent = iconMap[category.icon] || Server;

  return (
    <div className="bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 card-glow-hover flex flex-col justify-between group">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {category.category}
          </h3>
        </div>

        <p className="text-xs text-slate-400 mb-6 line-clamp-2">
          {category.description}
        </p>

        <div className="space-y-3">
          {category.skills.map((skill, idx) => (
            <div key={idx} className="bg-[#0b0f19]/60 p-3 rounded-xl border border-slate-800/60">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {skill.name}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-medium ${
                  skill.level === 'Expert'
                    ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                    : skill.level === 'Advanced'
                    ? 'bg-blue-950 text-blue-300 border border-blue-800/60'
                    : 'bg-slate-800 text-slate-300'
                }`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
