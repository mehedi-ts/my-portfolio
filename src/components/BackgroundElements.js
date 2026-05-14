"use client";

import { motion } from "framer-motion";

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-bg-main">
      {/* Noise Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-overlay pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] dark:bg-primary/5"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[150px] dark:bg-secondary/5"
      />
      
      {/* Floating Particles (CSS only for performance) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
      </div>
    </div>
  );
}
