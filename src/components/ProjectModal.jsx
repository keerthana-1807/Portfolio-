import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ShieldAlert, Lightbulb, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-4xl bg-slate-900/90 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/70 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-900 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono mb-2 inline-block">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{project.title}</h2>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-white text-xs font-semibold hover:border-indigo-500/50 flex items-center gap-2 transition-colors shadow-lg"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repo</span>
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/30 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Modal Tabs */}
          <div className="px-6 border-b border-white/10 bg-slate-950/40 flex gap-4 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Code2 },
              { id: 'features', label: 'Key Features', icon: CheckCircle2 },
              { id: 'challenges', label: 'Challenges', icon: ShieldAlert },
              { id: 'outcomes', label: 'Learning Outcomes', icon: Lightbulb },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                    isActive
                      ? 'border-indigo-400 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed text-base">{project.overview}</p>

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3">
                    Technologies Employed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-white/10 text-xs font-mono text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-xl border border-amber-500/20 bg-amber-950/10"
                  >
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-2">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Technical Challenge #{idx + 1}</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div className="space-y-4">
                {project.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="glass-panel p-5 rounded-xl border border-cyan-500/20 bg-cyan-950/10 flex items-start gap-3"
                  >
                    <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-200 leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
