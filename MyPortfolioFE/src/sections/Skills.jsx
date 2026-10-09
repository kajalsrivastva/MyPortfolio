import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { fetchSkills } from '../services/api';
import { Loader2 } from 'lucide-react';

const Skills = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchSkills().then((data) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  const filteredCategories =
    selectedCategory === 'all'
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#080b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="TECHNICAL EXPERTISE"
          title="Categorized Skills & Engineering Capabilities"
          description="A detailed view of my hands-on technical proficiencies in .NET backend development, databases, security, architecture, integrations, and frontend synergy."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'bg-[#111726] border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400'
            }`}
          >
            All Skills ({categories.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                  : 'bg-[#111726] border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12 text-cyan-400 gap-2 font-mono text-sm">
            <Loader2 className="w-5 h-5 animate-spin" /> Loading Skills from .NET API...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
