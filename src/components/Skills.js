"use client";

import { motion } from "framer-motion";
import { Code, Server, Cpu, Database, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Architecture",
    icon: Code,
    color: "#6366f1",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
  },
  {
    name: "Backend & Systems",
    icon: Database,
    color: "#a855f7",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "REST APIs"]
  },
  {
    name: "DevOps & Tooling",
    icon: Terminal,
    color: "#0ea5e9",
    skills: ["Docker", "AWS", "CI/CD", "Git", "Vercel", "Testing (Jest)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-bg-card/30">
      <div className="section-container">
        
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Technical Stack</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-text-main leading-tight">
            Specialized Tech <br className="hidden sm:block" />
            <span className="text-text-muted italic underline decoration-primary/30 underline-offset-8">Infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group p-8 md:p-10 glass-card hover-glow relative overflow-hidden"
            >
              {/* Background Accent */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700"
                style={{ backgroundColor: cat.color }}
              />

              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-bg-main border border-border-main flex items-center justify-center text-primary shadow-xl group-hover:scale-110 group-hover:border-primary transition-all duration-500">
                    <cat.icon size={24} className="md:size-[28px]" style={{ color: cat.color }} />
                  </div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: cat.color }} />
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-text-main uppercase tracking-tight">{cat.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-xl bg-bg-main border border-border-main text-[10px] font-black uppercase tracking-widest text-text-muted hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Line Decoration */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-primary group-hover:w-full w-0 transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


