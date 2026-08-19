import { auth } from "../auth";
import { headers } from "next/headers";

export async function getUserServer() {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });
        
        return session?.user || null;
    } catch (error) {
        console.error("Error fetching server session:", error);
        return null;
    }
}
