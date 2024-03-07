import { createBrowserRouter } from "react-router-dom";
import { App } from "../app/pages/App";
import { Dashboard } from "@/app/pages/dashboard";
import NotFound from "./notFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);
