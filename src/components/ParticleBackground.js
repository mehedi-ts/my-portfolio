"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Resize handler
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initParticles();
    };

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1.5; // 1.5px to 3.5px
        this.speedX = Math.random() * 0.4 - 0.2; // -0.2 to 0.2
        this.speedY = Math.random() * 0.4 + 0.1; // 0.1 to 0.5 (slow drift down)
        
        // Match existing color palette (orange, amber, cream)
        const colors = [
          "249, 115, 22", // orange-500
          "251, 191, 36", // amber-400
          "255, 255, 255", // white
        ];
        this.rgb = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1; // 0.1 to 0.6
        
        this.twinkleSpeed = Math.random() * 0.01 + 0.005;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
      }

      update(mouseX, mouseY) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Subtly repel from mouse
        if (mouseX != null && mouseY != null) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (120 - distance) / 120;
            
            // Push away
            this.x -= forceDirectionX * force * 1.5;
            this.y -= forceDirectionY * force * 1.5;
          }
        }

        // Reset if it goes off screen
        if (this.y > canvas.height + this.size) {
          this.y = 0 - this.size;
          this.x = Math.random() * canvas.width;
        }
        if (this.x > canvas.width + this.size) {
          this.x = 0 - this.size;
        } else if (this.x < 0 - this.size) {
          this.x = canvas.width + this.size;
        }

        // Twinkle effect
        this.opacity += this.twinkleSpeed * this.twinkleDir;
        if (this.opacity >= 0.7) this.twinkleDir = -1;
        if (this.opacity <= 0.1) this.twinkleDir = 1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.rgb}, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 15 : 45; // reduced count for performance and subtlety
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let mouse = { x: null, y: null };
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to canvas
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    resizeCanvas();

    const animate = () => {
      if (document.visibilityState === "visible") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
          particles[i].update(mouse.x, mouse.y);
          particles[i].draw();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-60"
    />
  );
}
