"use client";

import { motion } from "framer-motion";
import { Code, Database, Terminal, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend Core",
    description: "Building responsive layouts, reactive state pipelines, and accessible single-page components.",
    icon: Code,
    color: "rgba(234, 88, 12, 0.2)", // orange glow
    badgeColor: "text-primary bg-primary/5 border-primary/10",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js (App Router)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Advanced" },
    ]
  },
  {
    name: "Backend MERN Stack",
    description: "Creating modular server routes, database document schemas, and safe authentication handlers.",
    icon: Database,
    color: "rgba(139, 92, 246, 0.2)", // purple glow
    badgeColor: "text-secondary bg-secondary/5 border-secondary/10",
    skills: [
      { name: "Node.js / Express", level: "Advanced" },
      { name: "MongoDB / Mongoose", level: "Advanced" },
      { name: "RESTful JSON APIs", level: "Advanced" },
      { name: "JWT Auth / Security", level: "Proficient" },
      { name: "SQL Basics", level: "Proficient" },
      { name: "Cors & Middlewares", level: "Advanced" },
    ]
  },
  {
    name: "Developer Tools",
    description: "Configuring local development environments, version tracking, and quick cloud deployments.",
    icon: Terminal,
    color: "rgba(59, 130, 246, 0.2)", // blue glow
    badgeColor: "text-blue-500 bg-blue-500/5 border-blue-500/10",
    skills: [
      { name: "Git / GitHub versioning", level: "Advanced" },
      { name: "Vercel / Netlify Deploy", level: "Advanced" },
      { name: "npm / yarn packing", level: "Advanced" },
      { name: "Postman / API testing", level: "Advanced" },
      { name: "Chrome DevTools", level: "Advanced" },
      { name: "VS Code environment", level: "Advanced" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none">
      {/* Background ambient corner blur */}
      <div className="absolute top-1/4 right-[5%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[90px] -z-10 animate-pulse-soft" />

      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl text-left">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">My Toolset</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            Languages & <br className="hidden sm:block" />
            <span className="text-gradient">Frameworks.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-text-muted leading-relaxed">
            An honest overview of my technological focus. I prioritize building clean components, robust middlewares, and well-indexed collections.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="glass-panel p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group h-full"
            >
              {/* Corner Glow Overlay on Hover */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"
                style={{ backgroundColor: cat.color }}
              />

              <div className="space-y-8">
                {/* Header block within Card */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-main shadow-md group-hover:scale-105 group-hover:border-primary/20 transition-all duration-300">
                    <cat.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">Section 0{idx + 1}</span>
                </div>

                <div className="space-y-3 text-left">
                  <h3 className="text-xl font-extrabold text-text-main tracking-tight uppercase">{cat.name}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{cat.description}</p>
                </div>

                <div className="h-[1px] w-full bg-border-main" />

                {/* Sub-grid of individual skills */}
                <div className="space-y-3.5 text-left">
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-text-muted">Skills Inventory</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {cat.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-bg-card/45 border border-border-main hover:border-primary/10 hover:bg-bg-card transition-all duration-300"
                      >
                        <div className="flex items-center space-x-2.5">
                          <CheckCircle2 size={12} className="text-primary shrink-0" />
                          <span className="text-xs font-bold text-text-main">{skill.name}</span>
                        </div>
                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-border-main ${cat.badgeColor}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Line Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-amber-400 group-hover:w-full w-0 transition-all duration-750 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
