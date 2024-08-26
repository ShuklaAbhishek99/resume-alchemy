import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/App/Custom/Header";
import { Toaster } from "sonner";

function App() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isSignedIn && isLoaded) {
        return <Navigate to="/auth/sign-in" />;
    }

    console.log(
        "%cWarning: This is a developer-only area. Proceed with caution!",
        "color: red; font-size: 24px; font-weight: bold;"
    );

    console.log(
        "%cIf someone told you to paste something here, it could compromise your security.",
        "color: red; font-size: 20px;"
    );

    return (
        <div className="h-screen">
            <Header />
            <Outlet />

            <Toaster position="bottom-right" closeButton={true} richColors />
        </div>
    );
}

export default App;
