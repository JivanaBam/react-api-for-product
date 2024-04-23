import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductList />,
  },
  {
    path: "/product/details",
    element: <ProductDetail />,
  },
]);

// creat a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide the client to your app  */}

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
