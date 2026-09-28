"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Terminal,
  Sparkles,
  Database,
  Briefcase,
  Award,
  GraduationCap,
  Users,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  FileDown,
} from "lucide-react";

// Inline brand SVGs to prevent missing icon export issues
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Portfolio() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Terminal session initialized. Type 'skills', 'experience', 'projects', 'education', or 'contact'.",
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    let response = "";

    switch (cmd) {
      case "skills":
        response = "SQL, Python, RAG Architectures, API Testing, Root Cause Analysis (RCA), SLA Management, C++, Java, JavaScript, Git.";
        break;
      case "experience":
        response = "1. Operations & Analytics Specialist @ TVS Automobile Solutions (May 2026 - Present) | 2. Business Analyst / Growth Associate @ SmartED Innovations (Jan 2026 - May 2026)";
        break;
      case "projects":
        response = "NexusEval: AI-Powered Skill Assessment Platform (RAG, FastAPI, Next.js, Adaptive Testing, Analytics Dashboards)";
        break;
      case "education":
        response = "B.E. in Computer Science and Engineering @ Sathyabama Institute of Science and Technology (2022 - 2026)";
        break;
      case "contact":
        response = "Email: singhsupriya678@gmail.com | Phone: +91 8789397166 | LinkedIn: linkedin.com/in/supriya-singh-0b478320a";
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${cmd}'. Try: skills, experience, projects, education, contact, clear.`;
    }

    setTerminalLogs((prev) => [...prev, `> ${cmd}`, response]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-zinc-100 selection:bg-indigo-500 selection:text-white relative overflow-hidden px-4 py-10 md:py-16">
      {/* Background Radial Glows */}
      <div className="absolute top-[-5%] left-[20%] w-[550px] h-[550px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[10%] w-[500px] h-[500px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none" />

      <main className="max-w-6xl mx-auto space-y-6 relative z-10">
        
        {/* Navigation Bar with Download Resume Button */}
        <header className="flex flex-wrap items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">Available for Opportunities</span>
            <span className="text-xs text-zinc-500 hidden sm:inline-block">• Chennai, India</span>
          </div>
          
          <div className="flex items-center gap-2.5">
            <a
              href="/Supriya_Singh_Resume.pdf"
              download="Supriya_Singh_Resume.pdf"
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white flex items-center gap-2 text-xs font-semibold shadow-lg shadow-indigo-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>

            <a
              href="mailto:singhsupriya678@gmail.com"
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 transition border border-white/5 text-zinc-300 flex items-center gap-1.5 text-xs font-medium"
              title="Email Me"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </a>

            <a
              href="https://linkedin.com/in/supriya-singh-0b478320a"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 transition border border-white/5 text-zinc-300 flex items-center gap-1.5 text-xs font-medium"
              title="LinkedIn Profile"
            >
              <LinkedinIcon />
            </a>
          </div>
        </header>

        {/* Section 1: Hero & Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Operations, Analytics & AI Engineering
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Supriya Singh
              </h1>
              <p className="mt-4 text-zinc-300 text-sm md:text-base leading-relaxed max-w-3xl">
                Technical and solutions-oriented Computer Science graduate with hands-on experience in operational analytics, incident workflows, and AI-driven systems. Skilled in SQL, Python, root cause analysis, and cross-functional troubleshooting between customers, QA, and engineering teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-t border-white/[0.06] pt-5">
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> Chennai, India</div>
              <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-cyan-400" /> +91 8789397166</div>
              <div className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-emerald-400" /> B.E. CSE (2022 - 2026)</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">Key Highlights</span>
              <h3 className="text-lg font-bold text-white mt-1">Impact & Accolades</h3>
            </div>
            
            <div className="space-y-4 my-4">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-2xl font-black text-indigo-400 font-mono">+15%</div>
                <div className="text-xs text-zinc-400 mt-0.5">User satisfaction boost via funnel optimization</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-sm font-bold text-cyan-300">3rd Position (All India)</div>
                <div className="text-xs text-zinc-400 mt-0.5">TechXcelerate Hackathon (BITS Pilani)</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="text-sm font-bold text-emerald-300">Luminary Award</div>
                <div className="text-xs text-zinc-400 mt-0.5">Academic & Leadership Excellence</div>
              </div>
            </div>

            <a
              href="#experience"
              className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-medium text-center transition block"
            >
              Explore Full Timeline
            </a>
          </motion.div>

        </div>

        {/* Section 2: Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <h4 className="text-sm font-bold text-white">Product & Support</h4>
            </div>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>• Incident Management & RCA</li>
              <li>• SLA Adherence & Ticket Lifecycles</li>
              <li>• Bug Replication & QA Escalations</li>
              <li>• Customer Escalation Handling</li>
            </ul>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-bold text-white">AI & Data Technologies</h4>
            </div>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>• Python & SQL</li>
              <li>• RAG Architectures & NLP</li>
              <li>• KPI Dashboards & Advanced Excel</li>
              <li>• API Testing & ML Basics</li>
            </ul>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-bold text-white">Core Technical</h4>
            </div>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>• Database Management (DBMS)</li>
              <li>• C++, Java, JavaScript</li>
              <li>• HTML5, CSS3, Tailwind</li>
              <li>• Git Version Control</li>
            </ul>
          </div>

          <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-amber-400" />
              <h4 className="text-sm font-bold text-white">Operations & Agile</h4>
            </div>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>• Cross-Functional Coordination</li>
              <li>• Client & Stakeholder Communication</li>
              <li>• Standard Operating Procedures (SOPs)</li>
              <li>• Agile Problem Solving</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Work Experience & Live Terminal */}
        <div id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Work Experience</h3>
              </div>

              <div className="relative pl-6 space-y-7 border-l border-white/10 ml-2">
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-[#07070b]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white">Operations & Analytics Specialist</h4>
                    <span className="text-xs font-mono text-indigo-400">May 2026 – Present</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">TVS Automobile Solutions • Chennai, India</p>
                  <ul className="text-xs text-zinc-400 mt-2.5 space-y-1.5 leading-relaxed list-disc pl-4">
                    <li>Monitor operational incident workflows and daily datasets, performing root-cause analysis on recurring issues for strict SLA adherence.</li>
                    <li>Act as primary operational liaison between client accounts and technical teams, converting user escalations into structured bug reports.</li>
                    <li>Establish standardized SOPs and incident documentation frameworks, reducing turnaround time on enterprise client escalations.</li>
                    <li>Track core platform performance metrics and resolution rates to drive continuous workflow optimization.</li>
                  </ul>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-zinc-600 ring-4 ring-[#07070b]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white">Business Analyst / Growth Associate</h4>
                    <span className="text-xs font-mono text-zinc-400">Jan 2026 – May 2026</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">SmartED Innovations • Bengaluru, India</p>
                  <ul className="text-xs text-zinc-400 mt-2.5 space-y-1.5 leading-relaxed list-disc pl-4">
                    <li>Served as key point of contact for client queries, resolving usability bottlenecks and increasing user satisfaction by 15%.</li>
                    <li>Evaluated product adoption funnels to pinpoint friction points and deliver data-backed recommendations to leadership.</li>
                    <li>Maintained structured incident tracking and reporting pipelines for cross-functional initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between">
              <span>Sathyabama Institute of Science and Technology</span>
              <span className="font-mono text-zinc-300">B.E. CSE (2022 - 2026)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-black/40 border border-white/[0.08] backdrop-blur-xl flex flex-col font-mono text-xs justify-between min-h-[380px]"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span className="text-zinc-300 font-semibold">interactive-shell</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>
              
              <div className="space-y-2 overflow-y-auto max-h-60 pr-2 text-zinc-300">
                {terminalLogs.map((log, i) => (
                  <div key={i} className={log.startsWith(">") ? "text-indigo-400 font-semibold" : "text-zinc-400 leading-relaxed"}>
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2 pt-3 border-t border-white/[0.06]">
              <span className="text-indigo-400 font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'skills', 'experience', 'projects', 'education'..."
                className="bg-transparent flex-1 text-zinc-200 outline-none placeholder:text-zinc-500 font-mono"
              />
            </form>
          </motion.div>

        </div>

        {/* Section 4: Featured Project & Certifications */}
        <div id="projects" className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/40 transition"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Featured Platform</span>
                <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-[11px] font-mono border border-indigo-500/20">Full-Stack & AI</span>
              </div>
              <h4 className="text-xl font-bold text-white">NexusEval: AI-Powered Skill Assessment Platform</h4>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                Designed and deployed an end-to-end full-stack web application featuring automated candidate resume parsing pipelines, adaptive difficulty testing logic, and dynamic analytics dashboards. Implemented backend APIs and database schemas, troubleshooting data-flow bottlenecks and integrating RAG/NLP architectures to optimize assessment workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {["Python", "FastAPI", "Next.js", "RAG / FAISS", "SQL", "Tailwind CSS"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs font-mono text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Certifications & Honors</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Introduction to Machine Learning</div>
                    <div className="text-zinc-500">NPTEL / IIT Kharagpur</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Introduction to Business Intelligence</div>
                    <div className="text-zinc-500">Infosys Springboard</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Cybersecurity Job Simulation</div>
                    <div className="text-zinc-500">JPMorgan Chase & Co.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <div className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Luminary Award Winner (2024-2025)
              </div>
              <p className="text-[11px] text-zinc-500 mt-0.5">Sathyabama University Leadership & Academic Excellence</p>
            </div>
          </motion.div>

        </div>

        {/* Section 5: Leadership & Co-Curricular */}
        <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-5">
            <Users className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">Leadership & Co-Curricular Roles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-bold text-white">Vice President</h4>
                <span className="text-xs font-mono text-zinc-400">Sep 2023 – May 2025</span>
              </div>
              <p className="text-xs text-indigo-400 font-medium mt-0.5">IEEE Student Branch (Computational Intelligence Society)</p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Led cross-functional teams to execute national-level technical workshops and hackathons, managing live issue escalation and scheduling workflows.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-bold text-white">Media & Communications Coordinator</h4>
                <span className="text-xs font-mono text-cyan-400">Dec 2024 – Present</span>
              </div>
              <p className="text-xs text-cyan-400 font-medium mt-0.5">Association for Computing Machinery (ACM)</p>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Managed multi-channel communication pipelines, tracking member engagement metrics to optimize response times and platform outreach.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 pb-2 text-center text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06]">
          <span>© 2026 Supriya Singh. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="mailto:singhsupriya678@gmail.com" className="hover:text-indigo-400 transition">singhsupriya678@gmail.com</a>
            <a href="tel:+918789397166" className="hover:text-indigo-400 transition">+91 8789397166</a>
          </div>
        </footer>

      </main>
    </div>
  );
}