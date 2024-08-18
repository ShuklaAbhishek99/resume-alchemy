import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./auth/sign-in";
import App from "./App";
import Home from "./components/App/Home";
import Dashboard from "./components/App/Dashboard";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/auth/sign-in",
        element: <SignInPage />,
    },
]);
