"use client";

import { motion } from "framer-motion";
import { Code, Database, Terminal } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiHtml5,
  SiNodedotjs, SiMongodb, SiJsonwebtokens, SiMysql,
  SiGit, SiVercel, SiNpm, SiPostman, SiGooglechrome
} from "react-icons/si";
import { FaNetworkWired, FaServer } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    name: "Frontend Core",
    description: "Building responsive layouts, reactive state pipelines, and accessible single-page components.",
    icon: Code,
    color: "rgba(234, 88, 12, 0.2)", // orange glow
    badgeColor: "text-primary bg-primary/5 border-primary/10",
    skills: [
      { name: "React.js", level: "Advanced", TechIcon: SiReact },
      { name: "Next.js (App Router)", level: "Advanced", TechIcon: SiNextdotjs },
      { name: "Tailwind CSS", level: "Advanced", TechIcon: SiTailwindcss },
      { name: "Framer Motion", level: "Proficient", TechIcon: SiFramer },
      { name: "JavaScript (ES6+)", level: "Advanced", TechIcon: SiJavascript },
      { name: "HTML5 / CSS3", level: "Advanced", TechIcon: SiHtml5 },
    ]
  },
  {
    name: "Backend MERN Stack",
    description: "Creating modular server routes, database document schemas, and safe authentication handlers.",
    icon: Database,
    color: "rgba(139, 92, 246, 0.2)", // purple glow
    badgeColor: "text-secondary bg-secondary/5 border-secondary/10",
    skills: [
      { name: "Node.js / Express", level: "Advanced", TechIcon: SiNodedotjs },
      { name: "MongoDB / Mongoose", level: "Advanced", TechIcon: SiMongodb },
      { name: "RESTful JSON APIs", level: "Advanced", TechIcon: FaNetworkWired },
      { name: "JWT Auth / Security", level: "Proficient", TechIcon: SiJsonwebtokens },
      { name: "SQL Basics", level: "Proficient", TechIcon: SiMysql },
      { name: "Cors & Middlewares", level: "Advanced", TechIcon: FaServer },
    ]
  },
  {
    name: "Developer Tools",
    description: "Configuring local development environments, version tracking, and quick cloud deployments.",
    icon: Terminal,
    color: "rgba(59, 130, 246, 0.2)", // blue glow
    badgeColor: "text-blue-500 bg-blue-500/5 border-blue-500/10",
    skills: [
      { name: "Git / GitHub versioning", level: "Advanced", TechIcon: SiGit },
      { name: "Vercel / Netlify Deploy", level: "Advanced", TechIcon: SiVercel },
      { name: "npm / yarn packing", level: "Advanced", TechIcon: SiNpm },
      { name: "Postman / API testing", level: "Advanced", TechIcon: SiPostman },
      { name: "Chrome DevTools", level: "Advanced", TechIcon: SiGooglechrome },
      { name: "VS Code environment", level: "Advanced", TechIcon: VscVscode },
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

        {/* Modern Skills Showcase */}
        <div className="space-y-24 mt-16">
          {skillCategories.map((cat, idx) => (
            <div key={cat.name} className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-10"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-bg-card border border-border-main flex items-center justify-center shadow-lg relative overflow-hidden group">
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"
                    style={{ backgroundColor: cat.color }}
                  />
                  <cat.icon size={24} className="text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-text-main tracking-tight">{cat.name}</h3>
                  <p className="text-sm md:text-base text-text-muted mt-2 max-w-xl leading-relaxed">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx * 0.1) + (skillIdx * 0.05) }}
                    className="group relative glass-panel p-6 flex flex-col items-center justify-center overflow-hidden hover:-translate-y-2 transition-transform duration-300 border border-border-main/50 hover:border-primary/30"
                  >
                    {/* Hover Ambient Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
                      style={{ backgroundColor: cat.color }}
                    />
                    
                    <skill.TechIcon className="w-10 h-10 mb-4 text-text-muted group-hover:text-primary group-hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-sm" />
                    
                    <span className="text-xs font-extrabold text-text-main text-center relative z-10 mb-2">{skill.name}</span>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border border-border-main ${cat.badgeColor} relative z-10 bg-bg-card/50 backdrop-blur-sm`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
