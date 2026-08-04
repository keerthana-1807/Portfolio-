import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileText, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero({ onOpenResume }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse Reactive Glow Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* 3D Visual Layer */}
      <Hero3D />

      {/* Mouse Reactive Radial Glow Backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
        }}
      />

      {/* Aurora Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-indigo-950/40 border border-indigo-500/30 backdrop-blur-md mb-8 shadow-lg shadow-indigo-950/50"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-indigo-200 tracking-wide">
            Pursuing B.E. Computer Science & Engineering (AI & ML)
          </span>
        </motion.div>

        {/* Profile Avatar with Animated Glowing Rings */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-8 group"
        >
          {/* Animated Glow Rings */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 p-[2px] animate-spin-slow">
            <div className="w-full h-full bg-[#07090e] rounded-full" />
          </div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden p-1.5 bg-[#0b0f19] border border-white/20 shadow-2xl">
            <img
              src="/keerthana.png"
              alt="Keerthana N"
              className="w-full h-full object-cover rounded-full filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Floating Technology Badge */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-2 -right-2 px-3 py-1 bg-slate-900/90 border border-cyan-500/40 rounded-full text-[11px] font-mono text-cyan-300 shadow-xl backdrop-blur-md flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI & ML</span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hello, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
            Keerthana N
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl font-medium text-slate-300 mb-10 max-w-2xl"
        >
          Computer Science Engineer (AI & ML)
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>View Projects</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/15 hover:border-indigo-500/50 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-300 bg-slate-950/60 hover:text-white border border-white/10 hover:border-slate-400/30 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>Contact Me</span>
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2 group"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-400">
            Scroll to explore
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </motion.a>
      </div>
    </section>
  );
}
