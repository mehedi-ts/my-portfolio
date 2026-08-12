"server"
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const createProject = async (data) => {
    const res = await fetch(`${baseUrl}/api/project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    return res.json();
}