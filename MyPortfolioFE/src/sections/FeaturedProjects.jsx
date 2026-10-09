import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { fetchProjects } from '../services/api';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';

const FeaturedProjects = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjectsList(data);
      setLoading(false);
    });
  }, []);

  const featured = projectsList.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 bg-[#080b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="FEATURED CASE STUDIES"
          title="Backend Engineering & Enterprise Systems"
          description="High-impact projects demonstrating multi-tenancy, real-time messaging, performance optimization, and payment gateway integrations."
        />

        {loading ? (
          <div className="flex justify-center items-center py-12 text-cyan-400 gap-2 font-mono text-sm">
            <Loader2 className="w-5 h-5 animate-spin" /> Fetching projects from .NET API...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* View All Projects Action */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 border border-slate-700/80 text-cyan-400 font-bold text-sm hover:bg-slate-800 hover:border-cyan-400 shadow-lg shadow-cyan-500/10 hover:scale-[1.02] transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Explore All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
