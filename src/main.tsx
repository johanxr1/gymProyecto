import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Elementos, Bloques } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Elementos />,
  },
  {
    path: "cuerpo/:parte",
    element: <Bloques />,
  },
  {
    path: "cuerpo/:parte/ejercicio/:id",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
