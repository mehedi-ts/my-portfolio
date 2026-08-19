"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Menu, Bell, LogOut, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserClient } from "@/lib/user/getUserClient";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function TopNav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { user, isPending } = useUserClient();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <header className="h-16 border-b border-border-main bg-bg-main/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-text-muted hover:text-text-main hover:bg-bg-card rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-sm font-medium text-text-muted hidden sm:block">
          {isPending ? (
            <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</span>
          ) : user ? (
            `Welcome back, ${user.name}`
          ) : (
            "Welcome to Admin"
          )}
        </h2>
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
        
        <button className="p-2 text-text-muted hover:text-text-main hover:bg-bg-card rounded-full transition-colors relative mr-2">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>

        {!isPending && user && (
          <div className="flex items-center gap-4 pl-4 border-l border-border-main">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden flex items-center justify-center text-primary font-bold text-sm">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.name?.[0]?.toUpperCase() || "U"
                )}
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-medium text-text-main leading-tight">{user.name}</span>
                <span className="text-xs text-text-muted leading-tight">{user.email}</span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="p-2 text-text-muted hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors ml-1"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
