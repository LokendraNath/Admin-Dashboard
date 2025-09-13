import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "@/Layout";
import Dashboard from "@/pages/Dashboard/Dashboard";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Profile from "@/pages/profile/Profile";
import { Transactions } from "@/pages/transactions/Transactions";
import { Inventory } from "./pages/Invantory/Invantory";
import { Orders } from "./pages/Orders/Orders";
import { Users } from "./pages/Users/Users";
import { Settings } from "./pages/Setting/Setting";
import { Help } from "./pages/Help/Help";

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
