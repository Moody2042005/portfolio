/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Shield, 
  Globe, 
  Cpu, 
  Layers, 
  Award, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  ExternalLink,
  Target,
  Zap,
  Code,
  Lock,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="scan-line"></div>
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        {/* --- Hero Section --- */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-mono mb-6">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                SYSTEMS OPERATIONAL
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                MOHAMED TAREK<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  THE 0.1%
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
                The Sovereign Specialist. Technical polyglot speaking 17+ languages. 
                Combat Heart with MMA/Leadership background. Targeting the intelligence sector.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#matrix" className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
                  EXPLORE MATRIX <ChevronRight size={18} />
                </a>
                <a href="#contact" className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                  CONTACT COMMAND <Mail size={18} />
                </a>
              </div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 border-[1px] border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[1px] border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-56 md:h-56 overflow-hidden flex items-center justify-center p-4">
                   {/* Using the logo pic provided by user. Assuming it's in the root. If not, fallback to text/icon */}
                   <img 
                    src="./imresizer-logo 1.png" 
                    alt="Moody Logo" 
                    className="w-full h-auto object-contain brightness-0 invert opacity-80"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="logo-placeholder text-4xl font-black text-cyan-500/20 absolute">MOODY</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- Brief Bio --- */}
        <section className="mb-32 grid md:grid-cols-2 gap-12">
          <Card className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-cyan-500" size={24} /> EGYPT, CAIRO
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Born in Cairo, Egypt (20/04/2005). IGCSE Graduate. 
              Currently pursuing Software Engineering at AASTMT (3rd Year).
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-500 uppercase mb-1">Status</div>
                <div className="text-cyan-500 font-mono">SOVEREIGN</div>
              </div>
              <div className="p-4 bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-500 uppercase mb-1">Field</div>
                <div className="text-cyan-500 font-mono">SE SPECIALIST</div>
              </div>
            </div>
          </Card>
          
          <div className="space-y-6">
            <SectionHeader title="THE TIMELINE" subtitle="DEVOPS / GROWTH" />
            <div className="mt-8">
              <TimelineItem 
                year="2005" 
                title="System Initialization" 
                description="Born in Cairo, Egypt. Foundations laid for the 0.1% specialist path."
              />
              <TimelineItem 
                year="2022" 
                title="IGCSE Graduation" 
                description="Completed high school with distinction. Accelerated into technical mastery."
              />
              <TimelineItem 
                year="2026 (PRESENT)" 
                title="AAST Software Engineering" 
                description="Currently 3rd Year SE student. Dominating architecture and technical polyglot skills."
                active
              />
            </div>
          </div>
        </section>

        {/* --- Sovereign Matrix --- */}
        <section id="matrix" className="mb-32">
          <SectionHeader title="THE SOVEREIGN MATRIX" subtitle="CERTIFICATIONS & TECH" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Cpu className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Hardware & Networking</h4>
              <p className="text-sm text-slate-400 mb-4">Mastered stacks from NVIDIA (AI), Intel (Hardware), and Cisco (Networking).</p>
              <div className="flex flex-wrap gap-2">
                {['NVIDIA', 'INTEL', 'CISCO', 'SATELLITE'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-mono uppercase">{tag}</span>
                ))}
              </div>
            </Card>
            
            <Card>
              <Lock className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Cybersecurity Elite</h4>
              <p className="text-sm text-slate-400 mb-4">Kaspersky & Huawei trained. Strategic focus on offensive security and intelligence.</p>
              <div className="flex flex-wrap gap-2">
                {['KASPERSKY', 'HUAWEI', 'GOOGLE', 'MICROSOFT'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-400 font-mono uppercase">{tag}</span>
                ))}
              </div>
            </Card>

            <Card className="border-cyan-500/30">
              <Target className="text-cyan-400 mb-4 animate-pulse" size={32} />
              <h4 className="text-xl font-bold text-cyan-400 mb-2">Future Intelligence</h4>
              <p className="text-sm text-slate-400 mb-4">Active roadmap into Quantum Computing and Signal Intelligence (SIGINT).</p>
              <div className="flex flex-wrap gap-2">
                {['OSCP', 'LLM ARCH', 'SIGINT', 'QUANTUM'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono uppercase">{tag}</span>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* --- Polyglot Terminal & TryHackMe --- */}
        <section className="mb-32 grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="POLYGLOT TERMINAL" subtitle="HUMAN INTERFACE" />
            <Card className="bg-black/80 font-mono text-sm border-slate-700">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-2">
                <div className="text-cyan-500">$ query languages --status master</div>
                <div className="text-slate-500">&gt; Languages: 17+ (Global)</div>
                <div className="text-slate-500">&gt; Dialects: 30+ (Regional)</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-4">
                  {['Arabic', 'English', 'French', 'German', 'Spanish', 'Russian', 'Japanese', 'Chinese'].map(lang => (
                    <div key={lang} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-500"></div> {lang}
                    </div>
                  ))}
                  <div className="text-cyan-500/50 italic">+ 9 more</div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2 text-cyan-500">
                  <Globe size={14} /> GLOBAL COMMUNICATION READY
                </div>
              </div>
            </Card>
          </div>

          <div>
            <SectionHeader title="LIVE TARGETS" subtitle="THREAT LANDSCAPE" />
            <Card className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-700"></div>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h4 className="text-2xl font-bold flex items-center gap-2">
                    <Shield className="text-cyan-500" /> TryHackMe
                  </h4>
                  <p className="text-slate-500 text-sm">Offensive Security Training</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 uppercase font-mono">Current Rank</div>
                  <div className="text-2xl font-black text-cyan-500">GUARDIAN</div>
                  <div className="text-[10px] text-cyan-500/50 font-mono">TOP 1% GLOBALLY</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold">MISSION GOAL</span>
                    <span className="text-xs font-mono text-cyan-500">Q4 2026</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-2">GRANDMASTER</div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                    ></motion.div>
                  </div>
                  <div className="mt-2 text-right text-[10px] text-slate-500 font-mono">EST. 75% PROGRESS</div>
                </div>
                
                <a href="https://tryhackme.com/p/Moody2042005" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-xs font-mono text-cyan-500 hover:text-cyan-400 transition-colors uppercase py-2">
                  VIEW PUBLIC PROFILE <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          </div>
        </section>

        {/* --- Competitive Programming & Assets --- */}
        <section className="mb-32">
          <SectionHeader title="COMMAND CENTERS" subtitle="PROFILES" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Codeforces', id: 'mohamedtarek...', icon: <Code size={20} />, url: 'https://codeforces.com/profile/mohamedtarekfayez005' },
              { label: 'LeetCode', id: 'zRvcHq5Wfd', icon: <Terminal size={20} />, url: 'https://leetcode.com/u/zRvcHq5Wfd/' },
              { label: 'Credly', id: 'Badges', icon: <Award size={20} />, url: 'https://www.credly.com/users/mohamed-tarek-fayez.1e13ae77' },
              { label: 'GitHub', id: 'Moody2042005', icon: <Github size={20} />, url: 'https://github.com/Moody2042005' },
            ].map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900 border border-slate-800 hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all group flex flex-col items-center text-center">
                <div className="text-slate-500 group-hover:text-cyan-500 transition-colors mb-3">
                  {item.icon}
                </div>
                <div className="font-bold text-sm mb-1">{item.label}</div>
                <div className="text-[10px] font-mono text-slate-500 truncate w-full">{item.id}</div>
              </a>
            ))}
          </div>
        </section>

        {/* --- Contact / Footer --- */}
        <section id="contact" className="mb-24">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6">INITIATE CONTACT</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              Ready for high-stakes technical collaboration. Reach out via the established channels.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <a href="mailto:mohamedtarekfayez005@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 uppercase">Email</div>
                  <div className="text-sm">mohamedtarekfayez005@gmail.com</div>
                </div>
              </a>
              <a href="tel:+201003950709" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 uppercase">WhatsApp/Phone</div>
                  <div className="text-sm">+201003950709</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/mohamed-tarek-961448336" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
                  <Linkedin size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 uppercase">LinkedIn</div>
                  <div className="text-sm">Mohamed Tarek</div>
                </div>
              </a>
            </div>

            <div className="pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xs font-mono text-slate-600">
                &copy; 2026 MOHAMED TAREK | THE 0.1% SOVEREIGN SPECIALIST
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-[10px] font-mono text-slate-500 uppercase">ENCRYPTED CONNECTION</div>
              </div>
            </div>
          </Card>
        </section>

      </main>

      {/* Decorative Sidebar Overlay (Desktop only) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="text-[10px] font-mono text-cyan-500/50 tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          Digital Command Center v2.0.4
        </div>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
      </div>
    </div>
  );
}
