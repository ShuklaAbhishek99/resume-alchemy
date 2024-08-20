import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    return (
        <div className="flex justify-between py-1 px-5 shadow-md dark:shadow-2xl dark:shadow-emerald-900">
            <img
                src="/Logo.png"
                alt="logo"
                className="w-14 min-w-12 min-h-12 m-1 cursor-pointer"
                onClick={() => navigate("/")}
            />

            {isSignedIn ? (
                <div className="flex gap-3 my-auto">
                    <Link to="/dashboard">
                        <Button>Dashboard</Button>
                    </Link>
                    <UserButton />
                </div>
            ) : (
                <div className="my-auto">
                    <Link to="/auth/sign-in">
                        <Button>Get started</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
