"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2, Phone } from "lucide-react";
import { Github, Linkedin, Twitter } from "./BrandIcons";
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 2000); // Checkmark + Sent for 2 seconds
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative select-none overflow-hidden">
      
      {/* Animated Soft Blurred Gradient Blob Behind the Card */}
      <motion.div 
        className="absolute top-1/2 left-[30%] w-[500px] h-[500px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -z-10"
        animate={shouldReduceMotion ? {} : { 
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionLabel className="justify-center md:justify-start">
            Get In Touch
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-gradient">Awesome.</span>
          </h2>
        </motion.div>

        {/* Unified Glassmorphism Card Container */}
        <motion.div
          className="group relative bg-bg-card/80 backdrop-blur-xl border border-border-main rounded-3xl lg:rounded-[2.5rem] flex flex-col lg:flex-row overflow-hidden transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1.5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left Panel: Form (60%) */}
          <div className="w-full lg:w-[60%] p-8 md:p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-12 flex flex-col h-full justify-between">
              <div className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-8">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder=" "
                      value={formState.name}
                      onChange={handleFormChange}
                      className="peer block w-full bg-transparent border-b-2 border-border-main py-3 text-text-main focus:border-primary focus:outline-none focus:ring-0 transition-all duration-200 focus:shadow-[0_8px_16px_-6px_rgba(249,115,22,0.3)]"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 text-sm font-bold text-text-muted duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:text-primary peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold pointer-events-none"
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder=" "
                      value={formState.email}
                      onChange={handleFormChange}
                      className="peer block w-full bg-transparent border-b-2 border-border-main py-3 text-text-main focus:border-primary focus:outline-none focus:ring-0 transition-all duration-200 focus:shadow-[0_8px_16px_-6px_rgba(249,115,22,0.3)]"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 text-sm font-bold text-text-muted duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:text-primary peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>
                </div>

                {/* Message Input */}
                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder=" "
                    rows="1"
                    value={formState.message}
                    onChange={handleFormChange}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    className="peer block w-full bg-transparent border-b-2 border-border-main py-3 text-text-main focus:border-primary focus:outline-none focus:ring-0 transition-all duration-200 resize-none overflow-hidden focus:shadow-[0_8px_16px_-6px_rgba(249,115,22,0.3)]"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 text-sm font-bold text-text-muted duration-300 transform -translate-y-6 top-3 origin-[0] peer-focus:text-primary peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:font-bold peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold pointer-events-none"
                  >
                    Your Message
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <motion.button
                  whileHover={!shouldReduceMotion && !isSubmitting && !submitted ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!shouldReduceMotion && !isSubmitting && !submitted ? { scale: 0.97 } : {}}
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group w-full sm:w-auto px-8 py-3.5 md:py-4 glow-button text-[11px] md:text-xs uppercase tracking-widest font-black flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-90 disabled:hover:scale-100 disabled:cursor-default disabled:hover:shadow-[0_8px_20px_-4px_rgba(234,88,12,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={16} /> Sent!
                    </span>
                  ) : isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </span>
                  )}
                </motion.button>
              </div>
            </form>
          </div>

          {/* Right Panel: Contact Info (40%) */}
          <div className="w-full lg:w-[40%] bg-primary/[0.03] dark:bg-primary/[0.05] border-t lg:border-t-0 lg:border-l border-border-main p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between transition-colors duration-300">
            {/* Geometric Pattern Overlay for Texture */}
            <div
              className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none z-0"
              style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
            />

            {/* Drifting Gradient Orbs */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <motion.div
                className="absolute -top-[20%] -right-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px]"
                animate={shouldReduceMotion ? {} : { x: [0, -30, 0], y: [0, 40, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-[20%] -left-[10%] w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[100px]"
                animate={shouldReduceMotion ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative z-10 space-y-12 h-full flex flex-col">
              <div>
                <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                  <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                    Contact Info
                  </h3>
                  {/* Pulsing Dot */}
                  <div className="flex items-center gap-2 bg-bg-card px-3 py-1.5 rounded-full border border-border-main shrink-0">
                    <span className="relative flex h-2 w-2">
                      {!shouldReduceMotion && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      )}
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-text-muted font-bold">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Contact Rows */}
                  {[
                    { icon: Mail, label: 'Email', value: 'mehedits.dev@gmail.com', href: 'mailto:mehedits.dev@gmail.com' },
                    { icon: Phone, label: 'Phone / WhatsApp', value: '+880 1355-025437', href: 'https://wa.me/8801355025437' },
                    { icon: MapPin, label: 'Location', value: 'Narayanganj, Bangladesh' }
                  ].map((item, idx) => {
                    const content = (
                      <>
                        <div className="relative shrink-0">
                          <div className="relative w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-105 will-change-transform">
                            <item.icon size={16} />
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-text-main group-hover:text-primary transition-colors block">
                            {item.value}
                          </p>
                        </div>
                      </>
                    );
                    
                    const classes = "flex items-center gap-5 group cursor-pointer p-2 -ml-2 rounded-xl hover:bg-bg-card/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

                    return item.href ? (
                      <motion.a
                        key={idx}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className={classes}
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={idx}
                        className={classes}
                      >
                        {content}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Socials Section */}
              <div className="pt-8 mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-4">
                  Follow Me
                </p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/mehedi-ts' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/mehedi-ts' },
                    { icon: SiFacebook, href: 'https://www.facebook.com/profile.php?id=61589513515471' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-bg-card border border-border-main flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-105 will-change-transform"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
