import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ exp, isLast }) => {
  return (
    <div className="relative pl-6 sm:pl-10 pb-12 group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-2.5 sm:left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/60 to-slate-800" />
      )}

      {/* Timeline Node */}
      <div className="absolute left-0 sm:left-1.5 top-1.5 w-6 h-6 rounded-full bg-[#0b0f19] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 group-hover:bg-cyan-950 transition-all duration-300">
        <div className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>

      {/* Experience Content Card */}
      <div className="bg-[#111726]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 card-glow-hover">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {exp.role}
            </h3>
            <div className="text-base font-semibold text-cyan-400/90 flex items-center gap-2 mt-1">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              {exp.company}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              <MapPin className="w-3 h-3 text-cyan-400" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
          {exp.summary}
        </p>

        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3 flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-cyan-400" /> Key Technical Achievements & Responsibilities
          </h4>
          <ul className="space-y-2.5">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-slate-800/60">
          <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
