import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'placement-ai-pro',
    title: 'Placement AI Pro',
    category: 'AI & Full-Stack Platform',
    subtitle: 'An AI-powered placement preparation platform that helps students prepare for interviews, improve resumes, practice aptitude tests, and receive AI-driven feedback.',
    overview:
      'Placement AI Pro is an intelligent placement preparation platform designed to help students prepare for technical and behavioral interviews, optimize resumes for ATS screening, practice coding & aptitude tests, and receive comprehensive AI-driven performance feedback.',
    technologies: ['AI / OpenAI', 'React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Express'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807/placement-ai-pro',
    demoUrl: 'https://github.com/keerthana-1807/placement-ai-pro',
    keyFeatures: [
      'Interactive AI Mock Interviewer offering real-time technical & behavioral feedback',
      'Automated resume improvement & ATS alignment scoring against job descriptions',
      'Aptitude and algorithmic coding test environment with step-by-step solutions',
      'Adaptive student progress dashboard tracking speed, accuracy, and weak topic areas',
    ],
    challenges: [
      'Structuring prompt engineering pipelines to return consistent JSON evaluation metrics for student code solutions.',
      'Maintaining low latency when processing concurrent AI feedback streams for multi-step interview sessions.',
    ],
    learningOutcomes: [
      'Mastered integration of AI LLM APIs with asynchronous React state management.',
      'Gained deep experience in designing recruiter-aligned user experience workflows for tech students.',
    ],
  },
  {
    id: 'kyc-ai-agent',
    title: 'KYC AI Agent',
    category: 'AI & Computer Vision',
    subtitle: 'An AI-powered KYC verification system that automates identity verification, document validation, and customer onboarding using intelligent AI workflows.',
    overview:
      'KYC AI Agent is an intelligent AI-powered Know Your Customer verification system that automates identity validation, extracts key document information using OCR and deep learning, and streamlines customer onboarding with faster, tamper-resistant workflows.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'OCR', 'FastAPI', 'React', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807/kycaiagent',
    demoUrl: null,
    keyFeatures: [
      'Automated document verification and liveness detection algorithms',
      'High-precision OCR text extraction for automated form data autofill',
      '1:1 facial liveness detection and selfie-to-document match verification',
      'Digital document tamper and anomaly detection preventing identity fraud',
    ],
    challenges: [
      'Achieving high extraction accuracy across varied lighting, angles, and document compression ratios.',
      'Ensuring real-time sub-second verification processing for high-volume onboarding queues.',
    ],
    learningOutcomes: [
      'Designed end-to-end computer vision and OCR pipelines with OpenCV and PyTorch.',
      'Architected high-throughput RESTful API microservices for secure identity validation.',
    ],
  },
  {
    id: 'portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Full-Stack & 3D Visuals',
    subtitle: 'An award-quality developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.',
    overview:
      'A high-performance interactive developer portfolio showcasing technical mastery, responsive glassmorphic UI, 3D ambient particle starfields, dynamic typewriter components, and optimized recruiter workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807',
    demoUrl: '#home',
    keyFeatures: [
      'Interactive 3D Three.js particle starfield and floating geometric wireframe visual effects',
      'Ultra-fluid glassmorphic design system with ambient aurora lighting effects',
      'Fully responsive, recruiter-optimized layout with fast render performance',
      'Interactive project deep-dive modal and simulated live GitHub dashboard',
    ],
    challenges: [
      'Balancing high-frame-rate 3D visual rendering with lightweight DOM footprint across mobile devices.',
      'Crafting reusable CSS glassmorphism design tokens while maintaining crisp accessibility contrast.',
    ],
    learningOutcomes: [
      'Mastered modern React animation paradigms with Framer Motion and Three.js canvas integration.',
      'Demonstrated production-grade front-end engineering, SEO optimization, and visual design synthesis.',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>FEATURED PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            AI & Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Showcase</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Explore featured AI applications and engineering projects. Click any card to view detailed architecture and live links.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl flex flex-col cursor-pointer glass-panel-hover"
            >
              {/* Image Preview Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-cyan-300 text-[11px] font-mono backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-white text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl">
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {project.subtitle}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] text-indigo-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-lg bg-slate-900/90 border border-white/5 text-[10px] text-slate-400 font-mono">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 group-hover:underline flex items-center gap-1">
                    <span>Explore Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target={project.demoUrl.startsWith('http') ? "_blank" : "_self"}
                        rel={project.demoUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="p-2.5 rounded-full bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/30 transition-colors flex items-center gap-1 text-xs font-semibold"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-300" />
                        <span className="hidden sm:inline">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
