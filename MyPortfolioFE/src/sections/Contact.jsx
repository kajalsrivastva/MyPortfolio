import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Send, MessageSquare, CheckCircle, FileText, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { postContactMessage } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    // Call Web API POST /api/contact
    await postContactMessage(formData);

    // Also trigger mailto client launch as fallback
    const mailtoUrl = `mailto:kajalkumari.dev@example.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080b13] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="GET IN TOUCH"
          title="Let's Discuss Your Backend & Architecture Needs"
          description="Looking for an experienced .NET Backend Developer to design scalable Web APIs, multi-tenant databases, or optimize your SQL Server backend? Reach out directly!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Contact Direct Cards (Left side) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-7 space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Direct Channels
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to email me directly or connect via LinkedIn and GitHub. I respond promptly to enterprise career opportunities and contract backend architecture work.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <a
                  href="mailto:kajalkumari.dev@example.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0b0f19]/70 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      kajalkumari.dev@example.com
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0b0f19]/70 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/kajalkumari-dev
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0b0f19]/70 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">GitHub Repositories</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      github.com/kajalkumari-dev
                    </div>
                  </div>
                </a>

                {/* Resume Card */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0b0f19]/70 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">PDF Curriculum Vitae</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      Download Official Resume
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Interactive Form (Right side) */}
          <div className="lg:col-span-7 bg-[#111726]/80 border border-slate-800/80 rounded-2xl p-7 sm:p-8">
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below to submit a message to the ASP.NET Core API endpoint & email client.
            </p>

            {submitted ? (
              <div className="bg-cyan-950/60 border border-cyan-500/60 rounded-xl p-6 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                <h4 className="text-lg font-bold text-slate-100">Message Submitted to API & Email!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your message has been processed by the ASP.NET Core backend and launched in your email client.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Subject / Project Interest
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. .NET Senior Backend Developer Role / ERP Architecture"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your project requirements or hiring opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all duration-200 disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting to API...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Inquiry to Web API
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
