import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./auth/sign-in";
import App from "./App";
import Home from "./components/App/Home";
import Dashboard from "./components/App/Dashboard";
import SignUpPage from "./auth/sign-up";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/:username",
                element: "Profile page"
            },
        ],
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/auth/sign-up",
        element: <SignUpPage />,
    },
]);
