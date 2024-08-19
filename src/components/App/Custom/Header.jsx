import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {
    const { isSignedIn } = useUser();

    return (
        <div className="flex justify-between py-1 px-5 shadow-md">
            <img
                src="/Logo.png"
                alt="logo"
                className="w-14 min-w-12 min-h-12 m-1"
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
