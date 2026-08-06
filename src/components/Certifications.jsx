import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const certsData = [
  {
    org: 'IBM',
    title: 'Data Science Fundamentals with Python and SQL Specialization',
    issuer: 'IBM Skills Network',
    date: '2024',
    badgeColor: 'from-blue-600 to-indigo-600',
    logo: '🔵',
    skills: ['Python Data Analysis', 'SQL Database Queries', 'Exploratory Data Analysis', 'Data Science Foundation'],
    credentialId: 'IBM-DS-7749202',
  },
  {
    org: 'Google',
    title: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google Career Certificates',
    date: '2023',
    badgeColor: 'from-red-500 via-amber-500 to-emerald-500',
    logo: '🔴',
    skills: ['Network Security', 'Google Cloud Platform', 'IT Security Protocols', 'Firewalls & Encryption'],
    credentialId: 'GCC-SEC-4920811',
  },
  {
    org: 'Microsoft',
    title: 'Introduction to Microsoft Azure Cloud Services',
    issuer: 'Microsoft Learn',
    date: '2024',
    badgeColor: 'from-cyan-500 to-blue-600',
    logo: '🟦',
    skills: ['Azure Cloud Services', 'Cloud Fundamentals', 'Resource Management', 'Virtual Networks'],
    credentialId: 'MS-AZF-9028173',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>VERIFIED CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications from world-leading technology organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative glass-panel rounded-3xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
            >
              {/* Card Header Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.badgeColor} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-[#0b0f19] rounded-[15px] flex items-center justify-center text-xl">
                        {cert.logo}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-extrabold text-white tracking-widest uppercase">
                        {cert.org}
                      </span>
                      <p className="text-[11px] font-mono text-cyan-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-4">
                  {cert.title}
                </h3>

                {/* Skills Learned */}
                <div className="space-y-2 mb-6">
                  {cert.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Credential ID */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  ID: {cert.credentialId}
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 group-hover:text-cyan-300 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
