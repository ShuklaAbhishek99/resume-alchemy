import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Router.jsx";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <ClerkProvider
                publishableKey={PUBLISHABLE_KEY}
                afterSignOutUrl="/auth/sign-in"
                signInForceRedirectUrl="/dashboard"
                signUpForceRedirectUrl="/dashboard"
                signInUrl="/auth/sign-in"
                signUpUrl="/auth/sign-up"
                appearance={{
                    baseTheme: neobrutalism,
                }}
            >
                <RouterProvider router={router} />
            </ClerkProvider>
        </Provider>
    </StrictMode>
);
