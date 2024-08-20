import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/App/Auth/SignIn";
import App from "./App";
import Home from "./components/App/Home";
import Dashboard from "./components/App/Dashboard";
import SignUpPage from "./components/App/Auth/SignUp";
import ResumeEditor from "./components/App/Dashboard/Resume/ResumeEditor";

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
                element: "Profile page",
            },
            {
                path: "/explore",
                element: "Explore",
            },
            {
                path: "/dashboard/resume/:resumeId/edit",
                element: <ResumeEditor />,
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
