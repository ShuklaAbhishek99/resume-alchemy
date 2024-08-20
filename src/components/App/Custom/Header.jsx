import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
    const { isSignedIn } = useUser();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between py-1 px-5 shadow-md dark:shadow-2xl dark:shadow-emerald-900">
                <div>
                    <img
                        src="/Logo.png"
                        alt="logo"
                        className="w-14 min-w-12 min-h-12 m-1 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>

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

            {isSignedIn && (
                <div className="text-blue-gray-900 bg-white dark:bg-black shadow-md dark:shadow-2xl">
                    <ul className="flex mx-3">
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <NavLink
                                to="/username"
                                className={({ isActive }) =>
                                    `flex items-center transition-colors p-2 rounded-lg hover:bg-emerald-100 dark:hover:text-gray-500 ${
                                        isActive
                                            ? "text-primary bg-emerald-100"
                                            : "text-gray-500"
                                    }`
                                }
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                            <NavLink
                                to="/explore"
                                className={({ isActive }) =>
                                    `flex items-center transition-colors p-2 rounded-lg hover:bg-emerald-100 dark:hover:text-gray-500 ${
                                        isActive
                                            ? "text-primary bg-emerald-100"
                                            : "text-gray-500"
                                    }`
                                }
                            >
                                Explore
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Header;
