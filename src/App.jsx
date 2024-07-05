import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <div className="background-image m-0 min-h-screen bg-cover p-2 opacity-70">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense
            fallback={
              <div className="flex p-4 items-center justify-center">
                <h2 className="text-8xl animate-spin">🌀</h2>
              </div>
            }
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
