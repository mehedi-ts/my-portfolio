"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Instagram } from "./BrandIcons";
import { Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setLocalTime(new Date().toLocaleTimeString("en-US", options));
    };
    
    updateClock();
    const interval = setInterval(updateClock, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-20 md:py-24 border-t border-border-main bg-bg-card/10 relative overflow-hidden select-none">
      
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand/Introduction Block */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="text-xl font-extrabold tracking-tighter text-text-main flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center text-white text-sm font-black shadow-md shadow-primary/20">M</div>
              <span className="font-black text-text-main">Hasan</span>
              <span className="text-primary font-black">.</span>
            </Link>
            
            <p className="text-text-muted leading-relaxed max-w-sm text-xs font-medium">
              Building modern full-stack web applications. Passionate about intuitive frontend experiences, clean UI, and robust MERN stack applications.
            </p>
 
            {/* Social Channels */}
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/mehedi-ts" },
                { Icon: Linkedin, href: "https://linkedin.com/in/mehedi-ts" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="w-9 h-9 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <item.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Block 1 */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Navigation</h4>
            <ul className="space-y-3.5 text-[10px] font-black uppercase tracking-widest text-text-muted">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/#experience" className="hover:text-primary transition-colors">Experience</Link></li>
            </ul>
          </div>

          {/* Links Block 2 */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Core Stack</h4>
            <ul className="space-y-3.5 text-[10px] font-black uppercase tracking-widest text-text-muted">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>MongoDB / Mongoose</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          {/* Live Status indicator */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Let's Connect</h4>
            <p className="text-text-muted text-xs leading-relaxed font-medium">
              Open to junior-to-intermediate full-stack roles, freelance opportunities, and collaborative web projects.
            </p>
            
            {/* Realtime clock display */}
            <div className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-bg-card border border-border-main text-[10px] font-black uppercase tracking-wider text-text-main">
              <Globe size={13} className="text-primary animate-spin" style={{ animationDuration: "12s" }} />
              <span>Narayanganj — {localTime || "12:00 PM"} GMT+6</span>
            </div>
          </div>

        </div>

        {/* Footer legalities */}
        <div className="pt-10 border-t border-border-main flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[9px] font-black text-text-muted uppercase tracking-[0.2em] text-center sm:text-left">
            © {currentYear} Mehedi Hasan. Handcrafted with love and code.
          </div>
          <div className="flex gap-8 text-[9px] font-black text-text-muted uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-primary transition-colors">Data Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
