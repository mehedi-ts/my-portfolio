import { authClient } from "../auth-client"

export function useUserClient() {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    return {
        user: session?.user,
        isPending,
        error,
        refetch
    };
}