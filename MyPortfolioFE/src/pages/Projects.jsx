import React, { useState, useEffect, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../services/api';
import { Search, Filter, Code2, Loader2 } from 'lucide-react';

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchProjects().then((data) => {
      setAllProjects(data);
      setLoading(false);
    });
  }, []);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(allProjects.map((p) => p.category))];
    return cats;
  }, [allProjects]);

  // Filter projects by category and search term
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.role.toLowerCase().includes(q) ||
        (project.technologies && project.technologies.some((tech) => tech.toLowerCase().includes(q))) ||
        (project.features && project.features.some((feat) => feat.toLowerCase().includes(q)));

      return matchesCategory && matchesQuery;
    });
  }, [allProjects, searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-24 bg-[#0b0f19] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          subtitle="PROJECT PORTFOLIO"
          title="All Enterprise & Backend Projects"
          description="Explore complete case studies of enterprise applications, multi-tenant ERP systems, legal service platforms, fintech top-ups, and REST microservices."
        />

        {/* Search & Filter Bar */}
        <div className="bg-[#111726]/90 border border-slate-800 p-4 sm:p-6 rounded-2xl mb-10 shadow-lg space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by title, tech stack (e.g., C#, Dapper, SignalR, JWT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-cyan-400 hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter by Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/20'
                    : 'bg-[#0b0f19] border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6 px-1">
          <span>Showing {filteredProjects.length} of {allProjects.length} Projects</span>
          {selectedCategory !== 'All' && <span>Category: {selectedCategory}</span>}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16 text-cyan-400 gap-2 font-mono text-sm">
            <Loader2 className="w-6 h-6 animate-spin" /> Loading Projects from ASP.NET Core API...
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-[#111726]/60 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
            <Code2 className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-200">No Projects Found</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              No project matches your search term "{searchQuery}". Try searching for C#, SQL Server, SignalR, or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
