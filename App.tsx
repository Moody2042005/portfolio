import { motion } from 'motion/react';
import { 
  Terminal, Shield, Globe, Cpu, Award, Linkedin, Github, 
  Mail, Phone, ExternalLink, Target, Code, Lock, ChevronRight, MapPin
} from 'lucide-react';

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

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="scan-line"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
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
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
                The Sovereign Specialist. Technical polyglot speaking 17+ languages. Targeting the intelligence sector.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href="#contact" className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">CONTACT COMMAND <Mail size={18} /></a>
              </div>
            </div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-[1px] border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="./imresizer-logo 1_2.png" 
                  alt="Moody Logo" 
                  className="w-48 h-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sovereign Matrix */}
        <section id="matrix" className="mb-32">
          <SectionHeader title="THE SOVEREIGN MATRIX" subtitle="CERTIFICATIONS & TECH" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Cpu className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Hardware & AI</h4>
              <p className="text-sm text-slate-400">Mastered NVIDIA AI and Intel Hardware stacks.</p>
            </Card>
            <Card>
              <Lock className="text-cyan-500 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Cybersecurity</h4>
              <p className="text-sm text-slate-400">Kaspersky and Huawei trained offensive security specialist.</p>
            </Card>
            <Card className="border-cyan-500/30">
              <Shield className="text-cyan-400 mb-4 animate-pulse" size={32} />
              <h4 className="text-xl font-bold text-cyan-400 mb-2">TryHackMe Rank</h4>
              <div className="text-2xl font-black text-cyan-500">TOP 1% GLOBALLY</div>
              <p className="text-[10px] text-cyan-500/50 mt-2">ID: Moody2042005</p>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6">INITIATE CONTACT</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <a href="mailto:mohamedtarekfayez005@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail size={18} />
                <span>mohamedtarekfayez005@gmail.com</span>
              </a>
              <a href="https://github.com/Moody2042005" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Github size={18} />
                <span>Moody2042005</span>
              </a>
            </div>
            <div className="pt-12 border-t border-slate-800/50 text-xs font-mono text-slate-600">
              &copy; 2026 MOHAMED TAREK | ENCRYPTED CONNECTION
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
