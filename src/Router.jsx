import { createBrowserRouter } from "react-router-dom";
import SignInPage from "./components/App/Auth/SignIn";
import App from "./App";
import Home from "./components/App/Home";
import Dashboard from "./components/App/Dashboard";
import SignUpPage from "./components/App/Auth/SignUp";
import ResumeEditor from "./components/App/Dashboard/Resume/ResumeEditor";
import ResumeView from "./components/App/ResumeViewer";
import Error from "./components/App/Error";
import NotFoundPage from "./components/App/Error/PageNotFound";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
                errorElement: <Error />,
            },
            // {
            //     path: "/:username",
            //     element: "Profile page",
            //     errorElement: <Error />,
            // },
            // {
            //     path: "/explore",
            //     element: "Explore",
            //     errorElement: <Error />,
            // },
            {
                path: "/dashboard/resume/:resumeId/edit",
                element: <ResumeEditor />,
                errorElement: <Error />,
            },
        ],
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: "/auth/sign-in",
        element: <SignInPage />,
        errorElement: <Error />,
    },
    {
        path: "/auth/sign-up",
        element: <SignUpPage />,
        errorElement: <Error />,
    },
    {
        path: "/resume/:resumeId",
        element: <ResumeView />,
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
