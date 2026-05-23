"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

// Count-up helper component
function Counter({ value, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-text-main tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

const testimonials = [
  {
    quote: "Mehedi is an incredibly dedicated developer. He completely upgraded our product interface, making it responsive, clean, and a pleasure to navigate. His standard of work is top-notch.",
    author: "Elena Rostova",
    role: "Product Manager",
    company: "Apex Solutions",
    avatar: "ER",
  },
  {
    quote: "His focus on code cleanliness and Tailwind styling helped us roll out our platform dashboard ahead of schedule. Highly recommended MERN stack developer.",
    author: "Marcus Vance",
    role: "Engineering Director",
    company: "Nexus Analytics",
    avatar: "MV",
  },
];

const telemetry = [
  { value: "15", suffix: "+", label: "Shipped Projects", description: "MERN & React applications" },
  { value: "99", suffix: ".9%", label: "Uptime Focus", description: "Stable, validated routes" },
  { value: "1000", suffix: "+", label: "Git Commits", description: "Clean version history" },
  { value: "3", suffix: "+", label: "Years Coding", description: "Dedicated growth journey" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 relative overflow-hidden bg-bg-main select-none">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] bg-primary/4 dark:bg-primary/3 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-soft" />

      <div className="section-container">
        
        {/* Header */}
        <div className="mb-20 max-w-3xl text-left">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Trust & Telemetry</span>
            <div className="h-[1px] w-12 bg-primary/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            System Benchmarks & <br className="hidden sm:block" />
            <span className="text-gradient">Client Reviews.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Counters Dashboard */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 w-full text-left">
            {telemetry.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel p-6 border-border-main rounded-2xl flex flex-col justify-between hover:border-primary/20 select-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary/25 border border-primary/50 animate-pulse-soft" />
                  <span className="text-[8px] font-black uppercase tracking-wider text-text-muted">Metric 0{idx + 1}</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h4 className="text-xs font-black text-text-main uppercase tracking-tight">{stat.label}</h4>
                  <p className="text-[10px] text-text-muted">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Client Quotes */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="glass-panel p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group h-full"
              >
                {/* Quote watermark icon */}
                <Quote size={80} className="absolute -top-6 -right-6 text-text-main/[0.015] group-hover:text-text-main/[0.03] transition-colors pointer-events-none select-none" />

                <div className="space-y-6">
                  {/* Rating indicator */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#ea580c" className="text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-border-main">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center text-white font-black text-xs shadow-md shadow-primary/10 select-none">
                    {t.avatar}
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-black text-text-main">{t.author}</h4>
                    <p className="text-[9px] font-black uppercase tracking-wider text-text-muted">
                      {t.role} — <span className="text-primary">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
