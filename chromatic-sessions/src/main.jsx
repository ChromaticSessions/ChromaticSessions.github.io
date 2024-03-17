import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./globals.css";

import { Content } from "../components/content";
import { ErrorPage } from "./error-page";

import { Header } from "../components/UI/header";

import { Sessions } from "../components/sessions";
import { About } from "../components/about";
import { Music } from "../components/music";
import { Art } from "../components/art";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sessions",
    element: <Sessions />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/art",
    element: <Art />,
  },
  {
    path: "/:path/*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
