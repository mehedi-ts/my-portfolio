"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowLeft, Filter, MessageSquare, Activity, Sparkles, Server, Layout, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    title: "Aura AI",
    category: "Full Stack",
    description: "MERN generative AI prompt assistant. Connects a React interface to Express router flows, keeping complete conversation logs in MongoDB.",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "#",
    github: "#",
    metrics: "MERN Stack Application",
    image: "/images/projects/aura-ai.png",
  },
  {
    title: "Nexus Dashboard",
    category: "Frontend",
    description: "Responsive browser terminal graphing core MERN endpoint latency, server CPU metrics, and active client socket arrays.",
    tech: ["Next.js", "Tailwind CSS", "Recharts", "Framer Motion"],
    link: "#",
    github: "#",
    metrics: "Interactive Client Dashboard",
    image: "/images/projects/nexus-dashboard.png",
  },
  {
    title: "Lumina Agency",
    category: "UI/UX",
    description: "Stunning creative portfolio page. Tailored for maximum visual premiumness, elegant hover interactions, and light/dark theme cycles.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "#",
    github: "#",
    metrics: "Component Design Showcase",
    image: "/images/projects/lumina-agency.png",
  },
  {
    title: "Eco-Stream",
    category: "Full Stack",
    description: "MERN green energy consumption tracking API, exposing Express charts and storing verified carbon credits in MongoDB.",
    tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
    link: "#",
    github: "#",
    metrics: "Consumption Tracker System",
    image: "/images/projects/eco-stream.png",
  },
  {
    title: "Quantum Task",
    category: "Frontend",
    description: "Highly interactive React kanban task planner featuring drag-and-drop actions, clean client storage, and smooth list shuffles.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Dnd-kit"],
    link: "#",
    github: "#",
    metrics: "Task Planner Board",
    image: "/images/projects/quantum-task.png",
  },
];

const categories = ["All", "Frontend", "Full Stack", "UI/UX"];

