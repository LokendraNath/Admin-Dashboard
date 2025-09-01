import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "@components/Layout/Layout";
import Dashboard from "@features/dashboard/Dashboard";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Profile from "@features/profile/Profile";
import { Transactions } from "@features/transactions/Transactions";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      { path: "transection", element: <Transactions /> },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
