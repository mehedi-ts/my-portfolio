"use server";

export const getProjectById = async (id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    
    try {
        const res = await fetch(`${baseUrl}/api/project/${id}`, {
            method: "GET",
            cache: "no-store"
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching project by ID:", error);
        throw new Error("Failed to load project data");
    }
}
