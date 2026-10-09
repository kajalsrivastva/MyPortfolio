import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Code2, Server, Database, Shield, Cpu, CheckCircle } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Clean Backend Architecture",
      description: "Writing maintainable, testable C# code adhering to SOLID principles, Dependency Injection, and Repository/Unit of Work patterns."
    },
    {
      icon: Database,
      title: "Data & Performance Optimization",
      description: "Designing normalized SQL schemas, optimizing complex queries with Dapper & EF Core, stored procedure tuning, and indexing."
    },
    {
      icon: Cpu,
      title: "Multi-Tenancy & Enterprise Isolation",
      description: "Building tenant-aware DB connection routing, automated database schema provisioning, and isolation pipelines."
    },
    {
      icon: Shield,
      title: "Security & Access Control",
      description: "Implementing JWT authentication, claim signing, refresh token security, and dynamic role-based access control (RBAC)."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="ABOUT ME"
          title="Engineering resilient enterprise backend systems with 4+ years of expertise."
          description="A dedicated .NET Backend Developer passionate about building robust APIs, scalable multi-tenant architectures, and high-performance SQL Server databases."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mt-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <strong className="text-slate-100 font-semibold">Kajal Kumari</strong>. Over the past 4+ years, I have specialized in building mission-critical backend applications using <strong className="text-cyan-400">C#, ASP.NET Core, and SQL Server</strong>.
              </p>
              <p>
                My core expertise spans across enterprise multi-tenant ERP software, legal service platforms, restaurant POS backends, and healthcare quote systems. I focus heavily on API speed, request safety, thread management, and clean data access patterns.
              </p>
              <p>
                Whether it's building automated tenant database provisioning, real-time SignalR notifications, or integrating third-party gateways (Stripe, Razorpay, Twilio, SendGrid), I emphasize predictable REST APIs and clean separation of concerns.
              </p>
            </div>

            {/* Core Responsibilities Checklist */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase text-cyan-400 font-semibold mb-3 tracking-wider">
                My Core Responsibilities & Focus:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>REST API Design & Swagger Specs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Multi-Tenant DB Connection Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dapper & EF Core Query Tuning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dynamic RBAC Security Middleware</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architecture Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#111726]/60 border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 card-glow-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
