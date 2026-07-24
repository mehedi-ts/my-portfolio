"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Code, Server, Database, ArrowLeft, ArrowRight, GraduationCap, Briefcase, BookOpen, Coffee, Music, Code2, MonitorPlay } from "lucide-react";
import Link from "next/link";
import AnimatedCounter from "../../components/AnimatedCounter";

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
  {
    title: "Continuous Learning",
    description: "Always exploring modern web architecture, adopting new React features, and optimizing backend logic.",
    icon: BookOpen,
  },
  {
    title: "Clean Code Philosophy",
    description: "Writing maintainable, self-documenting code with predictable architectures that scale seamlessly.",
    icon: Code2,
  },
];

const stats = [
  { label: "Learning & Code", value: "2+ Yrs", metric: "Active Dev" },
  { label: "React Projects", value: "15+", metric: "Custom UI" },
  { label: "MERN Stack Specialist", value: "100%", metric: "Hands-on" },
];

const timeline = [
  {
    year: "2021",
    title: "Started learning web development",
    description: "Dived into HTML, CSS, and basic JavaScript.",
    icon: MonitorPlay,
  },
  {
    year: "2022",
    title: "Built first MERN project",
    description: "Explored React and connected it to an Express/MongoDB backend.",
    icon: Database,
  },
  {
    year: "2023",
    title: "Completed HSC",
    description: "Graduated Higher Secondary Certificate (2023).",
    icon: GraduationCap,
  },
  {
    year: "2024 - Present",
    title: "Building portfolio & freelancing",
    description: "Refining Next.js skills and architecting real-world web apps.",
    icon: Briefcase,
  }
];

const hobbies = [
  { label: "Tech Podcaster", icon: Coffee },
  { label: "Open Source Contributor", icon: Code },
  { label: "Music Enthusiast", icon: Music },
];

export default function AboutContent() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden bg-bg-main selection:bg-primary/30 selection:text-primary pt-24 pb-16">
      <div className="section-container relative z-10 space-y-24 md:space-y-32">
        
        {/* Header & Bio Section */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left order-2 lg:order-1"
          >
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary block">
                Get to know me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main leading-[1.1] tracking-tight">
                The Story Behind <br className="hidden md:block"/> the <span className="text-gradient">Code.</span>
              </h1>
            </div>

            <div className="space-y-4 text-sm md:text-base text-text-muted leading-relaxed max-w-2xl">
              <p>
                My journey into the MERN stack began with a simple curiosity about how the web works behind the scenes. What started as basic HTML layouts quickly evolved into a passion for architecting full-stack applications from the ground up.
              </p>
              <p>
                I thrive in the intersection between beautiful frontend interfaces and structured backend systems. I am deeply driven by the process of solving complex logic puzzles and transforming those solutions into clean, seamless user experiences.
              </p>
              <p>
                When I&apos;m not writing code, you&apos;ll likely find me exploring the latest React features, optimizing database queries just for the fun of it, or brainstorming my next side project.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-center justify-center relative order-1 lg:order-2"
          >
            {/* Same Image Card from Home */}
            <div className="w-[280px] h-[400px] lg:w-[340px] lg:h-[500px] rounded-[2rem] p-1 bg-gradient-to-tr from-secondary/40 via-primary/30 to-amber-500/20 shadow-xl flex items-center justify-center overflow-hidden group">
              <div className="w-full h-full rounded-[1.8rem] bg-bg-main relative flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(var(--grid-dots)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                <img
                  src="https://i.ibb.co.com/JRD8yNmp/2b80a376-cf15-493a-861b-e726fbd007e9.png"
                  alt="Mehedi Hasan"
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/30 to-transparent z-15" />
                
                {/* Badges */}
                <div className="absolute top-5 left-5 border border-border-main bg-bg-card/85 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 z-20 whitespace-nowrap">
                  <span className="text-[10px] font-black uppercase tracking-widest text-text-main flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    Clean Coder
                  </span>
                  <span className="text-[10px] font-mono text-secondary font-bold">MERN stack</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-6 lg:-left-10 glass border-border-main p-4 rounded-2xl shadow-lg flex flex-col space-y-1.5 select-none z-20 whitespace-nowrap"
            >
              <span className="text-[9px] font-black uppercase tracking-wider text-text-muted">Main Goal</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-black text-text-main">Clean Coding UI</span>
              </div>
            </motion.div>
          </motion.div>

        </section>

        {/* Timeline Section */}
        <section className="space-y-12">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-text-main">My <span className="text-gradient">Journey</span></h2>
            <p className="text-sm text-text-muted">How I grew from curiosity to writing full-stack web applications.</p>
          </div>
          
          <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-border-main md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Dot / Icon */}
                  <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-bg-card border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="p-5 glass rounded-2xl border-border-main hover:border-primary/30 transition-colors">
                      <div className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                        <item.icon size={14} className="text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.year}</span>
                      </div>
                      <h4 className="text-base font-bold text-text-main mb-1">{item.title}</h4>
                      <p className="text-xs text-text-muted">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="space-y-12 bg-bg-card/30 rounded-[3rem] p-8 md:p-16 border border-border-main relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-text-main">Values & <span className="text-gradient">Approach</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreRules.map((rule, idx) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col space-y-4 p-6 rounded-2xl bg-bg-main border border-border-main hover:border-primary/50 hover:bg-bg-card/85 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <rule.icon size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-black text-text-main uppercase tracking-wider">{rule.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{rule.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats & Beyond Coding */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Stats */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-text-main uppercase tracking-wide">By the <span className="text-gradient">Numbers</span></h3>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2 p-5 glass rounded-2xl border-border-main">
                  <div className="text-3xl md:text-4xl font-black leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-wider text-text-main leading-tight">{stat.label}</div>
                  <div className="text-[9px] font-semibold text-text-muted uppercase tracking-wider">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-text-main uppercase tracking-wide">Beyond <span className="text-gradient">Coding</span></h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, idx) => (
                <motion.div
                  key={hobby.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-bg-card border border-border-main hover:border-primary/40 transition-colors cursor-default"
                >
                  <hobby.icon size={16} className="text-primary" />
                  <span className="text-xs font-bold text-text-main tracking-wide">{hobby.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 px-6 glass rounded-[3rem] border-border-main relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10" />
          <h2 className="text-3xl md:text-5xl font-black text-text-main mb-6">Let&apos;s build something <span className="text-gradient">great.</span></h2>
          <Link href="/contact" className="inline-flex items-center space-x-2 group px-8 py-4 glow-button hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] text-xs uppercase tracking-widest font-black transition-all duration-300">
            <span>Start a Project</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.section>

      </div>
    </main>
  );
}
