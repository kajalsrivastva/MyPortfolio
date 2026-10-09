import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Code, Server, Layers, CheckCircle } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#111726]/90 border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 card-glow-hover group">
      <div>
        {/* Category & Period */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 font-medium">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2">
          {project.title}
        </h3>

        {/* Role Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-mono mb-3 bg-slate-800/60 px-2.5 py-1 rounded-md">
          <Server className="w-3.5 h-3.5 text-cyan-400" />
          {project.role}
        </div>

        {/* Tagline / Description */}
        <p className="text-sm text-slate-300 mb-5 leading-relaxed">
          {project.tagline || project.description}
        </p>

        {/* Top Features */}
        {project.features && (
          <div className="space-y-2 mb-6 bg-[#0b0f19]/70 p-3.5 rounded-xl border border-slate-800/50">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-1 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Backend Capabilities
            </h4>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold rounded-xl bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-cyan-500/10"
        >
          View Case Study & Backend Details
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
