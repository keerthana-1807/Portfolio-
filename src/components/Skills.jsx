import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
  Code,
  Terminal,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle,
  BarChart,
  Brain,
  Globe,
  Database,
} from 'lucide-react';

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'ai', label: 'AI & Machine Learning' },
  { id: 'programming', label: 'Programming & Web' },
  { id: 'tools', label: 'Tools & DevOps' },
];

const skillsData = [
  // AI & Machine Learning
  {
    name: 'Python',
    category: 'ai',
    level: 92,
    icon: '🐍',
    description: 'Data Processing (Pandas/NumPy), Scripting, ML Libraries (PyTorch/Scikit-learn), FastAPI Backend APIs.',
    tag: 'Primary Core',
    color: 'from-yellow-400 to-amber-600',
  },
  {
    name: 'Machine Learning',
    category: 'ai',
    level: 90,
    icon: '🤖',
    description: 'Supervised/Unsupervised Learning, Regression, Classification (SVM, Random Forests, XGBoost), Model Evaluation.',
    tag: 'Specialization',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    name: 'Deep Learning & Neural Networks',
    category: 'ai',
    level: 86,
    icon: '🧠',
    description: 'Convolutional Neural Networks (CNNs) for Computer Vision, PyTorch, Model Training, Fine-tuning.',
    tag: 'Specialization',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Natural Language Processing',
    category: 'ai',
    level: 85,
    icon: '💬',
    description: 'Text Processing, Tokenization, Sentiment Analysis, LLM Prompt Engineering, NLTK/SpaCy.',
    tag: 'Specialization',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Data Science & EDA',
    category: 'ai',
    level: 88,
    icon: '📊',
    description: 'Exploratory Data Analysis, Data Cleaning, Visualization (Matplotlib, Seaborn), Feature Engineering.',
    tag: 'Proficient',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Computer Vision & OCR',
    category: 'ai',
    level: 87,
    icon: '👁️',
    description: 'OpenCV image processing, document text extraction (Tesseract/EasyOCR), liveness detection.',
    tag: 'Specialized',
    color: 'from-cyan-400 to-blue-600',
  },

  // Programming & Web
  {
    name: 'JavaScript',
    category: 'programming',
    level: 86,
    icon: '⚡',
    description: 'ES6+ Async/Await, Functional Programming, DOM Manipulation, Modern Modular Architecture.',
    tag: 'Advanced',
    color: 'from-amber-300 to-yellow-500',
  },
  {
    name: 'React.js',
    category: 'programming',
    level: 88,
    icon: '⚛️',
    description: 'React Hooks, Custom Hooks, State Management, Vite, Context API, Framer Motion integration.',
    tag: 'Advanced',
    color: 'from-cyan-300 to-indigo-400',
  },
  {
    name: 'SQL',
    category: 'programming',
    level: 85,
    icon: '🗄️',
    description: 'Relational Database Design, Complex Joins, Subqueries, Indexing, PostgreSQL & MySQL.',
    tag: 'Proficient',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'HTML5 & CSS3 / Tailwind',
    category: 'programming',
    level: 92,
    icon: '🌐',
    description: 'Semantic markup, Glassmorphic design systems, Responsive Flexbox/Grid layouts, Tailwind CSS v4.',
    tag: 'Expert',
    color: 'from-orange-500 to-red-500',
  },

  // Tools & DevOps
  {
    name: 'Git',
    category: 'tools',
    level: 90,
    icon: '🌱',
    description: 'Version Control, Branching Strategies, Merging, Resolving Conflicts, Stashing.',
    tag: 'Essential',
    color: 'from-red-500 to-amber-600',
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 90,
    icon: '🐙',
    description: 'Repository Management, Pull Requests, Code Reviews, Vercel/GitHub Pages Deployment.',
    tag: 'Proficient',
    color: 'from-slate-400 to-slate-200',
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 95,
    icon: '💻',
    description: 'Advanced Debugging, Custom Snippets, Extensions, Integrated Terminal, Workspace Configurations.',
    tag: 'Expert',
    color: 'from-blue-500 to-cyan-400',
  },
];

// Interactive 3D Tilt Skill Card
function SkillCard({ skill }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative glass-panel rounded-2xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/25 transition-all duration-500 pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 inline-block">
            {skill.icon}
          </span>
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
              {skill.name}
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
              {skill.tag}
            </span>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-white/10">
          {skill.level}%
        </span>
      </div>

      {/* Animated Skill Progress Indicator */}
      <div className="mb-4">
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
          />
        </div>
      </div>

      {/* Description Revealed on Hover */}
      <p className="text-xs text-slate-300 leading-relaxed group-hover:text-white transition-colors">
        {skill.description}
      </p>

      {/* Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">AI Core Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hover over cards to view 3D interaction, proficiency depth, and core use cases.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-indigo-500/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
