"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight, MessageSquare, Activity, Sparkles, Blocks } from "lucide-react";
import { Github } from "./BrandIcons";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Aura AI",
    category: "Full Stack",
    description: "MERN generative AI prompt assistant. Connects a React interface to Express router flows, keeping complete conversation logs in MongoDB.",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "/projects",
    github: "#",
    metrics: "MERN Stack Application",
    image: "/images/projects/aura-ai.png",
  },
  {
    title: "Nexus Analytics",
    category: "Frontend",
    description: "Responsive browser terminal graphing core MERN endpoint latency, server CPU metrics, and active client socket arrays.",
    tech: ["Next.js", "Tailwind CSS", "Recharts", "Framer Motion"],
    link: "/projects",
    github: "#",
    metrics: "Interactive Client Dashboard",
    image: "/images/projects/nexus-analytics.png",
  },
  {
    title: "Lumina Agency",
    category: "Design",
    description: "Stunning creative portfolio page. Tailored for maximum visual premiumness, elegant hover interactions, and light/dark theme cycles.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "/projects",
    github: "#",
    metrics: "Component Design Showcase",
    image: "/images/projects/lumina-agency.png",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Design"];

// Sub-component: Aura AI prompt stream mockup (retains premium dark dev console style)
function AuraMockup() {
  return (
    <div className="w-full h-full bg-[#08080c] p-4 flex flex-col justify-between font-mono text-[9px] select-none text-left">
      {/* App Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center space-x-1.5 text-slate-300">
          <MessageSquare size={10} className="text-primary" />
          <span className="font-bold tracking-tight">aura-chat-v2.1</span>
        </div>
        <span className="text-[8px] bg-green-500/10 border border-green-500/20 text-green-400 px-1.5 py-0.5 rounded">ONLINE</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 py-3.5 space-y-3 overflow-hidden">
        {/* User Prompt */}
        <div className="flex flex-col items-end space-y-1">
          <span className="text-[7px] text-slate-500">USER_PROMPT</span>
          <div className="bg-white/5 border border-white/10 rounded-xl rounded-tr-none px-3 py-1.5 text-slate-300 max-w-[85%]">
            Configure Express collection routers.
          </div>
        </div>

        {/* AI Stream Response */}
        <div className="flex flex-col items-start space-y-1">
          <span className="text-[7px] text-primary">AURA_MERN [STREAMING]</span>
          <div className="bg-primary/5 border border-primary/20 rounded-xl rounded-tl-none px-3 py-1.5 text-slate-200 space-y-1 max-w-[90%]">
            <div>router.post("/items", createItem);</div>
            <div className="text-[7px] text-slate-500 font-semibold">// CRUD pipeline configured</div>
          </div>
        </div>
      </div>

      {/* Input bar mockup */}
      <div className="border-t border-white/5 pt-2 flex items-center justify-between text-slate-500">
        <span>Prompt aura-model-mern...</span>
        <span className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center text-primary text-[8px] font-black">✔</span>
      </div>
    </div>
  );
}

// Sub-component: Nexus Analytics interactive telemetry mockup (premium console)
function NexusMockup() {
  return (
    <div className="w-full h-full bg-[#050508] p-4 flex flex-col justify-between font-mono text-[9px] select-none relative overflow-hidden text-left">
      {/* Dotted Grid overlay inside card */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2 relative z-10">
        <div className="flex items-center space-x-1.5 text-slate-300">
          <Activity size={10} className="text-secondary animate-pulse" />
          <span className="font-bold tracking-tight">mern-express-io</span>
        </div>
        <span className="text-primary text-[8px] font-black">API_OK</span>
      </div>

      {/* Stats Widgets Row */}
      <div className="grid grid-cols-3 gap-2 relative z-10 pt-2">
        <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
          <div className="text-slate-500 text-[6px] uppercase">API Speed</div>
          <div className="text-[10px] font-black text-slate-200">42ms</div>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
          <div className="text-slate-500 text-[6px] uppercase">Node Load</div>
          <div className="text-[10px] font-black text-emerald-400">8%</div>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
          <div className="text-slate-500 text-[6px] uppercase">DB Conn</div>
          <div className="text-[10px] font-black text-slate-200">Active</div>
        </div>
      </div>

      {/* Visual sparklines graph */}
      <div className="flex-1 flex items-end justify-between space-x-1 pt-4 pb-2 relative z-10">
        {[20, 45, 28, 60, 35, 75, 40, 90, 50, 70, 85, 95].map((val, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: `${val}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.03 }}
              className="w-full bg-gradient-to-t from-secondary/50 to-primary rounded-t-sm" 
            />
          </div>
        ))}
      </div>

      {/* Graph Footer */}
      <div className="flex items-center justify-between text-[7px] text-slate-500 border-t border-white/5 pt-1.5">
        <span>Refresh rate: 60Hz</span>
        <span>Avg packet latency: 12ms</span>
      </div>
    </div>
  );
}

// Sub-component: Lumina Agency UI design system mockup
function LuminaMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a0f] p-4 flex flex-col justify-between select-none relative overflow-hidden group text-left">
      {/* Background overlapping layout elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-700" />
      
      {/* Interactive overlapping slides */}
      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute text-[32px] md:text-[40px] font-black text-white/5 uppercase tracking-tighter select-none font-sans z-0">
          LUMINA
        </div>

        {/* Floating cards representing editorial layout */}
        <div className="w-[120px] h-[80px] rounded-xl glass border-white/10 shadow-2xl relative z-10 flex flex-col justify-between p-2.5 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
          <span className="text-[6px] font-black uppercase text-primary tracking-widest">SHOWCASE DESIGN</span>
          <div className="w-full h-[3px] bg-white/10 rounded" />
          <div className="w-2/3 h-[3px] bg-white/10 rounded" />
          <div className="flex items-center justify-between">
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-[5px] text-primary">✔</div>
            <span className="text-[6px] text-slate-300 font-bold">2026 EDITION</span>
          </div>
        </div>

        {/* Small badge card */}
        <div className="w-[80px] h-[55px] rounded-lg bg-[#050508] border border-white/5 shadow-xl absolute z-20 top-1/2 left-[58%] flex flex-col justify-between p-2 rotate-[12deg] group-hover:rotate-[4deg] transition-transform duration-500">
          <div className="flex items-center space-x-1">
            <div className="w-1 h-1 rounded-full bg-emerald-500" />
            <span className="text-[5px] text-slate-400 font-bold uppercase">Active Render</span>
          </div>
          <span className="text-[8px] font-black text-white">AWWWARDS🏆</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 border-t border-white/5 pt-2">
        <span>Tailwind Styles</span>
        <span>Smooth scroll engine</span>
      </div>
    </div>
  );
}

// Premium fallback placeholder layout when thumbnail image is not available
function ProjectFallback({ title, category }) {
  // Determine gradient color scheme based on category/title
  const isDesign = category?.toLowerCase().includes("design") || category?.toLowerCase().includes("ux");
  const isFullStack = category?.toLowerCase().includes("full");
  
  const glowClass = isDesign 
    ? "from-amber-500/10 to-primary/5" 
    : isFullStack 
      ? "from-primary/10 to-secondary/5" 
      : "from-secondary/10 to-primary/5";
      
  const iconColor = isDesign 
    ? "text-amber-500" 
    : isFullStack 
      ? "text-primary" 
      : "text-secondary";

  return (
    <div className="w-full h-full bg-[#050508] p-6 flex flex-col justify-between font-mono text-[9px] select-none relative overflow-hidden text-center items-center justify-center">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
      
      {/* Circular ambient glow in the center */}
      <div className={`absolute w-[180px] h-[180px] rounded-full bg-gradient-to-tr ${glowClass} blur-2xl -z-10`} />

      {/* Floating abstract code nodes background */}
      <div className="absolute inset-0 opacity-[0.03] font-mono text-[7px] text-left p-4 pointer-events-none leading-relaxed select-none overflow-hidden">
        <div>{"import { useState } from 'react';"}</div>
        <div>{"const query = () => db.collection('node');"}</div>
        <div>{"export default async function Pipeline() {"}</div>
        <div>{"  const res = await fetch('/api/v1/stream');"}</div>
        <div>{"  return res.json();"}</div>
        <div>{"}"}</div>
      </div>

      {/* Centerpiece container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-3 my-auto">
        {/* Floating animated-like glass icon badge */}
        <div className={`w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center ${iconColor} shadow-xl`}>
          {isDesign ? (
            <Sparkles size={20} className="animate-pulse" />
          ) : isFullStack ? (
            <Blocks size={20} />
          ) : (
            <Activity size={20} />
          )}
        </div>

        {/* Minimalist Centered Title Display */}
        <div className="space-y-1">
          <h4 className="text-sm font-black text-white uppercase tracking-wider">
            {title}
          </h4>
          <span className="text-[7px] font-black uppercase tracking-[0.3em] text-text-muted">
            {category || "Application Node"}
          </span>
        </div>
      </div>

      {/* Footer info line */}
      <div className="w-full border-t border-white/5 pt-2 text-[7px] text-text-muted flex items-center justify-between mt-auto">
        <span>DEV_ENV // STAGE_1</span>
        <span>SYS_STATUS: ONLINE</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [imageError, setImageError] = useState(false);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d" 
      }}
      className="group relative flex flex-col h-full perspective-1000 select-none text-left"
    >
      {/* Container card */}
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="relative flex flex-col h-full glass-panel p-6"
      >
        {/* Mockup Showcase Area */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border-main mb-6 shadow-md transition-all duration-500 bg-bg-main">
          
          {/* Render Thumbnail Image if specified and load succeeds */}
          {project.image && !imageError ? (
            <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Fallback to custom interactive mockups, or the beautiful universal fallback component */
            <>
              {project.title === "Aura AI" && <AuraMockup />}
              {project.title === "Nexus Analytics" && <NexusMockup />}
              {project.title === "Lumina Agency" && <LuminaMockup />}
              
              {/* Universal beautiful fallback if it's none of the above */}
              {project.title !== "Aura AI" && 
               project.title !== "Nexus Analytics" && 
               project.title !== "Lumina Agency" && (
                <ProjectFallback title={project.title} category={project.category} />
              )}
            </>
          )}

          {/* Hover launch overlay */}
          <div className="absolute inset-0 bg-bg-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-25 flex items-center justify-center">
            <Link 
              href={project.link} 
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            >
              <ArrowUpRight size={20} />
            </Link>
          </div>

          {/* Live indicator badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 px-2.5 py-1 rounded-full glass border-border-main shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[7px] font-black uppercase tracking-widest text-text-main">Live Instance</span>
          </div>
        </div>

        {/* Content Block */}
        <div className="flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[9px] font-black uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span className="text-[8px] font-bold text-text-muted uppercase tracking-widest">
              {project.metrics}
            </span>
          </div>
          
          <h3 className="text-xl font-black text-text-main mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-xs text-text-muted leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="text-[8px] font-black text-text-muted uppercase tracking-widest px-2.5 py-1.5 bg-bg-card border border-border-main rounded-lg">
                {t}
              </span>
            ))}
          </div>
          
          <div className="pt-5 border-t border-border-main flex items-center justify-between mt-auto">
            <Link href={project.link} className="text-[9px] font-black uppercase tracking-wider text-text-main hover:text-primary transition-colors flex items-center gap-1.5">
              Launch Case <ExternalLink size={12} className="text-primary shrink-0" />
            </Link>
            <a href={project.github} className="text-text-muted hover:text-primary transition-colors">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-36 relative select-none">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Selected Works</span>
                <div className="h-[1px] w-12 bg-primary/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
                Product Cases & <br className="hidden sm:block" />
                <span className="text-gradient">Implementations.</span>
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-1.5 glass border-border-main rounded-2xl w-full md:w-auto select-none">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                    activeFilter === f 
                      ? "bg-primary text-white shadow-lg shadow-primary/20 animate-none" 
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Direct link to dedicated catalog pages */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/projects" 
            className="px-8 py-4.5 glass hover:border-primary/30 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-bg-card transition-all duration-300 flex items-center space-x-2 text-text-main cursor-pointer"
          >
            <span>View All Projects</span>
            <ExternalLink size={13} className="text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