// Mockups (Remains dark-themed for realistic high-fidelity visual dashboard appearance inside the light/dark card layout)
function ProjectMockup({ title }) {
  if (title === "Aura AI") {
    return (
      <div className="w-full h-full bg-[#08080c] p-4 flex flex-col justify-between font-mono text-[9px] select-none text-left">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <div className="flex items-center space-x-1.5 text-slate-300">
            <MessageSquare size={10} className="text-primary" />
            <span className="font-bold">aura-chat-v2.1</span>
          </div>
          <span className="text-[7px] text-green-400 font-bold bg-green-500/10 px-1.5 rounded">ONLINE</span>
        </div>
        <div className="flex-grow py-3 space-y-3 overflow-hidden text-slate-300">
          <div className="text-right text-[7px] text-slate-500">USER_PROMPT</div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-right text-slate-200 ml-auto max-w-[85%]">
            Configure Express routing.
          </div>
          <div className="text-left text-[7px] text-primary">AURA_BOT</div>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-2 text-left text-slate-200 max-w-[90%] font-semibold">
            router.post(&quot;/items&quot;, createItem);
          </div>
        </div>
        <div className="border-t border-white/5 pt-1.5 text-slate-500 flex items-center justify-between">
          <span>Prompt aura-model-mern...</span>
          <span className="text-primary text-[8px]">✔</span>
        </div>
      </div>
    );
  }

  if (title === "Nexus Dashboard") {
    return (
      <div className="w-full h-full bg-[#050508] p-4 flex flex-col justify-between font-mono text-[9px] select-none relative overflow-hidden text-left">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:10px_10px]" />
        <div className="flex items-center justify-between border-b border-white/5 pb-1.5 relative z-10">
          <div className="flex items-center space-x-1 text-slate-300">
            <Activity size={10} className="text-secondary animate-pulse" />
            <span className="font-bold">mern-express-io</span>
          </div>
          <span className="text-primary text-[8px]">API_OK</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 pt-2 relative z-10">
          <div className="p-1 rounded bg-white/5 border border-white/5 text-center">
            <div className="text-slate-500 text-[6px]">API</div>
            <div className="font-black text-slate-200 text-[9px]">42ms</div>
          </div>
          <div className="p-1 rounded bg-white/5 border border-white/5 text-center">
            <div className="text-slate-500 text-[6px]">Node</div>
            <div className="font-black text-emerald-400 text-[9px]">8%</div>
          </div>
          <div className="p-1 rounded bg-white/5 border border-white/5 text-center">
            <div className="text-slate-500 text-[6px]">DB Conn</div>
            <div className="font-black text-slate-200 text-[9px]">Active</div>
          </div>
        </div>
        <div className="flex-grow flex items-end space-x-1 pt-3 pb-1 relative z-10">
          {[20, 50, 30, 70, 45, 80, 55, 95].map((val, idx) => (
            <div key={idx} className="flex-grow bg-gradient-to-t from-secondary/50 to-primary rounded-t-sm animate-none" style={{ height: `${val}%` }} />
          ))}
        </div>
        <div className="flex items-center justify-between text-[7px] text-slate-500 border-t border-white/5 pt-1 relative z-10">
          <span>Latency: 12ms</span>
          <span>Refresh: 60Hz</span>
        </div>
      </div>
    );
  }

  if (title === "Lumina Agency") {
    return (
      <div className="w-full h-full bg-[#0a0a0f] p-4 flex flex-col justify-between select-none relative overflow-hidden group text-left">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-37.5 h-37.5 bg-linear-to-tr from-primary/10 to-secondary/10 rounded-full blur-2xl -z-10" />
        <div className="flex-grow flex items-center justify-center relative">
          <div className="absolute text-[32px] font-black text-white/5 tracking-tighter">LUMINA</div>
          <div className="w-[110px] h-[70px] rounded-xl glass border-white/10 shadow-2xl relative z-10 flex flex-col justify-between p-2 rotate-[-6deg]">
            <span className="text-[5px] font-black uppercase text-primary tracking-widest">SHOWCASE DESIGN</span>
            <div className="space-y-1">
              <div className="w-full h-[2.5px] bg-white/10 rounded" />
              <div className="w-2/3 h-[2.5px] bg-white/10 rounded" />
            </div>
            <span className="text-[6px] text-slate-300 font-bold self-end">2026 EDITION</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7px] font-mono text-slate-500 border-t border-white/5 pt-1.5">
          <span>Tailwind Styles</span>
          <span>Awards layout</span>
        </div>
      </div>
    );
  }

  if (title === "Eco-Stream") {
    return (
      <div className="w-full h-full bg-[#06060a] p-4 flex flex-col justify-between font-mono text-[9px] select-none relative overflow-hidden text-left">
        <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
          <div className="flex items-center space-x-1 text-slate-300">
            <Server size={10} className="text-emerald-500" />
            <span className="font-bold">eco-stream-node</span>
          </div>
          <span className="text-emerald-400 text-[8px] font-bold">MONGODB_OK</span>
        </div>
        <div className="flex-grow py-3 space-y-2 overflow-hidden text-slate-300 text-[8px]">
          <div className="p-2 rounded bg-white/5 border border-white/5 space-y-1">
            <div className="flex justify-between font-bold text-slate-200">
              <span>Collection #184</span>
              <span className="text-emerald-400">CRUD</span>
            </div>
            <div className="text-[7px] text-slate-500 truncate">Db: energy_monitoring_ledger</div>
            <div className="text-slate-300">Log: Saved 125 kWh utility records</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[7px] text-slate-500 border-t border-white/5 pt-1.5">
          <span>Express router flow</span>
          <span>Mongoose validated</span>
        </div>
      </div>
    );
  }

  if (title === "Quantum Task") {
    return (
      <div className="w-full h-full bg-[#09090e] p-4 flex flex-col justify-between font-mono text-[9px] select-none relative overflow-hidden text-left">
        <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
          <div className="flex items-center space-x-1 text-slate-300">
            <Layout size={10} className="text-primary" />
            <span className="font-bold">quantum-planner</span>
          </div>
          <span className="text-[7px] text-slate-500">BOARD_ACTIVE</span>
        </div>
        
        {/* Kanban-style cards grid */}
        <div className="flex-grow grid grid-cols-3 gap-2 pt-3">
          <div className="space-y-1">
            <div className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">Backlog</div>
            <div className="p-1 rounded bg-white/5 border border-white/5 text-[7px] text-slate-300 truncate">Auth checks</div>
          </div>
          <div className="space-y-1">
            <div className="text-[7px] text-primary font-bold uppercase tracking-wider">In Dev</div>
            <div className="p-1 rounded bg-primary/10 border border-primary/20 text-[7px] text-white truncate font-bold">CSS grid</div>
          </div>
          <div className="space-y-1">
            <div className="text-[7px] text-emerald-400 font-bold uppercase tracking-wider">Done</div>
            <div className="p-1 rounded bg-emerald-500/5 border border-emerald-500/10 text-[7px] text-slate-500 line-through truncate">Deploy API</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[7px] text-slate-500 border-t border-white/5 pt-1.5">
          <span>Local storage backup</span>
          <span>Dnd-kit hooks</span>
        </div>
      </div>
    );
  }

  return null;
}

