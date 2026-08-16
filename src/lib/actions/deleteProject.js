"use server";

export const deleteProject = async (id) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    
    try {
        const res = await fetch(`${baseUrl}/api/project/${id}`, {
            method: "DELETE",
        });
        
        return await res.json();
    } catch (error) {
        console.error("Error deleting project:", error);
        return { success: false, message: error.message };
    }
}
