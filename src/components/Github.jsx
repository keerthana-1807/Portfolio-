import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, BookOpen, Code2, Flame, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const githubStats = [
  { label: 'Total Commits', value: '450+', icon: GitCommit, color: 'text-indigo-400' },
  { label: 'Public Repositories', value: '16', icon: BookOpen, color: 'text-cyan-400' },
  { label: 'Stars Earned', value: '42+', icon: Star, color: 'text-amber-400' },
  { label: 'Pull Requests', value: '38+', icon: GitPullRequest, color: 'text-emerald-400' },
];

const topLanguages = [
  { name: 'Python', percentage: 52, color: 'bg-indigo-500' },
  { name: 'JavaScript / React', percentage: 24, color: 'bg-yellow-400' },
  { name: 'SQL & Database', percentage: 14, color: 'bg-cyan-400' },
  { name: 'C & Java', percentage: 10, color: 'bg-amber-500' },
];

const featuredRepos = [
  {
    name: 'placement-ai-pro',
    description: 'PlacementPilot AI — an agentic placement preparation assistant that generates readiness reports using orchestrator agents.',
    url: 'https://github.com/keerthana-1807/placement-ai-pro',
    language: 'React / Node.js / AI',
    stars: 18,
    forks: 5,
  },
  {
    name: 'kycaiagent',
    description: 'KYC Agent — an agentic AI Know Your Customer compliance web platform verifying documents via OCR workflows.',
    url: 'https://github.com/keerthana-1807/kycaiagent',
    language: 'Python / FastAPI / AI',
    stars: 15,
    forks: 4,
  },
  {
    name: 'Portfolio-',
    description: 'Highly interactive developer portfolio showcasing AI & full-stack applications with 3D starfields.',
    url: 'https://github.com/keerthana-1807/Portfolio-',
    language: 'JavaScript / React / Three.js',
    stars: 12,
    forks: 3,
  },
];

// Generates simulated contribution heatmap graph grid
const generateHeatmapGrid = () => {
  const weeks = 40;
  const daysPerWeek = 7;
  const grid = [];

  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const rand = Math.random();
      let level = 0; // no commit
      if (rand > 0.75) level = 1;
      else if (rand > 0.5) level = 2;
      else if (rand > 0.35) level = 3;
      else if (rand > 0.2) level = 4;

      weekDays.push(level);
    }
    grid.push(weekDays);
  }
  return grid;
};

const heatmapGrid = generateHeatmapGrid();

const levelColors = [
  'bg-slate-900/80 border-slate-800',
  'bg-emerald-950/80 border-emerald-800/40 text-[#0e4429]',
  'bg-emerald-800/80 border-emerald-700/50 text-[#006d32]',
  'bg-emerald-600/90 border-emerald-500/60 text-[#26a641]',
  'bg-emerald-400 border-emerald-300 shadow-md shadow-emerald-400/50',
];

export default function GithubSection() {
  return (
    <section id="github" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>OPEN SOURCE ACTIVITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400">Dashboard</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Live overview of coding activity, repository contributions, and primary language breakdown for{' '}
            <span className="text-emerald-300 font-mono">@keerthana-1807</span>.
          </p>
        </div>

        {/* Top GitHub Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {githubStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center"
              >
                <Icon className={`w-6 h-6 mb-2 ${stat.color}`} />
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-mono mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Contribution Graph Heatmap Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 mb-12 shadow-2xl overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 text-emerald-400 animate-bounce" />
              <div>
                <h3 className="text-lg font-bold text-white">450+ Contributions in the Last Year</h3>
                <p className="text-xs text-slate-400 font-mono">Simulated commit activity matrix</p>
              </div>
            </div>
            <a
              href="https://github.com/keerthana-1807"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Matrix Grid */}
          <div className="flex gap-1.5 min-w-[700px] justify-between py-2">
            {heatmapGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1.5">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-3.5 h-3.5 rounded-sm border ${levelColors[level]} transition-transform hover:scale-125 cursor-pointer`}
                    title={`Contributions: Level ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Commit frequency across repositories</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {levelColors.map((col, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm border ${col}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Split: Top Languages & Featured Repos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Top Languages */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Most Used Languages</span>
              </h3>

              <div className="space-y-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-slate-200 font-medium">{lang.name}</span>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${lang.color}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
              ★ Java and Python represent 74% of total codebase additions.
            </div>
          </div>

          {/* Latest Featured Repositories */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Repositories</span>
            </h3>

            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-indigo-300 group-hover:text-cyan-300 transition-colors font-mono flex items-center gap-1.5">
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitCommit className="w-3.5 h-3.5 text-slate-400" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">{repo.description}</p>
                <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-cyan-400">
                  ● {repo.language}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
