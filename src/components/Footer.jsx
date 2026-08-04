import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#05070a] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl font-extrabold text-white">Keerthana N</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Computer Science Engineering Student (AI & ML) • AI & Web Developer
            </p>
          </div>

          {/* Social Links & Motto */}
          <div className="flex flex-col items-center gap-4">
            <div className="glass-panel px-6 py-2.5 rounded-full border border-indigo-500/30 text-center">
              <span className="text-sm font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300">
                "Code. Learn. Build. Repeat."
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/keerthana-1807"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all flex items-center gap-2 px-4 text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500/50 text-xs font-mono text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Keerthana N. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Engineered with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
