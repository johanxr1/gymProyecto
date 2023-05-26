import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Elementos from "./pages/Elementos.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Elementos />,
  },
  {
    path: "ejercicio/:id",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
