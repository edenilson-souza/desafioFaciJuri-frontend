import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./globals.css";
import { ThemeProvider } from "./components/providers/theme-provider";
import { QueryClientProvider } from "./components/providers/queryProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Router = <RouterProvider router={router} />;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
            <QueryClientProvider childrem={Router} />
        </ThemeProvider>
        <ToastContainer />
    </React.StrictMode>
);
