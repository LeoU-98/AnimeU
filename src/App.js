import Header from "./ui/header";
import Anime from "./Anime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="container">
        <Header />
        <Anime />
      </div>
    </QueryClientProvider>
  );
}
