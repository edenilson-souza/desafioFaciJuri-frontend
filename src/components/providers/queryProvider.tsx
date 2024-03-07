import { QueryClient, QueryClientProvider as QueryProvider } from "@tanstack/react-query";

interface QueryClientProps {
    childrem: React.ReactNode;
}
export function QueryClientProvider({ childrem }: QueryClientProps) {
    const queryClient = new QueryClient();

    return <QueryProvider client={queryClient}>{childrem}</QueryProvider>;
}
