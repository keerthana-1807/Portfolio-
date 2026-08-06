import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Code2, Rocket, Brain, Coffee, CheckCircle2, Calendar, BookOpen } from 'lucide-react';

const statsData = [
  { label: 'Projects Built', value: 8, suffix: '+', icon: Code2, color: 'from-indigo-500 to-purple-500' },
  { label: 'Certifications', value: 5, suffix: '+', icon: Award, color: 'from-cyan-500 to-blue-500' },
  { label: 'Tech Stack', value: 12, suffix: '+', icon: Brain, color: 'from-emerald-500 to-teal-500' },
];

const timelineData = [
  {
    year: 'Sep 2023 - Apr 2027 (Present)',
    title: 'Bachelor of Engineering – Computer Science & Engineering (AI & ML)',
    institution: 'Maharaja Institute of Technology, Mysore',
    description: 'Pursuing B.E. degree in Computer Science & Engineering (AI & ML), focusing on Artificial Intelligence, Machine Learning, Deep Learning, Agentic AI, Natural Language Processing, and Data Science.',
    status: 'Currently Pursuing Degree',
    highlights: ['CGPA: 7.0', 'AI & Machine Learning Focus', 'Active Open Source Developer'],
  },
  {
    year: 'Jun 2021 - Mar 2023',
    title: 'Pre-University (Class XII)',
    institution: 'Vasavi PU Composite College',
    description: 'Completed Pre-University course with a focus on core science subjects (Physics, Chemistry, Mathematics, Computer Science).',
    status: 'Completed: 70%',
    highlights: ['70% Aggregate Marks', 'Focus on Science & Mathematics', 'Competitive Problem Solving'],
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counters, setCounters] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 50;
      const stepTime = duration / steps;

      const intervals = statsData.map((stat, idx) => {
        let current = 0;
        const increment = stat.value / steps;
        return setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters((prev) => {
              const updated = [...prev];
              updated[idx] = stat.value;
              return updated;
            });
            clearInterval(intervals[idx]);
          } else {
            setCounters((prev) => {
              const updated = [...prev];
              updated[idx] = Math.floor(current);
              return updated;
            });
          }
        }, stepTime);
      });

      return () => intervals.forEach((id) => clearInterval(id));
    }
  }, [isInView]);

  return (
    <section id="about" ref={ref} className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4"
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering Purpose &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              AI Innovation
            </span>
          </motion.h2>
        </div>

        {/* Split Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Personal Story Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Engineering Journey</h3>
                <p className="text-xs font-mono text-cyan-400">B.E. Computer Science (AI & ML)</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I am currently pursuing my <span className="text-white font-semibold">B.E. in Computer Science & Engineering (AI & ML)</span>. My academic and practical work centers on intelligent systems, predictive modeling, and building high-impact full-stack web applications.
              </p>
              <p>
                Driven by innovation, I engineer real-world solutions such as <span className="text-cyan-300 font-medium">PlacementPilot AI</span> for automated placement preparation and <span className="text-indigo-300 font-medium">KYC Agent</span> for automated identity verification using OCR.
              </p>
              <p>
                My objective is to leverage <span className="text-emerald-300 font-medium">AI & Machine Learning</span> to solve complex computational challenges, delivering scalable, recruiter-grade applications built on clean code principles.
              </p>
            </div>

            {/* Quick Core Traits */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">AI & ML Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Computer Vision & OCR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Full-Stack Web Dev</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {statsData.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group flex items-center gap-6"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-[1px] shadow-lg shrink-0`}>
                      <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-indigo-400" />
                      </div>
                    </div>

                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center">
                        <span>{counters[idx]}</span>
                        <span className="text-indigo-400">{stat.suffix}</span>
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Highlight Note */}
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/20 to-indigo-950/20">
              <div className="flex items-center gap-3 text-cyan-400 text-sm font-semibold mb-2">
                <Coffee className="w-4 h-4" />
                <span>AI Engineering Focus</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated to daily AI research, model optimization, algorithmic coding, and building user-first intelligent web platforms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Education & Qualifications</h3>
              <p className="text-xs text-slate-400 font-mono">Academic foundation and engineering focus</p>
            </div>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-cyan-400/50" />

                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm font-medium text-indigo-300 mb-3">{item.institution}</p>
                  <p className="text-sm text-slate-300 mb-4">{item.description}</p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                    {item.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/5 text-[11px] text-slate-300 font-mono"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
