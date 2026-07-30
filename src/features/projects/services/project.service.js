import { mockProjects } from "../constants/mockProjects";

// Simulate network delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class ProjectService {
  constructor() {
    this.projects = [...mockProjects];
  }

  async getAllProjects() {
    await delay(500);
    return [...this.projects];
  }

  async getProjectById(id) {
    await delay(300);
    const project = this.projects.find((p) => p.id === id);
    if (!project) throw new Error("Project not found");
    return { ...project };
  }

  async createProject(data) {
    await delay(800);
    const newProject = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    };
    this.projects.push(newProject);
    return newProject;
  }

  async updateProject(id, data) {
    await delay(800);
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Project not found");
    
    this.projects[index] = {
      ...this.projects[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return this.projects[index];
  }

  async deleteProject(id) {
    await delay(600);
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) throw new Error("Project not found");
    
    this.projects.splice(index, 1);
    return { success: true };
  }
}

// Export a singleton instance
export const projectService = new ProjectService();
