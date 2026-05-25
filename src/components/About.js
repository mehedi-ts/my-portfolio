"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Code, Server, Database } from "lucide-react";

const stats = [
  { label: "Learning & Code", value: "2+ Yrs", metric: "Active Dev" },
  { label: "React Projects", value: "15+", metric: "Custom UI" },
  { label: "MERN Stack Specialist", value: "100%", metric: "Hands-on" },
];

const coreRules = [
  {
    title: "Clean Frontend UI",
    description: "Designing semantic interfaces, smooth hover responses, and fluid CSS states using React, Next.js, and Tailwind.",
    icon: Zap,
  },
  {
    title: "Structured API Workflows",
    description: "Architecting modular server routing, Express middlewares, and secure query operations with Node.js.",
    icon: Layers,
  },
  {
    title: "Safe Database Systems",
    description: "Structuring reliable NoSQL collections, MongoDB schemas, and index pipelines for fluid record streams.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-bg-card/10 border-y border-border-main select-none">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/2 left-[5%] w-[350px] h-[350px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[100px] -z-10 animate-pulse-soft" />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Premium Profile Frame Slot 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-center justify-center relative"
          >
            {/* Outer Bento Frame */}
            <div className="w-[280px] h-[360px] lg:w-[300px] lg:h-[380px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] bg-bg-main relative flex flex-col items-center justify-center overflow-hidden">
                
                {/* Micro dotted grid layer inside Card */}
                <div className="absolute inset-0 bg-[radial-gradient(var(--grid-dots)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />

                {/* Portrait Image */}
                <img
                  src="https://i.ibb.co.com/JRD8yNmp/2b80a376-cf15-493a-861b-e726fbd007e9.png"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/30 to-transparent z-15" />

                {/* Stack highlight badge */}
                <div className="absolute bottom-5 left-5 right-5 border border-border-main bg-bg-card/85 backdrop-blur-md rounded-xl p-3 flex items-center justify-between z-20">
                  <span className="text-[8px] font-black uppercase tracking-widest text-text-main flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Clean Coder
                  </span>
                  <span className="text-[8px] font-mono text-secondary font-bold">MERN stack</span>
                </div>

              </div>
            </div>

            {/* Micro floating dashboard box overlay */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-2 glass border-border-main p-3.5 rounded-2xl shadow-lg flex flex-col space-y-1 select-none z-20"
            >
              <span className="text-[8px] font-black uppercase tracking-wider text-text-muted">Main Goal</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-black text-text-main">Clean Coding UI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Narrative Copywriting Area */}
          <div className="lg:col-span-7 space-y-10 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Passion & Growth</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-none">
                Crafting interfaces with <span className="text-gradient">solid MERN</span> foundations.
              </h2>
              
              <p className="text-sm md:text-base text-text-muted leading-relaxed">
                I am a growing full-stack developer dedicated to building responsive, accessible web applications. I focus on creating interactive frontend systems coupled with structured Node.js / Express APIs and reliable MongoDB storage. I love continuous learning and constantly look for ways to write neater code, improve routing latency, and design delightful web tools.
              </p>
            </div>

            {/* Core Stack Highlights */}
            <div className="space-y-4 pt-1">
              {coreRules.map((rule, idx) => (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex space-x-4 p-4 rounded-2xl bg-bg-card border border-border-main hover:border-primary/20 hover:bg-bg-card/85 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                    <rule.icon size={16} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-black text-text-main uppercase tracking-wider">{rule.title}</h4>
                    <p className="text-[11px] text-text-muted leading-relaxed">{rule.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Indicators Block */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border-main">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1 text-left">
                  <div className="text-2xl md:text-3xl font-black text-gradient leading-none">{stat.value}</div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-text-main leading-tight pt-1.5">{stat.label}</div>
                  <div className="text-[8px] font-semibold text-text-muted uppercase tracking-wider">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
