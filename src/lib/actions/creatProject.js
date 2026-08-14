"use server";

export const createProject = async (data) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    
    try {
        const res = await fetch(`${baseUrl}/api/project`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        
        return await res.json();
    } catch (error) {
        console.error("Error creating project:", error);
        return { success: false, message: error.message };
    }
}