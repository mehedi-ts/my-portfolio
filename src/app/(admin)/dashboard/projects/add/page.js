"use client";

import { useEffect, useState, Suspense } from "react";
import { ProjectForm } from "@/features/projects/components/ProjectForm";
import { getProjectById } from "@/lib/actions/getProjectById";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function ProjectFormContainer() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [initialData, setInitialData] = useState(null);
  const [isLoading, setIsLoading] = useState(!!id);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      getProjectById(id)
        .then((data) => {
          setInitialData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError("Failed to load project data");
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-text-muted">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p>Loading project data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return <ProjectForm initialData={initialData} />;
}

export default function AddProjectPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center h-64 text-text-muted">
        <Loader2 className="w-8 h-8 animate-spin mb-4" />
        <p>Loading...</p>
      </div>
    }>
      <ProjectFormContainer />
    </Suspense>
  );
}