// Premium fallback placeholder layout when thumbnail image is not available
function ProjectFallback({ title, category }) {
  // Determine gradient color scheme based on category/title
  const isDesign = category?.toLowerCase().includes("design") || category?.toLowerCase().includes("ux") || category?.toLowerCase().includes("ui");
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
            <Server size={20} />
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

  const mouseXSpring = useSpring(x, { damping: 25, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 25, stiffness: 200 });

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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d" 
      }}
      className="group relative flex flex-col h-full perspective-1000 select-none text-left"
    >
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="relative flex flex-col h-full glass-panel p-6"
      >
        {/* Mockup Area */}
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
              <ProjectMockup title={project.title} />
              
              {/* Universal beautiful fallback if it doesn't match any known mockups */}
              {project.title !== "Aura AI" && 
               project.title !== "Nexus Dashboard" && 
               project.title !== "Lumina Agency" && 
               project.title !== "Eco-Stream" && 
               project.title !== "Quantum Task" && (
                <ProjectFallback title={project.title} category={project.category} />
              )}
            </>
          )}

          {/* Hover launch button overlay */}
          <div className="absolute inset-0 bg-bg-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-25 flex items-center justify-center">
            <Link 
              href={project.link} 
              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
            >
              <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 px-2.5 py-1 rounded-full glass border-border-main shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[7px] font-black uppercase tracking-widest text-text-main">Live Instance</span>
          </div>
        </div>

        {/* Content Area */}
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter(p => 
    filter === "All" || p.category === filter
  );

  return (
    <main className="min-h-screen bg-bg-main pt-32 pb-24 relative select-none">
      <Navbar />
      
      {/* Background blobs for Projects Index */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-secondary/3 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container">
        {/* Navigation Breadcrumb header */}
        <div className="mb-20 text-left">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-text-muted hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Dashboard</span>
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-black text-text-main tracking-tighter mb-6 leading-none uppercase">
            Product <span className="text-gradient">Archive.</span>
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-text-muted leading-relaxed">
            An extensive inventory of client releases, production systems, and experimental applications. Every node represents a unique MERN full-stack development challenge solved.
          </p>
        </div>

        {/* Filters Controls block */}
        <div className="flex flex-wrap gap-4 mb-16 items-center select-none">
          <div className="flex items-center space-x-3.5 mr-6 text-text-muted">
            <Filter size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Filter Archive</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                filter === cat 
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 animate-none" 
                : "bg-bg-card text-text-muted border-border-main hover:border-primary/25"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Catalog */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
