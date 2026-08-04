import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onOpenResume }) {
  const handleLinkedInClick = (e) => {
    e.stopPropagation();
    window.open('https://www.linkedin.com/in/keerthana-n-4621b632b', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Aurora Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-cyan-600/15 to-emerald-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Interested in AI engineering roles, technical collaboration, or project inquiries? Reach out via direct channels below.
          </p>
        </div>

        {/* Direct Channels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* LinkedIn Direct Card */}
          <motion.div
            onClick={handleLinkedInClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <a
                  href="https://www.linkedin.com/in/keerthana-n-4621b632b"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-cyan-300 flex items-center gap-1 hover:bg-slate-800 transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                linkedin.com/in/keerthana-n-4621b632b
              </p>
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Click to open LinkedIn profile in a new tab, connect professionally, and start a conversation.
            </p>
          </motion.div>

          {/* GitHub Direct Card */}
          <motion.a
            href="https://github.com/keerthana-1807"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-indigo-300 flex items-center gap-1">
                  <span>Explore Repos</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                GitHub Repositories
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                github.com/keerthana-1807
              </p>
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Explore open-source codebases, AI projects, and repository contributions.
            </p>
          </motion.a>

          {/* Email Direct Card */}
          <motion.a
            href="mailto:keerthananagraj03@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-emerald-300">
                  Direct Mail
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                keerthananagraj03@gmail.com
              </p>
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Send direct email for career opportunities, recruitment, or collaboration.
            </p>
          </motion.a>

          {/* Resume Download Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={onOpenResume}
            className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-400 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-md">
                  View PDF
                </span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Download verified resume document
              </p>
            </div>
            <p className="text-xs text-slate-300 mt-4 leading-relaxed">
              Click to preview and download full professional resume.
            </p>
          </motion.div>
        </div>

        {/* Status Banner */}
        <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Open for AI & Engineering Opportunities</h4>
              <p className="text-xs text-slate-300">Available for recruitment, internships, and full-time software developer roles.</p>
            </div>
          </div>
          <button
            onClick={onOpenResume}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-bold shrink-0 shadow-lg shadow-indigo-600/30 transition-all"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
