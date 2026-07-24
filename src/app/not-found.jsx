"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center relative overflow-hidden bg-bg-main selection:bg-primary/20 selection:text-white p-6">
      
      {/* Subtle Background Blob */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary rounded-full blur-[120px] pointer-events-none -z-10"
        animate={{ 
          x: ["-50%", "-40%", "-60%", "-50%"],
          y: ["-50%", "-60%", "-40%", "-50%"],
          opacity: [0.03, 0.06, 0.03]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center max-w-2xl relative z-10"
      >
        <div className="mb-8 p-5 rounded-[2rem] bg-orange-50 dark:bg-orange-500/10 text-primary">
          <Compass size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-8xl md:text-[10rem] font-black text-text-main leading-none tracking-tighter mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-black text-text-main leading-tight mb-6">
          Lost in the <span className="text-gradient">void.</span>
        </h2>
        
        <p className="text-sm md:text-base text-text-muted mb-12 max-w-sm mx-auto">
          It seems the page you're looking for doesn't exist, has been moved, or is temporarily offline.
        </p>

        <Link
          href="/"
          className="group relative bg-primary text-white rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-black shadow-lg shadow-orange-500/30 dark:shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-200 flex items-center justify-center gap-3 overflow-hidden"
        >
          <Home size={16} />
          <span>Return Home</span>
        </Link>
      </motion.div>
    </main>
  );
}
