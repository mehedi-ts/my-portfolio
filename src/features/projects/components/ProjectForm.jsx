"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "../validation/projectSchema";
import { projectCategories, projectStatuses } from "../constants/mockProjects";
import { Input } from "@/components/admin/form/Input";
import { Textarea } from "@/components/admin/form/Textarea";
import { Select } from "@/components/admin/form/Select";
import { ImagePlaceholder } from "@/components/admin/form/ImagePlaceholder";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { projectService } from "../services/project.service";
import Link from "next/link";
import { useState } from "react";

export function ProjectForm({ initialData }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditing = !!initialData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData || {
      featured: false,
      status: "Completed",
      displayOrder: 0,
      category: "Frontend",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await projectService.updateProject(initialData.id, data);
      } else {
        await projectService.createProject(data);
      }
      router.push("/dashboard/projects");
    } catch (error) {
      console.error("Failed to save project", error);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-12">
      <div className="flex items-center justify-between sticky top-0 bg-bg-main/90 backdrop-blur-md z-10 py-4 border-b border-border-main mb-6">
        <div className="flex items-center gap-4">
          <Link href="/dashboard/projects" className="p-2 hover:bg-bg-card rounded-lg transition-colors text-text-muted">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-text-main">
            {isEditing ? "Edit Project" : "Add New Project"}
          </h1>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors shadow-sm disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {isEditing ? "Update" : "Save"} Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* General Information */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Project Title" placeholder="e.g. E-Commerce Platform" error={errors.title?.message} {...register("title")} />
              <Input label="Slug" placeholder="e-commerce-platform" error={errors.slug?.message} {...register("slug")} />
            </div>
            <Textarea label="Short Description" placeholder="A brief summary of the project..." error={errors.shortDescription?.message} {...register("shortDescription")} />
            <Textarea label="Full Description" placeholder="Detailed explanation of the project, architecture, etc..." className="min-h-[200px]" error={errors.fullDescription?.message} {...register("fullDescription")} />
          </section>

          {/* Technical Details */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">Technical Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select label="Category" options={projectCategories} error={errors.category?.message} {...register("category")} />
              <Input label="Technologies" placeholder="React, Next.js, Tailwind (comma separated)" error={errors.technologies?.message} {...register("technologies")} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Role" placeholder="e.g. Lead Frontend Developer" error={errors.role?.message} {...register("role")} />
              <div className="grid grid-cols-2 gap-4">
                <Input label="Start Date" type="date" error={errors.startDate?.message} {...register("startDate")} />
                <Input label="Completion Date" type="date" error={errors.completionDate?.message} {...register("completionDate")} />
              </div>
            </div>
            <Textarea label="Challenges" placeholder="What were the main challenges?" error={errors.challenges?.message} {...register("challenges")} />
            <Textarea label="Solutions" placeholder="How did you solve them?" error={errors.solutions?.message} {...register("solutions")} />
            <Textarea label="Key Features" placeholder="Feature 1, Feature 2..." error={errors.keyFeatures?.message} {...register("keyFeatures")} />
          </section>
        </div>

        <div className="space-y-8">
          {/* Media */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">Media</h2>
            <ImagePlaceholder label="Thumbnail Image" error={errors.image?.message} />
          </section>

          {/* Links */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">Links</h2>
            <Input label="Live Website URL" placeholder="https://" error={errors.live?.message} {...register("live")} />
            <Input label="GitHub Repository URL" placeholder="https://github.com/..." error={errors.github?.message} {...register("github")} />
          </section>

          {/* Status & Display */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">Status & Display</h2>
            <Select label="Status" options={projectStatuses} error={errors.status?.message} {...register("status")} />
            <Input label="Display Order" type="number" error={errors.displayOrder?.message} {...register("displayOrder")} />
            <label className="flex items-center gap-3 p-3 border border-border-main rounded-lg cursor-pointer hover:bg-bg-main/50 transition-colors">
              <input type="checkbox" className="w-5 h-5 rounded border-border-main text-primary focus:ring-primary bg-bg-main" {...register("featured")} />
              <span className="text-sm font-medium text-text-main">Featured Project</span>
            </label>
          </section>

          {/* SEO */}
          <section className="glass-panel p-6 space-y-6">
            <h2 className="text-lg font-semibold text-text-main border-b border-border-main pb-2">SEO</h2>
            <Input label="SEO Title" placeholder="Title for search engines" error={errors.seoTitle?.message} {...register("seoTitle")} />
            <Textarea label="SEO Description" placeholder="Meta description..." error={errors.seoDescription?.message} {...register("seoDescription")} />
          </section>
        </div>
      </div>
    </form>
  );
}
