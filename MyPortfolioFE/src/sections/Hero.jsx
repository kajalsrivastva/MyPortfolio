import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download, Server, Database, ShieldCheck, Terminal, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text (Left side) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-cyan-300 text-xs font-mono tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              .NET BACKEND DEVELOPER
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Building <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">scalable APIs</span> & enterprise applications.
            </h1>

            {/* Intro Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-slate-100 font-semibold">Kajal Kumari</strong> — a Backend Developer with <strong className="text-cyan-400">4+ years of experience</strong> in C#, ASP.NET Core, SQL Server and enterprise application development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-200"
              >
                Explore Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Highlight Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div className="bg-[#111726]/60 p-4 rounded-xl border border-slate-800/60">
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">4+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Years of Experience</div>
              </div>

              <div className="bg-[#111726]/60 p-4 rounded-xl border border-slate-800/60">
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">.NET</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Backend Development</div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-[#111726]/60 p-4 rounded-xl border border-slate-800/60">
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">8+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Enterprise Systems</div>
              </div>
            </div>

          </div>

          {/* Code Visual Card (Right side) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0e1424] border border-slate-800/90 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  TenantResolverMiddleware.cs
                </div>
              </div>

              {/* Code Snippet Box */}
              <pre className="text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed space-y-1">
                <code>
                  <span className="text-cyan-400">public class</span> <span className="text-emerald-300">TenantResolverMiddleware</span>{'\n'}
                  {'{'}{'\n'}
                  {'  '}<span className="text-cyan-400">public async Task</span> InvokeAsync(HttpContext ctx){'\n'}
                  {'  '}{'{'}{'\n'}
                  {'    '}<span className="text-cyan-400">var</span> tenantId = ctx.Request.Headers[<span className="text-amber-300">"X-Tenant-ID"</span>];{'\n'}
                  {'    '}<span className="text-cyan-400">if</span> (await _tenant.ValidateAsync(tenantId)){'\n'}
                  {'    '}{'{'}{'\n'}
                  {'      '}_dbFactory.<span className="text-sky-300">SetConnectionString</span>(tenantId);{'\n'}
                  {'      '}<span className="text-cyan-400">await</span> _next(ctx);{'\n'}
                  {'    '}{'}'}{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'}
                </code>
              </pre>

              {/* Badges below snippet */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-slate-300 flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>ASP.NET Core Web API</span>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-slate-300 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>SQL Server & Dapper</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
