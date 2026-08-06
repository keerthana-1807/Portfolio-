import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'placementpilot-ai',
    title: 'PlacementPilot AI',
    category: 'Agentic AI Platform',
    subtitle: 'A multi-agent AI platform that generates placement readiness reports from resumes using an orchestrator agent.',
    overview:
      'PlacementPilot AI is an intelligent placement preparation assistant that guides students through interview prep, resume kritik analysis, and ATS compatibility testing. Powered by independent specialized agents coordinated by a centralized orchestrator.',
    technologies: ['Agentic AI', 'OpenAI', 'LangChain', 'React', 'Node.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807/placement-ai-pro',
    demoUrl: 'https://placement-ai-pro.vercel.app/',
    keyFeatures: [
      'Built a multi-agent AI platform that generates placement readiness reports from resumes using an orchestrator agent',
      'Developed a Resume Analysis agent that delivers a section-by-section critique with a 0-10 quality score',
      'Implemented an ATS Compatibility agent that matches resume content to the target role using keyword scoring',
    ],
    challenges: [
      'Ensuring consistent and parsing-robust JSON formats from the resume critic LLM response streams.',
      'Optimizing response latency while orchestrating sequential agent tasks.',
    ],
    learningOutcomes: [
      'Mastered advanced multi-agent orchestrator design patterns.',
      'Gained deep experience in prompt engineering and structured LLM outputs.',
    ],
  },
  {
    id: 'kyc-agent',
    title: 'KYC Agent',
    category: 'Agentic AI & Compliance',
    subtitle: 'An AI-powered KYC automation platform for identity verification and compliance.',
    overview:
      'KYC Agent is an intelligent web application designed to automate the Know Your Customer verification process. It integrates OCR capabilities to analyze identity documents and flags data mismatches to reduce manual onboarding verification overhead.',
    technologies: ['Agentic AI', 'Python', 'FastAPI', 'OCR', 'React', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807/kycaiagent',
    demoUrl: null,
    keyFeatures: [
      'Built an AI-powered KYC automation platform for identity verification and compliance',
      'Integrated OCR to extract and validate information from government-issued documents',
      'Designed validation workflows to flag document mismatches and reduce manual compliance review effort',
    ],
    challenges: [
      'Achieving highly robust text extraction across skewed, dark, or low-resolution document captures.',
      'Ensuring data protection and privacy standard patterns in OCR pipelines.',
    ],
    learningOutcomes: [
      'Designed advanced image preprocessing and custom OCR text boundary boxes.',
      'Architected transactional workflows to handle onboarding pipelines asynchronously.',
    ],
  },
  {
    id: 'e-waste-segregation',
    title: 'AI-Driven E-waste Segregation Robot',
    category: 'Robotics & Computer Vision',
    subtitle: 'A self-learning reinforcement learning robot classification system to detect and sort electronic waste.',
    overview:
      'Currently in development, this system integrates computer vision and sensor-based classification to detect electronic components in real-time, optimizing sorting efficiency and reducing recycling overhead.',
    technologies: ['Python', 'Reinforcement Learning', 'Computer Vision', 'PyTorch', 'Sensor Fusion'],
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1200&q=80',
    github: 'https://github.com/keerthana-1807/Portfolio-',
    demoUrl: null,
    keyFeatures: [
      'Implementing computer vision and sensor-based classification to detect electronic components and optimize segregation accuracy in real time',
      'Designed a self-learning model to optimize waste sorting and reduce recycling costs',
    ],
    challenges: [
      'Fusing sensor telemetry inputs with real-time video stream classification parameters.',
      'Formulating effective reward functions for reinforcement learning sorting cycles.',
    ],
    learningOutcomes: [
      'Deepened understanding of policy-gradient optimization and neural network design in PyTorch.',
      'Applied sensor-fusion paradigms on real-time visual categorization streams.',
    ],
  },
  {
    id: 'ai-frontiers-conference',
    title: 'Frontiers in AI-Based Applications Conference',
    category: 'Research & Conference',
    subtitle: 'Participated in a national-level AI conference discussing modern AI methodologies.',
    overview:
      'Attended and actively participated in a national-level conference on Frontiers in AI-Based Applications. Engaged with field researchers, academics, and industry experts to study agentic trends and AI deployment practices.',
    technologies: ['Agentic AI', 'Generative AI', 'Deep Learning', 'Research Trends'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    github: null,
    demoUrl: null,
    keyFeatures: [
      'Participated in a national-level AI conference, interacting with researchers and industry experts',
      'Interacted with experts and researchers, strengthening understanding of emerging AI technologies and research trends',
    ],
    challenges: [
      'Analyzing state-of-the-art research papers and methodology decks in short sessions.',
    ],
    learningOutcomes: [
      'Gained valuable exposure to future neural architecture frameworks.',
      'Built connections with research and industry professionals focusing on ML applications.',
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
