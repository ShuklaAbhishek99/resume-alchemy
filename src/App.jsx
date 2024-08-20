import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/App/Custom/Header";
import { Toaster } from "sonner";

function App() {
    const { user, isLoaded, isSignedIn } = useUser();

    console.log(user);

    if (!isSignedIn && isLoaded) {
        return <Navigate to="/auth/sign-in" />;
    }

    return (
        <div className="h-screen">
            <Header />
            <Outlet />

            <Toaster position="bottom-right" closeButton={true} richColors />
        </div>
    );
}

export default App;
