"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Bell } from "lucide-react";
import { useEffect, useState } from "react";

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b border-border-main bg-bg-main/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-text-muted hover:text-text-main hover:bg-bg-card rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-sm font-medium text-text-muted hidden sm:block">Welcome back, Mehedi</h2>
      </div>

      <div className="flex items-center gap-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-text-muted hover:text-text-main hover:bg-bg-card rounded-full transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        
        <button className="p-2 text-text-muted hover:text-text-main hover:bg-bg-card rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>

        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 ml-2 overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mehedi" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}
