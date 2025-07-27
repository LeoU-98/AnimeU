import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import AnimeContainer from "./Home/AnimeContainer";
import AnimeDetails from "./View/AnimeDetails";
import AnimeProvider from "./Context/AnimeContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: "AnimeU",
        element: <AnimeContainer />,
      },
      { path: "AnimeInfo", element: <AnimeDetails /> },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeProvider>
        <RouterProvider router={router} />
      </AnimeProvider>
    </QueryClientProvider>
  );
}
