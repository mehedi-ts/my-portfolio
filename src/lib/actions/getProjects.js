"use server";

export const getProjects = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    
    try {
        const res = await fetch(`${baseUrl}/api/projects`, {
            method: "GET",
            // You might want to add caching options here depending on your needs
            // e.g., cache: "no-store" for always fetching fresh data
            cache: "no-store"
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array as fallback so UI doesn't crash
    }
}
