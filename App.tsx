import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, Shield, Globe, Cpu, Award, Linkedin, Github, 
  Mail, Phone, ExternalLink, Target, Code, Lock, ChevronRight, MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-[1px] w-12 bg-cyan-500/50"></div>
      <span className="text-cyan-500 text-xs font-mono tracking-[0.3em] uppercase">{subtitle || 'Sub-System'}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
      {title}
    </h2>
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`group relative bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm p-6 ${className}`}>
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
    </div>
    {children}
  </div>
);

const TimelineItem = ({ year, title, description, active = false }: { year: string; title: string; description: string; active?: boolean }) => (
  <div className="relative pl-8 pb-12 last:pb-0">
    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>
    <div className={`absolute left-[-4px] top-1.5 w-2 h-2 rounded-full ${active ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]' : 'bg-slate-700'}`}></div>
    <div className="font-mono text-cyan-500/70 text-sm mb-1">{year}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="scan-line"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        <section className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-mono mb-6">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                SYSTEMS OPERATIONAL
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                MOHAMED TAREK<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">THE 0.1%</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
                The Sovereign Specialist. Technical polyglot speaking 17+ languages. Combat Heart with MMA background.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#matrix" className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">EXPLORE MATRIX <ChevronRight size={18} /></a>
                <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-2">CONTACT COMMAND <Mail size={18} /></a>
              </div>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 border-[1px] border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="logo-placeholder text-4xl font-black text-cyan-500/20 absolute inset-0 flex items-center justify-center">MOODY</div>
            </div>
          </motion.div>
        </section>

        <section id="matrix" className="mb-32">
          <SectionHeader title="THE SOVEREIGN MATRIX" subtitle="CERTIFICATIONS & TECH" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Cpu className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Hardware & Networking</h4>
              <p className="text-sm text-slate-400">Mastered stacks from NVIDIA, Intel, and Cisco.</p>
            </Card>
            <Card>
              <Lock className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Cybersecurity Elite</h4>
              <p className="text-sm text-slate-400">Kaspersky & Huawei trained. Focus on offensive security.</p>
            </Card>
            <Card className="border-cyan-500/30">
              <Shield className="text-cyan-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-cyan-400 mb-2">TryHackMe Rank</h4>
              <div className="text-2xl font-black text-cyan-500">TOP 1% GLOBALLY</div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
