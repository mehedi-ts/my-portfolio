"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/actions/getProjects";
import { FolderKanban, Star, Activity, Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    featuredProjects: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const projects = await getProjects();
        setStats({
          totalProjects: projects.length,
          featuredProjects: projects.filter(p => p.featured).length,
        });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-main">Dashboard Overview</h1>
        <p className="text-text-muted mt-1">Welcome to your admin panel.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total Projects" 
          value={isLoading ? "-" : stats.totalProjects} 
          icon={FolderKanban} 
          color="text-primary"
          bg="bg-primary/10"
        />
        <StatCard 
          title="Featured Projects" 
          value={isLoading ? "-" : stats.featuredProjects} 
          icon={Star}
          color="text-yellow-500"
          bg="bg-yellow-500/10"
        />
        <StatCard 
          title="Recent Activity" 
          value="12" 
          subtitle="Updates this week"
          icon={Activity}
          color="text-green-500"
          bg="bg-green-500/10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="glass-panel p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-main">Quick Actions</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/dashboard/projects/add" className="flex flex-col items-center justify-center p-6 rounded-xl border border-border-main bg-bg-main/50 hover:bg-bg-card hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-text-main">Add Project</span>
            </Link>
            <Link href="/dashboard/projects" className="flex flex-col items-center justify-center p-6 rounded-xl border border-border-main bg-bg-main/50 hover:bg-bg-card hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FolderKanban className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-text-main">Manage Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subtitle, icon: Icon, color, bg }) {
  return (
    <div className="glass-panel p-6 flex items-start gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color} flex-shrink-0`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-text-muted">{title}</p>
        <h3 className="text-3xl font-bold text-text-main mt-1">{value}</h3>
        {subtitle && <p className="text-xs text-text-muted mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
