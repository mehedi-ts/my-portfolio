"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiHtml5,
  SiNodedotjs, SiMongodb, SiJsonwebtokens, SiMysql,
  SiGit, SiVercel, SiNpm, SiPostman, SiGooglechrome,
  SiGithub, SiYarn, SiExpress, SiMongoose, SiNetlify, SiTypescript
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Layers, Code, Server, Database, Wrench } from "lucide-react";
import SectionLabel from "./SectionLabel";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "Next.js", TechIcon: SiNextdotjs, brandColor: "text-text-main dark:text-white" },
      { name: "React.js", TechIcon: SiReact, brandColor: "text-[#61DAFB]" },
      { name: "Tailwind CSS", TechIcon: SiTailwindcss, brandColor: "text-[#06B6D4]" },
      { name: "JavaScript", TechIcon: SiJavascript, brandColor: "text-[#F7DF1E]" },
      { name: "TypeScript", TechIcon: SiTypescript, brandColor: "text-[#3178C6]" },
      { name: "HTML5/CSS3", TechIcon: SiHtml5, brandColor: "text-[#E34F26]" },
      { name: "Framer Motion", TechIcon: SiFramer, brandColor: "text-[#0055FF]" },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", TechIcon: SiNodedotjs, brandColor: "text-[#339933]" },
      { name: "Express.js", TechIcon: SiExpress, brandColor: "text-text-main dark:text-white" },
      { name: "REST APIs", TechIcon: FaNetworkWired, brandColor: "text-blue-500" },
      { name: "JWT Auth", TechIcon: SiJsonwebtokens, brandColor: "text-text-main dark:text-white" },
      { name: "Middlewares", TechIcon: Layers, brandColor: "text-primary" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", TechIcon: SiMongodb, brandColor: "text-[#47A248]" },
      { name: "Mongoose", TechIcon: SiMongoose, brandColor: "text-[#880000]" },
      { name: "MySQL", TechIcon: SiMysql, brandColor: "text-[#4479A1]" },
    ]
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: [
      { name: "Git", TechIcon: SiGit, brandColor: "text-[#F05032]" },
      { name: "GitHub", TechIcon: SiGithub, brandColor: "text-text-main dark:text-white" },
      { name: "Vercel", TechIcon: SiVercel, brandColor: "text-text-main dark:text-white" },
      { name: "Netlify", TechIcon: SiNetlify, brandColor: "text-[#00C7B7]" },
      { name: "npm", TechIcon: SiNpm, brandColor: "text-[#CB3837]" },
      { name: "Yarn", TechIcon: SiYarn, brandColor: "text-[#2C8EBB]" },
      { name: "VS Code", TechIcon: VscVscode, brandColor: "text-[#007ACC]" },
      { name: "Postman", TechIcon: SiPostman, brandColor: "text-[#FF6C37]" },
      { name: "DevTools", TechIcon: SiGooglechrome, brandColor: "text-[#4285F4]" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none">
      
      {/* Drifting Dot Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        animate={{
          backgroundPosition: ["0px 0px", "32px 32px"]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl text-left">
          <SectionLabel>My Toolset</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight mb-4">
            Languages & <span className="text-gradient">Frameworks.</span>
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            An honest overview of my technological focus and everyday tech stack.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-text-muted flex items-center gap-3">
                <category.icon size={16} className="text-text-muted/60" />
                <span>{category.title}</span>
                <div className="h-[1px] flex-1 bg-border-main/50 ml-2" />
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 gap-2 sm:gap-3 items-stretch">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.03 + catIdx * 0.1 }}
                    className="group relative glass p-1.5 sm:p-2 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] border border-border-main hover:border-primary/40 shadow-sm hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)] bg-bg-main hover:bg-primary/5 will-change-transform h-full cursor-default"
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-bg-card/80 border border-border-main/40 group-hover:bg-bg-main transition-colors duration-300 ease-out flex items-center justify-center mb-1.5 shadow-inner">
                      <skill.TechIcon className={`w-7 h-7 sm:w-8 sm:h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-out ${skill.brandColor}`} />
                    </div>
                    
                    <span className="text-[9px] sm:text-[10px] font-bold text-text-main text-center relative z-10 leading-tight px-1">
                      {skill.name}
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
