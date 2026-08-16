"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/actions/getProjects";
import Link from "next/link";
import { Plus, Edit2, Trash2, ExternalLink, Star } from "lucide-react";
import { deleteProject } from "@/lib/actions/deleteProject";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const res = await deleteProject(id);
      if (res?.success !== false) {
          fetchProjects();
      } else {
          alert(res?.message || "Failed to delete project");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-main">Projects</h1>
          <p className="text-sm text-text-muted mt-1">Manage your portfolio projects.</p>
        </div>
        <Link 
          href="/dashboard/projects/add"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors shadow-sm w-fit"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </Link>
      </div>

      <div className="glass-panel overflow-hidden border border-border-main">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-text-muted uppercase bg-bg-main/50 border-b border-border-main">
              <tr>
                <th className="px-6 py-4 font-semibold">Project</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Featured</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-text-muted">
                    Loading projects...
                  </td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-text-muted">
                    No projects found.
                  </td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id || project.id} className="border-b border-border-main hover:bg-bg-main/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-bg-main border border-border-main overflow-hidden flex-shrink-0">
                          {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-border-main/50" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-text-main">{project.title}</div>
                          <div className="text-xs text-text-muted mt-0.5">{project.technologies}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-bg-main border border-border-main rounded-full text-xs font-medium text-text-muted">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed" ? "bg-green-500/10 text-green-500" :
                        project.status === "In Progress" ? "bg-yellow-500/10 text-yellow-500" :
                        "bg-bg-main text-text-muted"
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {project.featured ? (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ) : (
                        <Star className="w-5 h-5 text-border-main" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noreferrer" className="p-2 text-text-muted hover:text-primary transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <Link href={`/dashboard/projects/add?id=${project._id || project.id}`} className="p-2 text-text-muted hover:text-primary transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button onClick={() => handleDelete(project._id || project.id)} className="p-2 text-text-muted hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
