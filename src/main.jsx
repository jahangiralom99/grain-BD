import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Routes/Route";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-2xl mx-auto">

    <HelmetProvider>

    <RouterProvider router={Route}></RouterProvider>
    </HelmetProvider>
    </div>
  </React.StrictMode>
);
