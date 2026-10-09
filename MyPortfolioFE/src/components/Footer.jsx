import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Code, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#080b13] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-lg shadow-md shadow-cyan-500/20">
                KK
              </div>
              <span className="text-xl font-bold text-slate-100">
                Kajal Kumari
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Senior .NET Backend Developer with 4+ years of hands-on experience crafting enterprise ERP architectures, multi-tenant databases, resilient REST APIs, and microservices in C# and SQL Server.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:kajalkumari.dev@example.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">All Projects</Link>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">ERP Architecture Case Study</a>
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Core Tech Stack
            </h3>
            <ul className="space-y-2 text-sm font-mono text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> C# / .NET 8 Web API
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> SQL Server & EF Core
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Dapper & Stored Procedures
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Multi-Tenancy Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> SignalR & JWT Security
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Kajal Kumari. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS <Code className="w-3.5 h-3.5 text-cyan-400 inline" /> Designed for .NET Enterprise Backend Engineers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
