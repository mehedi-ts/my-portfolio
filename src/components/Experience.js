"use client";

import { motion } from "framer-motion";
import { GitCommit, Calendar, BarChart3, CheckCircle } from "lucide-react";

const experiences = [
  {
    company: "Apex Digital Solutions",
    role: "Full Stack MERN Developer",
    period: "2024 - Present",
    description: "Developing fast client interfaces, modular Express endpoint routes, and MongoDB collection schemas. Structuring reusable React components with focus on load speeds.",
    impact: "98+ Lighthouse Score",
    stack: ["Next.js", "React.js", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
    bullets: [
      "Refactored legacy single-page assets into server-rendered Next.js components, boosting page speed.",
      "Designed clean document schemas using Mongoose with strict request validations.",
      "Collaborated directly with designers to construct pixel-perfect, highly interactive components."
    ]
  },
  {
    company: "Innovate Web Studio",
    role: "Frontend Developer Associate",
    period: "2022 - 2024",
    description: "Specialized in crafting modern, fluid user experiences. Enforced highly modular CSS tokens and responsive layout hierarchies using Tailwind.",
    impact: "-35% Layout Complexity",
    stack: ["React.js", "Redux", "Framer Motion", "Tailwind CSS", "JavaScript", "Vite"],
    bullets: [
      "Created reusable frontend component blocks, reducing UI turnaround times significantly.",
      "Successfully wired custom RESTful JSON backend endpoints directly to state management stores.",
      "Optimized animation rendering layers to achieve butter-smooth, hardware-accelerated 60 FPS transitions."
    ]
  },
  {
    company: "Local Dev Agency",
    role: "Junior Web Developer",
    period: "2021 - 2022",
    description: "Built responsive client sites, customized interactive scripts, and integrated third-party forms. Monitored server deploys and local Git repositories.",
    impact: "Shipped 10+ Client Portals",
    stack: ["JavaScript", "HTML5", "CSS3", "Git", "Sass", "Bootstrap"],
    bullets: [
      "Coded clean, mobile-first website layouts straight from Figma layouts with pixel-perfect loyalty.",
      "Maintained pristine local Git commit structures and developer notes for senior review.",
      "Optimized media delivery, scaling down raw images to speed up index page paint benchmarks."
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none">
      {/* Background soft ambient blur */}
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] bg-secondary/4 dark:bg-secondary/2 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container">
        
        {/* Section Header */}
        <div className="mb-24 max-w-3xl text-left">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Professional Journey</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            Work Experience & <br className="hidden sm:block" />
            <span className="text-gradient">Shipped Milestones.</span>
          </h2>
        </div>

        {/* Git Branch Style Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-0">
          
          {/* Main timeline Git-Branch line */}
          <div className="absolute left-3.5 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex flex-col sm:flex-row items-stretch sm:justify-between group"
              >
                {/* Git Node Icon Indicator */}
                <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-bg-card border-2 border-primary z-10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  <GitCommit size={12} className="text-primary animate-pulse-soft" />
                </div>

                {/* Left/Right Card placement */}
                <div className={`w-full sm:w-[46%] ${index % 2 === 0 ? "sm:text-right" : "sm:order-last sm:text-left"}`}>
                  <div className="glass-panel p-6 md:p-8 hover:border-primary/20 transition-all duration-300">
                    
                    {/* Period & Stats line */}
                    <div className={`flex flex-wrap items-center gap-3 mb-4 text-[9px] font-black ${index % 2 === 0 ? "sm:justify-end" : "justify-start"}`}>
                      <span className="flex items-center space-x-1 text-primary bg-primary/5 px-2.5 py-1 rounded-md border border-primary/10 select-none">
                        <Calendar size={10} className="mr-1" /> {exp.period}
                      </span>
                      <span className="flex items-center space-x-1 text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10 select-none">
                        <BarChart3 size={10} className="mr-1" /> {exp.impact}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-text-main uppercase tracking-tight">{exp.company}</h3>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest mt-1 mb-4">{exp.role}</p>
                    
                    <p className="text-xs text-text-muted leading-relaxed mb-5 text-left">
                      {exp.description}
                    </p>

                    {/* Bullet List Details */}
                    <div className={`space-y-2.5 text-xs text-text-muted text-left ${index % 2 === 0 ? "sm:flex sm:flex-col sm:items-end" : ""}`}>
                      {exp.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2">
                          <CheckCircle size={12} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags */}
                    <div className={`flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-border-main ${index % 2 === 0 ? "sm:justify-end" : "justify-start"}`}>
                      {exp.stack.map((s) => (
                        <span key={s} className="text-[8px] font-black uppercase tracking-wider px-2 py-1 bg-bg-card border border-border-main rounded-md text-text-muted hover:text-primary transition-all select-none">
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Empty spacer block to align cards properly */}
                <div className="hidden sm:block w-[46%]" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
