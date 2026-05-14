"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "./BrandIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-border-main/30 bg-bg-card/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          {/* Branding Section */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="text-xl font-black tracking-tighter text-text-main flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">M</div>
              <span>Hasan</span>
              <span className="text-primary">.</span>
            </Link>
            <p className="text-text-muted leading-relaxed max-w-xs text-sm font-medium mx-auto md:mx-0">
              Designing and engineering high-performance digital products 
              with a focus on scalability, aesthetics, and user value.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              {[Github, Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Explore</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-text-muted">
              <li><Link href="/#about" className="hover:text-text-main transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-text-main transition-colors">Projects</Link></li>
              <li><Link href="/#experience" className="hover:text-text-main transition-colors">Experience</Link></li>
              <li><Link href="/#contact" className="hover:text-text-main transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Expertise</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-text-muted">
              <li>Web Engineering</li>
              <li>Product Design</li>
              <li>Technical Lead</li>
              <li>SaaS Development</li>
            </ul>
          </div>

          {/* Newsletter/Contact Area */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Direct Reach</h4>
            <p className="text-text-muted text-sm leading-relaxed font-medium mx-auto md:mx-0">
              Interested in a collaboration? Reach out directly to discuss your next project.
            </p>
            <a 
              href="mailto:hello@mehedihasan.dev" 
              className="inline-block px-10 py-5 bg-bg-main border border-border-main rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-text-main hover:border-primary transition-all shadow-sm hover:shadow-xl hover:shadow-primary/10"
            >
              hello@mehedihasan.dev
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-border-main/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">
            © {currentYear} Mehedi Hasan. Tailored with Precision.
          </div>
          <div className="flex gap-10 text-[10px] font-black text-text-muted uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
