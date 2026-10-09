import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProjectById, fetchProjects } from '../services/api';
import { ArrowLeft, Server, Calendar, CheckCircle2, Cpu, Code2, Layers, Loader2 } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchProjectById(id), fetchProjects()]).then(([projData, allList]) => {
      setProject(projData);
      setAllProjects(allList);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 pb-24 bg-[#0b0f19] min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
          <Loader2 className="w-5 h-5 animate-spin" /> Loading project details from API...
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-32 pb-24 bg-[#0b0f19] min-h-screen flex items-center justify-center text-center px-4">
        <div className="bg-[#111726] border border-slate-800 p-8 sm:p-12 rounded-2xl max-w-md">
          <h2 className="text-2xl font-bold text-slate-100 mb-2">Project Not Found</h2>
          <p className="text-sm text-slate-400 mb-6">
            The project ID "{id}" does not exist in the database.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  // Find next project for seamless navigation
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const nextProject = allProjects.length > 0 ? allProjects[(currentIndex + 1) % allProjects.length] : null;

  return (
    <div className="pt-32 pb-24 bg-[#0b0f19] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects List
        </button>

        {/* Header Section */}
        <div className="bg-[#111726]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-semibold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {project.period}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4">
            {project.title}
          </h1>

          <div className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 bg-slate-900/90 px-3.5 py-1.5 rounded-lg border border-slate-800 mb-6">
            <Server className="w-4 h-4 text-cyan-400" />
            <span>Role: {project.role}</span>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tech Stack Bar */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" /> Technologies & Frameworks:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Key Features & Responsibilities (Left) */}
          <div className="lg:col-span-7 bg-[#111726]/80 border border-slate-800 rounded-2xl p-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              Backend Features & Technical Execution
            </h3>

            {project.features && project.features.length > 0 && (
              <ul className="space-y-3.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Architecture Highlights (Right) */}
          <div className="lg:col-span-5 space-y-6">
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-7 space-y-4">
                <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  Architecture Highlights
                </h3>

                <div className="space-y-3">
                  {project.architectureHighlights.map((arch, idx) => (
                    <div key={idx} className="bg-[#0b0f19] p-4 rounded-xl border border-slate-800">
                      <div className="text-xs font-bold text-cyan-400 mb-1">
                        {arch.title}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                        {arch.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Links Card */}
            <div className="bg-[#111726]/80 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Enterprise Status
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                Confidential production codebase built for enterprise deployment. Live client data protected under non-disclosure.
              </div>
            </div>
          </div>

        </div>

        {/* Next Project Footer Bar */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <Link
            to="/projects"
            className="text-xs font-mono text-slate-400 hover:text-cyan-400"
          >
            ← Back to all projects
          </Link>

          {nextProject && (
            <Link
              to={`/project/${nextProject.id}`}
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline"
            >
              Next Case Study: {nextProject.title} →
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
