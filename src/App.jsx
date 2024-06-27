import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherContext from "./context/StateContext";
import Home from "./pages/Home";
import { useState } from "react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  const weather = useState(null);
  return (
    <div
      className="m-0 p-2 min-h-screen background-image bg-cover opacity-70" 
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <WeatherContext.Provider value={weather}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </WeatherContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
