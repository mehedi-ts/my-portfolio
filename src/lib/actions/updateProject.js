"use server";

export const updateProject = async (id, data) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    
    // We remove the _id before updating to prevent MongoDB errors
    const { _id, ...updateData } = data;
    
    try {
        const res = await fetch(`${baseUrl}/api/project/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
        });
        
        return await res.json();
    } catch (error) {
        console.error("Error updating project:", error);
        return { success: false, message: error.message };
    }
}
