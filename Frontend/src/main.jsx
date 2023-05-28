import "./assets/styles/index.scss";
import Home from "./components/layout/screen/Home/Home.jsx";
import { router } from "./routes/Routes.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
