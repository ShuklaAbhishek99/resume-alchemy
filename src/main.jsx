import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/auth/sign-in"
            signInForceRedirectUrl="/dashboard"
            signUpForceRedirectUrl="/dashboard"
            signInUrl="/auth/sign-in"
            signUpUrl="/auth/sign-up"
            appearance={{
                baseTheme: dark
            }}
        >
            <RouterProvider router={router} />
        </ClerkProvider>
    </StrictMode>
);
