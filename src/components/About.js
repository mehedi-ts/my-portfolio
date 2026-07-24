"use client";

import { motion } from "framer-motion";
import { MoveRight, Cpu, Layout, Smartphone } from "lucide-react";
import SectionLabel from "./SectionLabel";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { label: "Learning & Code", value: "2+ Yrs", metric: "Active Dev" },
  { label: "React Projects", value: "15+", metric: "Custom UI" },
  { label: "MERN Stack Specialist", value: "100%", metric: "Hands-on" },
];

const coreRules = [
  {
    title: "Clean Frontend UI",
    description: "Designing semantic interfaces, smooth hover responses, and fluid CSS states using React, Next.js, and Tailwind.",
    icon: Layout,
  },
  {
    title: "Structured API Workflows",
    description: "Architecting modular server routing, Express middlewares, and secure query operations with Node.js.",
    icon: Cpu,
  },
  {
    title: "Safe Database Systems",
    description: "Structuring reliable NoSQL collections, MongoDB schemas, and index pipelines for fluid record streams.",
    icon: Smartphone,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-bg-card/30 overflow-hidden select-none">
      
      {/* Contextual Background Animation: Morphing Gradient Blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-400 dark:bg-orange-200 rounded-full blur-[140px] pointer-events-none -z-10"
        animate={{ 
          x: [0, -60, 40, 0],
          y: [0, -40, 50, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Premium Profile Frame Slot 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-center justify-center relative mt-6 lg:mt-0"
          >
            {/* Outer Bento Frame */}
            <div className="w-[280px] h-[400px] lg:w-[340px] lg:h-[500px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
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
                <div className="absolute top-5 left-5 border border-border-main bg-bg-card/85 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 z-20 whitespace-nowrap">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-main flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Clean Coder
                  </span>
                  <span className="text-[10px] font-mono text-secondary font-bold">MERN stack</span>
                </div>

              </div>
            </div>

            {/* Micro floating dashboard box overlay */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-6 lg:-right-10 glass border-border-main p-4 rounded-2xl shadow-lg flex flex-col space-y-1.5 select-none z-20 whitespace-nowrap"
            >
              <span className="text-[9px] font-black uppercase tracking-wider text-text-muted">Main Goal</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-black text-text-main">Clean Coding UI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Narrative Copywriting Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
            className="lg:col-span-7 space-y-10 text-left"
          >
            <div className="space-y-4">
              <SectionLabel>Passion & Growth</SectionLabel>
              
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
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex space-x-4 p-4 rounded-2xl bg-bg-card border border-border-main hover:border-primary/50 hover:bg-bg-card/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                    <rule.icon size={18} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-xs font-black text-text-main uppercase tracking-wider">{rule.title}</h4>
                    <p className="text-[11.5px] text-text-muted leading-relaxed">{rule.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Indicators Block */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border-main">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1 text-left">
                  <div className="text-2xl md:text-3xl font-black leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-wider text-text-main leading-tight pt-1.5">{stat.label}</div>
                  <div className="text-[8px] font-semibold text-text-muted uppercase tracking-wider">{stat.metric}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
