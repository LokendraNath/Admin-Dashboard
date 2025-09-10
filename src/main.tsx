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
import { Inventory } from "./features/Invantory/Invantory";
import { Orders } from "./features/Orders/Orders";
import { Users } from "./features/Users/Users";
import { Settings } from "./features/Setting/Setting";
import { Help } from "./features/Help/Help";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      { path: "transections", element: <Transactions /> },
      { path: "inventory", element: <Inventory /> },
      { path: "orders", element: <Orders /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "help", element: <Help /> },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
