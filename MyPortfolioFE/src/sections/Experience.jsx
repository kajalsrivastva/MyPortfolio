import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';
import { fetchExperiences } from '../services/api';
import { experienceStats } from '../data/experience';
import { Loader2 } from 'lucide-react';

const Experience = () => {
  const [experienceList, setExperienceList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences().then((data) => {
      setExperienceList(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="CAREER TIMELINE"
          title="Professional Experience & Technical Roles"
          description="4+ years of backend engineering experience developing enterprise software, RESTful services, database connections, and scalable backend features."
        />

        {/* Experience Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {experienceStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#111726]/80 border border-slate-800/80 p-5 rounded-2xl text-center hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Timeline */}
        {loading ? (
          <div className="flex justify-center items-center py-12 text-cyan-400 gap-2 font-mono text-sm">
            <Loader2 className="w-5 h-5 animate-spin" /> Loading Experience Timeline from API...
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {experienceList.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isLast={index === experienceList.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
