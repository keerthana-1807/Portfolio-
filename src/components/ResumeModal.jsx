import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, GraduationCap, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text content trigger for simulated download
    const element = document.createElement('a');
    const file = new Blob([
      `KEERTHANA N - RESUME
Pursuing B.E. Computer Science & Engineering (AI & ML)

Email: keerthananagraj03@gmail.com
GitHub: https://github.com/keerthana-1807
LinkedIn: https://www.linkedin.com/in/keerthana-n-4621b632b

EDUCATION:
B.E. Computer Science & Engineering (AI & ML) (2022 - 2026)
State Board Higher Secondary Certificate (2020 - 2022)

TECHNICAL SKILLS:
- AI & Machine Learning: Python, PyTorch, OpenCV, OCR, Scikit-learn, Deep Learning, NLP
- Frontend & Web: HTML5, CSS3, React, Tailwind CSS, JavaScript
- Databases & Tools: SQL, Git, GitHub, VS Code

FEATURED PROJECTS:
1. Placement AI Pro (Demo: https://placement-ai-pro.vercel.app/ | Repo: https://github.com/keerthana-1807/placement-ai-pro)
   - AI-powered placement preparation platform with personalized coding and interview feedback.
2. KYC AI Agent (Repo: https://github.com/keerthana-1807/kycaiagent)
   - Intelligent KYC automation system verifying user documents using OCR and computer vision.
3. Personal Portfolio (https://github.com/keerthana-1807)
   - Award-quality React + Three.js + Tailwind developer portfolio.

CERTIFICATIONS:
- IBM Enterprise AI Professional Certification
- Google Data Analytics & Machine Learning Foundations
- Microsoft Certified: Azure AI & Cloud Fundamentals
      `
    ], { type: 'text/plain' });

    element.href = URL.createObjectURL(file);
    element.download = 'Keerthana_N_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090e]/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl bg-slate-900/95 border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-10 text-slate-100 max-h-[85vh] overflow-y-auto"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Keerthana N — Resume</h2>
                <p className="text-xs font-mono text-cyan-400">Curriculum Vitae Preview</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download File</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8 text-sm">
            {/* Header Info */}
            <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/10">
              <h1 className="text-2xl font-extrabold text-white mb-1">KEERTHANA N</h1>
              <p className="text-indigo-300 font-medium mb-3">
                B.E. Computer Science & Engineering (AI & ML)
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
                <a
                  href="mailto:keerthananagraj03@gmail.com"
                  className="hover:text-cyan-400 flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>keerthananagraj03@gmail.com</span>
                </a>
                <a
                  href="https://github.com/keerthana-1807"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/keerthana-1807</span>
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold">
                Professional Profile
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Computer Science Engineering student focused on Artificial Intelligence and Machine Learning. Passionate about computer vision, OCR, deep learning, Python development, and building scalable full-stack web applications.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between font-bold text-white">
                  <span>B.E. Computer Science & Engineering (AI & ML)</span>
                  <span className="text-xs font-mono text-indigo-400">2022 - 2026</span>
                </div>
                <p className="text-xs text-slate-400">Anna University Affiliated Engineering College</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-white block mb-1">AI & Machine Learning</span>
                  <span className="text-slate-300">Python, PyTorch, OpenCV, OCR, Scikit-learn</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-white block mb-1">Web Development</span>
                  <span className="text-slate-300">HTML5, CSS3, React, Tailwind CSS, JavaScript</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-white block mb-1">Databases</span>
                  <span className="text-slate-300">SQL, PostgreSQL, MySQL</span>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5">
                  <span className="font-bold text-white block mb-1">Developer Tools</span>
                  <span className="text-slate-300">Git, GitHub, VS Code</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                Featured Projects
              </h3>
              <div className="space-y-3 text-xs">
                <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>Placement AI Pro</span>
                    <a
                      href="https://placement-ai-pro.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-[11px]"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                  <p className="text-slate-300">
                    An AI-powered placement preparation platform helping students practice aptitude, coding, and interview questions with personalized feedback.
                  </p>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between font-bold text-white mb-1">
                    <span>KYC AI Agent</span>
                    <a
                      href="https://github.com/keerthana-1807/kycaiagent"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline text-[11px]"
                    >
                      Repo Link ↗
                    </a>
                  </div>
                  <p className="text-slate-300">
                    Intelligent KYC automation system verifying user documents using OCR and computer vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
